/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anuj Kumar",
  title: "Hi all, I'm Anuj",
  subTitle: emoji(
    "I am a seasoned competitive programmer known for my exceptional problem-solving skills.With extensive experience in 🚀 web development, particularly with the MERN stack, I specialize in creating robust and scalable applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/illusion1734",
  linkedin: "https://www.linkedin.com/in/anuj-kumar-6729551a0/",
  gmail: "anuj54152@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FULL STACK DEVELOPER AND COMPETITIVE PROGRAMMER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Codeforces Specialist ( 1596+ ), 4 star at Codechef"),
    emoji(
      "⚡ Rest api development using Nodejs, Expressjs, PostgreSql and MongoDB"
    ),
    emoji("⚡ Frontend development using Reactjs, Redux, Nextjs")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PSIT Kanpur",
      logo: require("./assets/images/psitLogo.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "August 2018 - May 2022",
      desc: "8 CGPA"
    },
    {
      schoolName: "Kendriya Vidyalaya Armapur No. 2 Kanpur",
      logo: require("./assets/images/kvschool.png"),
      subHeader: "12th",
      duration: "2017 - 2018",
      desc: "82.64%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Full Stack",
      progressPercentage: "70%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Epam Systems",
      companylogo: require("./assets/images/epamSystemsLogo.png"),
      date: "July 2022 – Present",
      desc: "Engineered a sophisticated medical-sector website using React (frontend) and Node.js with Express.js (backend) resulting in a 35% improvement in user interface efficiency. ",
      descBullets: [
        "Applied encryption protocols to improve data security and privacy by 50%.",
        "Collaborated with the team to ensure compliance with industry standards and best practices.",
        "Contributed significantly to optimizing user experience, navigation, and overall system performance."
      ]
    },
    {
      role: "junior Software Engineer intern",
      company: "Epam Systems",
      companylogo: require("./assets/images/epamSystemsLogo.png"),
      date: "Jan 2022 – june 2022",
      desc: "Acquainted with Js Classes and Typescript programming. Got familiar with latest NodeJS features and mongo DB transactions. And also have knowledge of Software Configuration Management tools as GIT, Gitlab. Created book management APIs using Nodejs, Expressjs, and PostgreSql, leading to a 30% increase in system functionality. Created the front end of book store using Reactjs and Redux. Created a simple youtube simulation using the APIs."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/facebookHackerCup.jpg"),
      projectName: "Book Store",
      projectDesc: "An ecommerce website made with react js and redux.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/illusion1734/Book_store"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/restapi.png"),
      projectName: "Event Management System",
      projectDesc:
        "A Rest api, made with node.js and express.js, to keep the records of all the meetings of the user.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/illusion1734/calendar_management_system"
        }
      ]
    },
    {
      image: require("./assets/images/YOLO.jpeg"),
      projectName: "Real Time Object Detection",
      projectDesc:
        "A real time object detection system made with python and tensorflow. It uses the YOLO algorithm to detect the objects.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/illusion1734/real_time_object_detection"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Qualified Facebook HackerCup 2021",
      image: require("./assets/images/facebookHackerCup.jpg"),
      imageAlt: "HackerCup Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.facebook.com/codingcompetitions/hacker-cup/2021/certificate/1175895649562880"
        }
      ]
    },
    {
      title: "GATE 2021 Qualified",
      subtitle: "Qualified GATE 2021 with the score of 431.",
      image: require("./assets/images/Gate2021.jpg"),
      imageAlt: "GATE Logo",
      footerLink: [
        {
          name: "GATE 2021"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-6306838510",
  email_address: "anuj54152@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
