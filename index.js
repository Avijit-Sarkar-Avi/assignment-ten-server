const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const sideNavData = require('./Data/sidenav.json');

app.get('/', (req, res) => {
    res.send('Our Courses');
});

app.get('/sidenav', (req, res) => {
    res.send(sideNavData)
});

app.listen(port, () => {
    console.log('Course Server running on', port);
})