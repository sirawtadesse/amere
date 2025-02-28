import Image from "next/image";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { FaMoon, FaCamera, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    const toggleButton = document.getElementById('toggle-mode');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (toggleButton) {
      toggleButton.addEventListener('click', (event) => {
        event.preventDefault();
        toggleDarkMode();
      });
    }

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener('click', toggleDarkMode);
      }
      if (hamburger) {
        hamburger.removeEventListener('click', () => {
          navMenu.classList.toggle('active');
        });
      }
    };
  }, []);

  const displayInfo = () => {
    const infoCard = document.getElementById('info-card');
    infoCard.style.display = infoCard.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="hamburger" id="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className="nav-menu flex space-x-6 items-center" id="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About Me</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li>
              <a href="#" id="toggle-mode" className="nav-link" title="Toggle Dark Mode">
                <FaMoon />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="main-content text-center">
        <h1 className="marquee">Welcome to Amere Moges' website</h1>
        <Image
          src="/images/photo_me.jpg" // Replace with your image path
          alt="Your Image Description"
          className="profile-image mx-auto w-48 h-48 rounded-3xl shadow-lg mb-6 
                     transform transition-all duration-500 ease-in-out 
                     hover:scale-110 hover:-translate-y-4 
                     hover:shadow-2xl hover:border-4 hover:border-white hover:rotate-6"
          width={150}
          height={150}
        />

        <div 
          className="visual-search p-3 rounded-lg shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer mx-auto"
          onClick={() => openGoogleSearch()}
          title="Search by Image"
        >
          <FaCamera className="text-gray-600 text-2xl" />
        </div>

        <section id="about" className="section-container">
          <h2>About Me</h2>
          <p>My name is <a href="#" className="zoom-link">Amere Moges</a>, and I hold a <strong>Master of Business Administration</strong> from <strong>Maryland International College</strong> (2024) with a <strong>perfect CGPA of 4.0</strong>. I also hold a <strong>BA Degree in Management</strong> from <strong>Addis Ababa University</strong> (2020) with a <strong>CGPA of 3.92</strong>.</p>
          <p>I am highly motivated, detail-oriented, and have a strong passion for business strategy and financial management.</p>
          <p>Currently, I am working as a <strong>Resident Auditor II at Dashen Bank SC</strong>, where I contribute to risk assessment, financial analysis, and internal auditing processes.</p>
          <p>In addition to my academic and professional achievements, I possess strong communication skills that enable me to connect easily with individuals from diverse backgrounds. I believe that effective communication is vital in fostering collaboration and understanding in any workplace.</p>
          <p>My ability to articulate complex ideas clearly and concisely allows me to convey information effectively, whether I am presenting findings to senior management or collaborating with team members.</p>
          <p>I am adept at building relationships and maintaining a positive rapport with colleagues and clients alike, which enhances teamwork and productivity. Furthermore, I value feedback and actively seek opportunities for improvement, ensuring that I remain adaptable and responsive to the needs of those around me.</p>
          <p>Ultimately, my goal is to leverage my communication skills and analytical expertise to contribute positively to my organization and support its strategic objectives.</p>
          <div style={{ textAlign: 'center' }}>
            <button className="about-button" onClick={displayInfo}>Learn More</button>
          </div>
          <div id="info-card" style={{ display: 'none', textAlign: 'center', marginTop: '20px' }}>
            <h3>Amere Moges</h3>
            <p><strong>Position:</strong> Resident Auditor II at Dashen Bank SC</p>
          </div>
        </section>

        <section id="experience" className="section-container">
          <h2>Experience</h2>
          <p>I have four years of experience in banking sector as CSO-Maker, CSO Maker/Checker, Acting Auditor and Resident Auditor II. My key responsibilities include:</p>
            <ul>
                 <p>Conducting internal audits and financial risk assessments at Dashen Bank SC.</p>
                 <p>Developing reports on compliance, fraud detection, and financial efficiency.</p>
                 <p>Providing strategic insights to enhance internal control mechanisms.</p>
                 <p>Collaborating with cross-functional teams to identify operational inefficiencies and recommend solutions.</p>
                 <p>Implementing audit plans that align with regulatory requirements and organizational goals.</p>
                 <p>Training and mentoring junior auditors, fostering a culture of continuous learning and professional development.</p>
                 <p>Utilizing advanced analytical tools to assess financial data and support data-driven decision-making.</p>
            </ul>
            <p>My role also involves regular communication with stakeholders to ensure transparency and build trust in the auditing process. I am committed to delivering high-quality work and continuously improving the effectiveness of audit procedures.</p>
            <h3>Previous Roles:</h3>
            <ul>
                <p><strong>Customer Service Officer</strong> at Dashen Bank SC, Addis Ababa, Ethiopia | April 2021 – August 2024</p>
            </ul>
        </section>

        <section id="skills" className="section-container">
          <h2>Skills</h2>
          <ul>
                 <p>Financial Analysis & Auditing</p>
                 <p>Risk Management & Compliance</p>
                 <p>Strategic Business Planning</p>
                 <p>Data-Driven Decision Making</p>
                 <p>Excellent Communication & Leadership</p>
                 <p>Proficiency in Financial Software</p>
                 <p>Ability to Conduct Market Research and Competitive Analysis</p>
                 <p>Strong Problem-Solving Skills and Critical Thinking</p>
                 <p>Project Management and Team Coordination</p>
                 <p>Adaptability in Fast-Paced Environments</p>
            </ul>
            <p>My skill set enables me to navigate complex financial landscapes and contribute to informed decision-making processes. I am committed to continuous professional development, regularly updating my knowledge of industry trends and best practices.</p>
        </section>

        <section id="cv" className="section-container">
          <h2>Download My CV</h2>
          <p>You can download my CV using the button below:</p>
          <a href="/CV_Amere_Moges.pdf" download>
            <button className="cv-button">Download CV</button>
          </a>
        </section>

        <section id="contact" className="section-container">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:mogesamere@gmail.com">mogesamere@gmail.com</a></p>
          <p>Phone: +251 963632527</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/amere-asmare" target="_blank" rel="noopener noreferrer">linkedin.com/in/amere-asmare</a></p>
        </section>
      </div>

      <div className="scroll-icons">
        <a href="#home"><i className="fas fa-chevron-up"></i></a>
        <a href="#contact"><i className="fas fa-chevron-down"></i></a>
      </div>

      <footer className="bg-gray-800 text-white text-center py-6">
        <div className="social-icons flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
        <p>&copy; 2025 Amere Moges. All rights reserved.</p>
      </footer>

      <style jsx>{`
        /* Tailwind CSS base styles */
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        :root {
          --background: #ffffff;
          --foreground: #000000;
        }

        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
          :root {
            --background: #000000;
            --foreground: #ffffff;
          }
        }

        body {
          color: var(--foreground);
          background: var(--background);
          font-family: Arial, Helvetica, sans-serif;
          transition: background-color 0.3s, color 0.3s;
        }

        .dark-mode {
          --background: #000000;
          --foreground: #ffffff;
        }

        nav {
          background-color: var(--foreground);
          padding: 15px 30px;
          transition: background-color 0.3s;
        }

        .nav-menu {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: var(--background);
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
          padding: 10px 15px;
          margin: 0 15px;
          border-radius: 4px;
        }

        .nav-link:hover {
          background-color: #f39c12;
          color: black;
        }

        .profile-image {
          border-radius: 30px; /* Custom rounded corners */
          transition: all 0.4s ease-in-out;
        }

        .profile-image:hover {
          background-color: #f39c12; /* Hover background */
          transform: scale(1.1) translateY(-10px) rotate(5deg);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        }

        .marquee {
          overflow: hidden;
          white-space: nowrap;
          box-sizing: border-box;
          color: #f39c12;
          font-size: 2em;
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .section-container {
          margin: 20px 0;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          background-color: var(--background);
          color: var(--foreground);
        }

        footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 20px 0;
          position: relative;
          width: 100%;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          margin: 10px 0;
        }

        .social-icon {
          margin: 0 10px;
          color: white;
          font-size: 24px;
          transition: color 0.3s;
        }

        .social-icon:hover {
          color: #f39c12; /* Change color on hover */
        }

        .cv-button {
          background-color: #f39c12;
          color: white;
          font-size: 16px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s ease;
        }

        .cv-button:hover {
          background-color: #e67e22;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none; /* Hide by default on mobile */
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            background-color: #333;
            width: 100%;
            z-index: 1;
          }

          .nav-menu.active {
            display: flex; /* Show on click */
          }

          .hamburger {
            display: flex;
            flex-direction: column;
            cursor: pointer;
            background-color: black; /* Hamburger background */
            padding: 5px; /* Padding around hamburger */
            border-radius: 5px; /* Rounded corners */
          }

          .hamburger div {
            height: 3px;
            width: 25px;
            background-color: white; /* Hamburger lines color */
            margin: 4px 0;
            transition: 0.4s;
          }
        }

        function displayInfo() {
    const infoCard = document.getElementById('info-card');
    infoCard.style.display = infoCard.style.display === 'none' ? 'block' : 'none';
}
      `}</style>
    </div>
  );
}

function openGoogleSearch() {
  window.open('https://www.google.com/search?q=', '_blank');
}
