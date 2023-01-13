const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Hello there');
});
const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];
app.get('/api/courses', (req,res)=>{
    res.send(courses);
});
app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found");
        return
    }
    res.send(course);
})
//HTTP POST REQUESTS
app.post('/api/courses', (req,res) => {
        const course ={
            //we assign an ID and a name property
            id: courses.length +1,
            name:req.body.name
        }
        if (course.name.length>=3) {

        //next step: push it to the array
        courses.push(course);
        //next step: the server should return the new resource to the client in the body of the response 
        }
        res.status(200).send(course);
});
//HTTP PUT REQUESTS
app.put('/api/courses/:id', (req,res)=>{
    //Write the code in order to look up the course, if not existing return a 404
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found");
        return
    }
    else {
        course["name"] = req.body.name;
        res.status(200).send(course);
    }
});
//HTTP GET REQUESTS
app.delete('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found");
        return
    }
    else {
        courses.splice(courses.indexOf(course));
        res.status(200).send("Course was deleted.");
    }
});

app.listen(3000, ()=> {
    console.log('Listening on port 3000 ...')
})
//At root the server responds "Hello there" as expected
//at /api/courses all courses are returned
//at /api/courses/n, course with the id of n is shown
//If the return keyword is not placed, the server will not connect