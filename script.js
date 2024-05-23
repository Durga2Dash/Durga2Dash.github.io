function showContent(section) {
    var content = document.getElementById('content');
    var data = {
        'about': '<h1>About Me <i class="fa-solid fa-user-secret" title="Data Sherlock"></i></h1><p>I am an Aspiring Quantitative Analyst/Data Scientist pursuing my Masters in Business Analytics & Information Management at Purdue University with about 5 years of experience in Cloud Site Reliability Engineering & DevOps. As an enthusiastic data scientist, I thrive on turning data puzzles into insightful stories. My journey in data analysis and predictive modeling has been fueled by my passion for solving complex problems using data. With a strong foundation in quantitative modeling, programming, visualization, and cloud I aim to harness the power of data to unlock insights & drive informed decision making.</p><h2>Technical Skills & Technologies</h2><ul class="skills-list"><li><i class="fa-solid fa-database"></i>SQL</li><li><i class="fa-brands fa-python"></i>Programming with Python</li><li><i class="fa-solid fa-chart-line"></i>Data Analysis & Statistical Modeling</li><li><i class="fa-solid fa-chart-area"></i>Visualization with Tableau, Matplotlib, & Seaborn</li><li><i class="fa-solid fa-robot"></i>Machine Learning (Unstructured Data)</li><li><i class="fa-solid fa-laptop-code"></i>SAS Enterprise Miner</li><li><i class="fa-solid fa-cloud"></i>Cloud (Amazon Web Services, Microsoft Azure, & Google Cloud Platform)</li><li><i class="fa-solid fa-terminal"></i>Bash Scripting</li><li><i class="fa-brands fa-docker"></i>Docker</li><li><i class="fa-solid fa-cubes"></i>Kubernetes</li><li><i class="fa-solid fa-earth-americas"></i>Terraform</li><li><i class="fa-solid fa-project-diagram"></i>Ansible</li><li><i class="fa-solid fa-network-wired"></i>Prometheus</li><li><i class="fa-solid fa-tools"></i>Jenkins</li><li><i class="fa-solid fa-coffee"></i> Maven</li><li><i class="fa-brands fa-node-js"></i> NPM</li><li><i class="fa-solid fa-code"></i> Groovy</li><li><i class="fa-solid fa-chart-line"></i> SonarQube</li><li><i class="fa-solid fa-frog"></i> JFrog</li></ul>',
        'resume': '<h1>Resume</h1><p>This is a placeholder for the resume section.</p>',
        'projects': `
            <div class="project-box">
                <a href="https://medium.com/@khandelwalritik301196/classifying-craigslist-ads-to-enhance-user-experience-ebbf7b8c732f" target="_blank" rel="noopener noreferrer" class="project-link">
                    <img src="logo/Craigs_Ad.png" alt="Project Thumbnail">
                </a>
                <p>Using Machine Learning to predict Craigslist Ads</p>
                <div class="tags-container">
                    <span class="tag"><i class="fa-solid fa-tag"></i> Python</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> ML</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> NLP</span>
                </div>
            </div>
            <div class="project-box">
                <img src="logo/Predicting_Bankruptcy.png" alt="Project Thumbnail" onclick="showMinePDF()">
                <p>Predicting Bankruptcy using Supervised Learning</p>
                <div class="tags-container">
                    <span class="tag"><i class="fa-solid fa-tag"></i> SAS</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> ML</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> Analytics</span>
                </div> 
            </div>
            <div class="project-box">
                <img src="logo/Poster_Day.png" alt="Project Thumbnail" onclick="showIPPDF()">
                <p>Capstone: AI powered financial chatbot to extract financial metrics</p>
                <div class="tags-container">
                    <span class="tag"><i class="fa-solid fa-tag"></i> Python</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> LLM & NLP</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> Google Cloud</span>
                </div>
            </div>
            <div class="project-box">
                <img src="logo/ccac.png" alt="Project Thumbnail" onclick="showCCACPDF()">
                <p>NCAA Division 1 Women's basketball Ticket Sales Analysis</p>
                <div class="tags-container">
                    <span class="tag"><i class="fa-solid fa-tag"></i> Python</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> ML</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> Analytics</span>
                </div>
            </div>
            <div class="project-box">
                <a href="https://public.tableau.com/app/profile/durga.madhab.dash/vizzes" target="_blank" rel="noopener noreferrer" class="project-link">
                    <img src="logo/Tableau_Data4Good.png" alt="Project Thumbnail">
                </a>
                <p>Tableau Dashboards</p>
                <div class="tags-container">
                    <span class="tag"><i class="fa-solid fa-tag"></i> Python</span>
                    <span class="tag"><i class="fa-solid fa-tag"></i> Tableau</span>
                </div>
            </div>
        `,
        'certifications': `
            <div class="project-box">
                <a href="https://www.credly.com/badges/131975ff-6dc2-4844-ad6e-124c59f9a865/public_url" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/Tableau-DesktopSpecialist.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.credly.com/badges/a943f592-f97b-4ba3-88c0-3c3194e0e309" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/AWS-CloudPractiotioner.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.credly.com/badges/31fc3ba5-c1df-4e9b-9ba5-d7fd78d55d69/public_url" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/AWS-SolutionsArchitect.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.credly.com/badges/7b9d68ae-14c4-4fe5-b349-1ec48cb602d0" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/AZ900.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.credly.com/badges/d05662f2-119a-4d9b-9b3e-9ddb3181f98d/public_url" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/SAS_Optimization.jpg" alt="Project Thumbnail">
                <a>
            </div>
            <div class="project-box">
                <a href="https://www.datacamp.com/statement-of-accomplishment/track/ebb110f58467ca67ba103431d479a0294ac0868a?raw=1" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/DataCamp-PostGresSql.jpg" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://www.coursera.org/account/accomplishments/certificate/VZSCEPKUZDW9" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/GCP-KubernetesEngine.png" alt="Project Thumbnail">
                </a>
            </div>
            <div class="project-box">
                <a href="https://coursera.org/verify/specialization/4HHPN9F3R93P" target="_blank" rel="noopener noreferrer" >
                    <img src="logo/Coursera-Python.jpg" alt="Project Thumbnail">
                </a>
            </div>
        `,
        'contact': `
<h1>Contact Me</h1>
<h4>I would be happy to connect about any opportunities or collaborations <i class="fa-solid fa-mug-hot"></i> &#x1F600;</h4>
<p>LinkedIn: <a href="https://www.linkedin.com/in/durgamadhabdash" target="_blank" rel="noopener noreferrer" style="font-weight: bold; color: #A9A9A9;">LinkedIn Profile</a></p>
<p>GitHub: <a href="https://github.com/Durga2Dash" target="_blank" rel="noopener noreferrer" style="font-weight: bold; color: #A9A9A9;">Git Profile</a></p>
<p>Email: <a href="mailto:dashd@purdue.edu" style="font-weight: bold; color: #A9A9A9;">Write To Me</a></p>
<p>Location: United States</p>
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
    var resumeUrl = 'https://storage.googleapis.com/images_ip_2022/Resum.pdf';
    content.innerHTML = '<object type="application/pdf" width="100%" height="99%" data="' + resumeUrl + '"></object>';
    }

function showIPPDF() {
    var content = document.getElementById('content');
    var resumeUrl = 'https://storage.googleapis.com/images_ip_2022/Team_Group_11_IP.pdf';
    content.innerHTML = '<object type="application/pdf" width="100%" height="99%" data="' + resumeUrl + '"></object>';
    }
    
function showCCACPDF() {
    var content = document.getElementById('content');
    var resumeUrl = 'https://storage.googleapis.com/images_ip_2022/2024%20Crossroads%20Runners%20-%20Purdue%20University.pdf';
    content.innerHTML = '<object type="application/pdf" width="100%" height="99%" data="' + resumeUrl + '"></object>';
    }

function showMinePDF() {
    var content = document.getElementById('content');
    var resumeUrl = 'https://storage.googleapis.com/images_ip_2022/DataMining_Final_Project.pdf';
    content.innerHTML = '<object type="application/pdf" width="100%" height="99%" data="' + resumeUrl + '"></object>';
    }


// Function to generate sine wave data with noise
function generateSineWaveData(points, amplitude, frequency, noiseLevel) {
    const data = [];
    for (let i = 0; i < points; i++) {
        const x = i / frequency;
        const y = amplitude * Math.sin(x) + (Math.random() * 2 - 1) * noiseLevel;
        data.push({ x, y });
    }
    return data;
}

// Animated Scatter Chart
const scatterCtx = document.getElementById('animatedScatterChart').getContext('2d');
const scatterData = {
    datasets: [{
        label: 'Scatter Dataset',
        data: Array.from({length: 50}, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
    }]
};

const scatterOptions = {
    scales: {
        x: {
            display: false,
            type: 'linear',
            position: 'bottom'
        },
        y: {
            display: false
        }
    },
    plugins: {
        legend: {
            display: false
        }
    },
    animation: {
        duration: 2000, // Animation duration in milliseconds
        easing: 'easeInOutQuad' // Animation easing
    }
};

const scatterChart = new Chart(scatterCtx, {
    type: 'scatter',
    data: scatterData,
    options: scatterOptions
});

function updateScatterChart() {
    scatterChart.data.datasets[0].data = generateSineWaveData(100, 10, 2, 1);
    scatterChart.update();
}

setInterval(updateScatterChart, 4000); // Update scatter plot every 4 seconds

document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Data Science", "AI/ML Engineering (Structured Data & NLP)", "Cloud Site Reliability Engineering", "DevOps", "Laughing at My Own Jokes", "Winning Imaginary Arguments", "Napping"];
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

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    });

    // Initialize with dark theme
    document.body.classList.add('dark-theme');
});