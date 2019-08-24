const router = require('express').Router();
const path = require('path');

const friends = require(path.join('..', 'data', 'friends'));

router.get('/friends', (req, res) => res.send(friends));

router.post('/friends', (req, res) => {
    console.log(req.body);
    let bestScore = Number.MAX_SAFE_INTEGER, bestFriend;
    let score = (friend) => {
        let score = 0;
        for (let i = 0; i < friend.scores.length; ++i) {
            score += Math.abs(friend.scores[i] - req.body.scores[i]);
        }
        return score;
    };
    for (let friend of friends) {
        let current = score(friend);
        if (current < bestScore) {
            bestScore = current;
            bestFriend = friend;
        }
    }
    friends.push(req.body);
    res.send(bestFriend);
});


module.exports = router;
