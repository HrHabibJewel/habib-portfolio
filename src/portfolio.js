/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Habib's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products, cloud solutions and architectures which develop sustainable and scalable social and technical systems to create impact. Love to take ownership of products and have friendly relationship with colleagues.",
  og: {
    title: "Md. Habibur Rahman Jewel Portfolio",
    type: "website",
    url: "https://habib-port-folio.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Md. Habibur Rahman Jewel",
  logo_name: "HabiburRahmanJewel",
  nickname: "habib",
  subTitle:
    "A passionate individual who always thrives to work on end to end products, cloud solutions and architectures which develop sustainable and scalable social and technical systems to create impact. Love to take ownership of products and have friendly relationship with colleagues.",
  resumeLink:
    "https://drive.google.com/file/d/13jchXStxHBHvmyXU56ZrgZa5P0ytvKFT/view?usp=share_link",
  portfolio_repository: "https://github.com/HrHabibJewel/habib-portfolio",
  githubProfile: "https://github.com/hrhabibjewel",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/habib-jewel/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/hrhabibjewel",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:habibur.jewel.rahman@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/habiburrahman.jewel.3939/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/md.habibur_rahman_jewel/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop web application",
        "⚡ Create application backend using Dot Net, Dot Net Core",
        "⚡ Create application front-end using C# Razor, Angular, ReactJS, HTML5, JavaScript",
        "⚡ Develop mobile application using Java, XML",
        
      ],
      softwareSkills: [
        {
          skillName: "Dot Net",
          fontAwesomeClassname: "mdi:dot-net",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "Dot Net Core API",
          fontAwesomeClassname: "eos-icons:api",
          style: {
            color: "#001C55",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon",
          style: {
            color: "#E23237",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        
        {
          skillName: "JQuery",
          fontAwesomeClassname: "logos:jquery",
          style: {
            color: "#1A1918",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "Microst SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "logos:snowflake",
          style: {
            color: "#29B5E8",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos:kafka",
          style: {
            color: "#1A1919",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Services",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms such as Azure (Web app, Active Directory, Azure blob), AWS (EC2, S3, CloudWatch, Lambda, Trigger, Job, SQS, SNS), GCP (APIs & Services, IAM, VM, Cloud Storage)",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ CI/CD with Azure DevOps and Azure Web App",
        "⚡ Automation with Azure Data Factory",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "Reporting & Visualization",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in Data Visualization using amazing data visualization tools",
        "⚡ Deep experience in Power Bi, Google Data Studio and Grafana",
        "⚡ Experience in making management dashboard, tracking dashboard etc.",
      ],
      softwareSkills: [
        {
          skillName: "Power Bi",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google Data Studio",
          fontAwesomeClassname: "logos:google-data-studio",
          style: {
            //backgroundColor: "white",
            color: "#669DF6",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "logos:grafana",
          style: {
            backgroundColor: "transparent",
          },
        },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    
    {
      title: "Data Engineering & Pipeline",
      fileName: "DesignImg",
      skills: [
        "⚡ Extract data from various sources like, social platform, relational databases, nosql databases etc",
        "⚡ Create pipeline between different sources and warehouse",
        "⚡ Clean data using serverless AWS lambda and Azure function",
      ],
      softwareSkills: [
        {
          skillName: "Airbyte",
          fontAwesomeClassname: "simple-icons:airbyte",
          style: {
            color: "#000000",
          },
        },
        // {
        //   skillName: "Figma",
        //   fontAwesomeClassname: "simple-icons:figma",
        //   style: {
        //     color: "#F24E1E",
        //   },
        // },
        {
          skillName: "Fivetran",
          fontAwesomeClassname: "eos-icons:pipeline",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "ETL",
          fontAwesomeClassname: "fluent-mdl2:processing",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName:"Data Warehouse",
          fontAwesomeClassname: "logos:snowflake",
          style: {
            color: "#29B5E8",
          },
        }
      ],
    },
    {
      title: "Project Management & Source control",
      fileName: "ProjManagement",
      skills: [
        "⚡ Used to follow in Agile Methodology",
        "⚡ Performed Scrum master role",
        "⚡ Experience in Sprint planning, Task breakdown and distribution, preparing Gantt chart",
        "⚡ Experience in source controlling using DevOps, Git, Bitbucket",
      ],
      softwareSkills: [
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "cib:azure-devops",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
          style: {
            color: "#2684FF",
          },
        },
        {
          skillName: "Asana",
          fontAwesomeClassname: "logos:asana-icon",
          style: {
            color: "#0D0E10",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "logos:gitlab",
          style: {
            color: "#E24329",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "logos:bitbucket",
          style: {
            color: "#2684FF",
          },
        }
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Course Completion - AWS Cloud Practitioner",
      iconifyClassname: "logos:aws",
      style: {
        color: "#252F3E",
      },
      profileLink: "https://drive.google.com/file/d/1uutJrP-jq6p_8Q8nJmlBYlwiKXeFL_ju/view?usp=share_link",
    },
    {
      siteName: "Google Analytics",
      iconifyClassname: "logos:google-analytics",
      style: {
        color: "#F9AB00",
      },
      profileLink: "https://skillshop.exceedlms.com/student/award/cXnxgV25JHjg9z5qLtk8YphY",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "United International University",
      subtitle: "M.Sc in Computer Science & Engineering",
      logo_path: "UIU-Logo-250.png",
      alt_name: "UIU",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ I have studied advanced software engineering subjects like,",
        "    * Advanced DB system", 
        "    * Software Quality Management", 
        "    * Data Warehousing & Business Intelligence", 
        "    * Software Project Management",
        "    * ERP",
        "    * Software Architecture",
        "    * Software Specifications & Analysis",
        "    * Software Testing",
        "    * IT Audit"
      ],
      website_link: "http://uiu.ac.bd",
    },
    {
      title: "International Islamic University Chittagong",
      subtitle: "B.Sc in Computer Science & Engineering",
      logo_path: "Iiuc-logo_new.png",
      alt_name: "IIUC",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, Web Applications, Data Mining etc.",
      ],
      website_link: "https://www.iiuc.ac.bd/",
    },
    {
      title: "B.A.F Shaheen College",
      subtitle: "Higher Secondary School Certificate",
      logo_path: "bafsc_logo.png",
      alt_name: "BAFSC",
      duration: "2012 - 2014",
      descriptions: [
        "⚡ I have completed my HSC from this college which is located in Chittagong.",
      ],
      website_link: "https://bafsc.edu.bd/",
    },
    {
      title: "Nasirabad Govt. High School, Chattogram",
      subtitle: "Secondary School Certificate",
      logo_path: "nghs-logo.jpeg",
      alt_name: "NGHS",
      duration: "2011",
      descriptions: [
        "⚡ I have completed my SSC from this school which is located in Chittagong.",
      ],
      website_link: "https://nghs.tsmts.com/",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Jogesh Muppala",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//       alt_name: "Coursera",
//       color_code: "#2A73CC",
//     },
//     {
//       title: "Kuberenetes on GCP",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//     {
//       title: "Cryptography",
//       subtitle: "- Saurabh Mukhopadhyay",
//       logo_path: "nptel_logo.png",
//       certificate_link:
//         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//       alt_name: "NPTEL",
//       color_code: "#FFBB0099",
//     },
//     {
//       title: "Cloud Architecture",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
  "I have worked in a leading software company named 'LEADS Corporation Limited' as Software Engineer and Senior Software Engineer. Currently I am working in a Data Science company named 'Be Data Solutions' as a Senior Software Engineer",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Be Data Solutions",
          company_url: "https://bedatasolutions.com/",
          logo_path: "bedata-logo-blue.svg",
          duration: "August 01, 2022 - PRESENT",
          location: "London & Dhaka",
          description:
          "Working on Data Engineering products. The projects involve automation process of ETL, Data Pipeline and Data warehouses using AWS, Azure, GCP services. Guide juniors and contribute in Data Visualization also.",
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "LeadSoft Bangladesh Limited",
          company_url: "https://leadsoft.com.bd/",
          logo_path: "LeadSoft.png",
          duration: "Jan 01, 2021 - Jul 26 2022",
          location: "Dhaka - Bangladesh",
          description:
            "Working with Asp.Net core API and Angular application. Working also with Azure web app, power bi, sendgrid etc.",
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "LeadSoft Bangladesh Limited",
          company_url: "https://leadsoft.com.bd/",
          logo_path: "LeadSoft.png",
          duration: "Feb 18, 2019 - Dec 31 2020",
          location: "Dhaka - Bangladesh",
          description:
            "Working with Asp.Net core API and Razor application. Developed two android application for two recognized company.",
          color: "#fc1f20",
        },
        {
          title: "Software Engineer (Contractual)",
          company: "Leads Corporation Limited",
          company_url: "https://leads.com.bd/",
          logo_path: "Logo_of_Leads_Corporation_Limited.png",
          duration: "Dec 01, 2018 - Jan 30 2019",
          location: "Dhaka - Bangladesh",
          description:
            "Working with Asp.Net C# and Razor application. Bug fixing and enchanced existing feature in ERP solution.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Leads Corporation Limited",
          company_url: "https://leads.com.bd/",
          logo_path: "Logo_of_Leads_Corporation_Limited.png",
          duration: "Sep 03, 2018 - Nov 30, 2018",
          location: "Dhaka - Bangladesh",
          description:
            "Created and developed Crystal Reports, Database function, Store procedures etc.",
          color: "#ee3c26",
        },
        
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
  "My projects makes use of vast variety of latest technology tools. My best experience is to create e-Procurement and govt. scholarship projects and deploy them to cloud along with integrating CI/CD pipeline",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "habib-logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you to build any kind of software and mobile application with Dot Net, C#, Asp.Net core, React, Android, Cloud services Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "House#17/1, Dilu Road, New Eskaton, Ramna, Dhaka-1000",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+880-1813868986",
  },
  emailSection: {
    title: "e-mail",
    subtitle: "habibur.jewel.rahman@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  //certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
