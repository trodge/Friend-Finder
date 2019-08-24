const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.join(process.cwd(), 'app', 'public', 'home.html')));

router.get('/survey', (req, res) => res.sendFile(path.join(process.cwd(), 'app', 'public', 'survey.html')));


module.exports = router;
