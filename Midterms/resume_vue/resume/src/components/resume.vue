<template>
    <div class="resume">
      <h1>{{ name }}</h1>
      <p>{{ address }}</p>
      <p>Phone: {{ phone }}</p>
      <p>Email: <a :href="`mailto:${email}`">{{ email }}</a></p>
  
      <h2>Professional Summary</h2>
      <p>{{ summary }}</p>
  
      <h2>Education</h2>
      <p><strong>{{ education.institution }}</strong> — {{ education.degree }}</p>
      <p>Expected Graduation: {{ education.graduationYear }}</p>
  
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
  
      <h2>Work Experience</h2>
      <p>{{ workExperience }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "Laurence Zaki Dizon",
        address: "Calulut CSFP",
        phone: "09622602779",
        email: "laurencezakidizon.27@gmail.com",
        summary: "As a 3rd-year Information and Technology student, I have a solid foundation in areas such as programming, databases, and networking. I am continually expanding my skills in emerging technologies and enjoy tackling complex technical challenges. My goal is to apply this knowledge in real-world scenarios, preparing for a successful career in the IT industry.",
        education: {
          institution: "Holy Angel University",
          degree: "BS Information Technology",
          graduationYear: "2026",
        },
        skills: ["HTML", "CSS", "Java", "JavaScript", "Python"],
        workExperience: "None",
      };
    },
  };
  </script>
  
  <style scoped>
  .resume {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  .resume h1 {
    font-size: 2rem;
  }
  .resume h2 {
    font-size: 1.5rem;
    margin-top: 20px;
  }
  .resume p, .resume li {
    font-size: 1.2rem;
  }
  </style>
  