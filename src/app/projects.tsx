"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: "/logos/image/prt1.jpg ",
    title: "Trash Classification with Machine Learning",
    desc: "Detects and prioritizes empty or full garbage bins using a CNN-based model.",
    fullDescription: `<strong>Hackathon Project: "TWiSE Night Challenge"</strong>

<strong>Event:</strong> Tunisian Well-Being through Inclusive Science (TWiSE) Night Challenge, organized by <strong>A.R.S.I.i</strong> (Association de Recherche Scientifique et Innovation en Informatique) annually.

<strong>Objective:</strong> Solve real-world problems proposed by companies within 24 hours. Our project aimed to <strong>detect which garbage bins are empty, full, or need to be emptied soon</strong>.

<strong>Approach:</strong>
• Used <strong>Convolutional Neural Network (CNN)</strong> for <strong>image classification and object detection</strong> due to its efficiency.
• <strong>Training data</strong> was provided by the company and preprocessed to <strong>single-channel grayscale</strong> for faster computation (color information not needed).
• <strong>Network architecture:</strong>
  - Fixed number of layers
  - Small filter size of <strong>5×5</strong> for speed
  - Pooling size reduced to <strong>2×2</strong>
• <strong>Training parameters:</strong>
  - Medium batch size
  - Moderate number of epochs to balance speed and accuracy

<strong>Outcome:</strong>
• Did not win the challenge, but gained <strong>valuable experience</strong> in CNNs, data preprocessing, and rapid prototyping.
• Learned <strong>teamwork, collaboration, tolerance, and problem-solving</strong> under time pressure.`,
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV", "NumPy", "Pandas"],
    projectType: "Hackathon",
    duration: "24 hours",
    role: "ML Developer"
  },
  {
    img: "/logos/image/prt2.png"  ,
    title: "Academic Web Development Project",
    desc: "Frontend Website for an Animal Protection Association.",
    fullDescription: `<strong>Academic Web Development Project</strong>

As part of a 4-week academic challenge, my partner and I designed and developed a <strong>frontend website</strong> using <strong>HTML, CSS, and JavaScript</strong>. 

The website was dedicated to <strong>animal protection</strong>, allowing people to:
• Access information about endangered species
• Discover various species and their habitats
• Support research and conservation efforts
• Learn about wildlife protection initiatives

Beyond coding, the project involved <strong>researching various species and their habitats</strong>, making it both a technical and educational experience. We focused on creating an intuitive user interface with responsive design to ensure accessibility across all devices.

This project strengthened our skills in frontend development, UI/UX design, and collaborative programming while contributing to an important cause.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    projectType: "Academic Project",
    duration: "4 weeks",
    role: "Frontend Developer"
  },
  {
    img: `/logos/image/prt4.png`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local services, as well as post their own.",
    fullDescription: `<strong>Internship Project – Majest Eye Startup</strong>

During my internship at the innovative startup <strong>Majest Eye</strong>, I developed a <strong>mobile application focused on Jendouba city</strong>. The app provides users with comprehensive information about local services, enhancing community connectivity and business visibility.

<strong>Features:</strong>
• Interactive map showing service locations
• User reviews and ratings system
• Service categorization and filtering
• Feedback and reporting system

<strong>Two user types:</strong>
• <strong>Visitors:</strong> Can browse the map and view services without registration
• <strong>Registered users:</strong> Can create profiles, add their own businesses, leave reviews, and report fake listings

<strong>Technologies used:</strong>
• <strong>Frontend:</strong> Flutter (cross-platform development for Android & iOS)
• <strong>Backend:</strong> Spring Boot (for secure and efficient request handling)
• <strong>Database:</strong> PostgreSQL

This project was a valuable experience that strengthened my skills in <strong>mobile development, backend integration, and database management</strong>, while also giving me the opportunity to collaborate with a supportive and innovative startup team.`,
    technologies: ["Flutter", "Spring Boot", "PostgreSQL", "REST API"],
    projectType: "Internship Project",
    duration: "2 months",
    role: "Full-Stack Developer"
  },
  {
    img: `/logos/image/prt3.jpg`,
    title: "Machine Learning Project: Quote Classification",
    desc: "A model that classifies quotes based on their words and assigns them to the appropriate class.",
    fullDescription: `<strong>Quote Classification Project</strong>

Together with my colleague, we developed a <strong>machine learning model</strong> that collects quotes from the internet through <strong>web scraping</strong> and classifies them based on frequent words.

<strong>Data preparation:</strong>
• Removed <strong>Arabic diacritics</strong> during the cleaning phase to normalize the text
• Classified the most frequent words into meaningful categories
• Split the dataset into <strong>training and testing sets</strong> (80/20 split)
• Applied <strong>imputation methods</strong> to balance class distribution and handle imbalanced data

<strong>Modeling:</strong>
• Experimented with different algorithms:
  - <strong>Linear Regression</strong>
  - <strong>K-Nearest Neighbors (KNN)</strong>
  - Support Vector Machine (SVM)
  - Random Forest
• Selected the model that achieved the <strong>best accuracy</strong> for classification
• Implemented cross-validation to ensure model reliability

This project strengthened my skills in <strong>text preprocessing, data balancing, and machine learning model evaluation</strong>, particularly in handling Arabic text processing challenges.`,
    technologies: ["Python", "Scikit-learn", "BeautifulSoup",  "Pandas", "Arabic NLP"],
    projectType: "ML Project",
    role: "Data Scientist"
  },
  {
    img: `/logos/image/prt5.png`,
    title: "Computer Vision-Based Robot Follower",
    desc: "A line-following robot project using a camera to detect a black line.",
    fullDescription: `<strong>Line-Following Robot Challenge</strong>

During a robotics challenge organized at our institute, my friends and I decided to compete in the <strong>line-following robot category</strong>, but with a <strong>novel approach</strong>: instead of using traditional infrared sensors, we built a robot equipped with a <strong>5MP camera</strong> and a <strong>Raspberry Pi</strong> to detect the black line and determine the fastest and complete path.

<strong>Project Components:</strong>
• <strong>Hardware:</strong> Raspberry Pi 4, 5MP camera module, motor drivers, DC motors, custom chassis
• <strong>Software:</strong> Python-based computer vision algorithm using OpenCV
• <strong>Innovation:</strong> Real-time image processing for line detection instead of traditional sensors

<strong>Development Process:</strong>
• Designed the robot chassis and component layout
• Sourced and assembled all hardware components
• Developed computer vision algorithm for line detection
• Implemented PID controller for smooth movement
• Created and tested path optimization algorithms

The experience was incredible—from <strong>designing the robot, sourcing components, building it, to creating and testing the algorithm</strong>. It provided hands-on experience in <strong>robotics, computer vision, and problem-solving</strong>.

<strong>Achievement:</strong> Successfully completed the challenge track with improved accuracy compared to traditional sensor-based robots.`,
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision", "PID Control", "Hardware Integration"],
    projectType: "Robotics Competition",
    duration: "1 months",
    role: "Robotics Engineer"
  },
  {
    img:  `/logos/image/prt6.png`,
    title: "Fernabot (AI-Powered Job Assistant for Youth)",
    desc: "A chatbot integrated into a Facebook page, named Fernabot, designed to help the youth of Fernana find job opportunities.",
    fullDescription: `<strong>Fernabot – Facebook AI Assistant Project</strong>

While working with <strong>USAID</strong>, our team proposed a project aimed at <strong>helping the youth of Fernana access job information</strong> and guiding them through the steps of starting their own business. The solution was designed as an <strong>AI assistant integrated into a Facebook page</strong>, allowing users to interact with the bot and receive personalized assistance.

<strong>Key Features:</strong>
• Automated job opportunity notifications from local market
• Step-by-step business startup guidance
• CV/Resume building assistance
• Interview preparation tips
• Local entrepreneurship resources
• Real-time Q&A support

<strong>Social Impact:</strong>
The project's goal was to <strong>reduce illegal migration</strong> by providing meaningful local opportunities and empowering youth with information and resources to build successful careers in their hometown.

<strong>Project Status:</strong>
Unfortunately, the project was <strong>halted due to funding issues</strong>, as political developments in the USA caused USAID to suspend its operations. However, we had completed the prototype and initial testing phase with positive community feedback.

As one of the developers, I am proud to have contributed to a project that <strong>supported the community and created a positive impact</strong> in my hometown. The experience taught me valuable lessons about social entrepreneurship and the importance of technology in addressing community challenges.`,
    technologies: ["Python", "Facebook Messenger API", "Natural Language Processing","Mysql"],
    projectType: "Social Impact Project",
    duration: "6 months",
    liveLink: "https://www.facebook.com/profile.php?id=61570519693170"
  },
  {
    img: `/logos/image/prt7.png`,
    title: "Deployment of a Web App with DevOps Tools",
    desc: "An academic project conducted after studying a DevOps course to assess our skills.",
    fullDescription: `<strong>DevOps Web Application Deployment Project</strong>

An academic project conducted after completing a comprehensive DevOps course to demonstrate and assess our skills in modern deployment practices and CI/CD pipelines.

<strong>Project Objectives:</strong>
• Implement a complete CI/CD pipeline from scratch
• Automate deployment processes
• Configure monitoring and logging systems
• Ensure high availability and scalability

<strong>Implementation Details:</strong>
• <strong>Version Control:</strong> Git with branching strategies (GitFlow)
• <strong>Containerization:</strong> Docker for application packaging
• <strong>Orchestration:</strong> Kubernetes for container management
• <strong>CI/CD:</strong> Jenkins pipeline for automated testing and deployment
• <strong>Infrastructure as Code:</strong> Terraform for infrastructure provisioning
• <strong>Monitoring:</strong> Prometheus and Grafana for system metrics
• <strong>Logging:</strong> ELK Stack (Elasticsearch, Logstash, Kibana)

<strong>Achievements:</strong>
• Successfully reduced deployment time from hours to minutes
• Implemented automated rollback mechanisms
• Created comprehensive documentation for future maintenance

This project provided practical experience in DevOps methodologies and tools, preparing us for real-world scenarios in software deployment and operations.`,
    technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Git", "Prometheus"],
    projectType: "Academic Project",
    duration: "2 months",
    role: "DevOps Engineer"
  },
  {
    img: `/logos/image/prt8.jpg`,
    title: "AWS Web App Deployment",
    desc: "After completing AWS Academy courses with an instructor, we carried out an academic project to assess our skills.",
    fullDescription: `<strong>AWS Cloud Deployment Project</strong>

After completing AWS Academy courses with certified instructors, we carried out a comprehensive academic project to demonstrate our cloud computing skills and AWS services knowledge.

<strong>Project Scope:</strong>
• Designed and deployed a scalable web application on AWS
• Implemented best practices for cloud architecture
• Ensured security, reliability, and cost optimization

<strong>AWS Services Utilized:</strong>
• <strong>EC2:</strong> For compute instances with auto-scaling groups
• <strong>S3:</strong> For static content and file storage
• <strong>RDS:</strong> MySQL database with multi-AZ deployment
• <strong>Lambda:</strong> Serverless functions for backend operations
• <strong>API Gateway:</strong> RESTful API management
• <strong>CloudFront:</strong> CDN for global content delivery
• <strong>Route 53:</strong> DNS management and routing
• <strong>CloudWatch:</strong> Monitoring and logging
• <strong>IAM:</strong> Identity and access management

<strong>Key Achievements:</strong>
• Implemented highly available architecture across multiple availability zones
• Achieved automatic scaling based on traffic patterns
• Reduced operational costs by 40% using reserved instances and spot instances
• Configured backup and disaster recovery strategies
• Passed AWS Academy assessment with distinction

This project solidified our understanding of cloud computing principles and AWS services, preparing us for AWS certification exams and real-world cloud deployments.`,
    technologies: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "CloudFormation", "AWS CloudWatch", "React", "Node.js"],
    projectType: "Cloud Computing Project",
    duration: "10 weeks",
    role: "Cloud Solutions Architect"
  },
  {
    img: `/logos/image/prt9.png`,
    title: "Fernana: Nature and Culture on Facebook",
    desc: "A Facebook page featuring photos I took myself while exploring the forests of Fernana.",
    fullDescription: `<strong>Fernana: Nature and Culture - Photography & Community Project</strong>

A passion project combining my love for photography, nature, and my hometown Fernana. we created and manage a Facebook page dedicated to showcasing the natural beauty and cultural richness of Fernana through original photography.

<strong>Project Overview:</strong>
• <strong>Content Creation:</strong> All photos are personally captured during our explorations of Fernana's forests, mountains, and cultural sites
• <strong>Community Building:</strong> Growing an engaged community of nature lovers and Fernana residents
• <strong>Cultural Preservation:</strong> Documenting traditional practices, local festivals, and historical sites

<strong>Page Features:</strong>
• Weekly photo series highlighting different areas of Fernana
• Stories about local wildlife and plant species
• Historical information about photographed locations
• Seasonal photography showcasing Fernana throughout the year
• Interactive posts encouraging community members to share their own experiences

<strong>Impact & Growth:</strong>
• Featured by local tourism board
• Inspired eco-tourism initiatives in the region
• Created awareness about environmental conservation


This project combines my technical skills in digital content creation with my passion for environmental conservation and community engagement.`,
    technologies: ["Photography", "Adobe Lightroom", "Facebook Pages", "Content Creation", "Social Media Marketing"],
    projectType: "Personal Project",
    duration: "Ongoing",
    role: "Content Creator & Community Manager",
    liveLink: "https://www.facebook.com/Hachem13" // Replace with actual link if available
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Here are some of my projects for you to explore. If you have an idea you&apos;d like to bring to life, 
          don&apos;t hesitate to get in touch!
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;