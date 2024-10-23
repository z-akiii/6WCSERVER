const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/',(req, res) => {
    res.render('index', {
        title: 'Dizon, Laurence Zaki G. | Resume using Integrating EJS Templating Library',
        name: "Laurence Zaki Dizon",
        specialize: "Webdev",
        number: "09063815462",
        email: "laurencezakidizon.27@gmail.com",
        github: "github.com/z-akiii",
        course: "B.S in Information Technology with area specialization in Web Development",
        RCWs: [
            "Dynamic Web Application and Development Tools",
            "Data Structure and Algorithms",
            "Object-Oriented Programming",
            "Information Assurance and Security",
            "Advance Database",
            "Web and Advertising Publishing Concepts",
            "Web Server and Client Services"
        ],

        school: "Holy Angel University",
        profsum1: "I am a front-end web developer skilled in HTML, CSS, and JavaScript, focused on creating interactive, responsive, and user-friendly websites. I specialize in turning designs into functional applications, ensuring cross-device compatibility and optimizing performance.",

        profsum2:[
            "HTML: Crafting clean, well-structured semantic markup for accessible, and unique structures.",
            "CSS: Styling websites with modern design techniques, including Flexbox, Grid, and implementing animations for enhanced interactivity.",
            "JavaScript: Building dynamic web applications with vanilla JS and frameworks like React or Vue to improve front-end functionality and client-side scripting.",
        ],
       
        profsum3:"With an eye for detail and a drive to stay updated on the latest industry trends, I continuously improve my coding practices to deliver cutting-edge web solutions. I collaborate effectively within teams, leveraging version control tools and agile methodologies to ensure timely project delivery. My goal is to contribute my technical expertise to projects that push the boundaries of web development.",

        languageskill: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "JAVA",
            "PHP"
        ],

        dbskill: [
            "MYSQL",
            "MONGODB",
            "FIGMA"
        ],

        framework: [
            "NODEJS",
            "EXRESSJS"
        ],
        tools: [
            "Git",
            "GitHub",
            "Visual Studio Code"
        ],
        projects: [
            { 
                name: "Haus of Pet", 
                description: "This website is created to give pet their needs like food or other necessities",
                
            },
        ],
    });
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});