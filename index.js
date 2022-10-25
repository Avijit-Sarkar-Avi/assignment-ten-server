const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const sideNavData = require('./Data/sidenav.json');
const courseDetails = require('./Data/courses.json')

app.get('/', (req, res) => {
    res.send('Our Courses');
});

app.get('/sidenav', (req, res) => {
    res.send(sideNavData)
});

app.get('/detail', (req, res) => {
    res.send(courseDetails)
});

app.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    const sideNavDetails = courseDetails.filter(course => course.id === id);
    res.send(sideNavDetails);
});

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(course => course.id === id);
    res.send(selectedCourse)
});

app.listen(port, () => {
    console.log('Course Server running on', port);
})