function showContent(section) {
    var content = document.getElementById('content');
    // Placeholder content for each section
    var data = {
        'about': '<h1>About Me</h1><p>I am an Aspiring Quantitative Analyst/Data Scientist pursuing my Masters in Business Analytics & Information Management at Purdue University with about 5 years of experience in Cloud Site Reliability Engineering & DevOps. As an enthusiastic data scientist, I thrive on turning data puzzles into insightful stories. My journey in data analysis and predictive modeling has been fueled by my passion for solving complex problems using data. With a strong foundation in quantitative modeling, programming, visualization, and cloud I aim to harness the power of data to unlock insignts & drive informed decision making.</p><h2>Technical Skills & Technologies</h2><ul class="skills-list"><li>SQL</li><li>Programming with Python</li><li>Data Analysis & Statistical Modeling</li><li>Visualization with Tableau, Matplotlib, & Seaborn</li><li>Machine Learning (Unstructured Data)</li><li>SAS Enterprise Miner</li><li>Cloud (Amazon Web Services, Microsoft Azure, & Google Cloud Platform)</li><li>Bash Scripting</li><li>Docker</li><li>Kubernetes</li><li>Terraform</li><li>Ansible</li><li>Prometheus</li><li>Jenkins</li></ul>',
        'resume': '<h1>Resume</h1><p>This is a placeholder for the resume section.</p>',
        'projects': `
            <div class="project-box">
                <a href="https://medium.com/@khandelwalritik301196/classifying-craigslist-ads-to-enhance-user-experience-ebbf7b8c732f" target="_blank" rel="noopener noreferrer" class="project-link">
                    <img src="logo/Craigs.png" alt="Project Thumbnail">
                </a>
                <p>Using Machine Learning to predict Craigslist Ads</p>
                <div class="tags-container">
                    <span class="tag">Python</span>
                    <span class="tag">ML</span>
                    <span class="tag">NLP</span>
                </div>
            </div>
            <div class="project-box">
                <a href="https://public.tableau.com/app/profile/durga.madhab.dash/vizzes" target="_blank" rel="noopener noreferrer" class="project-link">
                    <img src="logo/Tableau_Data4Good.png" alt="Project Thumbnail">
                </a>
                <p>Dashboard showing Data4Good Case Participation</p>
                <div class="tags-container">
                    <span class="tag">Python</span>
                    <span class="tag">Tableau</span>
                </div>
            </div>
            <div class="project-box">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" class="project-link">
                    <img src="logo/Predicting_Bankruptcy.png" alt="Project Thumbnail">
                </a>
                <p>Predicting Bankruptcy using Supervised Learning</p>
                <div class="tags-container">
                    <span class="tag">SAS</span>
                    <span class="tag">ML</span>
                    <span class="tag">Analytics</span>
                </div> 
            </div>
            <div class="project-box">
                <a href="Add the pdf" target="_blank" rel="noopener noreferrer" class="project-link">
                    <img src="logo/AI-PoweredBot.png" alt="Project Thumbnail">
                </a>
                <p>Capstone: AI powered financial chatbot to extract financial metrics</p>
                <div class="tags-container">
                    <span class="tag">Python</span>
                    <span class="tag">LLM & NLP</span>
                    <span class="tag">Google Cloud</span>
                </div>
            </div>
            <div class="project-box">
                <a href="Add the pdf" target="_blank" rel="noopener noreferrer" class="project-link">
                    <img src="logo/NCAA_womens_basketball.png" alt="Project Thumbnail">
                </a>
                <p>NCAA Division 1 Women's basketball Ticket Sales Analysis</p>
                <div class="tags-container">
                    <span class="tag">Python</span>
                    <span class="tag">ML</span>
                    <span class="tag">Analytics</span>
                </div>
            </div>
        `,
        'certifications': `
            <div class="project-box">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/Coursera-Python.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/DataCamp-PostGresSql.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/Tableau-DesktopSpecialist.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/AWS-CloudPractiotioner.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/AWS-SolutionsArchitect.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/AZ900.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/SAS_Optimization.jpg" alt="Project Thumbnail">
                <a>
            </div>
            <div class="project-box">
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/GCP-KubernetesEngine.png" alt="Project Thumbnail">
                </a>
            </div>
        `,
        'contact': `
<h1>Contact Me</h1>
<h4>I would be happy to connect about any opportunities or collaborations</h4>
<p>LinkedIn: <a href="https://www.linkedin.com/in/durgamadhabdash" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
<p>GitHub: <a href="https://github.com/Durga2Dash" target="_blank" rel="noopener noreferrer">Git Profile</a></p>
<p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
<p>Address: West Lafayette, Indiana, United States</p>
`
    };
    content.innerHTML = data[section];
    // Adjust layout for project boxes
    if (section === 'projects' || section === 'certifications') {
        content.style.display = 'flex';
        content.style.flexWrap = 'wrap';
        content.style.justifyContent = 'space-around';
    } else {
        content.style.display = 'block';
    }
}
function showResume() {
var content = document.getElementById('content');
var resumeUrl = 'https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf';
content.innerHTML = '<object type="application/pdf" width="100%" height="99%" data="' + resumeUrl + '"></object>';
}

document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Data Science", "AI/ML Engineering (Structured Data & NLP)", "Cloud Site Reliability Engineering", "DevOps"];
    let currentRoleIndex = 0;
    const roleElement = document.getElementById('role-changer');

    function typeRole(role, charIndex) {
        if (charIndex < role.length) {
            roleElement.textContent += role.charAt(charIndex);
            setTimeout(() => typeRole(role, charIndex + 1), 15);
        } else {
            setTimeout(eraseRole, 1500);
        }
    }

    function eraseRole() {
        let text = roleElement.textContent;
        if (text.length > 0) {
            roleElement.textContent = text.substring(0, text.length - 1);
            setTimeout(eraseRole, 15);
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typeRole(roles[currentRoleIndex], 0);
        }
    }

    typeRole(roles[currentRoleIndex], 0);
});