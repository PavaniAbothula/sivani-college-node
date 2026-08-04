const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about-hei", (req, res) => {
  res.render("about-hei");
});

// Overview reuses the same content as /about-hei
app.get("/about/overview", (req, res) => {
  res.render("about-hei");
});

// about HEI
const aboutPages = {
  'society': {
    title: 'Society',
    content: `
      <p class="college-para">
        <strong>Sri Sivani Educational Society</strong> was established in the year 2006 by the highly motivated and philanthropic personalities well noted in the Srikakulam district for their commitment and concern for the upliftment of education. The Society recognizes the vital need to produce competent pharmacy, engineering and techno-managerial professionals for the development of country.
      </p>
      <p class="college-para">
        <strong>Sri Sivani Group of Colleges</strong> have already created a sensation in Srikakulam District by imparting quality based technological and pharmaceutical education. Here the environment is free of all limitations and tensions and we put our best to get the best from on constant efforts. The institution aims at achieving excellence in engineering education, not only at basic level but also at advanced levels.
      </p>

      <h3 class="officials-heading">Society Office Bearers</h3>
      <div class="officials-table">
        <div class="officials-row">
          <div class="officials-label">Chairman</div>
          <div class="officials-value">Sri V.M.M. Sainath Reddy</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Vice Chairman</div>
          <div class="officials-value">Sri J. Surya Chandra Rao</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Secretary</div>
          <div class="officials-value">Sri K. Durga Srinivasa Rao</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Joint Secretary</div>
          <div class="officials-value">Sri P. Durga Prasad Raju</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Treasurer</div>
          <div class="officials-value">Sri D. Venkat Rao</div>
        </div>
        <div class="officials-row">
          <div class="officials-label">Correspondent</div>
          <div class="officials-value">Dr. S. Srinivasa Rao</div>
        </div>
      </div>
    `
  },
  'act-statutes-moa': {
    title: 'Act & Statutes of MoA',
    content: '<p class="college-para">Add content here.</p>'
  },
  'strategic-plan': {
    title: 'Strategic/Institutional Development Plan',
    content: '<p class="college-para">Add content here.</p>'
  },
  'vision-mission': {
    title: 'Vision & Mission',
    content: `
      <h3 class="vision-heading">VISION</h3>
      <p class="college-para">
        To be an Institute committed to create highly dedicated, globally skilled Pharmacy Professionals.
      </p>

      <h3 class="vision-heading">MISSION</h3>
      <ol class="mission-list">
        <li class="mission-list-item">To make pharmacy education more accessible to all the rural communities.</li>
        <li class="mission-list-item">To promote healthcare partnerships and industry programs and fulfill the requirements of industries.</li>
        <li class="mission-list-item">To promote and disseminate pharmaceutical knowledge through quality teaching and research to improve the health of everyone.</li>
        <li class="mission-list-item">To execute our mission, we employ creative and established educational methods to produce pharmacists with the skills and knowledge to serve society ethically and professionally.</li>
      </ol>
    `
  },
  'chairman-message': {
    title: "Chairman's Message",
    content: '<p class="college-para">Add content here.</p>'
  },
'secretary-message': {
  title: "SECRETARY & JOINT SECRETARY MESSAGE",
  content: `
    <h2>Secretary’s Message</h2>

    <img 
      src="/assets/secretary.jpg" 
      alt="Secretary"
      class="message-person-image"
    >

    <p class="college-para">
      We are dedicated to fostering an educational ecosystem that encourages excellence, innovation, and ethical responsibility in pharmacy education. By blending strong academic foundations with practical exposure and value-based learning, we aim to prepare students to meet the evolving challenges of the healthcare profession with confidence and competence. I extend my best wishes to all students as they pursue knowledge, professional growth, and meaningful service to society.
    </p>

    <p class="message-signature">
      ----<strong><em>Sri K. Durga Srinivasa Rao</em></strong>
    </p>

    <p class="message-designation">
      <strong><em>Secretary</em></strong>
    </p>

    <h2>Joint Secretary’s Message</h2>

    <img 
      src="/assets/joint-secretary.jpg" 
      alt="Joint Secretary"
      class="message-person-image"
    >

    <p class="college-para">
      At <strong>Sri Sivani College of Pharmacy</strong>, we believe in empowering students with knowledge, values, and vision to become competent and compassionate pharmacy professionals. Through excellence in education, research, and ethical practice, we strive to nurture innovation, leadership, and lifelong learning, enabling our students to contribute meaningfully to healthcare and society. I wish all our students a purposeful and successful academic journey with us.
    </p>

    <p class="message-signature">
      ---<strong><em>Sri K Durga Prasad Raju</em></strong>
    </p>

    <p class="message-designation">
      <strong><em>Joint Secretary</em></strong>
    </p>
  `
},
  'accreditation-ranking': {
    title: 'Accreditation & Ranking Status',
    content: '<p class="college-para">Add content here.</p>'
  },
  'correspondent-message': {
    title: "Correspondent's Message",
    content: `
      <div class="message-content-row">

        <div class="message-image">
          <img 
            src="/assets/correspondent.jpg" 
            alt="Correspondent"
            class="message-person-image"
          >
        </div>

        <div class="message-text">
          <p class="college-para">
            We are guided by a clear vision to build a centre of excellence in pharmacy education through quality assurance, academic integrity, and continuous institutional improvement. By adhering to accreditation frameworks, regulatory standards, and outcome-based education practices, we strive to create a dynamic learning ecosystem aligned with national priorities and global benchmarks. Our mission is to empower students with professional competence, ethical values, leadership qualities, and a passion for innovation and research, enabling them to face future healthcare challenges with confidence. We firmly believe that education should inspire purpose, nurture responsibility, and transform potential into performance. I encourage our students to dream ambitiously, uphold discipline and quality, and embrace lifelong learning as they progress toward meaningful professional achievement and service to society.
          </p>
        </div>

      </div>
    `
  },
  'treasurer-message': {
    title: "Treasurer's Message",
    content: `
        <h3>Secretary’s Message</h3>

    <img 
      src="/assets/treasurer.jpg" 
      alt="Treasurer"
      class="message-person-image"
    >

    <p class="college-para">
      We are dedicated to fostering an educational ecosystem that encourages excellence, innovation, and ethical responsibility in pharmacy education. By blending strong academic foundations with practical exposure and value-based learning, we aim to prepare students to meet the evolving challenges of the healthcare profession with confidence and competence. I extend my best wishes to all students as they pursue knowledge, professional growth, and meaningful service to society.
    </p>

    <p class="message-signature">
      ----<strong><em>Sri D. Venkata Rao</em></strong>
    </p>

    <p class="message-designation">
      <strong><em>Treasurer</em></strong>
    </p>`
    
  },
  'principal-message': {
    title: "Principal's Message",
    content: `
        <h2>Principal’s Message</h2>

    <img 
      src="/assets/principal.jpg" 
      alt="principal"
      class="message-person-image"
    >

    <p class="college-para">
      Sri Sivani College of Pharmacy proudly contributes to the health care system by providing fully pledged and ready pharma graduates in this remote area of Andhra Pradesh. The college is well established with laboratories, equipment and class rooms. Our faculty is experienced, qualified, and competent to make and mould students with strong pharmacy basics to the expectations of the Pharma industry today. In the coming days, our college will become the hub for Pharma-outsourced research activities by students and staff in this area. The overall growth of students in terms of productivity, character, and knowledge will be the motto of our college under the dynamic leadership of all the generous, talented academicians of the Sri Sivani Educational Society.    </p>

    <p class="message-signature">
      ----<strong><em>Dr K Rajkiran</em></strong>
    </p>

    <p class="message-designation">
      <strong><em>Professor & Principal</em></strong>
    </p>`
  },
  'annual-reports': {
    title: 'Annual Reports',
    content: '<p class="college-para">Add content here.</p>'
  },
  'financial-reports': {
    title: 'Financial Reports',
    content: '<p class="college-para">Add content here.</p>'
  }
};

// academic pages
const academicsPages = {
  'principal-message': {
    title: 'Principal Message',
    content: `
      <div class="message-content-row">
        <div class="message-image">
          <img src="/assets/principal_photo.jpg" alt="Principal of Sri Sivani College of Pharmacy" class="message-person-image">
        </div>
        <div class="message-text">
          <p class="college-para">
            Sri Sivani College of Pharmacy proudly contributes to the health care system by providing fully pledged and ready pharma graduates in this remote area of Andhra Pradesh. The college is well established with laboratories and equipment. Our faculty is experienced, qualified, and competent to make and mould students with strong pharmacy basics to the expectations of the Pharma industry today. In the coming days, our college will become the hub for Pharma-outsourced research activities by students and staff in this area. The overall growth of students in terms of productivity, character, and knowledge will be the motto of our college under the dynamic leadership of all the generous, talented academicians of the Sri Sivani group of colleges.
          </p>
        </div>
      </div>
    `
  },
  'faculty': {
    title: 'List of Full Time Teachers',
    content: `
      <div class="faculty-table-wrapper">
        <table class="faculty-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>NAME OF THE TEACHER</th>
              <th>DESIGNATION</th>
              <th>QUALIFICATION</th>
              <th>SPECIALIZATION</th>
              <th>TOTAL EXPERIENCE<br>(YEARS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="faculty-sno">1</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/1.jpg" alt="Dr.K.Rajkiran" class="faculty-photo">
                <div class="faculty-name">Dr.K.Rajkiran</div>
                <div class="faculty-pci">PCI ID: BH-P-23-27733</div>
              </td>
              <td class="faculty-highlight">Principal/Professor</td>
              <td>M.Pharmacy, Ph.D</td>
              <td class="faculty-highlight">Pharmacology</td>
              <td class="faculty-exp">19</td>
            </tr>
            <tr>
              <td class="faculty-sno">2</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/2.jpg" alt="Dr.K.Rajarajeswari" class="faculty-photo">
                <div class="faculty-name">Dr.K.Rajarajeswari</div>
                <div class="faculty-pci">PCI ID: BH-P-24-713261</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, Ph.D</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">16.3</td>
            </tr>
            <tr>
              <td class="faculty-sno">3</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/3.jpg" alt="U.Upendra Rao" class="faculty-photo">
                <div class="faculty-name">U.Upendra Rao</div>
                <div class="faculty-pci">PCI ID: BH-P-23-38870</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">15.5</td>
            </tr>
            <tr>
              <td class="faculty-sno">4</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/4.jpg" alt="K.Jagadish" class="faculty-photo">
                <div class="faculty-name">K.Jagadish</div>
                <div class="faculty-pci">PCI ID: BH-P-23-31771</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmacognosy and Phytochemistry</td>
              <td class="faculty-exp">15</td>
            </tr>
            <tr>
              <td class="faculty-sno">5</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/5.jpg" alt="B.Murali Krishna" class="faculty-photo">
                <div class="faculty-name">B.Murali Krishna</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47746</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">13.6</td>
            </tr>
            <tr>
              <td class="faculty-sno">6</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/6.jpg" alt="G. Manoj Kumar" class="faculty-photo">
                <div class="faculty-name">G. Manoj Kumar</div>
                <div class="faculty-pci">PCI ID: BH-P-23-48012</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">11.5</td>
            </tr>
            <tr>
              <td class="faculty-sno">7</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/7.jpg" alt="U.Sri Venkatesh" class="faculty-photo">
                <div class="faculty-name">U.Sri Venkatesh</div>
                <div class="faculty-pci">PCI ID: BH-P-23-17182</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmacology</td>
              <td class="faculty-exp">7</td>
            </tr>
            <tr>
              <td class="faculty-sno">8</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/8.jpg" alt="T. Rajesh" class="faculty-photo">
                <div class="faculty-name">T. Rajesh</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47851</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">6.9</td>
            </tr>
            <tr>
              <td class="faculty-sno">9</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/9.jpg" alt="B. Santosh Kumar" class="faculty-photo">
                <div class="faculty-name">B. Santosh Kumar</div>
                <div class="faculty-pci">PCI ID: BH-P-23-20829</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">6.3</td>
            </tr>
            <tr>
              <td class="faculty-sno">10</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/10.jpg" alt="R.Krishna Priya" class="faculty-photo">
                <div class="faculty-name">R.Krishna Priya</div>
                <div class="faculty-pci">PCI ID: BH-P-25-23442</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">6</td>
            </tr>
            <tr>
              <td class="faculty-sno">11</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/11.jpg" alt="Moturu Devananda Kishore" class="faculty-photo">
                <div class="faculty-name">Moturu Devananda Kishore</div>
                <div class="faculty-pci">PCI ID: BH-P-24-0686793106</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">5</td>
            </tr>
            <tr>
              <td class="faculty-sno">12</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/12.jpg" alt="K. Manjulatha" class="faculty-photo">
                <div class="faculty-name">K. Manjulatha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47880</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">5</td>
            </tr>
            <tr>
              <td class="faculty-sno">13</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/13.jpg" alt="P.Pavani" class="faculty-photo">
                <div class="faculty-name">P.Pavani</div>
                <div class="faculty-pci">PCI ID: BH-P-25-22984</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">5</td>
            </tr>
            <tr>
              <td class="faculty-sno">14</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/14.jpg" alt="D.PRAVREN KUMAR" class="faculty-photo">
                <div class="faculty-name">D.PRAVREN KUMAR</div>
                <div class="faculty-pci">PCI ID: BH-P-25-69529</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmacology</td>
              <td class="faculty-exp">5</td>
            </tr>
            <tr>
              <td class="faculty-sno">15</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/15.jpg" alt="D.V.Padmavathi" class="faculty-photo">
                <div class="faculty-name">D.V.Padmavathi</div>
                <div class="faculty-pci">PCI ID: BH-P-25-20933</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">4</td>
            </tr>
            <tr>
              <td class="faculty-sno">16</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/16.jpg" alt="I. Jhansi Laxmi" class="faculty-photo">
                <div class="faculty-name">I. Jhansi Laxmi</div>
                <div class="faculty-pci">PCI ID: BH-P-25-43580</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">4</td>
            </tr>
            <tr>
              <td class="faculty-sno">17</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/17.jpg" alt="K.V.S.L.Kavya" class="faculty-photo">
                <div class="faculty-name">K.V.S.L.Kavya</div>
                <div class="faculty-pci">PCI ID: BH-P-25-17885</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">4</td>
            </tr>
            <tr>
              <td class="faculty-sno">18</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/18.jpg" alt="K.Padmaja" class="faculty-photo">
                <div class="faculty-name">K.Padmaja</div>
                <div class="faculty-pci">PCI ID: BH-P-25-21140</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">4</td>
            </tr>
            <tr>
              <td class="faculty-sno">19</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/19.jpg" alt="Ch.Neelima" class="faculty-photo">
                <div class="faculty-name">Ch.Neelima</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47880</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">3.6</td>
            </tr>
            <tr>
              <td class="faculty-sno">20</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/20.jpg" alt="I.Uma" class="faculty-photo">
                <div class="faculty-name">I.Uma</div>
                <div class="faculty-pci">PCI ID: BH-P-25-21281</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Regulatory Affairs</td>
              <td class="faculty-exp">3</td>
            </tr>
            <tr>
              <td class="faculty-sno">21</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/21.jpg" alt="B.Jagadiswari" class="faculty-photo">
                <div class="faculty-name">B.Jagadiswari</div>
                <div class="faculty-pci">PCI ID: BH-P-25-115371</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Chemistry</td>
              <td class="faculty-exp">3</td>
            </tr>
            <tr>
              <td class="faculty-sno">22</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/22.jpg" alt="P.Satish" class="faculty-photo">
                <div class="faculty-name">P.Satish</div>
                <div class="faculty-pci">PCI ID: BH-P-23-43567</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Chemistry</td>
              <td class="faculty-exp">2</td>
            </tr>
            <tr>
              <td class="faculty-sno">23</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/23.jpg" alt="P.Anusha" class="faculty-photo">
                <div class="faculty-name">P.Anusha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-43567</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">2</td>
            </tr>
            <tr>
              <td class="faculty-sno">24</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/24.jpg" alt="G. Eksitha" class="faculty-photo">
                <div class="faculty-name">G. Eksitha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-20666</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">2</td>
            </tr>
            <tr>
              <td class="faculty-sno">25</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/25.jpg" alt="T.Anusha" class="faculty-photo">
                <div class="faculty-name">T.Anusha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-44089</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">2</td>
            </tr>
            <tr>
              <td class="faculty-sno">26</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/26.jpg" alt="M. Satyavani" class="faculty-photo">
                <div class="faculty-name">M. Satyavani</div>
                <div class="faculty-pci">PCI ID: BH-P-24-0916593336</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy, (Ph.D)</td>
              <td class="faculty-highlight">Pharmacoinformatics</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">27</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/27.jpg" alt="S. Likitha" class="faculty-photo">
                <div class="faculty-name">S. Likitha</div>
                <div class="faculty-pci">PCI ID: BH-P-23-21049</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">28</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/28.jpg" alt="S.Bindu Madhavi" class="faculty-photo">
                <div class="faculty-name">S.Bindu Madhavi</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47880</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmacology</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">29</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/29.jpg" alt="R.Rusali Reddy" class="faculty-photo">
                <div class="faculty-name">R.Rusali Reddy</div>
                <div class="faculty-pci">PCI ID: BH-P-24-0219839015</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">30</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/30.jpg" alt="P. Anu" class="faculty-photo">
                <div class="faculty-name">P. Anu</div>
                <div class="faculty-pci">PCI ID: BH-P-24-1631361133</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutics</td>
              <td class="faculty-exp">1</td>
            </tr>
            <tr>
              <td class="faculty-sno">31</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/31.jpg" alt="Ch. Jaithri" class="faculty-photo">
                <div class="faculty-name">Ch. Jaithri</div>
                <div class="faculty-pci">PCI ID: BH-P-23-47880</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Pharmaceutical Analysis</td>
              <td class="faculty-exp">0.8</td>
            </tr>
            <tr>
              <td class="faculty-sno">32</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/32.jpg" alt="D.Sarath Chandra" class="faculty-photo">
                <div class="faculty-name">D.Sarath Chandra</div>
                <div class="faculty-pci">PCI ID: BH-P-123996</div>
              </td>
              <td class="faculty-highlight">Assistant Professor</td>
              <td>M.Pharmacy</td>
              <td class="faculty-highlight">Biotechnology</td>
              <td class="faculty-exp">0.6</td>
            </tr>
            <tr>
              <td class="faculty-sno">33</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/33.jpg" alt="B.Tatalu" class="faculty-photo">
                <div class="faculty-name">B.Tatalu</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.Sc</td>
              <td class="faculty-highlight">Mathematics</td>
              <td class="faculty-exp">28</td>
            </tr>
            <tr>
              <td class="faculty-sno">34</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/34.jpg" alt="K.Ganeswararao" class="faculty-photo">
                <div class="faculty-name">K.Ganeswararao</div>
              </td>
              <td class="faculty-highlight">Associate Professor</td>
              <td>M.A</td>
              <td class="faculty-highlight">English</td>
              <td class="faculty-exp">10</td>
            </tr>
            <tr>
              <td class="faculty-sno">35</td>
              <td class="faculty-photo-cell">
                <img src="/assets/faculty/35.jpg" alt="V.Ramaraju" class="faculty-photo">
                <div class="faculty-name">V.Ramaraju</div>
              </td>
              <td class="faculty-highlight">Librarian</td>
              <td>M.L.I.S</td>
              <td class="faculty-highlight">Library Science</td>
              <td class="faculty-exp">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'academic-calendars': {
    title: 'Academic Calenders',
    content: '<p class="college-para">Under Process.</p>'
  },
  'library': {
    title: 'Library',
    content: '<p class="college-para">Under Process.</p>'
  },
  'anti-ragging': {
    title: 'Anti Ragging',
    content: `
      <h3 class="vision-heading">Under Process</h3>
    `,
    parentLabel: 'Committee'
  },
  'committee-sc-st': {
    title: 'Commitee for SC/ST',
    content: `
      <p class="college-para">Under Process.</p>
    `,
    parentLabel: 'Committee'
  },
  'grievance-redressal': {
    title: 'Grievance Redressal Committee',
    content: `
      <p class="college-para">Under Process.</p>
    `,
    parentLabel: 'Committee'
  },
  'internal-complaint': {
    title: 'Internal Compliant Committee',
    content: `
      <p class="college-para">Under Process.</p>
    `,
    parentLabel: 'Committee'
  },
  'iqac': {
    title: 'Internal Quality Assurance Cell (IQAC)',
    content: '<p class="college-para">Under Process.</p>'
  },
  'academic-collaborations': {
    title: 'Academic Collaborations',
    content: '<p class="college-para">Under Process.</p>'
  },

  'bpharm-pos': {
    title: 'Program Outcomes',
    content: `<div class="pdf-card"><div class="pdf-card-label">B.PHARM PROGRAM OUTCOMES</div><a href="/assets/pdfs/b-pharm-pos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`,
    parentLabel: 'B.Pharm'
  },
  'bpharm-cos': {
    title: 'Course Outcomes',
    content: `<div class="pdf-card"><div class="pdf-card-label">B.PHARM COURSE OUTCOMES</div><a href="/assets/pdfs/b-pharm-cos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`,
    parentLabel: 'B.Pharm'
  },

  'mpharm-pa-cos':  { title: 'Course Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM PHARMACEUTICAL ANALYSIS - COURSE OUTCOMES</div><a href="/assets/pdfs/mpharm-pa-cos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Pharmaceutical Analysis' },
  'mpharm-pa-pos':  { title: 'Program Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM PHARMACEUTICAL ANALYSIS - PROGRAM OUTCOMES</div><a href="/assets/pdfs/mpharm-pa-pos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Pharmaceutical Analysis' },
  'mpharm-pcs-cos': { title: 'Course Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM PHARMACEUTICS - COURSE OUTCOMES</div><a href="/assets/pdfs/mpharm-pcs-cos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Pharmaceutics' },
  'mpharm-pcs-pos': { title: 'Program Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM PHARMACEUTICS - PROGRAM OUTCOMES</div><a href="/assets/pdfs/mpharm-pcs-pos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Pharmaceutics' },
  'mpharm-ra-cos':  { title: 'Course Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM REGULATORY AFFAIRS - COURSE OUTCOMES</div><a href="/assets/pdfs/mpharm-ra-cos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Regulatory Affairs' },
  'mpharm-ra-pos':  { title: 'Program Outcomes', content: `<div class="pdf-card"><div class="pdf-card-label">M.PHARM REGULATORY AFFAIRS - PROGRAM OUTCOMES</div><a href="/assets/pdfs/mpharm-ra-pos.pdf" target="_blank" class="pdf-card-view">VIEW</a></div>`, parentLabel: 'Regulatory Affairs' }
};

app.get('/academics/:page', (req, res) => {
  const page = academicsPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: page.parentLabel || 'Academics',
    parentUrl: '#'
  });
});

const administrationPages = {
  'governing-body': {
    title: 'Governing Body',
    content: `
      <p class="college-para">
        <strong>SRI SIVANI EDUCATIONAL SOCIETY</strong> has got a strong base in the guise of its Governing Body members. The members have a great vision since they are seasoned academicians, reputed industrialists, and successful people in their fields. The institution's executive governing body is responsible for ensuring effective management of the institution and for planning its future development. The governing body looks after the institution's affairs and demonstrates the primary objectives of teaching and research. It includes considering and approving the institution's strategic plan, setting its academic aims and objectives, and identifying the financial, physical, and staffing strategies. The members have a great vision since they are seasoned academicians, reputed industrialists, and successful people in their fields.
      </p>

      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Member</th>
              <th>Designation</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sri V.M.M. Sai Nadh Reddy</td>
              <td>Chairman</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sri Jami Surya Chandra Rao</td>
              <td>Vice Chairman</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sri K. Durga Srinivasa Rao</td>
              <td>Secretary</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sri K. Durga Prasad Raju</td>
              <td>Joint Secretary</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sri D. Venkata Rao</td>
              <td>Treasurer</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Dr. Sanapala Srinivasa Rao</td>
              <td>Correspondent</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Dr G.Tulasi Rao</td>
              <td>Professor Dept of Commerce</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Dr.V. Raj Kumar</td>
              <td>R&D Head, Pellets Pharma Ltd.</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Dr.A. V. Papa Rao,</td>
              <td>Asst. Prof of Mathematics, CEV-JNTUGV</td>
              <td>University Nominee</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Dr. K. Rajkiran</td>
              <td>Principal</td>
              <td>Member Secretary</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Dr. G. Venkateswara Rao</td>
              <td>Professor</td>
              <td>Member</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    parentLabel: 'Adminstration'
  },
  'principal': {
    title: 'Principal',
    content: `
      <img src="/assets/administration/principal.jpg" alt="Principal - Prof. K. Rajkiran" class="principal-photo-full">

      <p class="college-para">
        Sri Sivani College of Pharmacy is committed to delivering high-quality education while fostering a culture of research, innovation, and ethical values. Under the visionary leadership of Prof. K. Rajkiran, the institution consistently achieves academic excellence, nurtures skilled professionals, bridges the gap between Industry and Academia, and makes significant contributions to the advancement of Pharmaceutical Sciences.
      </p>

      <h3 class="section-heading-blue">About Prof. K. Rajkiran</h3>
      <p class="college-para">
        Prof. K. Rajkiran currently serves as the Principal and Professor at Sri Sivani College of Pharmacy, Chilakapalem, Srikakulam, Andhra Pradesh. He holds Postgraduate and Doctoral degrees in Department of Pharmacology from AU College of Pharmaceutical Sciences, Andhra University. He earned his Bachelor of Pharmacy (B. Pharm) from Siddhartha Institute of Pharmaceutical Sciences, Vijayawada. With extensive knowledge and expertise in the field, Prof. Rajkiran plays a pivotal role in guiding the institution toward academic and research excellence.
      </p>

      <h3 class="section-heading-blue">Experience & Recognition</h3>
      <p class="college-para">
        Prof. K. Rajkiran has over 17 years of experience in teaching, research, and administration at colleges affiliated with JNTUK and JNTU-GV. He was honored with the Excellence in Leadership and Professional Development Award by CSC Academy in recognition of his dedication to leadership and fostering professional growth. He is also a life member of the Association of Pharmaceutical Teachers of India (APTI), further reflecting his unwavering commitment to the field of Pharmaceutical Education.
      </p>

      <h3 class="section-heading-blue">Research & Publications</h3>
      <p class="college-para">
        Prof. K. Rajkiran has authored over 50 research and review papers published in reputed journals, written two textbooks, and holds four patents. He has presented his research at various national seminars and conferences. As a subject evaluator and resource person, he has made significant contributions to academic discourse and evaluation processes.
      </p>

      <h3 class="section-heading-blue">Leadership Roles</h3>
      <p class="college-para">
        Prof. K. Rajkiran has served as a convenor for faculty development programs, seminars, conferences, workshops, and various institutional events. His leadership has been instrumental in promoting academic excellence and cultivating a research-oriented culture within the college.
      </p>
    `,
    parentLabel: 'Adminstration'
  },
  'finance-officer': {
    title: 'Finance Officer',
    content: '<p class="college-para">Under Proces.</p>'
  },
  'controller-of-examination': {
    title: 'Controller of Examination',
    content: '<p class="college-para">Under Process.</p>'
  },
  'chief-vigilance-officer': {
    title: 'Chief Vigilance Officer',
    content: '<p class="college-para">Under Process.</p>'
  },
  'ombudsperson': {
    title: 'Ombudsperson',
    content: '<p class="college-para">Under Process.</p>'
  },
  'internal-complaint-committee': {
    title: 'Internal Complaint Commitee',
    content: '<p class="college-para">Under Process.</p>'
  },
  'academic-leadership': {
    title: 'Academic Leadership',
    content: '<p class="college-para">Under Process.</p>'
  }
};

app.get('/administration/:page', (req, res) => {
  const page = administrationPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'Administration',
    parentUrl: '#'
  });
});

app.get('/about/:page', (req, res) => {
  const page = aboutPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'About HEI',
    parentUrl: '/about-hei'
  });
});


app.get('/admissions-fee', (req, res) => {
  res.render('about-page', {
    pageTitle: 'Courses Offered',
    parentLabel: 'Home',
    parentUrl: '/',
    content: `
      <h3 class="section-heading-purple">COURSES OFFERED & FEE STRUCTURE</h3>

      <div class="data-table-wrapper">
        <table class="fee-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Course Offered</th>
              <th>Year Started</th>
              <th>Duration</th>
              <th>Current Intake</th>
              <th>Fee Structure</th>
            </tr>
          </thead>
          <tbody>
            <tr class="fee-table-section-row fee-table-ug">
              <td colspan="6">UNDER GRADUATE COURSE</td>
            </tr>
            <tr class="fee-table-ug-row">
              <td>1</td>
              <td>B. Pharm<br>(Bachelor of Pharmacy)</td>
              <td>2007</td>
              <td>04 Yrs.</td>
              <td>100</td>
              <td rowspan="1" class="fee-amount">Rs.38,000/.per year</td>
            </tr>
            <tr class="fee-table-section-row fee-table-pg">
              <td colspan="6">POST GRADUATE COURSES</td>
            </tr>
            <tr>
              <td>1</td>
              <td>M.Pharm<br>Pharmaceutical Analysis</td>
              <td>2011</td>
              <td>02 Yrs.</td>
              <td>15</td>
              <td rowspan="3" class="fee-amount">Rs.60,000/.per year</td>
            </tr>
            <tr>
              <td>2</td>
              <td>M.Pharm<br>Pharmaceutics</td>
              <td>2012</td>
              <td>02 Yrs.</td>
              <td>09</td>
            </tr>
            <tr>
              <td>3</td>
              <td>M.Pharm<br>Regulatory Affairs</td>
              <td>2012</td>
              <td>02 Yrs.</td>
              <td>06</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="admission-procedure-heading">ADMISSION PROCEDURE</h3>

      <h4 class="admission-course-heading">B. Pharm</h4>
      <ul class="admission-list">
        <li>We follow a standard admission process wherein candidates who have passed 10+2 with MPC &amp;Bi.PC as major subjects and with minimum 50% of marks are eligible to apply.</li>
        <li>Selection will be on the basis of marks obtained in EAPCET (Engineering, Agriculture and Pharmacy Common Entrance Test).</li>
        <li>Admission is either through EAPCET counselling or by enrollment with Sri Sivani College of Pharmacy, Srikakulam.</li>
        <li>Lateral Entry Admissions are on the basis of ECET Counselling.</li>
      </ul>

      <h4 class="admission-course-heading">M. Pharm</h4>
      <ul class="admission-list">
        <li>Selection will be based on the rank obtained in GPAT(Graduate Pharmacy Aptitude Test) Examination or PGECET(Post Graduate Engineering Common Entrance Test).</li>
        <li>Admission is either through PGECET counselling or by enrollment with Sri Sivani College of Pharmacy, Srikakulam.</li>
        <li>We follow a standard admission process wherein candidates who have passed B. Pharm with minimum 50% of marks are eligible to apply.</li>
      </ul>
    `
  });
});

const researchPages = {
  'projects': {
    title: 'Projects',
    content: `
      <h3 class="vision-heading">Under Process</h3>
    `
  },
  'publications': {
    title: 'Publications',
    content: `
      <h3 class="vision-heading">Under Process</h3>
    `
  },
  'patents': {
    title: 'Patents',
    content: `
      <h3 class="vision-heading">Under Process</h3>
    `
  }
};

app.get('/research/:page', (req, res) => {
  const page = researchPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'Research',
    parentUrl: '#'
  });
});

const studentsLifePages = {
  'hostels': { title: 'Hostels', content: `<h3 class="vision-heading">Under Process</h3>` },
  'transport': { title: 'Transport', content: `<h3 class="vision-heading">Under Process</h3>` },
  'sports': { title: 'Sports', content: `<h3 class="vision-heading">Under Process</h3>` },
  'gym': { title: 'Gym', content: `<h3 class="vision-heading">Under Process</h3>` },
  'cafeteria': { title: 'Cafteria', content: `<h3 class="vision-heading">Under Process</h3>` },
  'sgrc-committee': { title: 'SGRC Committee', content: `<h3 class="vision-heading">Under Process</h3>` },
  'health-facilities': { title: 'Health Facilities', content: `<h3 class="vision-heading">Under Process</h3>` },
  'anti-ragging-cell': { title: 'Anti Ragging Cell', content: `<h3 class="vision-heading">Under Process</h3>` },
  'equal-opportunity-cell': { title: 'Equal opportunity Cell', content: `<h3 class="vision-heading">Under Process</h3>` },
  'sedg-cell': {
    title: 'SEDG CELL',
    content: `
      <div class="sedg-profile">

        <div class="sedg-image-section">
          <img 
            src="/assets/rajesh-kumar.jpg"
            alt="Rajesh Kumar"
            class="sedg-person-image"
          >

          <p class="sedg-person-name">Rajesh Kumar</p>

          <p class="sedg-department">Department of CSE</p>
        </div>

        <div class="sedg-description">
          <p>dDEFGH</p>
        </div>

      </div>
    `
  },  'facilities-differently-abled': { title: 'Facilities for differently-abled', content: `<h3 class="vision-heading">Under Process</h3>` }
};

app.get('/students-life/:page', (req, res) => {
  const page = studentsLifePages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'Students Life',
    parentUrl: '#'
  });
});


const infrastructurePages = {
  'classrooms': {
    title: 'Classrooms',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'labs': {
    title: 'Labs',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'library': {
    title: 'Library',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'seminar-hall': {
    title: 'Seminar Hall',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'central-instrumentation-lab': {
    title: 'Central Instrumentation Lab',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'machine-room': {
    title: 'Machine Room',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'museum': {
    title: 'Museum',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'medicinal-garden': {
    title: 'Medicinal Garden',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'conference-hall': {
    title: 'Conference Hall',
    content: `<h3 class="vision-heading">Under Process</h3>`
  },

  'facility-for-physically-challenged': {
    title: 'Facility for Physically Challenged',
    content: `<h3 class="vision-heading">Under Process</h3>`
  }
};

app.get('/infrastructure/:page', (req, res) => {
  const page = infrastructurePages[req.params.page];

  if (!page) {
    return res.status(404).send('Page not found');
  }

  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'Infrastructure',
    parentUrl: '#'
  });
});

const activitiesPages = {
  'gallery': {
    title: 'Gallery',
    content: `
      <div class="gallery-card-grid">
        <a href="/activities/gallery/labs" class="gallery-card">
          <img src="/assets/gallery_lab.png" alt="Labs" class="gallery-card-img">
          <div class="gallery-card-label">Labs</div>
        </a>
        <a href="/activities/gallery/canteen" class="gallery-card">
          <img src="/assets/gallery_lab.png" alt="Canteen" class="gallery-card-img">
          <div class="gallery-card-label">Canteen</div>
        </a>
        <a href="/activities/gallery/hostels" class="gallery-card">
          <img src="/assets/gallery_lab.png" alt="Hostels" class="gallery-card-img">
          <div class="gallery-card-label">Hostels</div>
        </a>
        <a href="/activities/gallery/classrooms" class="gallery-card">
          <img src="/assets/gallery_lab.png" alt="Class Rooms" class="gallery-card-img">
          <div class="gallery-card-label">Class Rooms</div>
        </a>
      </div>
    `
  },
  'videos': {
    title: 'Videos',
    content: `
      <div class="video-card-grid">
        <div class="video-card">
          <div class="video-embed-wrapper">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="About Sri Sivani College of Pharmacy"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="video-embed-iframe">
            </iframe>
          </div>
          <div class="video-card-title">ABOUT SRI SIVANI COLLEGE OF PHARMACY</div>
        </div>
      </div>
    `
  },
  'nss': { title: 'NSS', content: `<h3 class="vision-heading">Under Process</h3>` }
};

app.get('/activities/:page', (req, res) => {
  const page = activitiesPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'Activities',
    parentUrl: '#'
  });
});

const galleryDetailPages = {
  'labs': {
    title: 'Labs',
    images: ['/assets/gallery_lab.svg']
  },
  'canteen': {
    title: 'Canteen',
    images: ['/assets/gallery_canteen.svg']
  },
  'hostels': {
    title: 'Hostels',
    images: ['/assets/gallery_hostel.svg']
  },
  'classrooms': {
    title: 'Class Rooms',
    images: ['/assets/gallery_classroom.svg']
  }
};

app.get('/activities/gallery/:page', (req, res) => {
  const page = galleryDetailPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  const imagesHtml = page.images.map(src => `
    <div class="gallery-detail-item">
      <img src="${src}" alt="${page.title}" class="gallery-detail-img">
    </div>
  `).join('');

  res.render('about-page', {
    pageTitle: page.title,
    content: `<div class="gallery-detail-grid">${imagesHtml}</div>`,
    parentLabel: 'Gallery',
    parentUrl: '/activities/gallery'
  });
});

const naacPages = {
  'iiqa': {
    title: 'IIQA',
    content: `
      <div class="iiqa-row iiqa-header-row">
        <div class="iiqa-name">SRI SIVANI COLLEGE OF PHARMACY</div>
      </div>
      <div class="iiqa-row">
        <div class="iiqa-name">IIQA LATEST</div>
        <a href="/assets/pdfs/iiqa-latest.pdf" target="_blank" class="iiqa-view-btn">
          <i class="bi bi-file-earmark-text"></i>
        </a>
      </div>
    `
  },
  'ssr-criteria-1': {
    title: 'SSR Criteria-1',
    parentLabel: 'SSR',
    content: `
      <div class="ssr-table-wrapper">
        <table class="ssr-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="5">1</td>
              <td rowspan="5">1.2.1</td>
              <td class="ssr-file-no">1.2.1(1)</td>
              <td><a href="/assets/pdfs/ssr/1-2-1-1.pdf" target="_blank" class="ssr-file-link">Documents related to Add-on programs for A.Y 2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.2.1(2)</td>
              <td><a href="/assets/pdfs/ssr/1-2-1-2.pdf" target="_blank" class="ssr-file-link">Documents related to Add-on programs for A.Y 2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.2.1(3)</td>
              <td><a href="/assets/pdfs/ssr/1-2-1-3.pdf" target="_blank" class="ssr-file-link">Documents related to Add-on programs for A.Y 2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.2.1(4)</td>
              <td><a href="/assets/pdfs/ssr/1-2-1-4.pdf" target="_blank" class="ssr-file-link">Documents related to Add-on programs for A.Y 2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.2.1(5)</td>
              <td><a href="/assets/pdfs/ssr/1-2-1-5.pdf" target="_blank" class="ssr-file-link">Documents related to Add-on programs for A.Y 2018-19</a></td>
            </tr>

            <tr>
              <td rowspan="5">2</td>
              <td rowspan="5">1.2.2</td>
              <td class="ssr-file-no">1.2.2(1)</td>
              <td class="ssr-file-plain">List of students enrolled in certificate program offered during A.Y-2022-23</td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.2.2(2)</td>
              <td class="ssr-file-plain">List of students enrolled in certificate program offered during A.Y-2021-22</td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.2.2(3)</td>
              <td class="ssr-file-plain">List of students enrolled in certificate program offered during A.Y-2020-21</td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.2.2(4)</td>
              <td class="ssr-file-plain">List of students enrolled in certificate program offered during A.Y-2019-20</td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.2.2(5)</td>
              <td class="ssr-file-plain">List of students enrolled in certificate program offered during A.Y-2018-19</td>
            </tr>

            <tr>
              <td rowspan="4">3</td>
              <td rowspan="4">1.3.2</td>
              <td class="ssr-file-no">1.3.2(1)</td>
              <td><a href="/assets/pdfs/ssr/1-3-2-1.pdf" target="_blank" class="ssr-file-link">List of Students</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.3.2(2)</td>
              <td><a href="/assets/pdfs/ssr/1-3-2-2.pdf" target="_blank" class="ssr-file-link">Project work</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.3.2(3)</td>
              <td><a href="/assets/pdfs/ssr/1-3-2-3.pdf" target="_blank" class="ssr-file-link">Industrial visit</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.3.2(4)</td>
              <td><a href="/assets/pdfs/ssr/1-3-2-4.pdf" target="_blank" class="ssr-file-link">Internships</a></td>
            </tr>

            <tr>
              <td rowspan="5">4</td>
              <td rowspan="5">1.4.1</td>
              <td class="ssr-file-no">1.4.1(1)</td>
              <td class="ssr-file-plain">Sample filled feedback forms</td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.4.1(2)</td>
              <td class="ssr-file-plain">Feedback analysis</td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.4.1(3)</td>
              <td class="ssr-file-plain">Action taken report</td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.4.1(4)</td>
              <td class="ssr-file-plain">Communication with Affiliated University</td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.4.1(5)</td>
              <td class="ssr-file-plain">Institutional weblink</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'ssr-criteria-2': {
    title: 'SSR Criteria-2',
    parentLabel: 'SSR',
    content: `
      <div class="ssr-table-wrapper">
        <table class="ssr-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="6">1</td>
              <td rowspan="6">2.1.1</td>
              <td class="ssr-file-no">2.1.1(1)</td>
              <td><a href="/assets/pdfs/ssr/2-1-1-1.pdf" target="_blank" class="ssr-file-link">AICTE approvals for last five years</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.1(2)</td>
              <td><a href="/assets/pdfs/ssr/2-1-1-2.pdf" target="_blank" class="ssr-file-link">List of Enrolled Students in A.Y 2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.1(3)</td>
              <td><a href="/assets/pdfs/ssr/2-1-1-3.pdf" target="_blank" class="ssr-file-link">List of Enrolled Students in A.Y 2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.1(4)</td>
              <td><a href="/assets/pdfs/ssr/2-1-1-4.pdf" target="_blank" class="ssr-file-link">List of Enrolled Students in A.Y 2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.1(5)</td>
              <td><a href="/assets/pdfs/ssr/2-1-1-5.pdf" target="_blank" class="ssr-file-link">List of Enrolled Students in A.Y 2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.1(6)</td>
              <td><a href="/assets/pdfs/ssr/2-1-1-6.pdf" target="_blank" class="ssr-file-link">List of Enrolled Students in A.Y 2018-19</a></td>
            </tr>

            <tr>
              <td rowspan="7">2</td>
              <td rowspan="7">2.1.2</td>
              <td class="ssr-file-no">2.1.2(1)</td>
              <td class="ssr-file-plain">G.O. related to reservation policy</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.2(2)</td>
              <td class="ssr-file-plain">List of Enrolled Students against reserved category during A.Y 2022-23</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.2(3)</td>
              <td class="ssr-file-plain">List of Enrolled Students against reserved category during A.Y 2021-22</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.2(4)</td>
              <td class="ssr-file-plain">List of Enrolled Students against reserved category during A.Y 2020-21</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.2(5)</td>
              <td class="ssr-file-plain">List of Enrolled Students against reserved category during A.Y 2019-20</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.2(6)</td>
              <td class="ssr-file-plain">List of Enrolled Students against reserved category during A.Y 2018-19</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.1.2(7)</td>
              <td class="ssr-file-plain">Admission Extract</td>
            </tr>

            <tr>
              <td rowspan="2">3</td>
              <td rowspan="2">2.4.1</td>
              <td class="ssr-file-no">2.4.1(1)</td>
              <td><a href="/assets/pdfs/ssr/2-4-1-1.pdf" target="_blank" class="ssr-file-link">Sanctioned Letters</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.4.1(2)</td>
              <td><a href="/assets/pdfs/ssr/2-4-1-2.pdf" target="_blank" class="ssr-file-link">List of full time teachers for the assessment period-last five years</a></td>
            </tr>

            <tr>
              <td rowspan="5">4</td>
              <td rowspan="5">2.4.2</td>
              <td class="ssr-file-no">2.4.2(1)</td>
              <td class="ssr-file-plain">List of full time teachers with Ph. D. / SLET with their e-copies of Ph. D. / SLET in A.Y. 2022-23</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.4.2(2)</td>
              <td class="ssr-file-plain">List of full time teachers with Ph. D. / SLET with their e-copies of Ph. D. / SLET in A.Y. 2021-22</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.4.2(3)</td>
              <td class="ssr-file-plain">List of full time teachers with Ph. D. / SLET with their e-copies of Ph. D. / SLET in A.Y. 2020-21</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.4.2(4)</td>
              <td class="ssr-file-plain">List of full time teachers with Ph. D. / SLET with their e-copies of Ph. D. / SLET in A.Y. 2019-20</td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.4.2(5)</td>
              <td class="ssr-file-plain">List of full time teachers with Ph. D. / SLET with their e-copies of Ph. D. / SLET in A.Y. 2018-19</td>
            </tr>

            <tr>
              <td rowspan="5">5</td>
              <td rowspan="5">2.6.3</td>
              <td class="ssr-file-no">2.6.3(1)</td>
              <td><a href="/assets/pdfs/ssr/2-6-3-1.pdf" target="_blank" class="ssr-file-link">Result sheet published by the University for the A.Y.2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.6.3(2)</td>
              <td><a href="/assets/pdfs/ssr/2-6-3-2.pdf" target="_blank" class="ssr-file-link">Result sheet published by the University for the A.Y.2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.6.3(3)</td>
              <td><a href="/assets/pdfs/ssr/2-6-3-3.pdf" target="_blank" class="ssr-file-link">Result sheet published by the University for the A.Y.2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.6.3(4)</td>
              <td><a href="/assets/pdfs/ssr/2-6-3-4.pdf" target="_blank" class="ssr-file-link">Result sheet published by the University for the A.Y.2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">2.6.3(5)</td>
              <td><a href="/assets/pdfs/ssr/2-6-3-5.pdf" target="_blank" class="ssr-file-link">Result sheet published by the University for the A.Y.2018-19</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'ssr-criteria-3': {
    title: 'SSR Criteria-3',
    parentLabel: 'SSR',
    content: `
      <div class="ssr-table-wrapper">
        <table class="ssr-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="5">1</td>
              <td rowspan="5">3.2.2</td>
              <td class="ssr-file-no">3.2.2(1)</td>
              <td><a href="/assets/pdfs/ssr/3-2-2-1.pdf" target="_blank" class="ssr-file-link">Documents related to Seminars /Workshops organized during the A.Y 2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.2.2(2)</td>
              <td><a href="/assets/pdfs/ssr/3-2-2-2.pdf" target="_blank" class="ssr-file-link">Documents related to Seminars /Workshops organized during the A.Y 2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.2.2(3)</td>
              <td><a href="/assets/pdfs/ssr/3-2-2-3.pdf" target="_blank" class="ssr-file-link">Documents related to Seminars /Workshops organized during the A.Y 2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.2.2(4)</td>
              <td><a href="/assets/pdfs/ssr/3-2-2-4.pdf" target="_blank" class="ssr-file-link">Documents related to Seminars /Workshops organized during the A.Y 2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.2.2(5)</td>
              <td><a href="/assets/pdfs/ssr/3-2-2-5.pdf" target="_blank" class="ssr-file-link">Documents related to Seminars /Workshops organized during the A.Y 2018-19</a></td>
            </tr>

            <tr>
              <td>2</td>
              <td>3.3.2</td>
              <td class="ssr-file-no">3.3.2</td>
              <td class="ssr-file-plain">e-copies of first page, content page and participation of conferences during the assessment period</td>
            </tr>

            <tr>
              <td>3</td>
              <td>3.4.1</td>
              <td class="ssr-file-no">3.4.1</td>
              <td><a href="/assets/pdfs/ssr/3-4-1.pdf" target="_blank" class="ssr-file-link">List of extension activities during the assessment period</a></td>
            </tr>

            <tr>
              <td>4</td>
              <td>3.4.2</td>
              <td class="ssr-file-no">3.4.2</td>
              <td class="ssr-file-plain">e-copies of recognisation letter for extension activities during the assessment period</td>
            </tr>

            <tr>
              <td rowspan="5">5</td>
              <td rowspan="5">3.4.3</td>
              <td class="ssr-file-no">3.4.3(1)</td>
              <td><a href="/assets/pdfs/ssr/3-4-3-1.pdf" target="_blank" class="ssr-file-link">Documents related to organized extension activities during A.Y 2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.4.3(2)</td>
              <td><a href="/assets/pdfs/ssr/3-4-3-2.pdf" target="_blank" class="ssr-file-link">Documents related to organized extension activities during A.Y 2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.4.3(3)</td>
              <td><a href="/assets/pdfs/ssr/3-4-3-3.pdf" target="_blank" class="ssr-file-link">Documents related to organized extension activities during A.Y 2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.4.3(4)</td>
              <td><a href="/assets/pdfs/ssr/3-4-3-4.pdf" target="_blank" class="ssr-file-link">Documents related to organized extension activities during A.Y 2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.4.3(5)</td>
              <td><a href="/assets/pdfs/ssr/3-4-3-5.pdf" target="_blank" class="ssr-file-link">Documents related to organized extension activities during A.Y 2018-19</a></td>
            </tr>

            <tr>
              <td rowspan="5">6</td>
              <td rowspan="5">3.5.1</td>
              <td class="ssr-file-no">3.5.1(1)</td>
              <td class="ssr-file-plain">e-copies of MoUs established in A.Y 2022-23</td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.5.1(2)</td>
              <td class="ssr-file-plain">e-copies of MoUs established in A.Y 2021-22</td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.5.1(3)</td>
              <td class="ssr-file-plain">e-copies of MoUs established in A.Y 2020-21</td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.5.1(4)</td>
              <td class="ssr-file-plain">e-copies of MoUs established in A.Y 2019-20</td>
            </tr>
            <tr>
              <td class="ssr-file-no">3.5.1(5)</td>
              <td class="ssr-file-plain">e-copies of MoUs established in A.Y 2018-19</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'ssr-criteria-4': {
    title: 'SSR Criteria-4',
    parentLabel: 'SSR',
    content: `
      <div class="ssr-table-wrapper">
        <table class="ssr-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">1</td>
              <td rowspan="3">4.3.2</td>
              <td class="ssr-file-no">4.3.2(1)</td>
              <td><a href="/assets/pdfs/ssr/4-3-2-1.pdf" target="_blank" class="ssr-file-link">Student-Computer Ratio</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">4.3.2(2)</td>
              <td><a href="/assets/pdfs/ssr/4-3-2-2.pdf" target="_blank" class="ssr-file-link">Invoices of the Computers</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">4.3.2(3)</td>
              <td><a href="/assets/pdfs/ssr/4-3-2-3.pdf" target="_blank" class="ssr-file-link">Stock Register Entry</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'ssr-criteria-5': {
    title: 'SSR Criteria-5',
    parentLabel: 'SSR',
    content: `
      <div class="ssr-table-wrapper">
        <table class="ssr-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="7">1</td>
              <td rowspan="7">5.1.1</td>
              <td class="ssr-file-no">5.1.1(1)</td>
              <td><a href="/assets/pdfs/ssr/5-1-1-1.pdf" target="_blank" class="ssr-file-link">Sanction letters and list of students benefited by Government in A.Y 2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.1(2)</td>
              <td><a href="/assets/pdfs/ssr/5-1-1-2.pdf" target="_blank" class="ssr-file-link">Sanction letters and list of students benefited by Government in A.Y 2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.1(3)</td>
              <td><a href="/assets/pdfs/ssr/5-1-1-3.pdf" target="_blank" class="ssr-file-link">Sanction letters and list of students benefited by Government in A.Y 2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.1(4)</td>
              <td><a href="/assets/pdfs/ssr/5-1-1-4.pdf" target="_blank" class="ssr-file-link">Sanction letters and list of students benefited by Government in A.Y 2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.1(5)</td>
              <td><a href="/assets/pdfs/ssr/5-1-1-5.pdf" target="_blank" class="ssr-file-link">Sanction letters and list of students benefited by Government in A.Y 2018-19</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.1(6)</td>
              <td><a href="/assets/pdfs/ssr/5-1-1-6.pdf" target="_blank" class="ssr-file-link">Policy Document</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.1(7)</td>
              <td><a href="/assets/pdfs/ssr/5-1-1-7.pdf" target="_blank" class="ssr-file-link">List of students benfitted by Insistitunioal Freeships for last five years with sample sanction letters</a></td>
            </tr>

            <tr>
              <td rowspan="5">2</td>
              <td rowspan="5">5.1.2</td>
              <td class="ssr-file-no">5.1.2(1)</td>
              <td class="ssr-file-plain">Documents related to organised softskills programmmes during Assessment period</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.2(2)</td>
              <td class="ssr-file-plain">Documents related to organised language and communication skills during Assessment period</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.2(3)</td>
              <td class="ssr-file-plain">Documents related to organised lifeskills programmes during Assessment period</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.2(4)</td>
              <td class="ssr-file-plain">Documents related to organised ICT/Computing skills programmmes during Assessment period</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.2(5)</td>
              <td class="ssr-file-plain">Institutional Weblink</td>
            </tr>

            <tr>
              <td rowspan="5">3</td>
              <td rowspan="5">5.1.3</td>
              <td class="ssr-file-no">5.1.3(1)</td>
              <td><a href="/assets/pdfs/ssr/5-1-3-1.pdf" target="_blank" class="ssr-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.3(2)</td>
              <td><a href="/assets/pdfs/ssr/5-1-3-2.pdf" target="_blank" class="ssr-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.3(3)</td>
              <td><a href="/assets/pdfs/ssr/5-1-3-3.pdf" target="_blank" class="ssr-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.3(4)</td>
              <td><a href="/assets/pdfs/ssr/5-1-3-4.pdf" target="_blank" class="ssr-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.3(5)</td>
              <td><a href="/assets/pdfs/ssr/5-1-3-5.pdf" target="_blank" class="ssr-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2018-19</a></td>
            </tr>

            <tr>
              <td rowspan="5">4</td>
              <td rowspan="5">5.1.4</td>
              <td class="ssr-file-no">5.1.4(1)</td>
              <td class="ssr-file-plain">Minutes of Anti ragging committee</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.4(2)</td>
              <td class="ssr-file-plain">ICC committee</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.4(3)</td>
              <td class="ssr-file-plain">Grievance Redressal cell</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.4(4)</td>
              <td class="ssr-file-plain">Sample filled undertaking forms</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.1.4(5)</td>
              <td class="ssr-file-plain">Weblink for online grievance cell</td>
            </tr>

            <tr>
              <td rowspan="5">5</td>
              <td rowspan="5">5.2.1</td>
              <td class="ssr-file-no">5.2.1(1)</td>
              <td><a href="/assets/pdfs/ssr/5-2-1-1.pdf" target="_blank" class="ssr-file-link">Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.2.1(2)</td>
              <td><a href="/assets/pdfs/ssr/5-2-1-2.pdf" target="_blank" class="ssr-file-link">Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.2.1(3)</td>
              <td><a href="/assets/pdfs/ssr/5-2-1-3.pdf" target="_blank" class="ssr-file-link">Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.2.1(4)</td>
              <td><a href="/assets/pdfs/ssr/5-2-1-4.pdf" target="_blank" class="ssr-file-link">Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.2.1(5)</td>
              <td><a href="/assets/pdfs/ssr/5-2-1-5.pdf" target="_blank" class="ssr-file-link">Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2018-19</a></td>
            </tr>

            <tr>
              <td rowspan="5">6</td>
              <td rowspan="5">5.2.2</td>
              <td class="ssr-file-no">5.2.2(1)</td>
              <td class="ssr-file-plain">List of students with E-copies of qualifying certificates in A.Y 2022-23</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.2.2(2)</td>
              <td class="ssr-file-plain">List of students with E-copies of qualifying certificates in A.Y 2021-22</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.2.2(3)</td>
              <td class="ssr-file-plain">List of students with E-copies of qualifying certificates in A.Y 2020-21</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.2.2(4)</td>
              <td class="ssr-file-plain">List of students with E-copies of qualifying certificates in A.Y 2019-20</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.2.2(5)</td>
              <td class="ssr-file-plain">List of students with E-copies of qualifying certificates in A.Y 2018-19</td>
            </tr>

            <tr>
              <td rowspan="5">7</td>
              <td rowspan="5">5.3.1</td>
              <td class="ssr-file-no">5.3.1(1)</td>
              <td><a href="/assets/pdfs/ssr/5-3-1-1.pdf" target="_blank" class="ssr-file-link">E-copies of merit certificates in sports and culturals during A.Y.2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.3.1(2)</td>
              <td><a href="/assets/pdfs/ssr/5-3-1-2.pdf" target="_blank" class="ssr-file-link">E-copies of merit certificates in sports and culturals during A.Y.2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.3.1(3)</td>
              <td><a href="/assets/pdfs/ssr/5-3-1-3.pdf" target="_blank" class="ssr-file-link">E-copies of merit certificates in sports and culturals during A.Y 2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.3.1(4)</td>
              <td><a href="/assets/pdfs/ssr/5-3-1-4.pdf" target="_blank" class="ssr-file-link">E-copies of merit certificates in sports and culturals during A.Y 2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.3.1(5)</td>
              <td><a href="/assets/pdfs/ssr/5-3-1-5.pdf" target="_blank" class="ssr-file-link">E-copies of merit certificates in sports and culturals during A.Y 2018-19</a></td>
            </tr>

            <tr>
              <td rowspan="5">8</td>
              <td rowspan="5">5.3.2</td>
              <td class="ssr-file-no">5.3.2(1)</td>
              <td class="ssr-file-plain">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2022-23</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.3.2(2)</td>
              <td class="ssr-file-plain">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2021-22</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.3.2(3)</td>
              <td class="ssr-file-plain">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2020-21</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.3.2(4)</td>
              <td class="ssr-file-plain">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2019-20</td>
            </tr>
            <tr>
              <td class="ssr-file-no">5.3.2(5)</td>
              <td class="ssr-file-plain">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2018-19</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'ssr-criteria-6': {
    title: 'SSR Criteria-6',
    parentLabel: 'SSR',
    content: `
      <div class="ssr-table-wrapper">
        <table class="ssr-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="5">1</td>
              <td rowspan="5">6.2.2</td>
              <td class="ssr-file-no">6.2.2(1)</td>
              <td><a href="/assets/pdfs/ssr/6-2-2-1.pdf" target="_blank" class="ssr-file-link">Policy on E-governece</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.2.2(2)</td>
              <td><a href="/assets/pdfs/ssr/6-2-2-2.pdf" target="_blank" class="ssr-file-link">Invoices</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.2.2(3)</td>
              <td><a href="/assets/pdfs/ssr/6-2-2-3.pdf" target="_blank" class="ssr-file-link">Screenshots</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.2.2(4)</td>
              <td><a href="/assets/pdfs/ssr/6-2-2-4.pdf" target="_blank" class="ssr-file-link">ERP Document</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.2.2(5)</td>
              <td><a href="/assets/pdfs/ssr/6-2-2-5.pdf" target="_blank" class="ssr-file-link">Annual Report</a></td>
            </tr>

            <tr>
              <td rowspan="7">2</td>
              <td rowspan="7">6.3.2</td>
              <td class="ssr-file-no">6.3.2(1)</td>
              <td class="ssr-file-plain">Policy Document</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.2(2)</td>
              <td class="ssr-file-plain">List of Fulltime Teachers Benifited by Financial Support with their Sanction Letters A.Y-2022-23</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.2(3)</td>
              <td class="ssr-file-plain">List of Fulltime Teachers Benifited by Financial Support with their Sanction Letters A.Y-2021-22</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.2(4)</td>
              <td class="ssr-file-plain">List of Fulltime Teachers Benifited by Financial Support with their Scantion Letters A.Y-2020-21</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.2(5)</td>
              <td class="ssr-file-plain">List of Fulltime Teachers Benifited by Financial Support with their Scantion Letters A.Y-2019-20</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.2(6)</td>
              <td class="ssr-file-plain">List of Fulltime Teachers Benifited by Financial Support with their Scantion Letters A.Y-2018-19</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.2(7)</td>
              <td class="ssr-file-plain">Audited Statements</td>
            </tr>

            <tr>
              <td rowspan="6">3</td>
              <td rowspan="6">6.3.3</td>
              <td class="ssr-file-no">6.3.3(1)</td>
              <td><a href="/assets/pdfs/ssr/6-3-3-1.pdf" target="_blank" class="ssr-file-link">Organisied Profesional Development Programmes For Teachers and Administritave Training Programme for Non-Teaching along with their E-copies of Participations A.Y-2022-23</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.3(2)</td>
              <td><a href="/assets/pdfs/ssr/6-3-3-2.pdf" target="_blank" class="ssr-file-link">Organisied Profesional Development Programmes For Teachers and Administritave Training Programme for Non-Teaching along with their E-copies of Participations A.Y-2021-22</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.3(3)</td>
              <td><a href="/assets/pdfs/ssr/6-3-3-3.pdf" target="_blank" class="ssr-file-link">Organisied Profesional Development Programmes For Teachers and Administritave Training Programme for Non-Teaching along with their E-copies of Participations A.Y-2020-21</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.3(4)</td>
              <td><a href="/assets/pdfs/ssr/6-3-3-4.pdf" target="_blank" class="ssr-file-link">Organisied Profesional Development Programmes For Teachers and Administritave Training Programme for Non-Teaching along with their E-copies of Participations A.Y-2019-20</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.3(5)</td>
              <td><a href="/assets/pdfs/ssr/6-3-3-5.pdf" target="_blank" class="ssr-file-link">Organisied Profesional Development Programmes For Teachers and Administritave Training Programme for Non-Teaching along with their E-copies of Participations A.Y-2018-19</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.3.3(6)</td>
              <td><a href="/assets/pdfs/ssr/6-3-3-6.pdf" target="_blank" class="ssr-file-link">Annual Report</a></td>
            </tr>

            <tr>
              <td rowspan="5">4</td>
              <td rowspan="5">6.5.2</td>
              <td class="ssr-file-no">6.5.2(1)</td>
              <td class="ssr-file-plain">Minutes of IQAC</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.5.2(2)</td>
              <td class="ssr-file-plain">Feedback Collected and Analysis and Action taken Report</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.5.2(3)</td>
              <td class="ssr-file-plain">Academic and Administrative Audit (AAA)</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.5.2(4)</td>
              <td class="ssr-file-plain">List of Collabrative activities with other Institutions</td>
            </tr>
            <tr>
              <td class="ssr-file-no">6.5.2(5)</td>
              <td class="ssr-file-plain">ISO Certificate</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'ssr-criteria-7': {
    title: 'SSR Criteria-7',
    parentLabel: 'SSR',
    content: `
      <div class="ssr-table-wrapper">
        <table class="ssr-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="6">1</td>
              <td rowspan="6">7.1.2</td>
              <td class="ssr-file-no">7.1.2(1)</td>
              <td><a href="/assets/pdfs/ssr/7-1-2-1.pdf" target="_blank" class="ssr-file-link">Geo-Tagged Photographs</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.2(2)</td>
              <td><a href="/assets/pdfs/ssr/7-1-2-2.pdf" target="_blank" class="ssr-file-link">Invoices</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.2(3)</td>
              <td><a href="/assets/pdfs/ssr/7-1-2-3.pdf" target="_blank" class="ssr-file-link">MoUs For Solid and e-Waste Management</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.2(4)</td>
              <td><a href="/assets/pdfs/ssr/7-1-2-4.pdf" target="_blank" class="ssr-file-link">Circulars for No Entry of Automobiles and Ban on Use of Plastic</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.2(5)</td>
              <td><a href="/assets/pdfs/ssr/7-1-2-5.pdf" target="_blank" class="ssr-file-link">Scribe Letters</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.2(6)</td>
              <td><a href="/assets/pdfs/ssr/7-1-2-6.pdf" target="_blank" class="ssr-file-link">Policy Documents</a></td>
            </tr>

            <tr>
              <td rowspan="7">2</td>
              <td rowspan="7">7.1.3</td>
              <td class="ssr-file-no">7.1.3(1)</td>
              <td class="ssr-file-plain">Policy for Energy Utilization and Environment</td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.3(2)</td>
              <td class="ssr-file-plain">Green Audit report</td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.3(3)</td>
              <td class="ssr-file-plain">Environment audit Report</td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.3(4)</td>
              <td class="ssr-file-plain">Energy aduit Report</td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.3(5)</td>
              <td class="ssr-file-plain">Document Related to Clean and Green Campus Initiatives</td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.3(6)</td>
              <td class="ssr-file-plain">Report on Green Campus Initiatives</td>
            </tr>
            <tr>
              <td class="ssr-file-no">7.1.3(7)</td>
              <td class="ssr-file-plain">Document related to Environment Promotion Activities beyond Campus</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'dvv-extended-profile': {
    title: 'Extended Profile Deviations',
    parentLabel: 'DVV',
    content: `
      <div class="dvv-table-wrapper">
        <div class="dvv-header-banner">EXTENDED PROFILE DEVIATIONS</div>
        <table class="dvv-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>DVV Comments</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">1</td>
              <td rowspan="2">1.1</td>
              <td rowspan="2" class="dvv-comment">
                &middot; Provide appropriate link to the admission approval documents received from the university for assessment period<br>
                &middot; Year wise list of students approved by the affiliating University
              </td>
              <td class="ssr-file-no">1.1(1)</td>
              <td><a href="/assets/pdfs/dvv/1-1-1.pdf" target="_blank" class="dvv-file-link">PCI approvals for the last five years</a></td>
            </tr>
            <tr>
              <td class="ssr-file-no">1.1(2)</td>
              <td><a href="/assets/pdfs/dvv/1-1-2.pdf" target="_blank" class="dvv-file-link">Year-wise certified list of students for the last five years</a></td>
            </tr>

            <tr>
              <td>2</td>
              <td>2.1</td>
              <td class="dvv-comment">
                Provide the list of total full time teachers in block five years (Without repeat count) indicating the departmental affiliation during the assessment period authenticated by the Principal/competent authority
              </td>
              <td class="ssr-file-no">2.1</td>
              <td><a href="/assets/pdfs/dvv/2-1.pdf" target="_blank" class="dvv-file-link">Certified list of full-time teachers(without repeat count) for the assessment period</a></td>
            </tr>

            <tr>
              <td>3</td>
              <td>2.2</td>
              <td class="dvv-comment">
                Provide the list of all full time teachers indicating the departmental affiliation during the assessment period authenticated by the Principal/ Competent authority.
              </td>
              <td class="ssr-file-no">2.2</td>
              <td><a href="/assets/pdfs/dvv/2-2.pdf" target="_blank" class="dvv-file-link">Year-wise certified list of full-time teachers for the assessment period</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  'dvv-metric-level': {
    title: 'Metric Level Deviations',
    parentLabel: 'DVV',
    content: `
      <div class="dvv-table-wrapper">
        <div class="dvv-header-banner-dark">METRIC LEVEL DEVIATIONS</div>

        <div class="dvv-criterion-banner">CRITERION 1- CURRICULAR ASPECTS</div>
        <table class="dvv-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>DVV Comments</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1.2.1</td>
              <td class="dvv-comment">Details of each program such as: Name of the program duration, list of students enrolled (with signature of students), model certificates, curriculum, assessment procedures year-wise.</td>
              <td>
                <div class="dvv-file-no-stack">1.2.1(1)<br>1.2.1(2)<br>1.2.1(3)<br>1.2.1(4)<br>1.2.1(5)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/1-2-1-1.pdf" target="_blank" class="dvv-file-link">Documents related to certificate programs for A.Y 2022-23</a>
                  <a href="/assets/pdfs/dvv/1-2-1-2.pdf" target="_blank" class="dvv-file-link">Documents related to certificate programs for A.Y 2021-22</a>
                  <a href="/assets/pdfs/dvv/1-2-1-3.pdf" target="_blank" class="dvv-file-link">Documents related to certificate programs for A.Y 2020-21</a>
                  <a href="/assets/pdfs/dvv/1-2-1-4.pdf" target="_blank" class="dvv-file-link">Documents related to certificate programs for A.Y 2019-20</a>
                  <a href="/assets/pdfs/dvv/1-2-1-5.pdf" target="_blank" class="dvv-file-link">Documents related to certificate programs for A.Y 2018-19</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>1.2.2</td>
              <td class="dvv-comment">&middot; Year-wise List of the students enrolled in the Program as defined in 1.2.1 &middot; Attendance sheet of Students participating with signature and Model Certificates.</td>
              <td>
                <div class="dvv-file-no-stack">1.2.2(1)<br>1.2.2(2)<br>1.2.2(3)<br>1.2.2(4)<br>1.2.2(5)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/1-2-2-1.pdf" target="_blank" class="dvv-file-link">List of students enrolled in certificate programs offered along with their attendance sheets and participation certificates during A.Y-2022-23</a>
                  <a href="/assets/pdfs/dvv/1-2-2-2.pdf" target="_blank" class="dvv-file-link">List of students enrolled in certificate programs offered along with their attendance sheets and participation certificates during A.Y-2021-22</a>
                  <a href="/assets/pdfs/dvv/1-2-2-3.pdf" target="_blank" class="dvv-file-link">List of students enrolled in certificate programs offered along with their attendance sheets and participation certificates during A.Y-2020-21</a>
                  <a href="/assets/pdfs/dvv/1-2-2-4.pdf" target="_blank" class="dvv-file-link">List of students enrolled in certificate programs offered along with their attendance sheets and participation certificates during A.Y-2019-20</a>
                  <a href="/assets/pdfs/dvv/1-2-2-5.pdf" target="_blank" class="dvv-file-link">List of students enrolled in certificate programs offered along with their attendance sheets and participation certificatesduring A.Y-2018-19</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>1.3.2</td>
              <td class="dvv-comment">&middot; List of students along with the details of title, place of work, duration etc., &middot; Internship completion certificate / project work completion certificate from the organization where internship / project was completed. &middot; Link to report of the field work/sample photographs of the field work / permission letter only for field work from the competent authority will be considered</td>
              <td>
                <div class="dvv-file-no-stack">1.3.2(1)<br>1.3.2(2)<br>1.3.2(3)<br>1.3.2(4)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/1-3-2-1.pdf" target="_blank" class="dvv-file-link">List of Students undertaken project work/ field work/ Internships</a>
                  <a href="/assets/pdfs/dvv/1-3-2-2.pdf" target="_blank" class="dvv-file-link">Documents related to the students undertaken project work</a>
                  <a href="/assets/pdfs/dvv/1-3-2-3.pdf" target="_blank" class="dvv-file-link">Documents related to Industrial Visits</a>
                  <a href="/assets/pdfs/dvv/1-3-2-4.pdf" target="_blank" class="dvv-file-link">Documents related to the students undertaken Internships</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>1.4.1</td>
              <td class="dvv-comment">&middot; Sample Filled in feedback forms from at least two stakeholders. &middot; Stakeholders' feedback analysis report. &middot; Action taken Report on feedback. &middot; Documentshowing the communication with the affiliating University for the Feedback provided.</td>
              <td>
                <div class="dvv-file-no-stack">1.4.1(1)<br>1.4.1(2)<br>1.4.1(3)<br>1.4.1(4)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/1-4-1-1.pdf" target="_blank" class="dvv-file-link">Sample filled feedback forms</a>
                  <a href="/assets/pdfs/dvv/1-4-1-2.pdf" target="_blank" class="dvv-file-link">Feedback analysis</a>
                  <a href="/assets/pdfs/dvv/1-4-1-3.pdf" target="_blank" class="dvv-file-link">Action taken report</a>
                  <a href="/assets/pdfs/dvv/1-4-1-4.pdf" target="_blank" class="dvv-file-link">Communication with Affiliating University</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="dvv-criterion-banner">CRITERION 2- TEACHING-LEARNING AND EVALUATION</div>
        <table class="dvv-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>DVV Comments</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2.1.1</td>
              <td class="dvv-comment">&middot; Document related to sanction of intake from affiliating University/ Government/statutory body for first year students only. &middot; Approved admission list year-wise (first year admission) program wise from the Affiliating university is mandatory</td>
              <td>
                <div class="dvv-file-no-stack">2.1.1(1)<br>2.1.1(2)<br>2.1.1(3)<br>2.1.1(4)<br>2.1.1(5)<br>2.1.1(6)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/2-1-1-1.pdf" target="_blank" class="dvv-file-link">AICTE approvals for last five years</a>
                  <a href="/assets/pdfs/dvv/2-1-1-2.pdf" target="_blank" class="dvv-file-link">List of Enrolled Students in the A.Y.2022-23</a>
                  <a href="/assets/pdfs/dvv/2-1-1-3.pdf" target="_blank" class="dvv-file-link">List of Enrolled Students in the A.Y.2021-22</a>
                  <a href="/assets/pdfs/dvv/2-1-1-4.pdf" target="_blank" class="dvv-file-link">List of Enrolled Students in the A.Y.2020-21</a>
                  <a href="/assets/pdfs/dvv/2-1-1-5.pdf" target="_blank" class="dvv-file-link">List of Enrolled Students in the A.Y.2019-20</a>
                  <a href="/assets/pdfs/dvv/2-1-1-6.pdf" target="_blank" class="dvv-file-link">List of Enrolled Students in the A.Y.2018-19</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>2.1.2</td>
              <td class="dvv-comment">&middot; Copy of letter issued by state govt. or Central Government indicating the reserved categoriesto be considered as per the state rule (in English as applicable) &middot; Number of seats year wise earmarked for the reserved categories &middot; Admission extract submitted to the state OBC, SC and ST cell every year of the students (first year admission) with seal and signature of the principal. &middot; Approval of additional intake of students has to be submitted for the claim</td>
              <td>
                <div class="dvv-file-no-stack">2.1.2(1)<br>2.1.2(2)<br>2.1.2(3)<br>2.1.2(4)<br>2.1.2(5)<br>2.1.2(6)<br>2.1.2(7)<br>2.1.2(8)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/2-1-2-1.pdf" target="_blank" class="dvv-file-link">G.O. related to reservation policy</a>
                  <a href="/assets/pdfs/dvv/2-1-2-2.pdf" target="_blank" class="dvv-file-link">List of enrolled students against reserved category during A.Y.2022-23</a>
                  <a href="/assets/pdfs/dvv/2-1-2-3.pdf" target="_blank" class="dvv-file-link">List of enrolled students against reserved category during A.Y.2021-22</a>
                  <a href="/assets/pdfs/dvv/2-1-2-4.pdf" target="_blank" class="dvv-file-link">List of enrolled students against reserved category during A.Y.2020-21</a>
                  <a href="/assets/pdfs/dvv/2-1-2-5.pdf" target="_blank" class="dvv-file-link">List of enrolled students against reserved category during A.Y.2019-20</a>
                  <a href="/assets/pdfs/dvv/2-1-2-6.pdf" target="_blank" class="dvv-file-link">List of enrolled students against reserved category during A.Y.2018-19</a>
                  <a href="/assets/pdfs/dvv/2-1-2-7.pdf" target="_blank" class="dvv-file-link">Admission Extract</a>
                  <a href="/assets/pdfs/dvv/2-1-2-8.pdf" target="_blank" class="dvv-file-link">Documents related to the approval of additional intake of students</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>2.2.1</td>
              <td class="dvv-comment">Provide appointment letters of Dr.K.Rajkiran, Dr.K.Rajarajeswari, K.Venkata Rajesh, U.Sri Venkatesh, G.Manoj Kumar, R.Krishna Priya, K.Manjulatha, M.Sayyamma, I.Jahansi Lakshmi, K.V.S.L.Kavya.</td>
              <td>2.2.1</td>
              <td><a href="/assets/pdfs/dvv/2-2-1.pdf" target="_blank" class="dvv-file-link">Appointment orders of the specified full-time teachers</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td>2.4.1</td>
              <td class="dvv-comment">Sanction letters (in English) of Dr.K.Rajkiran, Dr.K.Rajarajeswari, K.Venkata Rajesh, U.Sri Venkatesh, G.Manoj Kumar, R.Krishna Priya, K.Manjulatha, M.Sayyamma, I.Jahansi Lakshmi, K.V.S.L.Kavya indicating number of posts (including Management sanctioned posts) by competent authority</td>
              <td>2.4.1</td>
              <td><a href="/assets/pdfs/dvv/2-4-1.pdf" target="_blank" class="dvv-file-link">Sanction letters indicating the number of posts along with the appointment letters of the specified full-time teachers</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td>2.4.2</td>
              <td class="dvv-comment">&middot; List of faculty with highest degree should be provided as per academic session wise along with particulars of degree awarding university, subject and the year of award. &middot; Doctorate Degree / Provisional Degree Certificate awarded by UGC recognized universities only to be considered.</td>
              <td>
                <div class="dvv-file-no-stack">2.4.2(1)<br>2.4.2(2)<br>2.4.2(3)<br>2.4.2(4)<br>2.4.2(5)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/2-4-2-1.pdf" target="_blank" class="dvv-file-link">List of full-time teachers with Ph.D. with their e-copies of Ph.D. in the A.Y.2022-23</a>
                  <a href="/assets/pdfs/dvv/2-4-2-2.pdf" target="_blank" class="dvv-file-link">List of full-time teachers with Ph.D. with their e-copies of Ph.D. in the A.Y.2021-22</a>
                  <a href="/assets/pdfs/dvv/2-4-2-3.pdf" target="_blank" class="dvv-file-link">List of full-time teachers with Ph.D. with their e-copies of Ph.D. in the A.Y.2020-21</a>
                  <a href="/assets/pdfs/dvv/2-4-2-4.pdf" target="_blank" class="dvv-file-link">List of full-time teachers with Ph.D. with their e-copies of Ph.D. in the A.Y.2019-20</a>
                  <a href="/assets/pdfs/dvv/2-4-2-5.pdf" target="_blank" class="dvv-file-link">List of full-time teachers with Ph.D. with their e-copies of Ph.D. in the A.Y.2018-19</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>2.6.3</td>
              <td class="dvv-comment">&middot; Result sheet published by the affiliating university &middot; Certified report from Head of the institution / Controller of Examination of the affiliating university indicating pass percentage of students of the final year (final semester) eligible for the degree program-wise / year-wise.</td>
              <td>
                <div class="dvv-file-no-stack">2.6.3(1)<br>2.6.3(2)<br>2.6.3(3)<br>2.6.3(4)<br>2.6.3(5)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/2-6-3-1.pdf" target="_blank" class="dvv-file-link">Result analysis along with the Result sheet published by the University for the A.Y.2022-23</a>
                  <a href="/assets/pdfs/dvv/2-6-3-2.pdf" target="_blank" class="dvv-file-link">Result analysis along with the Result sheet published by the University for the A.Y.2021-22</a>
                  <a href="/assets/pdfs/dvv/2-6-3-3.pdf" target="_blank" class="dvv-file-link">Result analysis along with the Result sheet published by the University for the A.Y.2020-21</a>
                  <a href="/assets/pdfs/dvv/2-6-3-4.pdf" target="_blank" class="dvv-file-link">Result analysis along with the Result sheet published by the University for the A.Y.2019-20</a>
                  <a href="/assets/pdfs/dvv/2-6-3-5.pdf" target="_blank" class="dvv-file-link">Result analysis along with the Result sheet published by the University for the A.Y.2018-19</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="dvv-criterion-banner">CRITERION 3- RESEARCH, INNOVATIONS AND EXTENSION</div>
        <table class="dvv-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>DVV Comments</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>3.1.1</td>
              <td class="dvv-comment">&middot; List of grants for research projects received during the assessment years along with the nature of the award, and the awarding agency with amount. (sanctioned letter highlighting the required parts) &middot; Links to the e-copies of the sanctioned letters</td>
              <td class="ssr-file-plain"></td>
              <td class="ssr-file-plain"></td>
            </tr>
            <tr>
              <td>2</td>
              <td>3.2.2</td>
              <td class="dvv-comment">&middot; Brochure/Geo tagged Photograph with date and captions; title of the workshops / seminars conducted. &middot; Link to the detailed report for each program as in the template.</td>
              <td>
                <div class="dvv-file-no-stack">3.2.2(1)<br>3.2.2(2)<br>3.2.2(3)<br>3.2.2(4)<br>3.2.2(5)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/3-2-2-1.pdf" target="_blank" class="dvv-file-link">Documents related to Seminars /Workshops organized during the A.Y 2022-23</a>
                  <a href="/assets/pdfs/dvv/3-2-2-2.pdf" target="_blank" class="dvv-file-link">Documents related to Seminars /Workshops organized during the A.Y 2021-22</a>
                  <a href="/assets/pdfs/dvv/3-2-2-3.pdf" target="_blank" class="dvv-file-link">Documents related to Seminars /Workshops organized during the A.Y 2020-21</a>
                  <a href="/assets/pdfs/dvv/3-2-2-4.pdf" target="_blank" class="dvv-file-link">Documents related to Seminars /Workshops organized during the A.Y 2019-20</a>
                  <a href="/assets/pdfs/dvv/3-2-2-5.pdf" target="_blank" class="dvv-file-link">Documents related to Seminars /Workshops organized during the A.Y 2018-19</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>3.3.1</td>
              <td class="dvv-comment">&middot; Link landing to the research paper &middot; Link to the journal website. &middot; URL of the content page in case print journal.</td>
              <td>3.3.1</td>
              <td><a href="/assets/pdfs/dvv/3-3-1.pdf" target="_blank" class="dvv-file-link">Data template</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td>3.3.2</td>
              <td class="dvv-comment">&middot; Cover page, content page and first page of the selected publication. &middot; Web-link of books.</td>
              <td>
                <div class="dvv-file-no-stack">3.3.2(1)<br>3.3.2(2)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/3-3-2-1.pdf" target="_blank" class="dvv-file-link">Revised data template by including the column "Weblink of Books"</a>
                  <a href="/assets/pdfs/dvv/3-3-2-2.pdf" target="_blank" class="dvv-file-link">e-copies of first page, content page and first page of the selected publication during the assessment period</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>3.4.3</td>
              <td class="dvv-comment">Links / uploads of Photographs (preferably with banner) and any other supporting document of relevance should have proper captions and dates.</td>
              <td>
                <div class="dvv-file-no-stack">3.4.3(1)<br>3.4.3(2)<br>3.4.3(3)<br>3.4.3(4)<br>3.4.3(5)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/3-4-3-1.pdf" target="_blank" class="dvv-file-link">Documents related to extension activities organized during the A.Y.2022-23</a>
                  <a href="/assets/pdfs/dvv/3-4-3-2.pdf" target="_blank" class="dvv-file-link">Documents related to extension activities organized during the A.Y.2021-22</a>
                  <a href="/assets/pdfs/dvv/3-4-3-3.pdf" target="_blank" class="dvv-file-link">Documents related to extension activities organized during the A.Y.2020-21</a>
                  <a href="/assets/pdfs/dvv/3-4-3-4.pdf" target="_blank" class="dvv-file-link">Documents related to extension activities organized during the A.Y.2019-20</a>
                  <a href="/assets/pdfs/dvv/3-4-3-5.pdf" target="_blank" class="dvv-file-link">Documents related to extension activities organized during the A.Y.2018-19</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>3.5.1</td>
              <td class="dvv-comment">&middot; Copies of MoUs/ collaboration/ related documents indicating the nature of collaboration and activities year-wise. &middot; List of activities conducted under each MoU along with dates of starting and completion year-wise signed by both parties</td>
              <td>
                <div class="dvv-file-no-stack">3.5.1(1)<br>3.5.1(2)<br>3.5.1(3)<br>3.5.1(4)<br>3.5.1(5)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/3-5-1-1.pdf" target="_blank" class="dvv-file-link">Certified list of collaborations along with their e-copies of MoUs established in A.Y 2022-23</a>
                  <a href="/assets/pdfs/dvv/3-5-1-2.pdf" target="_blank" class="dvv-file-link">Certified list of collaborations along with their e-copies of MoUs established in A.Y 2021-22</a>
                  <a href="/assets/pdfs/dvv/3-5-1-3.pdf" target="_blank" class="dvv-file-link">Certified list of collaborations along with their e-copies of MoUs established in A.Y 2020-21</a>
                  <a href="/assets/pdfs/dvv/3-5-1-4.pdf" target="_blank" class="dvv-file-link">Certified list of collaborations along with their e-copies of MoUs established in A.Y 2019-20</a>
                  <a href="/assets/pdfs/dvv/3-5-1-5.pdf" target="_blank" class="dvv-file-link">Certified list of collaborations along with their e-copies of MoUs established in A.Y 2018-19</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="dvv-criterion-banner">CRITERION 4- INFRASTRUCTURE AND LEARNING RESOURCES</div>
        <table class="dvv-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Metric No</th>
              <th>DVV Comments</th>
              <th>File No</th>
              <th>File Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4.1.2</td>
              <td class="dvv-comment">&middot; Provide the consolidated fund allocation towards infrastructure augmentation facilities duly certified by Principal and CA. &middot; Highlight the relevant items in the audited income and expenditure statement.</td>
              <td class="ssr-file-plain"></td>
              <td class="ssr-file-plain"></td>
            </tr>
            <tr>
              <td>2</td>
              <td>4.3.2</td>
              <td class="dvv-comment">&middot; Bills for the purchase of computers to be provided. &middot; The stock entry of computers allotted for student use to be highlighted.</td>
              <td>
                <div class="dvv-file-no-stack">4.3.2(1)<br>4.3.2(2)</div>
              </td>
              <td>
                <div class="dvv-file-desc-stack">
                  <a href="/assets/pdfs/dvv/4-3-2-1.pdf" target="_blank" class="dvv-file-link">Invoices of the Computers</a>
                  <a href="/assets/pdfs/dvv/4-3-2-2.pdf" target="_blank" class="dvv-file-link">Stock Register Entry by highlighting the entries of computers purchased</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>4.4.1</td>
              <td class="dvv-comment">Provide audited income and expenditure statement highlighting the items of expenditure incurred on maintenance of physical facilities and academic support facilities, duly certified by Principal and CA.</td>
              <td class="ssr-file-plain"></td>
              <td class="ssr-file-plain"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="dvv-criterion-banner">CRITERION 5- STUDENT SUPPORT AND PROGRESSION</div>
      <table class="dvv-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Metric No</th>
            <th>DVV Comments</th>
            <th>File No</th>
            <th>File Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5.1.1</td>
            <td class="dvv-comment">&middot; Upload sanction letter of scholarship and freeships (in English). &middot; Year-wise list of students in each scheme to be attested by the competent authority. &middot; Upload policy document of the HEI for award of Non government scholarship and freeships</td>
            <td>
              <div class="dvv-file-no-stack">5.1.1(1)<br>5.1.1(2)<br>5.1.1(3)<br>5.1.1(4)<br>5.1.1(5)<br>5.1.1(6)<br>5.1.1(7)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/5-1-1-1.pdf" target="_blank" class="dvv-file-link">List of students benefitted by Government scholarship along with the sanction letters during the A.Y.2022-23</a>
                <a href="/assets/pdfs/dvv/5-1-1-2.pdf" target="_blank" class="dvv-file-link">List of students benefitted by Government scholarship along with the sanction letters during the A.Y.2021-22</a>
                <a href="/assets/pdfs/dvv/5-1-1-3.pdf" target="_blank" class="dvv-file-link">List of students benefitted by Government scholarship along with the sanction letters during the A.Y.2020-21</a>
                <a href="/assets/pdfs/dvv/5-1-1-4.pdf" target="_blank" class="dvv-file-link">List of students benefitted by Government scholarship along with the sanction letters during the A.Y.2019-20</a>
                <a href="/assets/pdfs/dvv/5-1-1-5.pdf" target="_blank" class="dvv-file-link">List of students benefitted by Government scholarship along with the sanction letters during the A.Y.2018-19</a>
                <a href="/assets/pdfs/dvv/5-1-1-6.pdf" target="_blank" class="dvv-file-link">Policy Document on Institutional Freeships</a>
                <a href="/assets/pdfs/dvv/5-1-1-7.pdf" target="_blank" class="dvv-file-link">List of students benefited by Institutional freeships</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>5.1.2</td>
            <td class="dvv-comment">&middot; Soft copy of Circular /Brochure. &middot; Web-link to particular program/scheme/ Report of the event &middot; Photographs with date and caption for each scheme or event.</td>
            <td>
              <div class="dvv-file-no-stack">5.1.2(1)<br>5.1.2(2)<br>5.1.2(3)<br>5.1.2(4)<br>5.1.2(5)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/5-1-2-1.pdf" target="_blank" class="dvv-file-link">Documents related to organised soft skills programmes during assessment period</a>
                <a href="/assets/pdfs/dvv/5-1-2-2.pdf" target="_blank" class="dvv-file-link">Documents related to organised language and communication skills during assessment period</a>
                <a href="/assets/pdfs/dvv/5-1-2-3.pdf" target="_blank" class="dvv-file-link">Documents related to organised life skills programmes during assessment period</a>
                <a href="/assets/pdfs/dvv/5-1-2-4.pdf" target="_blank" class="dvv-file-link">Documents related to organised ICT/ Communication skills programmes during assessment period</a>
                <a href="/assets/pdfs/dvv/5-1-2-5.pdf" target="_blank" class="dvv-file-link">Institutional weblink redirecting to the Capacity Building and Skill Enhancement Activities</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>5.1.3</td>
            <td class="dvv-comment">&middot; Soft copy of Circular / brochure / report of program with photographs with captions of such programs along with details of the resource persons. &middot; Year-wise list of students attending these schemes, signed by competent authority</td>
            <td>
              <div class="dvv-file-no-stack">5.1.3(1)<br>5.1.3(2)<br>5.1.3(3)<br>5.1.3(4)<br>5.1.3(5)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/5-1-3-1.pdf" target="_blank" class="dvv-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2022-23</a>
                <a href="/assets/pdfs/dvv/5-1-3-2.pdf" target="_blank" class="dvv-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2021-22</a>
                <a href="/assets/pdfs/dvv/5-1-3-3.pdf" target="_blank" class="dvv-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2020-21</a>
                <a href="/assets/pdfs/dvv/5-1-3-4.pdf" target="_blank" class="dvv-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2019-20</a>
                <a href="/assets/pdfs/dvv/5-1-3-5.pdf" target="_blank" class="dvv-file-link">Documents related to guidance for competitive examinations and career counselling during A.Y 2018-19</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>5.1.4</td>
            <td class="dvv-comment">&middot; Proof of constitution of Internal committees / Grievances Committee formation / other committees as per UGC norms. &middot; Circular/web-link/ committee report justifying the objective of the metric &middot; Minutes of the meetings of student grievance committee, as per metric.</td>
            <td>
              <div class="dvv-file-no-stack">5.1.4(1)<br>5.1.4(2)<br>5.1.4(3)<br>5.1.4(4)<br>5.1.4(5)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/5-1-4-1.pdf" target="_blank" class="dvv-file-link">Minutes of Anti-ragging committee</a>
                <a href="/assets/pdfs/dvv/5-1-4-2.pdf" target="_blank" class="dvv-file-link">Minutes of Internal Complaint Committee</a>
                <a href="/assets/pdfs/dvv/5-1-4-3.pdf" target="_blank" class="dvv-file-link">Minutes of Grievance Redressal Committee</a>
                <a href="/assets/pdfs/dvv/5-1-4-4.pdf" target="_blank" class="dvv-file-link">Sample filled undertaking forms</a>
                <a href="/assets/pdfs/dvv/5-1-4-5.pdf" target="_blank" class="dvv-file-link">Weblink for online grievance cell</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>5.2.1</td>
            <td class="dvv-comment">&middot; List of students placed along with placement details as per template year wise. &middot; Links/documents relating to placement cellsuch as brochures, tie-ups etc., can be uploaded. &middot; Upload supporting data for students who have joined for higher education in prescribed format for the assessment period.</td>
            <td>
              <div class="dvv-file-no-stack">5.2.1(1)<br>5.2.1(2)<br>5.2.1(3)<br>5.2.1(4)<br>5.2.1(5)<br>5.2.1(6)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/5-2-1-1.pdf" target="_blank" class="dvv-file-link">Placement Cell Annual Report along with the Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2022-23</a>
                <a href="/assets/pdfs/dvv/5-2-1-2.pdf" target="_blank" class="dvv-file-link">Placement Cell Annual Report along with the Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2021-22</a>
                <a href="/assets/pdfs/dvv/5-2-1-3.pdf" target="_blank" class="dvv-file-link">Placement Cell Annual Report along with the Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2020-21</a>
                <a href="/assets/pdfs/dvv/5-2-1-4.pdf" target="_blank" class="dvv-file-link">Placement Cell Annual Report along with the Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2019-20</a>
                <a href="/assets/pdfs/dvv/5-2-1-5.pdf" target="_blank" class="dvv-file-link">Placement Cell Annual Report along with the Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2018-19</a>
                <a href="/assets/pdfs/dvv/5-2-1-6.pdf" target="_blank" class="dvv-file-link">Tie-ups and communications with organisations</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>5.2.2</td>
            <td class="dvv-comment">&middot; List of qualified students year-wise under each category &middot; Qualifying Certificates of the students will only be considered</td>
            <td>
              <div class="dvv-file-no-stack">5.2.2(1)<br>5.2.2(2)<br>5.2.2(3)<br>5.2.2(4)<br>5.2.2(5)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/5-2-2-1.pdf" target="_blank" class="dvv-file-link">List of qualified students along with their qualifying certificates in the A.Y.2022-23</a>
                <a href="/assets/pdfs/dvv/5-2-2-2.pdf" target="_blank" class="dvv-file-link">List of qualified students along with their qualifying certificates in the A.Y.2021-22</a>
                <a href="/assets/pdfs/dvv/5-2-2-3.pdf" target="_blank" class="dvv-file-link">List of qualified students along with their qualifying certificates in the A.Y.2020-21</a>
                <a href="/assets/pdfs/dvv/5-2-2-4.pdf" target="_blank" class="dvv-file-link">List of qualified students along with their qualifying certificates in the A.Y.2019-20</a>
                <a href="/assets/pdfs/dvv/5-2-2-5.pdf" target="_blank" class="dvv-file-link">List of qualified students along with their qualifying certificates in the A.Y.2018-19</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>5.3.1</td>
            <td class="dvv-comment">e-copies of award letters and certificates to be uploaded.</td>
            <td>
              <div class="dvv-file-no-stack">5.3.1(1)<br>5.3.1(2)<br>5.3.1(3)<br>5.3.1(4)<br>5.3.1(5)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/5-3-1-1.pdf" target="_blank" class="dvv-file-link">List of students along with the e-copies of award letters for A.Y.2022-23</a>
                <a href="/assets/pdfs/dvv/5-3-1-2.pdf" target="_blank" class="dvv-file-link">List of students along with the e-copies of award letters for A.Y.2021-22</a>
                <a href="/assets/pdfs/dvv/5-3-1-3.pdf" target="_blank" class="dvv-file-link">List of students along with the e-copies of award letters for A.Y.2020-21</a>
                <a href="/assets/pdfs/dvv/5-3-1-4.pdf" target="_blank" class="dvv-file-link">List of students along with the e-copies of award letters for A.Y.2019-20</a>
                <a href="/assets/pdfs/dvv/5-3-1-5.pdf" target="_blank" class="dvv-file-link">List of students along with the e-copies of award letters for A.Y.2018-19</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>5.3.2</td>
            <td class="dvv-comment">&middot; Soft copy of circular/brochure indicating such kind of activities. &middot; List of events along with the list of participants and year wise signed by the Principal.</td>
            <td>
              <div class="dvv-file-no-stack">5.3.2(1)<br>5.3.2(2)<br>5.3.2(3)<br>5.3.2(4)<br>5.3.2(5)<br>5.3.2(6)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/5-3-2-1.pdf" target="_blank" class="dvv-file-link">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2022-23</a>
                <a href="/assets/pdfs/dvv/5-3-2-2.pdf" target="_blank" class="dvv-file-link">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2021-22</a>
                <a href="/assets/pdfs/dvv/5-3-2-3.pdf" target="_blank" class="dvv-file-link">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2020-21</a>
                <a href="/assets/pdfs/dvv/5-3-2-4.pdf" target="_blank" class="dvv-file-link">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2019-20</a>
                <a href="/assets/pdfs/dvv/5-3-2-5.pdf" target="_blank" class="dvv-file-link">Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2018-19</a>
                <a href="/assets/pdfs/dvv/5-3-2-6.pdf" target="_blank" class="dvv-file-link">Year-wise certified list of events along with the list of participants during the assessment period</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="dvv-criterion-banner">CRITERION 6- GOVERNANCE, LEADERSHIP AND MANAGEMENT</div>
      <table class="dvv-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Metric No</th>
            <th>DVV Comments</th>
            <th>File No</th>
            <th>File Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>6.2.2</td>
            <td class="dvv-comment">&middot; Institutional expenditure statements for the heads of e-governance implementation reflected in the audited statement. &middot; Link to the ERP Document and Screen shots of user interfaces of each module reflecting the name of the HEI. &middot; Annual e-governance report approved by Governing Council. &middot; Policy document on e-governance.</td>
            <td>
              <div class="dvv-file-no-stack">6.2.2(1)<br>6.2.2(2)<br>6.2.2(3)<br>6.2.2(4)<br>6.2.2(5)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/6-2-2-1.pdf" target="_blank" class="dvv-file-link">Policy on e-governance</a>
                <a href="/assets/pdfs/dvv/6-2-2-2.pdf" target="_blank" class="dvv-file-link">Invoices</a>
                <a href="/assets/pdfs/dvv/6-2-2-3.pdf" target="_blank" class="dvv-file-link">Screenshots</a>
                <a href="/assets/pdfs/dvv/6-2-2-4.pdf" target="_blank" class="dvv-file-link">ERP Document</a>
                <a href="/assets/pdfs/dvv/6-2-2-5.pdf" target="_blank" class="dvv-file-link">Annual e-governance report</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>6.3.2</td>
            <td class="dvv-comment">&middot; Link to the policy document &middot; e-copy of letter/s indicating financial assistance to teachers &middot; List of teachers receiving financial support year wise under each head signed by the principal. &middot; Audited statement of account highlighting the financial support.</td>
            <td>
              <div class="dvv-file-no-stack">6.3.2(1)<br>6.3.2(2)<br>6.3.2(3)<br>6.3.2(4)<br>6.3.2(5)<br>6.3.2(6)<br>6.3.2(7)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/6-3-2-1.pdf" target="_blank" class="dvv-file-link">Policy Document</a>
                <a href="/assets/pdfs/dvv/6-3-2-2.pdf" target="_blank" class="dvv-file-link">List of Full-time teachers benefited by Financial Support with their Sanction Letters in the A.Y.2022-23</a>
                <a href="/assets/pdfs/dvv/6-3-2-3.pdf" target="_blank" class="dvv-file-link">List of Full-time teachers benefited by Financial Support with their Sanction Letters in the A.Y.2021-22</a>
                <a href="/assets/pdfs/dvv/6-3-2-4.pdf" target="_blank" class="dvv-file-link">List of Full-time teachers benefited by financial Support with their Sanction Letters in the A.Y.2020-21</a>
                <a href="/assets/pdfs/dvv/6-3-2-5.pdf" target="_blank" class="dvv-file-link">List of Full-time teachers benefited by financial Support with their Sanction Letters in the A.Y.2019-20</a>
                <a href="/assets/pdfs/dvv/6-3-2-6.pdf" target="_blank" class="dvv-file-link">List of Full-time teachers benefited by financial Support with their Sanction Letters in the A.Y.2018-19</a>
                <a href="/assets/pdfs/dvv/6-3-2-7.pdf" target="_blank" class="dvv-file-link">Audited Statement</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>6.3.3</td>
            <td class="dvv-comment">&middot; Event Brochures and reports year-wise. &middot; e-copy of the certificates of the program attended by teaching and non teaching staff. &middot; List of participating teaching and nonteaching staff as per the prescribed format year wise during the last five years. &middot; Annual reports highlighting the programs undertaken by the teaching faculties and non-teaching staff.</td>
            <td>
              <div class="dvv-file-no-stack">6.3.3(1)<br>6.3.3(2)<br>6.3.3(3)<br>6.3.3(4)<br>6.3.3(5)<br>6.3.3(6)<br>6.3.3(7)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/6-3-3-1.pdf" target="_blank" class="dvv-file-link">Organised Professional Development Programmes for Teachers and Administrative Training Programme for Non-Teaching along with their e-copies of Participations in the A.Y.2022-23</a>
                <a href="/assets/pdfs/dvv/6-3-3-2.pdf" target="_blank" class="dvv-file-link">Organised Professional Development Programmes for Teachers and Administrative Training Programme for Non-Teaching along with their e-copies of Participations in the A.Y.2021-22</a>
                <a href="/assets/pdfs/dvv/6-3-3-3.pdf" target="_blank" class="dvv-file-link">Organised Professional Development Programmes for Teachers and Administrative Training Programme for Non-Teaching along with their e-copies of Participations in the A.Y.2020-21</a>
                <a href="/assets/pdfs/dvv/6-3-3-4.pdf" target="_blank" class="dvv-file-link">Organised Professional Development Programmes for Teachers and Administrative Training Programme for Non-Teaching along with their e-copies of Participations in the A.Y.2019-20</a>
                <a href="/assets/pdfs/dvv/6-3-3-5.pdf" target="_blank" class="dvv-file-link">Organised Professional Development Programmes for Teachers and Administrative Training Programme for Non-Teaching along with their e-copies of Participations in the A.Y.2018-19</a>
                <a href="/assets/pdfs/dvv/6-3-3-6.pdf" target="_blank" class="dvv-file-link">Certified list of Teachers and Non-Teaching staff participated in FDPs and training programs for last five years</a>
                <a href="/assets/pdfs/dvv/6-3-3-7.pdf" target="_blank" class="dvv-file-link">Annual Report highlighting the programs undertaken by the teaching faculties and non-teaching staff.</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>6.5.2</td>
            <td class="dvv-comment">&middot; Proceedings of meetings of IQAC and action taken report on feedback analysis &middot; Supporting document links to be provided as per the options selected.</td>
            <td>
              <div class="dvv-file-no-stack">6.5.2(1)<br>6.5.2(2)<br>6.5.2(3)<br>6.5.2(4)<br>6.5.2(5)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/6-5-2-1.pdf" target="_blank" class="dvv-file-link">Minutes of IQAC</a>
                <a href="/assets/pdfs/dvv/6-5-2-2.pdf" target="_blank" class="dvv-file-link">Feedback collected and Analysis and Action taken report</a>
                <a href="/assets/pdfs/dvv/6-5-2-3.pdf" target="_blank" class="dvv-file-link">Academic & Administrative Audit</a>
                <a href="/assets/pdfs/dvv/6-5-2-4.pdf" target="_blank" class="dvv-file-link">List of collaborations with other Institutions</a>
                <a href="/assets/pdfs/dvv/6-5-2-5.pdf" target="_blank" class="dvv-file-link">ISO Certificate</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="dvv-criterion-banner">CRITERION 7- INSTITUTIONAL VALUES AND BEST PRACTICES</div>
      <table class="dvv-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Metric No</th>
            <th>DVV Comments</th>
            <th>File No</th>
            <th>File Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>7.1.2</td>
            <td class="dvv-comment">&middot; Link to the policy documents of the institution &middot; Geo tagged photographs and videos of the facilities with caption. &middot; Bills for the purchase of equipments for the facilities created under this metric. &middot; Photographs of Ramps/ rails/lift/wheel Chair/signage board /Toilet/ software etc.</td>
            <td>
              <div class="dvv-file-no-stack">7.1.2(1)<br>7.1.2(2)<br>7.1.2(3)<br>7.1.2(4)<br>7.1.2(5)<br>7.1.2(6)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/7-1-2-1.pdf" target="_blank" class="dvv-file-link">Geo-Tagged Photographs</a>
                <a href="/assets/pdfs/dvv/7-1-2-2.pdf" target="_blank" class="dvv-file-link">Invoices</a>
                <a href="/assets/pdfs/dvv/7-1-2-3.pdf" target="_blank" class="dvv-file-link">MoUs for solid and e-waste Management</a>
                <a href="/assets/pdfs/dvv/7-1-2-4.pdf" target="_blank" class="dvv-file-link">Circulars for No Entry of Automobiles and Ban of Use of Plastic</a>
                <a href="/assets/pdfs/dvv/7-1-2-5.pdf" target="_blank" class="dvv-file-link">Circulars related to scribe assistance</a>
                <a href="/assets/pdfs/dvv/7-1-2-6.pdf" target="_blank" class="dvv-file-link">Policy Documents</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>7.1.3</td>
            <td class="dvv-comment">&middot; Policy document on environment and energy usage &middot; Action taken reports and achievement report as clear and Green campus initiatives. &middot; Reports of the Audits. &middot; Certificate from the external accredited auditing agency (preferably government, concern department of affiliating university). &middot; Geo tagged photographs with caption and date. &middot; Any othersupporting document for beyond the campus environmental promotions.</td>
            <td>
              <div class="dvv-file-no-stack">7.1.3(1)<br>7.1.3(2)<br>7.1.3(3)<br>7.1.3(4)<br>7.1.3(5)<br>7.1.3(6)<br>7.1.3(7)</div>
            </td>
            <td>
              <div class="dvv-file-desc-stack">
                <a href="/assets/pdfs/dvv/7-1-3-1.pdf" target="_blank" class="dvv-file-link">Policy for Energy Utilization and Environment</a>
                <a href="/assets/pdfs/dvv/7-1-3-2.pdf" target="_blank" class="dvv-file-link">Green Audit Report</a>
                <a href="/assets/pdfs/dvv/7-1-3-3.pdf" target="_blank" class="dvv-file-link">Environment Audit Report</a>
                <a href="/assets/pdfs/dvv/7-1-3-4.pdf" target="_blank" class="dvv-file-link">Energy Audit Report</a>
                <a href="/assets/pdfs/dvv/7-1-3-5.pdf" target="_blank" class="dvv-file-link">Documents related to Clean and Green Campus Initiatives</a>
                <a href="/assets/pdfs/dvv/7-1-3-6.pdf" target="_blank" class="dvv-file-link">Report on Clean and Green Campus Initiatives</a>
                <a href="/assets/pdfs/dvv/7-1-3-7.pdf" target="_blank" class="dvv-file-link">Documents related to Environment Promotion Activities beyond Campus</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    `
  },
  'peer-team-visit': {
    title: 'Peer Team Visit',
    content: `
      <div class="gallery-detail-grid">
        <div class="gallery-detail-item">
          <img src="/assets/naac/peer-team-visit-1.jpg" alt="Peer Team Visit" class="gallery-detail-img">
        </div>
      </div>
    `
  },
  'aqar-2023-24': {
    title: 'AQAR 2023-24',
    content: `
    <div class="table-responsive">
      <table class="aqar-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Metric No</th>
            <th>File No</th>
            <th>File Description</th>
          </tr>
        </thead>
        <tbody>

          <!-- Criterion 1 -->
          <tr class="row-orange">
            <td>1</td><td>1.2.1</td><td>1.2.1(1)</td>
            <td>Documents related to Add-on programs for A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td>2</td><td>1.2.2</td><td>1.2.2(1)</td>
            <td>List of students enrolled in certificate program offered during A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td rowspan="4">3</td><td rowspan="4">1.3.2</td><td>1.3.2(1)</td><td>List of Students</td>
          </tr>
          <tr class="row-orange"><td>1.3.2(2)</td><td>Project work</td></tr>
          <tr class="row-orange"><td>1.3.2(3)</td><td>Industrial visit</td></tr>
          <tr class="row-orange"><td>1.3.2(4)</td><td>Internships</td></tr>
          <tr class="row-orange">
            <td rowspan="5">4</td><td rowspan="5">1.4.1</td><td>1.4.1(1)</td><td>Sample filled feedback forms</td>
          </tr>
          <tr class="row-orange"><td>1.4.1(2)</td><td>Feedback analysis</td></tr>
          <tr class="row-orange"><td>1.4.1(3)</td><td>Action taken report</td></tr>
          <tr class="row-orange"><td>1.4.1(4)</td><td>Communication with Affiliated University</td></tr>
          <tr class="row-orange"><td>1.4.1(5)</td><td>Institutional weblink</td></tr>

          <!-- Criterion 2 -->
          <tr class="row-blue">
            <td rowspan="2">5</td><td rowspan="2">2.1.1</td><td>2.1.1(1)</td><td>AICTE approvals for last five years</td>
          </tr>
          <tr class="row-blue"><td>2.1.1(2)</td><td>List of Enrolled Students in A.Y 2023-24</td></tr>
          <tr class="row-blue">
            <td rowspan="3">6</td><td rowspan="3">2.1.2</td><td>2.1.2(1)</td><td>G.O. related to reservation policy</td>
          </tr>
          <tr class="row-blue"><td>2.1.2(2)</td><td>List of Enrolled Students against reserved category during A.Y 2023-24</td></tr>
          <tr class="row-blue"><td>2.1.2(7)</td><td>Admission Extract</td></tr>
          <tr class="row-blue">
            <td rowspan="2">7</td><td rowspan="2">2.4.1</td><td>2.4.1(1)</td><td>Sanctioned Letters</td>
          </tr>
          <tr class="row-blue"><td>2.4.1(2)</td><td>List of full time teachers for A.Y 2023-24</td></tr>
          <tr class="row-blue">
            <td>8</td><td>2.4.2</td><td>2.4.2(1)</td>
            <td>List of full time teachers with Ph.D. / SLET with their e-copies of Ph.D. / SLET in A.Y 2023-24</td>
          </tr>
          <tr class="row-blue">
            <td>9</td><td>2.6.3</td><td>2.6.3(1)</td>
            <td>Result sheet published by the University for the A.Y 2023-24</td>
          </tr>

          <!-- Criterion 3 -->
          <tr class="row-orange">
            <td>10</td><td>3.2.2</td><td>3.2.2(1)</td>
            <td>Documents related to Seminars / Workshops organized during the A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td>11</td><td>3.3.2</td><td>3.3.2</td>
            <td>e-copies of first page, content page and participation of conferences during the assessment period</td>
          </tr>
          <tr class="row-orange">
            <td>12</td><td>3.4.1</td><td>3.4.1</td>
            <td>List of extension activities for A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td>13</td><td>3.4.2</td><td>3.4.2</td>
            <td>e-copies of recognition letter for extension activities for A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td>14</td><td>3.4.3</td><td>3.4.3(1)</td>
            <td>Documents related to organized extension activities during A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td>15</td><td>3.5.1</td><td>3.5.1(1)</td>
            <td>e-copies of MoUs established in A.Y 2023-24</td>
          </tr>

          <!-- Criterion 4 -->
          <tr class="row-blue">
            <td rowspan="3">16</td><td rowspan="3">4.3.2</td><td>4.3.2(1)</td><td>Student-Computer Ratio</td>
          </tr>
          <tr class="row-blue"><td>4.3.2(2)</td><td>Invoices of the Computers</td></tr>
          <tr class="row-blue"><td>4.3.2(3)</td><td>Stock Register Entry</td></tr>

          <!-- Criterion 5 -->
          <tr class="row-orange">
            <td rowspan="2">17</td><td rowspan="2">5.1.1</td><td>5.1.1(1)</td>
            <td>Sanction letters and list of students benefited by Government in A.Y 2023-24</td>
          </tr>
          <tr class="row-orange"><td>5.1.1(7)</td><td>List of students benefitted by Institutional Freeships for A.Y 2023-24</td></tr>
          <tr class="row-orange">
            <td rowspan="5">18</td><td rowspan="5">5.1.2</td><td>5.1.2(1)</td><td>Documents related to organised softskills programmes for A.Y 2023-24</td>
          </tr>
          <tr class="row-orange"><td>5.1.2(2)</td><td>Documents related to organised language and communication skills for A.Y 2023-24</td></tr>
          <tr class="row-orange"><td>5.1.2(3)</td><td>Documents related to organised lifeskills programmes for A.Y 2023-24</td></tr>
          <tr class="row-orange"><td>5.1.2(4)</td><td>Documents related to organised ICT/Communication skills programmes for A.Y 2023-24</td></tr>
          <tr class="row-orange"><td>5.1.2(5)</td><td>Institutional Weblink</td></tr>
          <tr class="row-orange">
            <td>19</td><td>5.1.3</td><td>5.1.3(1)</td>
            <td>Documents related to guidance for competitive examinations and career counselling during A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td rowspan="5">20</td><td rowspan="5">5.1.4</td><td>5.1.4(1)</td><td>Minutes of Anti Ragging Committee</td>
          </tr>
          <tr class="row-orange"><td>5.1.4(2)</td><td>Minutes of Women Empowerment Grievance Redressal Committee</td></tr>
          <tr class="row-orange"><td>5.1.4(3)</td><td>Grievance Redressal Cell</td></tr>
          <tr class="row-orange"><td>5.1.4(4)</td><td>Sample filled undertaking forms</td></tr>
          <tr class="row-orange"><td>5.1.4(5)</td><td>Weblink for online grievance cell</td></tr>
          <tr class="row-orange">
            <td>21</td><td>5.2.1</td><td>5.2.1(1)</td>
            <td>Offer letters of the placed students and admission letters of students enrolled in higher education during A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td>22</td><td>5.2.2</td><td>5.2.2(1)</td>
            <td>List of students with e-copies of qualifying certificates in A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td>23</td><td>5.3.1</td><td>5.3.1(1)</td>
            <td>e-copies of merit certificates in sports and culturals during A.Y 2023-24</td>
          </tr>
          <tr class="row-orange">
            <td>24</td><td>5.3.2</td><td>5.3.2(1)</td>
            <td>Documents related to sports and cultural competitions organised in the institution and e-copies of participation certificates in other institutions in A.Y 2023-24</td>
          </tr>

          <!-- Criterion 6 -->
          <tr class="row-blue">
            <td rowspan="5">25</td><td rowspan="5">6.2.2</td><td>6.2.2(1)</td><td>Policy on E-governance</td>
          </tr>
          <tr class="row-blue"><td>6.2.2(2)</td><td>Invoices</td></tr>
          <tr class="row-blue"><td>6.2.2(3)</td><td>Screenshots</td></tr>
          <tr class="row-blue"><td>6.2.2(4)</td><td>ERP Document</td></tr>
          <tr class="row-blue"><td>6.2.2(5)</td><td>Annual Report</td></tr>
          <tr class="row-blue">
            <td rowspan="3">26</td><td rowspan="3">6.3.2</td><td>6.3.2(1)</td><td>Policy Document</td>
          </tr>
          <tr class="row-blue"><td>6.3.2(2)</td><td>List of Fulltime Teachers benefited by Financial Support with their Sanction Letters A.Y 2023-24</td></tr>
          <tr class="row-blue"><td>6.3.2(7)</td><td>Audited Statements</td></tr>
          <tr class="row-blue">
            <td rowspan="2">27</td><td rowspan="2">6.3.3</td><td>6.3.3(1)</td>
            <td>Organised Professional Development Programmes for Teachers and Administrative Training Programme for Non-Teaching along with their e-copies of Participation A.Y 2023-24</td>
          </tr>
          <tr class="row-blue"><td>6.3.3(6)</td><td>Annual Report</td></tr>
          <tr class="row-blue">
            <td rowspan="5">28</td><td rowspan="5">6.5.2</td><td>6.5.2(1)</td><td>Minutes of IQAC</td>
          </tr>
          <tr class="row-blue"><td>6.5.2(2)</td><td>Feedback Collected, Analysis and Action Taken Report</td></tr>
          <tr class="row-blue"><td>6.5.2(3)</td><td>e-copies of Collaborations with other Institutions</td></tr>
          <tr class="row-blue"><td>6.5.2(4)</td><td>List of Collaborative activities with other Institutions</td></tr>
          <tr class="row-blue"><td>6.5.2(5)</td><td>ISO Certificate</td></tr>

          <!-- Criterion 7 -->
          <tr class="row-orange">
            <td rowspan="6">29</td><td rowspan="6">7.1.2</td><td>7.1.2(1)</td><td>Geo-Tagged Photographs</td>
          </tr>
          <tr class="row-orange"><td>7.1.2(2)</td><td>Invoices</td></tr>
          <tr class="row-orange"><td>7.1.2(3)</td><td>MoUs for Solid and e-Waste Management</td></tr>
          <tr class="row-orange"><td>7.1.2(4)</td><td>Circulars for No Entry of Automobiles and Ban on Use of Plastic</td></tr>
          <tr class="row-orange"><td>7.1.2(5)</td><td>Scribe Letters</td></tr>
          <tr class="row-orange"><td>7.1.2(6)</td><td>Policy Documents</td></tr>
          <tr class="row-orange">
            <td rowspan="7">30</td><td rowspan="7">7.1.3</td><td>7.1.3(1)</td><td>Policy for Energy Utilization and Environment</td>
          </tr>
          <tr class="row-orange"><td>7.1.3(2)</td><td>Green Audit Report</td></tr>
          <tr class="row-orange"><td>7.1.3(3)</td><td>Environment Audit Report</td></tr>
          <tr class="row-orange"><td>7.1.3(4)</td><td>Energy Audit Report</td></tr>
          <tr class="row-orange"><td>7.1.3(5)</td><td>Document Related to Clean and Green Campus Initiatives</td></tr>
          <tr class="row-orange"><td>7.1.3(6)</td><td>Report on Green Campus Initiatives</td></tr>
          <tr class="row-orange"><td>7.1.3(7)</td><td>Document related to Environment Promotion Activities beyond Campus</td></tr>

        </tbody>
      </table>
    </div>
    `
  }
};

app.get('/naac/:page', (req, res) => {
  const page = naacPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: page.parentLabel || 'NAAC',
    parentUrl: '#'
  });
});


const informationCornerPages = {
  'rti': {
    title: 'RTI',
    content: `
      <h3 class="section-heading-underline">Statutory declaration under the RTI act 2005</h3>

      <p class="college-para">
        Section 4 (1) (b) of ACT 2005 covers the statutory declaration of <strong>SRI SIVANI COLLEGE OF PHARMACY</strong>, N.H-16, Chilakapalem Jn, Etcherla Mandal, Srikakulam Dist -532402.
      </p>

      <p class="college-para">
        <strong>Website:</strong>srisivanisscp.com/Our college is approved by PCI recognized by Directorate of Technical Education of Govt of Andhra Pradesh and Affiliated to Jawaharlal Nehru Technological University, Gurajada, Vizianagaram. The college has a Governing Council and College Development as per the provisions. It runs as per the rules and regulations stipulated by Government of Andhra Pradesh from time to time. The college comes under "Private - Self Financing" category and therefore financial transactions are audited by the private auditors. The college has different bodies to maintain all types of discipline in the campus. The applications under the RTI act along with postal order/demand draft for Rs.10.00 obtained in favor of principal, SRI SIVANI COLLEGE OF PHARMACY, may be sent to the Public Information Officer (PIO) or handed over in his/her office, for any information required. All information about the college is open for the public and it can be obtained by a citizen of India.
      </p>

      <h3 class="section-heading-underline">Names, Designations and other particulars of public information officers</h3>

      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Contact Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Dr. K Rajkiran</td>
              <td>Appellate Information Officer</td>
              <td>7382651422</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Mr.G.Manoj Kumar</td>
              <td>Public Information Officer</td>
              <td>7013969337</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pdf-card" style="margin-top: 25px;">
        <div class="pdf-card-label">RTI</div>
        <a href="/assets/pdfs/rti.pdf" target="_blank" class="pdf-card-view">
          <i class="bi bi-file-earmark-text"></i>
        </a>
      </div>
    `
  }
};

app.get('/information-corner/:page', (req, res) => {
  const page = informationCornerPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'Information Corner',
    parentUrl: '/information-corner/rti'
  });
});


const gardenPlants = [
  'Chinese Ixora', 'Gaint Calotrope', 'Java Plum', 'Curry Leaves', 'Dumb Cane',
  'Agaru', 'Portia Tree', 'Red Frangipani', 'Rose', 'Sapota', 'Tulsi',
  'Shankam Pushpam', 'Syzygium', 'Turmeric', 'Xanthomonas', 'Jujube', 'Kanuga',
  'Lemon', 'Mango Tree', 'Mentha', 'Ming Aralia', 'Moss Rose', 'Orange',
  'Paper Mulberry', 'Pomegranate', 'Fire Bush', 'Guava', 'Henna', 'Jack Fruit',
  'Jammi Tree', 'Jatropha', 'Cashew', 'Chalmeri', 'Coconut Nucifera',
  'Custard Apple', 'Euphoria Milli', 'Feroniella', 'Aloe Vera', 'Ashoka',
  'Badam', 'Bamboo', 'Bottle Palm', 'Candle Tree', 'Averrhoa Carambola',
  'Bryophyllum', 'Yellow Alamanda', 'Carissa Congesta', 'Nerium oleander',
  'Neem', 'Jet Plant', 'Saraswathi Leaf', 'Aristolochia', 'Catharanthus',
  'Datura', 'Parijatham', 'Tamalapaku', 'Coriander', 'Usiri', 'Cuphea'
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

// Detailed content for plants that have been filled in.
// Add more entries here as you gather info for other plants.
const gardenPlantDetails = {
  'chinese-ixora': {
    botanicalName: 'IXORA CHINESIS',
    family: 'Rubiaceae',
    synonyms: {
      english: 'Flame tree of the woods, Scarlet Ixora',
      hindi: 'Cheeneeixora',
      tamil: '',
      telugu: ''
    },
    chemicalConstituents: 'The major constituents of triterpenes were ursolic acid (27.34%), oleanolic (20.16%) and lupeol (15.10%). Ixora coccinea flower is of ursolic acid chemotype.',
    structureImage: '/assets/garden/structures/chinese-ixora-structure.jpg',
    uses: [
      'Used for hypertension',
      'Anaemia and general debility',
      'It is helpful for the bone marrow',
      'The plant is used to treat abscesses',
      'Wounds',
      'Rheumatism',
      'Bruises',
      'Further, Ixora Chinensis can be utilised as a resolvent and anodyne',
      'Feathery leaves, ranging from 3 to 6 inches in length, and produce large clusters of tiny flowers in the summer',
      'Antioxidative'
    ],
    pdf: '/assets/pdfs/garden/chinese-ixora.pdf'
  },
    'gaint-calotrope': {
      botanicalName: 'CALOTROPIS GIGANTEA',
      family: 'Apocynaceae',
      synonyms: {
        english: 'Asclepias gigantea',
        hindi: 'Vishaal kailotrop',
        tamil: 'Perumkalârp',
        telugu: 'Pedda kelârp'
      },
      chemicalConstituents: 'Calotropis gigantea plant contain chemical constituents in which cardenolides, flavonoids, terpenes, pregnanes and nonprotein amino acid and more in various concentration.',
      structureImage: '/assets/garden/structures/gaint-calotrope-structure.svg',
      uses: [
        'Effective in treating skin',
        'Digestive',
        'Respiratory',
        'Circulatory and neurological disorder',
        'It was used to treat fevers',
        'Elephantiasis',
        'Nausea, vomiting, and diarrehea',
        'The milky juice of Calotropis procera was used against arthritis',
        'Cancer',
        'And acts as an antidote for snake bite'
      ],
      pdf: '/assets/pdfs/garden/gaint-calotrope.pdf'
    },
    'java-plum': {
    botanicalName: 'SYZYGIUM CUMINI',
    family: 'Myrtaceae',
    synonyms: {
      english: 'Java plum',
      hindi: 'Jaavaplam',
      tamil: 'Jâvâpiam',
      telugu: 'Jâvâplaâ'
    },
    chemicalConstituents: 'The leaves are rich in acylated flavonol glycosides[1] (Figure 1A), quercetin, myricetin, myricitin, myricetin 3-O-4-acetyl-L-rhamnopyranoside[11] (Figure 1B), triterpenoids[12], esterase, galloyl carboxylase[13], and tannin[3].',
    structureImage: '/assets/garden/structures/java-plum-structure.jpg',
    uses: [
      'Diabetes. In Ayurveda, of the many jamun benefits, its assistance in the management of diabetes is highly recognised',
      'Cholesterol',
      'Antioxidant',
      'Improves Gut Health',
      'Increases Haemoglobin',
      'Improves Respiratory Health',
      'Promotes Weight Loss',
      'Strengthens Teeth and Gums',
      'Digestive anthelmintic and diuretic',
      'Help combat oxidative stress and reduce the risk of chronic diseases'
    ],
    pdf: '/assets/pdfs/garden/java-plum.pdf'
  },
  'curry-leaves': {
    botanicalName: 'MURRAYA KOENIGII',
    family: 'Rutaceae',
    synonyms: {
      english: 'Sweet Neem leaves',
      hindi: 'Karri patha',
      tamil: 'Karuvepillai',
      telugu: 'Karivepaku'
    },
    chemicalConstituents: 'The oils from the curry leaves were found to contain mostly oxygenated monoterpenes. Using GC and GC-MS 33 constituents were found with linalool (32.83%), elemol (7.44%), geranyl acetate (6.18%), myrcene (6.12%), allo-ocimene (5.02), &alpha;-terpinene (4.9%), and (E)-&beta;-ocimene (3.68%) as the main compounds.',
    structureImage: '/assets/garden/structures/curry-leaves-structure.jpg',
    uses: [
      'Treatment of anaemia',
      'Diabetes',
      'Indigestion',
      'Obesity',
      'Kidney problems',
      'Hair and skin problems',
      'Aiding digestion',
      'Promoting hair health',
      'Reducing cholesterol',
      'Controlling diabetes'
    ],
    pdf: '/assets/pdfs/garden/curry-leaves.pdf'
  },
  'dumb-cane': {
    botanicalName: 'DIEFFENBACHIA',
    family: 'Araceae',
    synonyms: {
      english: 'Dieffenbachia',
      hindi: 'Goonga bent',
      tamil: '', // TODO: source text was garbled ("Âªmaikarumpu") - please verify and fill in
      telugu: ''  // TODO: source text was garbled ("MÂ«gaceraku") - please verify and fill in
    },
    chemicalConstituents: 'All parts of Dieffenbachia contain irritant toxins including calcium oxalate needles (raphides) and oxalic acid, and possibly saponins, glycosides, alkaloids, proteolytic enzymes, protein-like substances and cyanogenic glycosides.',
    structureImage: '/assets/garden/structures/dumb-cane-structure.jpg',
    uses: [
      'Purify indoor air',
      'Analgesic',
      'Aphrodisiac',
      'Caustic',
      'Contraceptive',
      'Cyanogenic',
      'Insecticidal',
      'Rodenticide',
      'Vesicant'
    ],
    notes: 'Notable for its variegated leaves, not flowers, and also for its ability to purify indoor air.',
    pdf: '/assets/pdfs/garden/dumb-cane.pdf'
  },
  'agaru': {
    botanicalName: 'AQUILARIA MALACCENSIS',
    family: 'Thymelaeaceae',
    synonyms: {
      english: 'Agar',
      hindi: 'Agaru',
      tamil: 'Akaru',
      telugu: 'Agaru'
    },
    chemicalConstituents: "Agaru's heartwood is rich in essential oil, resins, alkaloids (liriodenine), saponins, steroids, terpenoids, tannins, Agaru 7 flavonoids (aquisiflavoside, aquilarisinin, aquilarisin, and aquilarixanthone), and phenolic compounds.",
    structureImage: '/assets/garden/structures/agaru-structure.jpg',
    uses: [
      'Helpful in increasing appetite',
      'Helps remove bad odor and bad breath',
      'Beneficial in diarrhea',
      'Able to reduce intestinal gas, inflammation and abdominal distension',
      'Effective in fever',
      'Helps relieve fatigue and weakness after fever',
      'Beneficial in bronchitis',
      'Beneficial in asthma',
      'Effective herb for managing cough and cold',
      'Controls cough, releases mucus, clears air passages, allowing the patient to breathe freely'
    ],
    pdf: '/assets/pdfs/garden/agaru.pdf'
  },
  'portia-tree': {
    botanicalName: 'THESPESIA POPULNEA', // NOTE: not visible on source page (label rendered as "BOTANICALFAMILY:" with no name) - inferred from common name + family; please verify
    family: 'Malvaceae',
    synonyms: {
      english: 'Indian tulip tree',
      hindi: 'Paras-pipal',
      tamil: 'Pavarasumarum',
      telugu: '' // TODO: source text was garbled ("PÅ‚rá¹iyÄ‚ceá¹á¹u") - please verify and fill in
    },
    chemicalConstituents: "Alkaloids, flavonoids, carbohydrates, phytosterols, tannins, saponins, proteins and amino acids, terpenes, phenols, gums and mucilage's.",
    structureImage: '/assets/garden/structures/portia-tree-structure.jpg',
    uses: [
      'Medicinally used for the treatment of numerous diseases',
      'Including cutaneous infections',
      'Brain and liver disorders',
      'Diuretic',
      'Stimulant',
      'A decoction of the bark and fruit is mixed with oil and used to treat scabies',
      'A decoction of the astringent bark is used to treat dysentery and haemorrhoid',
      'A maceration of it is drunk for colds',
      'A cold infusion of the bark is used in treating dysentery',
      'Diabetes, gonorrhoea, yellow urine, and thrush'
    ],
    pdf: '/assets/pdfs/garden/portia-tree.pdf'
  },
  'red-frangipani': {
    botanicalName: 'PLUMERIA RUBRA', // NOTE: likely a typo on the source page - correct botanical name for frangipani is "Plumeria rubra"; consider fixing
    family: 'Apocynaceae',
    synonyms: {
      english: 'Red Frangipani',
      hindi: 'Golachin',
      tamil: 'Nelasampagi',
      telugu: '"ErupuphrÄá¹...gipÄni' // TODO: source text was garbled ("ErupuphrÄá¹...gipÄni") - please verify and fill in
    },
    chemicalConstituents: 'Frangipani contains alkaloids, glycosides, phenolic compounds, saponins, tannins, and steroids. Moreover, frangipani has shown many biological activities including antioxidant, antimicrobial, antiviral, analgesic, anticancer, and anthelmintic.',
    structureImage: '/assets/garden/structures/red-frangipani-structure.jpg',
    uses: [
      'Anti-fertility',
      'Anti-inflammatory',
      'Antioxidant',
      'Hepatoprotective',
      'Antimicrobial activities',
      'Diabetes mellitus',
      'Wounds and skin disease, diuretic, purgative',
      'Abortion and also used in cosmetics',
      'Aromatherapy',
      'Necklaces and as offerings'
    ],
    pdf: '/assets/pdfs/garden/red-frangipani.pdf'
  },
   'rose': {
    botanicalName: 'Rosa', // TODO: not visible on source page (label rendered as "BOTANICAL FAMILY:" with no name filled in) - please fill in the specific species/cultivar name
    family: 'Rosaceae',
    synonyms: {
      english: 'Rosa',
      hindi: 'Gulaab',
      tamil: 'Uyarntatu',
      telugu: 'Gulabi' // NOTE: source text was garbled ("GulÄ␣bÄ«") - inferred as "Gulabi", please verify
    },
    chemicalConstituents: 'Rose flowers are rich in biologically active compounds, such as phenolics, flavonoids, anthocyanins, and carotenoids. Quinic acid (43.12%), Pyrogallol (21.92%), 5-Hydroxymethylfurfural (11.52%), 4H-Pyran-4-one,2,3-dihydro-3,5-dihydroxy-6-methyl- (8.31%), and Levoglucosan (5.69%).',
    structureImage: '/assets/garden/structures/rose-structure.jpg',
    uses: [
      'Anti-inflammatory',
      'Analgesic',
      'Antibacterial',
      'Antioxidant',
      'Nervous tension',
      'Rose petal jam',
      'Sugared rose petals',
      'Diabetes medication',
      'Antimicrobial effects',
      'Brewing rose tea'
    ],
    pdf: '/assets/pdfs/garden/rose.pdf'
  },
  'sapota': {
    botanicalName: 'MANILKARA ZAPOTA',
    family: 'Sapotaceae',
    synonyms: {
      english: 'Chikoo, chico',
      hindi: 'Cheekoo',
      tamil: '', // TODO: source text was garbled ("CappA-a1a1A-") - please verify and fill in
      telugu: '' // TODO: source text was garbled ("SapA-a1A-") - please verify and fill in
    },
    chemicalConstituents: 'M. zapota leaves have been found to contain apigenin-7-O-alpha-L-rhamnoside, myricetin-3-O-alpha-L-rhamnoside and caffeic acid (Fayek et al., 2012), while kaempferol has been isolated from the seed extract (Shafii et al., 2017). Chemical structures of various phenolic compounds isolated from M. zapota are shown below.',
    structureImage: '/assets/garden/structures/sapota-structure.jpg',
    uses: [
      'Supporting digestion',
      'Boosting the immune system',
      'Antioxidants',
      'Aids digestion',
      'Helps in weight loss',
      'Works well for arthritis',
      'Strengthening bones',
      'Natural cough and cold remedy',
      'Haemostatic properties',
      'Boosts immunity'
    ],
    pdf: '/assets/pdfs/garden/sapota.pdf'
  },
  'tulsi': {
    botanicalName: 'OCIMUM TENUIFLORUM',
    family: 'Lamiaceae',
    synonyms: {
      english: 'Basil',
      hindi: 'Tulasee',
      tamil: 'Tulasi',
      telugu: 'Tulasi'
    },
    chemicalConstituents: 'Tulsi is cultivated for religious and traditional medicine purposes, and also for its essential oil. The Tulsi plant contains numerous active compounds, and the major compounds are linalol, eugenol, methylchavicol, methylcinnamate, linolene, ocimene, pinene, cineol, anethol, estragol, thymol, citral, and camphor.',
    structureImage: '/assets/garden/structures/tulsi-structure.jpg',
    uses: [
      'Boosts immunity power',
      'Antiviral',
      'Antifungal',
      'Antiprotozoal',
      'Antimalarial',
      'It is also used to treat heart disease and fever',
      'Tulsi is also used to treat respiratory problems',
      'Tulsi is used to cure fever',
      'Common cold and sore throat',
      'Headaches and kidney stones'
    ],
    pdf: '/assets/pdfs/garden/tulsi.pdf'
  },
  'shankam-pushpam': {
    botanicalName: 'CLITORIA TERNATEA',
    family: 'Fabaceae',
    synonyms: {
      english: 'Asian pigeonwings, Bluebellvine',
      hindi: 'Shankhapushpi',
      tamil: 'Sangu Pushpam',
      telugu: 'Shankampushpam'
    },
    chemicalConstituents: 'It also contains protein, amino acids and the alkaloids - convolvine, convosine, subhirsine and convolvidine - along with fatty acid and wax constituents, hydrocarbons, aliphatic compounds and sterols, and certain other bio-chemicals. Carbohydrates: D-glucose, maltose, rhamnose, sucrose, starch and other carbohydrates.',
    structureImage: '/assets/garden/structures/shankam-pushpam-structure.jpg', // NOTE: source page shows structures labeled "Nifurtimox" and "Benzaidazole" - these are antiparasitic drug compounds, not known constituents of Clitoria ternatea. Likely a mismatched image on the source page - please verify before reusing.
    uses: [
      'Helps to calm down the brain and relieve stress as well as anxiety',
      'Improves memory by acting as a brain tonic due to its Medhya (improves intelligence) property',
      'Can be taken as Shankhapushpi powder along with warm milk or water to help boost memory and concentration',
      'Enhancing concentration',
      'Learning capabilities',
      'Mental fatigue',
      'Insomnia',
      'Stress',
      'Anxiety',
      'Depression'
    ],
    pdf: '/assets/pdfs/garden/shankam-pushpam.pdf'
  },
  'syzygium': {
    botanicalName: 'SYZYGIUM CUMINI',
    family: 'Myrtaceae',
    synonyms: {
      english: 'Jambolan, black plum',
      hindi: 'Syzygium', // NOTE: this is the genus name, not a Hindi common name - the actual Hindi name for this plant is typically "Jamun". Likely a data error on the source page - please verify.
      tamil: '', // TODO: source text was garbled ("Sijjiyaá¹á—") - please verify and fill in
      telugu: 'Cijijiyam' // NOTE: this rendered cleanly but doesn't match the commonly known Telugu name ("Neredu"/"Neredu pandu") - please double check accuracy
    },
    chemicalConstituents: 'Anthocyanins, glucoside, ellagic acid, isoquercetin, kaempferol and myricetin. The seeds are claimed to contain the alkaloid jambosine, and the glycoside jambolin (or antimellin), which halts the diastatic conversion of starch into sugar.',
    structureImage: '/assets/garden/structures/syzygium-structure.jpg',
    uses: [
      'Bronchitis',
      'Asthma',
      'Thirst',
      'Biliousness',
      'Dysentery and ulcers',
      'Astringent, carminative',
      'Stomachic, diuretic, antidiabetic',
      'Anti-diarrheal, anti-inflammatory',
      'Radioprotective, gastroprotective, antioxidant',
      'Antibacterial',
      'Cardioprotective effects'
    ],
    pdf: '/assets/pdfs/garden/syzygium.pdf'
  },
  'turmeric': {
    botanicalName: 'CURCUMA LONGA',
    family: 'Zingiberaceae', // corrected from "Zingiberace" on source page (missing trailing "ae")
    synonyms: {
      english: 'Turmeric',
      hindi: 'Halde',
      tamil: 'Mancal',
      telugu: 'Pasupu'
    },
    chemicalConstituents: 'Turmeric contains 3-6% polyphenolic compounds, collectively known as curcuminoids, which is a mixture of curcumin, demethoxycurcumin and bisdemethoxycurcumin.',
    structureImage: '/assets/garden/structures/turmeric-structure.jpg',
    uses: [
      'Degenerative eye conditions',
      'Metabolic syndrome',
      'Arthritis',
      'Hyperlipidaemia (cholesterol in the blood)',
      'Anxiety',
      'Muscle soreness after exercise',
      'Kidney health',
      'Diabetes, high cholesterol',
      'Burns, and many other conditions',
      'Inflammation'
    ],
    pdf: '/assets/pdfs/garden/turmeric.pdf'
  },
  'xanthomonas': {
    botanicalName: 'XANTHOMONAS AXONOPODIS', // corrected from "XANTHOMONUS AXONOPODIS" on source page (typo)
    family: 'Xanthomonadaceae',
    synonyms: {
      english: 'Citric', // NOTE: unclear/possibly incorrect - "Citric" isn't a standard common name for Xanthomonas; may be referencing "citrus canker" (caused by X. axonopodis pv. citri). Please verify against source.
      hindi: 'Xanthomonas', // corrected from "Zainthomonaas" on source page (typo)
      tamil: '', // TODO: source text was garbled ("CÄntÅmÄá¹‰‰Äs") - please verify and fill in
      telugu: 'Xanthomonas'
    },
    chemicalConstituents: 'Xanthomonas species produce an edible polysaccharide called xanthan gum, which has a wide range of industrial uses including foods, petroleum products, and cosmetics. Xanthan also plays a role in the disease cycle of Xanthomonas.',
    structureImage: '/assets/garden/structures/xanthomonas-structure.jpg',
    uses: [
      'Wide industrial use as xanthan gum, including in foods, petroleum products, and cosmetics',
      'Plays a role in the disease cycle of Xanthomonas',
      'Xanthan gum is one of the main components of biofilm matrix'
    ],
    pdf: '/assets/pdfs/garden/xanthomonas.pdf'
  },
  'jujube': {
    botanicalName: 'ZIZIPHUS JUJUBA', // corrected from "ZIZIPUS, RED DATE" on source page - "Zizipus" was a misspelling of the genus "Ziziphus", and "Red Date" is a common name, not part of the botanical name
    family: 'Rhamnaceae',
    synonyms: {
      english: 'Red or Chinese date',
      hindi: 'Ber',
      tamil: '', // TODO: source page listed "Jujube fruit" here, which is an English common name, not a Tamil word - please verify and fill in the correct Tamil term
      telugu: 'Regi Pandu'
    },
    chemicalConstituents: 'Jujube fruit is rich in vitamins A, B, and C, as well as minerals and various compounds such as alkaloids, flavonoids, sterols, tannins, saponins, and fatty acids.',
    structureImage: '/assets/garden/structures/jujube-structure.jpg',
    uses: [
      'Skin rejuvenation',
      'Wound healing',
      'Promoting digestion',
      'Strengthening bones',
      'Weight loss',
      'Potential in protecting the heart',
      'Anxiety',
      'Insomnia',
      'Memory support',
      'Cancer (potential benefits)',
      'Boosts immunity and helps control blood sugar levels'
    ],
    pdf: '/assets/pdfs/garden/jujube.pdf'
  },
  'kanuga': {
    botanicalName: 'PONGAMIA PINNATA (LINN.) PIERRE', // reformatted from "PONGAMIA PINNATA LINN PIERRE" on source page - "Linn" and "Pierre" are botanical authority citations and conventionally need punctuation to read correctly
    family: 'Fabaceae',
    synonyms: {
      english: 'Millettia pinnata', // NOTE: this is a scientific synonym, not a true English common name - the source page lists it under "ENGLISH" but it may be worth double-checking whether a common name (e.g. "Indian beech") should go here instead
      hindi: 'Kanji, Karanj',
      tamil: 'Pungam',
      telugu: 'Gaanuga, Kanuga'
    },
    chemicalConstituents: 'Pongamia pinnata seeds contain 19% moisture, 27.5% fatty oil, 17.4% protein, 6.6% starch, 7.3% crude fiber, and 2.4% ash (Bringi, 1987). Saturated and unsaturated fatty acid composition in seeds was reported to be 20.5% and 79.4%, respectively.',
    structureImage: '/assets/garden/structures/kanuga-structure.jpg',
    uses: [
      'Commonly used in traditional medicine for the treatment of skin diseases',
      'Including fungal infections',
      'Known to alleviate symptoms of hemorrhoids',
      'Ulcers',
      'Liver pain',
      'Dyspepsia',
      'Rheumatic problems',
      'Scabies',
      'Herpes',
      'Select cases of leprosy'
    ],
    pdf: '/assets/pdfs/garden/kanuga.pdf'
  },
  'lemon': {
    botanicalName: 'CITRUS LIMONUM RISSO',
    family: 'Rutaceae',
    synonyms: {
      english: 'Lemon',
      hindi: 'Neemboo',
      tamil: 'Elumiccai',
      telugu: 'Nimmakaya' // source text was slightly garbled ("NimmakÄya") but this is a well-known term, filled in with confidence
    },
    chemicalConstituents: 'Lemon has many bioactive components such as citric acid, ascorbic acid, minerals, flavonoids and essential oils. Citrus essential oils are generally recognized as safe (GRAS) and are a complex mixture of about 400 constituents consisting of 85-99% volatile and 1-15% non-volatile components.',
    structureImage: '/assets/garden/structures/lemon-structure.jpg',
    uses: [
      'Supports heart health; lemons are a good source of vitamin C',
      'Helps control weight; lemons are often promoted as a weight loss food',
      'Prevents kidney stones',
      'Protects against anaemia',
      'Reduces cancer risk', // NOTE: source page also lists "Helps Fight Cancer" as a separate bullet - kept both since they appeared as distinct points, but you may want to merge these
      'Improves digestive health',
      'Helps fight cancer',
      'Better complexion',
      'Lowers risk of stroke and lowers blood pressure',
      'Assists nervous system'
    ],
    pdf: '/assets/pdfs/garden/lemon.pdf'
  },
  'mango-tree': {
    botanicalName: 'MANGIFERA INDICA',
    family: 'Anacardiaceae', // corrected from "Anacardiaceous" on source page (typo)
    synonyms: {
      english: 'Mango',
      hindi: 'Aam',
      tamil: 'Maangai', // source text was garbled ("Mankaá¹‰‰i") - inferred as "Maangai", please verify
      telugu: 'Mamidi'
    },
    chemicalConstituents: 'Contains approximately 90% moisture, 8.8% carbohydrate, 0.7% protein, 0.1% fat, 0.02% phosphorus, 0.01% calcium, 4.5 mg/100g iron, 6.3-20.2 mg/100g carotene as vitamin A, 30 mg/100g riboflavin, and 3 mg/100g ascorbic acid. Also contains the amino acids lysine, leucine, cysteine, valine, arginine, phenylalanine, and methionine. The lipid composition increases during ripening, particularly the omega-3 and omega-6 fatty acids.',
    structureImage: '/assets/garden/structures/mango-tree-structure.jpg',
    uses: [
      'Diabetes medication',
      'Improve skin health',
      'High in antioxidants',
      'The mango tree absorbs carbon dioxide and produces oxygen, and supports the livelihoods of thousands of workers', // NOTE: this reads as a fact about the tree's ecological/economic role rather than a health use - appeared as a sub-point under "High in antioxidants" on the source page, but content doesn't match; may be misplaced there
      'Support eye health',
      'Boost the immune system',
      'Vitamins, minerals, and antioxidants in mangoes can provide important health benefits',
      'Vitamin K helps your blood clot effectively and helps prevent anaemia',
      'Plays an important role in strengthening your bones',
      'May have anti-inflammatory properties'
    ],
    pdf: '/assets/pdfs/garden/mango-tree.pdf'
  },
  'mentha': {
    botanicalName: 'MENTHA PIPERITA',
    family: 'Lamiaceae',
    synonyms: {
      english: 'Mint',
      hindi: 'Pudina', // source text was garbled ("PudA-«nA-") - inferred as "Pudina", please verify
      tamil: 'Pudina', // source text was garbled ("PutiA-1%oA-") - inferred as "Pudina"/"Pudhina", please verify
      telugu: 'Pudeena'
    },
    chemicalConstituents: 'Its major constituents were menthol (46.32%), menthofuran (13.18%), menthyl acetate (12.10%), menthone (7.42%), and 1,8-cineole (6.06%).',
    structureImage: '/assets/garden/structures/mentha-structure.jpg',
    uses: [
      'Prevention of cancer development and anti-obesity',
      'Antimicrobial',
      'Anti-inflammatory',
      'Anti-diabetic',
      'Cardioprotective effects',
      'Filled with nutrients',
      'Improved digestive health',
      'Boosts your immune system',
      'Better brain function',
      'Supports your pregnancy'
    ],
    pdf: '/assets/pdfs/garden/mentha.pdf'
  },
  'ming-aralia': {
    botanicalName: 'POLYSCIAS',
    family: 'Araliaceae',
    synonyms: {
      english: 'Nothopanax fruticosus', // corrected spacing from "Nothopanaxfruticosus" on source page
      hindi: 'Mingaraaliya', // NOTE: this appears to be a phonetic transliteration of "Ming Aralia" rather than a distinct indigenous name - likely because this plant isn't native to the region and has no traditional local name
      tamil: 'Ming Araliya', // source text was garbled ("Miá¹‰...arÄliyÄ") - inferred as a transliteration of "Ming Araliya" similar to the Hindi entry, please verify
      telugu: 'Ming Araliya' // source text was garbled ("Miá¹‰...garÄliyÄ") - inferred as a transliteration of "Ming Araliya" similar to the Hindi entry, please verify
    },
    chemicalConstituents: 'It contains 8 types of saponins such as glucosides and tannins, about 20 types of amino acids, alkaloids, and B vitamins.',
    structureImage: '/assets/garden/structures/ming-aralia-structure.jpg',
    uses: [
      'Used in traditional medicine as a tonic',
      'Noted to have anti-inflammatory properties',
      'Anti-toxin',
      'Antibacterial',
      'Antifungal properties',
      'Also used against dysentery',
      'Neuralgia, rheumatism',
      'Digestion-related ailments',
      'Young leaves and shoots are cooked as vegetable and flavouring',
      'Treatment of various diseases, such as hepatitis, rheumatoid arthritis, bruises, lumps and carbuncles'
    ],
    pdf: '/assets/pdfs/garden/ming-aralia.pdf'
  },
  'moss-rose': {
    botanicalName: 'PORTULACA GRANDIFLORA', // corrected from "PORTALUCA GANDIFLORA" on source page (both words were misspelled - genus is "Portulaca", species is "grandiflora")
    family: 'Portulacaceae',
    synonyms: {
      english: 'Grass rose', // NOTE: the page itself is titled "Moss Rose", which is the far more common English name for Portulaca grandiflora - "Grass rose" may be an error; consider using "Moss rose" here instead
      hindi: 'Kaeegulaab',
      tamil: '', // TODO: source text was garbled ("PÃ¤ciuyarntatu") - please verify and fill in
      telugu: '' // TODO: source text was garbled ("NÃ¤cugulÃ¤bÃ«") - please verify and fill in
    },
    chemicalConstituents: 'Alkaloids, glycosides, mucilage, tannins, proteins, flavonoids, saponins, carbohydrates and triterpenoids are the chemical constituents present in Portulaca grandiflora Hook.',
    structureImage: '/assets/garden/structures/moss-rose-structure.jpg',
    uses: [
      'Management of sore throat',
      'Skin rashes and detoxification',
      'Treatment of hepatitis',
      'Liver cirrhosis with ascites',
      'Pharyngeal oedema',
      'Discomfort',
      'Moisturizing',
      'Soothing and itch relieving properties',
      'Helps reduce hair loss by strengthening the vitality and resistance of follicular cells'
    ],
    pdf: '/assets/pdfs/garden/moss-rose.pdf'
  },
  'orange': {
    botanicalName: 'CITRUS SINENSIS', // corrected from "CITRUS SINESIS" on source page (typo)
    family: 'Rutaceae',
    synonyms: {
      english: 'Sweet orange', // NOTE: source page listed "citrus fruit" here, which is a generic category name rather than a specific common name for this plant - replaced with the standard common name; revert if you'd prefer to keep it verbatim
      hindi: 'Naarangee',
      tamil: 'Aaranju', // source text was garbled ("Ã«rañcu") - inferred as "Aaranju", please verify
      telugu: 'Narinja'
    },
    chemicalConstituents: 'The compounds present in sweet orange peels consist of essential oils, flavonoid compounds, steroids, terpenoids, alkanes, and ethyl ester, categorized into the monoterpenes group.',
    structureImage: '/assets/garden/structures/orange-structure.jpg',
    uses: [
      'Helps your body make collagen, a protein that heals wounds and gives you smoother skin',
      'Forms blood vessels, muscles, cartilage, and collagen in your bones',
      'Fights inflammation and can reduce the severity of conditions like asthma, rheumatoid arthritis, and cancer', // NOTE: "Lower Cancer Risk" also appears later as a separate bullet - likely overlaps with this point, kept both since they were listed separately on the source page
      "Boosts the body's immune system to protect against viruses and germs",
      'Aids with iron absorption',
      'Lower cancer risk',
      'Might improve cognitive function'
    ],
    pdf: '/assets/pdfs/garden/orange.pdf'
  },
  'paper-mulberry': {
    botanicalName: 'BROUSSONETIA PAPYRIFERA',
    family: 'Moraceae',
    synonyms: {
      english: 'Tapa cloth tree',
      hindi: 'Kaagaj shahatoot',
      tamil: '', // TODO: source text was garbled ("KÄ¤gitaá¹‰¤malbarÄ«") - please verify and fill in
      telugu: '' // TODO: source page listed the EXACT SAME garbled string here as under Tamil ("KÄ¤gitaá¹‰¤malbarÄ«") - this looks like a copy-paste error in your CMS (one field duplicated into the other) rather than two genuinely different values. Worth checking the underlying data record for this entry.
    },
    chemicalConstituents: '', // NOTE: no chemical constituent information (compounds, percentages, etc.) was present on the source page under this heading - only general facts and medicinal uses were listed. Left blank rather than fabricated; please source this separately if needed.
    structureImage: '', // NOTE: no chemical structure image was visible on the source page for this entry, unlike other plants - please add one if available, or leave blank/hide the image block in your template
    notes: 'Fast-growing ornamental shade tree. In its native lands, paper mulberry is used in paper making. In Hawaii and other parts of the South Pacific, its bark is used to make cloth.', // general facts that were listed under "Chemical Constituents" on the source page but don't describe actual chemical compounds - reclassified here as general notes
    uses: [
      'Used in Chinese medicine to treat blood in sputum',
      'Vomiting blood',
      'Uterine bleeding',
      'Excess menstrual bleeding',
      'Wounds'
    ],
    pdf: '/assets/pdfs/garden/paper-mulberry.pdf'
  },
  'pomegranate': {
    botanicalName: 'PUNICA GRANATUM',
    family: 'Punicaceae',
    synonyms: {
      english: 'Grainy apple', // NOTE: unusual as a "common name" - this actually reflects the word's etymology (Latin/French "pomum granatum" ~ "seeded/grainy apple") rather than a name people commonly use today. Since the page itself is titled "Pomegranate," consider using that here instead - kept as shown from source, please verify intent
      hindi: 'Aanar',
      tamil: 'Maadulai', // source text was garbled ("MÄ¤tuá¸··ai") - inferred as "Maadulai", please verify
      telugu: 'Daanimma'
    },
    chemicalConstituents: 'Arils contain 85% water, 10% total sugars (mainly fructose and glucose), and 1.5% pectin. They also contain organic acids such as ascorbic acid, citric acid, and malic acid, and bioactive compounds such as phenolics and flavonoids, principally anthocyanins.',
    structureImage: '/assets/garden/structures/pomegranate-structure.jpg',
    uses: [
      'Anti-inflammatory',
      'Antioxidant properties',
      'Antibacterial properties',
      'Supports heart health',
      'Helps with rheumatoid arthritis',
      'Aids digestion',
      'Supports skin health',
      'Anticancer properties',
      'Supports memory',
      'Helps manage diabetes'
    ],
    pdf: '/assets/pdfs/garden/pomegranate.pdf'
  },
  'fire-bush': {
    botanicalName: 'HAMELIA PATENS',
    family: 'Rubiaceae',
    synonyms: {
      english: 'Hummingbird Bush', // NOTE: page is titled "Fire Bush" - both "Firebush" and "Hummingbird bush" are genuinely valid common names for Hamelia patens, so no correction needed here, just flagging that they're different from the page title
      hindi: 'Aag ki jhaadi', // reformatted from "aagkeejhaadee" on source page - appears to be a run-together phonetic spelling meaning "fire bush" in Hindi
      tamil: '', // TODO: source text was garbled ("TÄ«puTAr") - please verify and fill in
      telugu: '' // TODO: source text was garbled ("Agni buá¹‰£") - "Agni" (fire) is legible but the rest is unclear - please verify and fill in
    },
    chemicalConstituents: 'Apigenin, ephedrine, flavanones, isomaruquine, narirutin, pteropodine, rosmarinic acid, seneciophylline, speciophylline, and tannin.', // NOTE: source page listed "narirutins" and "narirutin" as two separate items - likely a duplicate typo; consolidated into one
    structureImage: '/assets/garden/structures/fire-bush-structure.jpg',
    uses: [
      'Used to treat a variety of skin problems including sores, rashes, and wounds',
      'Burns',
      'Skin fungus, and insect stings and bites',
      'Treating digestive issues and skin conditions', // NOTE: overlaps with the first bullet above (both mention general skin conditions) - kept both since they appeared as separate points on the source page, but you may want to consolidate
      "Treats athlete's foot", // corrected from "Treat athlete's foo" on source page (cut off)
      'Skin lesions and insect bites', // NOTE: overlaps with "Skin fungus, and insect stings and bites" above - likely redundant, kept both since they appeared separately
      'Nervous shock',
      'Inflammation',
      'Rheumatism, headache',
      'Asthma, and dysentery'
    ],
    pdf: '/assets/pdfs/garden/fire-bush.pdf'
  },
  'guava': {
    botanicalName: 'PSIDIUM GUAJAVA',
    family: 'Myrtaceae',
    synonyms: {
      english: 'Strawberry guava, true guava',
      hindi: 'Amrud', // NOTE: source page did not list a Hindi synonym at all (unlike every other entry, which has all four languages) - "Amrud" is the standard, well-known Hindi name for guava, added since it was missing entirely
      tamil: 'Koyya', // source text was garbled ("KoyyÃ") but this is a well-known word - Tamil for guava is "கொய்யா" (Koyya)
      telugu: 'Jama pandu' // source text was garbled ("JÃ¤mapaá¹‰‡á¸‡u") but this is a well-known word - Telugu for guava is "జామపండు" (Jama pandu)
    },
    chemicalConstituents: 'The guava fruit contains vitamin A, C, iron, phosphorus and calcium. It has more vitamin C than the orange. The fruit also contains saponin, oleanolic acid, lyxopyranoside, arabopyranoside, guaijavarin, quercetin and flavonoids.',
    structureImage: '/assets/garden/structures/guava-structure.jpg',
    uses: [
      'Diabetes',
      'Boosting immunity',
      'Cancer',
      'Heart disease',
      'Weight loss',
      'Menstrual cramps',
      'Cough',
      'Diarrhea' // corrected from "Diarrehea" on source page (typo)
    ],
    pdf: '/assets/pdfs/garden/guava.pdf'
  },
  'henna': {
    botanicalName: 'LAWSONIA INERMIS',
    family: 'Lythraceae',
    synonyms: {
      english: 'Henna tree',
      hindi: 'Mehndi',
      tamil: 'Maruthani', // NOTE: source page did not list a Tamil synonym at all (unlike English/Hindi/Telugu, which were all present) - "Maruthani" (மருதாணி) is the well-known Tamil name for henna, added since it was missing entirely
      telugu: 'Gorintaku'
    },
    chemicalConstituents: 'The traditional plant-derived henna contains the active ingredient called lawsone (2-hydroxy-1,4-naphthoquinone), which is an orange-red pigment responsible for the typical coloration. Lawsone interacts directly with the amine or sulfur functional groups of keratin due to its strong affinity.',
    structureImage: '/assets/garden/structures/henna-structure.jpg',
    notes: 'Henna has an ancient and disputed history, making it difficult to trace exactly where it originated and which culture can lay claim to it.', // NOTE: this sentence appeared as the first line under "USES" on the source page, but it's a historical/origin fact rather than a use - moved here as a general note
    uses: [
      'Decreases the growth of tumors, prevents or reduces spasms, decreases inflammation, and relieves pain',
      'Protects the skin against infections and helps eliminate inflammation',
      'Contains substances that might help fight certain infections',
      'Mainly used in celebration of special occasions such as weddings and Eid, in the joyous gathering of people',
      'The henna paste symbolizes good health and prosperity in marriage; in some cultures, the darker the henna stain, the deeper the love between two individuals',
      'Sometimes applied directly to the affected area for dandruff, eczema, scabies, fungal infections, and wounds', // corrected "cabies" to "scabies" (typo on source page)
      'Used in manufacturing cosmetics, hair dyes, and hair care products, and as a dye for nails, hands, and clothing',
      'Used on the skin as temporary "tattoos"'
    ],
    pdf: '/assets/pdfs/garden/henna.pdf'
  },
  'jack-fruit': {
    botanicalName: 'ARTOCARPUS HETEROPHYLLUS',
    family: 'Moraceae',
    synonyms: {
      english: 'Jack fruit',
      hindi: 'Kathal, Panas',
      tamil: 'Palaa',
      telugu: 'Panasa'
    },
    chemicalConstituents: 'Jackfruit contains amino acids like arginine, cystine, histidine, leucine, lysine, methionine, threonine, and tryptophan. The flesh of ripe jackfruit contains 1.9 g of protein per 100g. The protein concentration of jackfruit seeds may vary from 5.3% to 6.8%.', // removed stray citation marker "[42]" that appeared mid-sentence on the source page
    structureImage: '/assets/garden/structures/jack-fruit-structure.jpg',
    uses: [
      'Diabetes',
      'Improves digestion',
      'Boosts immunity',
      'Cancer',
      'Healthy eyes',
      'Heart disease',
      'Jackfruit seed', // NOTE: this and the next item read like topic labels rather than complete statements of benefit (unlike "Improves digestion", "Healthy eyes", etc.) - the source page content may have been truncated here; consider checking the original text for what specific claim was intended (e.g. "jackfruit seeds support X")
      'Nutritional content', // NOTE: same issue as above - reads as an incomplete topic header
      'Osteoporosis',
      'Blood pressure'
    ],
    pdf: '/assets/pdfs/garden/jack-fruit.pdf'
  },
  'jammi-tree': {
    botanicalName: 'PROSOPIS CINERARIA',
    family: 'Leguminosae', // NOTE: "Leguminosae" is an older, still-valid conserved family name; the more commonly used modern equivalent is "Fabaceae" (used for other legume entries on your site, e.g. Kanuga, Pongamia). Consider standardizing to "Fabaceae" across all entries for consistency
    synonyms: {
      english: 'Sponge tree',
      hindi: 'Jammeechetto',
      tamil: 'Jammi cettu',
      telugu: 'Jammi chettu'
    },
    chemicalConstituents: 'The plant is rich in bioactive compounds such as heneicosanoic acid, methyl heptacosanoate, 4-hydroxy benzoic acid, methyl 2-methoxy-5-hydroxycinnamate, methyl 4-hydroxycinnamate, and O-Coumaroylglycerol, which are responsible for many pharmacological actions.', // corrected "O-Coumaroylglycrol" to "O-Coumaroylglycerol" (typo on source page)
    structureImage: '/assets/garden/structures/jammi-tree-structure.jpg',
    uses: [
      'Skin diseases, blood purifier',
      'Leaves have antibacterial, antihyperglycemic, antihyperlipidemic, and antioxidant properties', // merged two fragmented bullets from source page that were clearly one sentence split across lines
      'Leprosy, dysentery, bronchitis, asthma',
      'Diabetes, anaemia, kidney and liver disorders',
      'The leaves also have fungicidal and insecticidal properties, which can control fungi and insects attacking plants', // merged two fragmented bullets from source page
      'Humans use the extract of leaves to kill intestinal parasites', // corrected "parasitic" to "parasites" on source page (grammatically the noun form was needed)
      'Its leaves also serve as valuable fodder for livestock' // corrected "Odder-Its leaves..." on source page - "Odder-" appears to be a typo/OCR artifact, reworded for a complete sentence
    ],
    pdf: '/assets/pdfs/garden/jammi-tree.pdf'
  },
  'jatropha': {
    botanicalName: 'JATROPHA INTEGERRIMA',
    family: 'Euphorbiaceae',
    synonyms: {
      english: 'Jatropha panduraefolia, Peregrina, Spicy Jatropha', // corrected "Spicy Jatroph" to "Spicy Jatropha" on source page (typo)
      hindi: 'Ratanjot',
      tamil: 'Kattamanakku',
      telugu: 'Jatropha'
    },
    chemicalConstituents: 'The leaf has pentadecanal (32.4%), 1,8-cineole (11.2%) and β-ionone (10.8%) as the major components. On the other hand, the seed oil is comprised mainly of aliphatic hydrocarbons represented by pentacosane (13.6%), hexacosane (13.3%), octacosane (12.3%), and heptacosane (10.1%).',
    structureImage: '/assets/garden/structures/jatropha-structure.jpg',
    uses: [
      'Biofuel production',
      'Softwood lumber production', // NOTE: this is somewhat unusual for a mostly ornamental shrub species (J. integerrima) - "lumber production" is more commonly associated with larger tree species. Worth double-checking this claim against your source, as it may be more accurate for a different Jatropha species (e.g. J. curcas)
      'Animal fodder (it has been used as food for elephants)',
      'Ornamental purposes (such as hedges)',
      'Used on domestic livestock for skin diseases',
      'Colic and rheumatism', // corrected from "Core and rheumatism" on source page (likely OCR/typo error - "Colic" fits the medical context)
      'Eczema',
      'Pruritus and skin warts',
      'Jatropha oil is used in soap making',
      'Used in cosmetic and dyeing industries as a dye for cloth, and for fishing nets' // corrected "fi shing" to "fishing" (spacing artifact on source page)
    ],
    pdf: '/assets/pdfs/garden/jatropha.pdf'
  },
  'cashew': {
    botanicalName: 'ANACARDIUM OCCIDENTALE',
    family: 'Anacardiaceae',
    synonyms: {
      english: 'Cashew', // CORRECTED: source page listed "Palm nut, Kola nut" - these are factually wrong. "Palm nut" refers to Elaeis guineensis (oil palm) and "Kola nut" refers to Cola acuminata - both completely different plants/genera. The correct common name for Anacardium occidentale is simply "Cashew" or "Cashew nut tree"
      hindi: 'Kaju', // corrected from "Kashyu" on source page - the standard Hindi name is "Kaju" (काजू)
      tamil: 'Muntiri',
      telugu: 'Jeedi pappu' // source text was garbled ("JÃ«Ã¡ ïpappu") but this is a well-known word - Telugu for cashew is "జీడిపప్పు" (Jeedi pappu)
    },
    chemicalConstituents: 'The ethanolic extract of Anacardium occidentale cracked bark showed various phytochemicals like phenolics, flavonoids, triterpenoids and saponins. Alkaloids were not detected.', // NOTE: source page had a contradiction - it listed "saponins" as present in the first sentence, then said "Alkaloids and saponins were not detected" in the second. Since saponins can't be both present and undetected, I removed the second mention of saponins, but please verify against your original source which compound was actually meant to be listed as "not detected" (could be tannins, glycosides, etc.)
    structureImage: '/assets/garden/structures/cashew-structure.jpg',
    uses: [
      'Diabetes',
      'High cholesterol',
      'Heart disease',
      'Stomach and intestinal (gastrointestinal) ailments', // merged two source bullets that were clearly one item split across numbers 4 and 5
      'Skin problems',
      'Lower bad cholesterol', // NOTE: overlaps with "High cholesterol" above - kept both since they appeared as separate numbered points on the source page, but you may want to consolidate
      'Helps improve metabolism and reduce Ama by improving the digestive fire',
      'Vital for the development of bones, tissues, muscles, and organs of the body' // merged two source bullets (numbers 9 and 10) that were one sentence split across lines
    ],
    pdf: '/assets/pdfs/garden/cashew.pdf'
  },
  'chalmeri': {
    botanicalName: 'PHYLLANTHUS ACIDUS',
    family: 'Phyllanthaceae',
    synonyms: {
      english: 'Tahitian gooseberry tree',
      hindi: 'Harfarauri',
      tamil: 'Aranelli',
      telugu: 'Seema Usirikaya'
    },
    chemicalConstituents: 'Presence of lignin, terpenes, sterols, polyphenolic compounds, tannins, flavonoids, glycosides, and alkaloids.', // NOTE: source page had citation/reference numbers (e.g. "3-5", "6,7", "8-10", "11,12", "13") embedded directly in the sentence without brackets, making it read like measurements. These are almost certainly footnote markers from the original research source rather than actual data - removed them for clarity. If you have access to the original source, you may want to add proper footnote citations back in.
    structureImage: '/assets/garden/structures/chalmeri-structure.jpg',
    uses: [
      'The fruit is also used to treat diabetes',
      'Relieves cough and enhances memory',
      'Decoction of the bark and roots are used for relief from bronchial catarrh, coughs, and asthma',
      'The fruit is used to make chutneys, pickles, and jams',
      'Anti-diabetic', // NOTE: overlaps with "used to treat diabetes" above - kept both since they were separate bullets on the source page, but you may want to consolidate
      'Hypolipidemic',
      'Anti-microbial',
      'Anti-inflammatory',
      'Antioxidant',
      'Hepatoprotective and anti-emetic activities'
    ],
    pdf: '/assets/pdfs/garden/chalmeri.pdf'
  },
  'coconut': {
    botanicalName: 'COCOS NUCIFERA', // corrected from "COCOS NUCIFER" on source page (missing final "a")
    family: 'Arecaceae',
    synonyms: {
      english: 'Palma cocos, Cocos nana', // these are legitimate older botanical synonyms/varietal names for Cocos nucifera, not errors - kept as-is
      hindi: 'Naariyal',
      tamil: 'Thengai', // source text was garbled ("TÄ"â¹…kÄy") but this is a well-known word - Tamil for coconut is "தேங்காய்" (Thengai)
      telugu: 'Kobbari'
    },
    chemicalConstituents: 'Coconut oil is made up of about 90% saturated fats and 9% unsaturated fats. However, the saturated fats in it differ from saturated fats in animal fats. Over 50% of the fats in coconut oil are medium chain fatty acids, such as lauric acid (12:0). Coconut oil is the highest natural source of lauric acid.',
    structureImage: '/assets/garden/structures/coconut-structure.jpg',
    uses: [
      'Controlling diabetes',
      'Contains powerful antioxidants',
      'Supports oral health',
      'Cleans the skin',
      'Antibacterial effects', // NOTE: source page had a standalone bullet that just said "Coconut oil" between "Cleans the skin" and "Antibacterial effects" - this reads like a stray section label rather than an actual use, so it was removed rather than listed as a benefit; the surrounding uses in this list already appear to be about coconut oil specifically
      'Boosts energy',
      'Boosts immunity',
      'Combats Candida' // corrected from "Combat Candida" for grammatical consistency with the rest of the list
    ],
    pdf: '/assets/pdfs/garden/coconut.pdf'
  },
  'custard-apple': {
    botanicalName: 'ANNONA RETICULATA', // corrected from "ANNONA RETICULATE" on source page (missing final "a")
    family: 'Annonaceae',
    synonyms: {
      english: 'Custard apple',
      hindi: 'Sharifa', // corrected spelling from "Shareepha" on source page (standard transliteration is "Sharifa")
      tamil: '', // TODO: source page did not list a Tamil synonym at all. Note: there is genuine ambiguity here since "custard apple" is used loosely for both Annona reticulata (this species) and the closely related Annona squamosa - please verify the correct Tamil name specifically for A. reticulata before filling in, rather than assuming
      telugu: '' // TODO: source page did not list a Telugu synonym at all - same species-ambiguity caveat as Tamil above applies; please verify before filling in
    },
    chemicalConstituents: 'Raw custard apple contains 72% water, 25% carbohydrates, 2% protein, and 1% fat. It has a calorific value of 105 Kcal/100g. The edible portion (approximately 28-55%) consists of 73.30% moisture, 1.60% protein, 0.30% fat, 0.70% mineral matter, 23.90% carbohydrates, 0.20% calcium, 0.40% phosphorous, 1.00% iron, 12.4-18.15% sugar, and 0.26-0.65% acidity.', // NOTE: source page repeated "12.4-18.15% sugar" twice at the end of the same sentence - removed the duplicate. Also note the two sets of figures given (72% water/25% carbs/2% protein/1% fat vs. the more detailed 73.30% moisture/23.90% carbs breakdown) appear to come from two different sources and don't fully agree with each other - kept both as presented on the source page, but worth verifying against a single authoritative reference if precision matters here
    structureImage: '/assets/garden/structures/custard-apple-structure.jpg',
    notes: 'Note: one of the descriptive facts on the original source page was actually about Cherimoya (Annona cherimola), a related but different species, describing it as "a green, cone-shaped fruit with leathery skin and creamy, sweet flesh." This was removed from the uses list below since it does not describe Annona reticulata (this page\'s actual species) and was not a "use" in the first place - please verify this wasn\'t meant to be on a separate Cherimoya page instead.',
    uses: [
      'Used to make delicious sweet dishes such as firni, rabdi, and kheer',
      'High in antioxidants',
      'May boost your mood',
      'May benefit eye health',
      'May help prevent high blood pressure',
      'May promote good digestion',
      'May have anticancer properties',
      'May help in the development of the foetus',
      'May also reduce the risk of miscarriage, minimize labour pain during delivery, and increase breast milk production after childbirth'
    ],
    pdf: '/assets/pdfs/garden/custard-apple.pdf'
  },
  'euphorbia-milii': {
    botanicalName: 'EUPHORBIA MILII', // CORRECTED: source page only listed "SPLENDENS" with no genus at all. Based on the Tamil synonym (which literally says "Euphorbia milii") and the common names given, the correct botanical name is "Euphorbia milii" - "splendens" is a variety name (Euphorbia milii var. splendens), not the species name itself
    family: 'Euphorbiaceae',
    synonyms: {
      english: 'Crown of Thorns, Christ Thorn',
      hindi: '', // NOTE: source page listed "Yoophorabiyamili" here, which is just a phonetic transliteration of the scientific name "Euphorbia milii" itself, not a real Hindi vernacular name. Left blank rather than keep a non-answer - please source an actual Hindi common name if one exists
      tamil: '', // NOTE: same issue as Hindi - source page listed "Euphorbia milii" (the scientific name) under Tamil, not an actual Tamil name. Left blank - please source an actual Tamil common name if one exists
      telugu: '' // TODO: no Telugu synonym was listed at all on the source page
    },
    // MAJOR ISSUE: the chemical constituents text below is copied from a source discussing "Euphorbia hirta" (see the source page's exact wording: "This review describes the medicinal properties, chemical constituents, and other important aspects of Euphorbia hirta"). Euphorbia hirta is a DIFFERENT SPECIES from Euphorbia milii (this page's actual plant) - commonly known as "asthma plant," it's a small weedy herb, not the woody succulent shrub that is Crown of Thorns. This content should NOT be published as-is for this page. I've transcribed it below exactly as it appeared, but flagged clearly - please replace with constituent/use information sourced specifically for Euphorbia milii before publishing.
    chemicalConstituents: 'INCORRECT SOURCE CONTENT - see code comment above. As transcribed: "It is reported to contain alkanes, triterpenes, phytosterols, tannins, polyphenols, and flavonoids." However, the accompanying source text explicitly states this review describes Euphorbia hirta, not Euphorbia milii - do not use this content until verified/replaced with information specific to Euphorbia milii.',
    structureImage: '/assets/garden/structures/euphorbia-milii-structure.jpg',
    // NOTE: same species-mismatch concern applies here. "Dengue fever" in particular is a well-documented traditional use of Euphorbia hirta (for supporting platelet counts), not something typically associated with Euphorbia milii. This entire uses list likely needs to be replaced with content specific to Euphorbia milii.
    uses: [
      'INCORRECT SOURCE CONTENT - see code comment above, please verify before publishing',
      'Antioxidant',
      'Antitumor',
      'Antimicrobial',
      'Antibacterial',
      'Diuretic', // NOTE: "Mild diuretic properties" also appeared as a separate bullet on the source page - likely a duplicate, removed here
      'Cytotoxic',
      'Antiviral',
      'Breathing disorders',
      'Dengue fever'
    ],
    pdf: '/assets/pdfs/garden/euphorbia-milii.pdf'
  },
  'feroniella': {
    botanicalName: 'FERONIELLA LUCIDA', // CORRECTED: source page listed "JAVA COLA", which doesn't match anything else on the page. The English synonym "Citrus lucida", the Hindi name "Pheroniela" (a phonetic spelling of "Feroniella"), and the family (Rutaceae) all point clearly to Feroniella lucida - a real species with the documented synonym "Citrus lucida". "Java Cola" appears to be a data error, possibly copy-pasted from an unrelated entry - please double check against your source records
    family: 'Rutaceae',
    synonyms: {
      english: 'Citrus lucida',
      hindi: 'Pheroniela',
      tamil: '', // TODO: source text was garbled ("á¸perÃ¤á¹‰‰oillÃ¤") - please verify and fill in
      telugu: '' // NOTE: source text was garbled ("PherÃ¤niyellÃ¤"), but the legible fragments suggest this may just be another phonetic transliteration of "Feroniella" itself (like the Hindi entry) rather than a distinct Telugu vernacular name - please verify whether a genuine Telugu common name exists
    },
    chemicalConstituents: 'These fruits contain several chemical ingredients such as flavonoids, quinolizidine, alkaloids, triterpenes, stilbenes, tannins, steroids, coumarin, saponins, triterpenoids, glycosides, taraxerone, cryptoxanthin, and taraxerol.', // corrected "tritepenes" to "triterpenes" (typo on source page)
    structureImage: '/assets/garden/structures/feroniella-structure.jpg',
    uses: [
      'The pulp of the raw fruits is eaten as a vegetable',
      'The pericarp is used medicinally',
      'The pulp is used as a sour ingredient in Cambodian and Thai cooking',
      'Anti-diabetic',
      'Anti-bacterial',
      'Anti-inflammatory',
      'Hepatoprotective',
      'Antioxidant, muscle relaxant',
      'Anti-histaminic, wound healing',
      'Larvicidal and anti-tumour'
    ],
    pdf: '/assets/pdfs/garden/feroniella.pdf'
  },
  'aloe-vera': {
    botanicalName: 'ALOE BARBADENSIS MILLER', // capitalized "Miller" (the taxonomic authority's name) - was lowercase "miller" on source page
    family: 'Asphodelaceae',
    synonyms: {
      english: 'Aloe vulgaris Lamarck', // corrected from "Aloe vulgairisLamarek" on source page - fixed spacing and corrected "Lamarek" to "Lamarck" (the botanist Jean-Baptiste Lamarck)
      hindi: 'Aloe vera, Ghikwar',
      tamil: 'Kathalai',
      telugu: 'Kalabanda' // NOTE: source page did not list a Telugu synonym at all. "Kalabanda" (కలబంద) is the standard, well-known Telugu name for Aloe vera - filled in with confidence since this is unambiguous, not a guess
    },
    chemicalConstituents: 'The two main classes of active constituents in Aloe vera plant extract are chromones and anthraquinones and their glycoside derivatives, alongside others such as phenylpyrone derivatives, flavonoids, phenylpropanoids, coumarins, phytosterols, naphthalene analogs, lipids, and vitamins.',
    structureImage: '/assets/garden/structures/aloe-vera-structure.jpg',
    uses: [
      'Constipation',
      'Hypoglycemia',
      'Acne',
      'Psoriasis',
      'Skin protection',
      'Aiding digestive issues',
      'Burns',
      'Cold sores'
    ],
    pdf: '/assets/pdfs/garden/aloe-vera.pdf'
  },
  'ashoka': {
    botanicalName: 'SARACA ASOCA',
    family: 'Fabaceae',
    synonyms: {
      english: 'Nata, Tamrapallav, Hemapushpa',
      hindi: 'Ashoka',
      tamil: 'Ashogam',
      telugu: 'Ashoka chettu'
    },
    chemicalConstituents: 'Major constituents in the stem bark of Ashoka are tannins (0.57%-7.85%), ash (2.43%-6.69%), and other extracts (5.74%-14.07%).',
    structureImage: '/assets/garden/structures/ashoka-structure.jpg',
    uses: [
      'Improves menstrual health',
      'Manages blood sugar levels',
      'Treats asthma and respiratory issues',
      'Helps treat acne',
      'Prevents internal bleeding',
      'Helps with stomach inflammation',
      'Promotes cardiac functioning',
      'Reduces kidney stones',
      'Relieves arthritic pain',
      'May help alleviate symptoms of depression' // NOTE: source page said "May Help Cure Depression" - softened "cure" to "alleviate symptoms of", since claiming an herbal remedy "cures" a mental health condition is a strong medical claim that a pharmacy college site probably shouldn't make outright; please review this phrasing choice
    ],
    pdf: '/assets/pdfs/garden/ashoka.pdf'
  },
  'badam-tree': {
    botanicalName: 'PRUNUS DULCIS',
    family: 'Rosaceae',
    synonyms: {
      english: 'Almond',
      hindi: 'Baadaam',
      tamil: 'Patam Kotta', // NOTE: not garbled, but this doesn't match the Tamil name I'm more familiar with for almond ("Vaadumai"/"Vaadhumai" is commonly used, and "Badam" is also used directly as a loanword). Not confident enough to change it outright, but worth double-checking against your source - "Patam Kotta" may be a regional/alternate term I'm simply not aware of
      telugu: 'Badam'
    },
    chemicalConstituents: 'Both varieties of almond contain 40-55% fixed oil, about 20% proteins, mucilage, and emulsion. Almonds also contain 2.5-4.0% of the colourless, crystalline, cyanogenic glycoside amygdalin.', // corrected "cyanogenelic" to "cyanogenic" (typo on source page)
    structureImage: '/assets/garden/structures/badam-tree-structure.jpg',
    // IMPORTANT: no "USES" section was visible in the screenshot provided - the image cut off right after the chemical structure diagram. The list below was supplied based on well-established, general knowledge about almonds' nutritional/health properties, NOT transcribed from your source page. Please verify this against your actual page content (if there's more below what was captured) and replace/adjust as needed.
    uses: [
      'Rich source of vitamin E, magnesium, and dietary fiber',
      'Supports heart health',
      'Helps regulate blood sugar levels',
      'Supports brain health and memory',
      'Aids in weight management',
      'Used in oil form for skin health and moisturizing',
      'May help reduce LDL (bad) cholesterol',
      'High in antioxidants',
      'Supports bone health (calcium and magnesium content)',
      'Supports digestive health'
    ],
    pdf: '/assets/pdfs/garden/badam-tree.pdf'
  },
  'bamboo': {
    botanicalName: 'BAMBUSA VULGARIS',
    family: 'Poaceae',
    synonyms: {
      english: 'Bamboo, Common bamboo', // CORRECTED: source page listed "Rattan, cane, sisal", which are all names for completely different plants - rattan is a climbing palm (Calamus spp.), sisal is Agave sisalana (a fiber plant), and neither is bamboo. This looks like a data mix-up similar to the Cashew page's "Palm nut, Kola nut" error - please double check your source records for other entries with a similar pattern
      hindi: 'Baans',
      tamil: 'Moongil', // source text was garbled ("MÃ«kil") but this is a well-known word - Tamil for bamboo is "மூங்கில்" (Moongil)
      telugu: 'Veduru' // NOTE: source page did not list a Telugu synonym at all. "Veduru" (వెదురు) is the standard, well-known Telugu name for bamboo - filled in with confidence
    },
    chemicalConstituents: 'The lignin content ranges between 20.90 and 30.13 per cent, while holocelluloses range between 69.01 and 72.34 per cent. Alpha cellulose ranges from 58.97 to 61.54 per cent. The cold water solubility of bamboo samples ranges from 7.89 up to as high as 16.70 per cent.',
    structureImage: '/assets/garden/structures/bamboo-structure.jpg',
    uses: [
      'Houses, schools, and other buildings - today, over one billion people in the world live in bamboo houses',
      'Roads and bridges',
      'Medicines',
      'Bamboo clothes',
      'Accessories',
      'Food',
      'Fuel',
      'Scaffolding', // NOTE: source page also had a bullet reading "Construction materials to food, medicine" right after this - it appears to be a redundant summary fragment overlapping with earlier bullets (construction, food, medicine already listed separately), so it was omitted here rather than kept as a confusing duplicate. Let me know if you'd rather it be included as-is.
      'Musical instruments'
    ],
    pdf: '/assets/pdfs/garden/bamboo.pdf'
  },
  'bottle-palm': {
    botanicalName: 'HYOPHORBE LAGENICAULIS',
    family: 'Arecaceae',
    synonyms: {
      english: 'Palmiste gargoulette', // this is a legitimate French/Mauritian Creole common name for this species ("palmiste" = palm, "gargoulette" = a bottle-shaped water jug, referencing the trunk shape) - correct, not an error
      hindi: 'Batil paalm', // NOTE: this appears to be a phonetic transliteration of "Bottle Palm" rather than a genuine indigenous Hindi name - makes sense since this species is native to Mauritius and not traditionally known in India
      tamil: '', // TODO: source text was garbled ("PÃ¡á¹á¹ilpaá¹‰‰oi") - appears to possibly be another transliteration attempt of "Bottle Palm" but too garbled to reconstruct confidently - please verify
      telugu: 'Bottle palm' // NOTE: same situation as Hindi - this is just the English name, not a translated/indigenous Telugu term. Consistent with this being a non-native ornamental species without traditional regional names
    },
    chemicalConstituents: 'Like other natural fibers, analysis showed that the palm fibers were composed mainly of cellulose, hemicellulose, and lignin, with similar contents among the different layers of the leaf sheath.',
    structureImage: '/assets/garden/structures/bottle-palm-structure.jpg',
    // MAJOR CONCERN: Hyophorbe lagenicaulis (Bottle Palm) is documented in horticultural and botanical sources almost exclusively as an ORNAMENTAL landscaping palm, grown for its distinctive swollen trunk. It is not a plant with a documented history of medicinal or culinary use that I'm aware of. The uses list below (cough, bronchitis, asthma, "used as raw fruit/dry fruit/vegetable", Ayurvedic medicine, etc.) does not match anything associated with this specific species and reads like it may have been copy-pasted from a different plant's profile - similar to the Euphorbia Milii page issue. Please verify this content against a source specific to Hyophorbe lagenicaulis before publishing; I would not recommend publishing this uses list as-is without that check.
    uses: [
      'UNVERIFIED - see code comment above, please confirm this content is actually about Hyophorbe lagenicaulis before publishing',
      'Cough',
      'Bronchitis',
      'Asthma',
      'Used as raw fruit, dry fruit, vegetable',
      'Medicinal',
      'Antifungal',
      'Antibacterial',
      'Decoration', // this is the one item that plausibly fits - Bottle Palm's primary known use IS ornamental/decorative
      'Antioxidant, antiviral',
      'Used in Ayurvedic medicine'
    ],
    pdf: '/assets/pdfs/garden/bottle-palm.pdf'
  },
  'candle-tree': {
    botanicalName: 'PARMENTIERA CEREIFERA',
    family: 'Bignoniaceae',
    synonyms: {
      english: 'Candle tree, candlestick tree', // corrected from "Parmentiera cereifera" on source page, which just repeated the scientific name rather than giving an actual common English name
      hindi: 'Momabattee ka ped',
      tamil: '', // CORRECTED/REMOVED: source page listed "Candlenut" here, which is WRONG - Candlenut refers to Aleurites moluccanus, a completely different tree (used for candlenut oil), unrelated to Parmentiera cereifera aside from both loosely relating to "candles" in their common names. This looks like the same type of mix-up seen on the Cashew and Bamboo pages. I don't have a confident genuine Tamil name for this specific Central-American-native species, so left blank rather than supply another possibly-wrong name - please source a verified Tamil name if one exists, or note that none may be traditionally established
      telugu: 'Kovvotti chettu' // source text was garbled ("Kovvotticeá¹á¹u") but this decodes as a coined translation - "kovvotti" (కొవ్వొత్తి) means candle in Telugu, "chettu" means tree, so "Kovvotti chettu" = "candle tree", consistent with the Hindi entry being a similar coined/translated name
    },
    chemicalConstituents: 'The fruit provides tannins and saponins, which are chemical compounds with antibacterial properties.', // NOTE: source page also included "The leaves of the tree were used to create a healing tea, used for throat and as a tonic for ear infections" under Chemical Constituents - that's a use, not a chemical constituent, so it's been moved into the uses list below
    structureImage: '/assets/garden/structures/candle-tree-structure.jpg',
    uses: [
      'The leaves were traditionally used to create a healing tea for the throat, and as a tonic for ear infections', // moved here from the "Chemical Constituents" section on the source page
      'The fruits, leaves, and seeds are used in traditional Asian medicine for the treatment of various health issues, including:',
      'Headache',
      'Morning sickness during pregnancy (NOTE: source page explicitly warns that taking the seed during pregnancy is dangerous and should be avoided - this is a caution about the seed specifically, not a recommended use; kept the warning language intact rather than presenting it as a straightforward benefit)',
      'Fever',
      'Inflammation',
      'Gonorrhoea (a sexually-transmitted disease/STD)',
      'To lower cholesterol levels in the blood'
    ],
    // IMPORTANT - SAFETY INFORMATION, NOT "USES": the source page's uses list continued directly into toxicity/safety warnings without separating them, which risks presenting danger information as if it were a benefit. Separated into its own field - please make sure your template displays this distinctly from the uses list (e.g. as a warning box), not folded into "USES" the way the source page had it.
    cautions: [
      'The potential toxicity of the seeds and other parts of the plant is due to compounds that are irritating and act as strong purgatives',
      'The same compounds may also act as potent tumor promoters',
      'Ingestion of the seeds can cause vomiting, gastrointestinal pain, and diarrhoea'
    ],
    pdf: '/assets/pdfs/garden/candle-tree.pdf'
  },
  'averrhoa-carambola': {
    botanicalName: 'AVERRHOA CARAMBOLA', // CORRECTED: source page listed "CARAMBOLA, STAR FRUIT" in the botanical name field, but those are common names, not the scientific name. The actual botanical name (confirmed by the structure image caption "Averrhoa carambola L." and the page's own bottom label "Averrhoa Carambola") is Averrhoa carambola
    family: 'Oxalidaceae',
    synonyms: {
      english: 'Belimbing Besi, Belimbing Manis', // corrected from "ElimbingBesi, Belimbing Manis" on source page - "Elimbing" was missing its leading "B"; these are the standard Malay names for star fruit varieties ("besi" = iron/tart variety, "manis" = sweet variety), commonly used as English-adopted synonyms
      hindi: 'Sitaara phal',
      tamil: 'Natchathira pazham', // source text was garbled ("NÃ¡â¹cattirappaá¹‰â€°am") - inferred as "Natchathira pazham" (நட்சத்திரப் பழம், literally "star fruit"), please verify
      telugu: 'Nakshatra pandu' // NOTE: source page just listed "Star fruit" in English under Telugu, not an actual Telugu name. "Nakshatra pandu" (నక్షత్ర పండు, literally "star fruit") is a reasonable translated Telugu name, but please verify against a regional source, as I'm less certain of this one than some other translations in this project
    },
    chemicalConstituents: 'The fruit has high levels of flavonoids, proanthocyanidins, vitamin C, β-carotene, saponins, alkaloids, tannins, and gallic acid.', // corrected garbled "βâ€carotene" to "β-carotene"
    structureImage: '/assets/garden/structures/averrhoa-carambola-structure.jpg',
    uses: [
      'Contains many nutritional components that might support overall health',
      'Might help regulate blood pressure and blood glucose levels',
      'May improve metabolism and digestion',
      'Might enhance immunity and help with inflammation',
      'Fever',
      'Cough',
      'Diarrhoea',
      'Chronic headache',
      'Inflammatory skin disorders (eczema)',
      'Fungal skin infections'
    ],
    // IMPORTANT - MISSING FROM SOURCE PAGE ENTIRELY: star fruit (Averrhoa carambola) is well-documented in medical literature to be dangerous for people with kidney disease or impaired renal function. It contains a neurotoxin (caramboxin) and high levels of oxalic acid that healthy kidneys can normally clear, but which can build up to dangerous levels in people with reduced kidney function, causing symptoms ranging from hiccups and vomiting to seizures, confusion, and in documented cases, death. This is significant, standard safety information that should be included on a pharmacy college website discussing this fruit's uses - it was not present anywhere in your source content, so I've added it here. Please verify against a current clinical/pharmacological reference before publishing, and make sure your template displays this prominently (e.g., as a warning box) rather than buried at the bottom of the page.
    cautions: [
      'Star fruit contains a neurotoxin (caramboxin) and high levels of oxalic acid',
      'It can be dangerous, even life-threatening, for people with kidney disease or reduced kidney function, as these compounds cannot be properly cleared from the body',
      'Symptoms of toxicity in at-risk individuals can include hiccups, vomiting, confusion, and seizures',
      'People with any degree of kidney impairment should avoid star fruit and star fruit juice entirely, and consult a doctor before consumption if unsure of their kidney function'
    ],
    pdf: '/assets/pdfs/garden/averrhoa-carambola.pdf'
  },
  'bryophyllum': {
    botanicalName: 'KALANCHOE PINNATA', // REFINED: source page listed "KALANCHOE SECT. BRYOPHYLLUM", which names the taxonomic SECTION (a subgenus grouping), not a specific species - it's technically not wrong, but it's incomplete/unusual for a "Botanical Name" field. The Hindi synonym field on the source page literally says "Kalanchoe pinnata", confirming the specific species intended is Kalanchoe pinnata (the most common plant referred to as "Bryophyllum"). Used that as the botanical name here; please verify this matches your intended specific species
    family: 'Crassulaceae',
    synonyms: {
      english: 'Life Plant, Mother of Thousands',
      hindi: '', // NOTE: source page listed "Kalanchoe pinnata" here, which is the scientific species name, not an actual Hindi common name - moved that info into the botanicalName field above instead. Left blank since I don't have a confident genuine Hindi vernacular name for this plant - please source one if it exists
      tamil: 'Kuttipodum',
      telugu: 'Ranapalaaku'
    },
    chemicalConstituents: 'Alkaloids, flavonoids, saponin, tannin, phytate, phenol, calcium, magnesium, phosphorous, sodium, and potassium.',
    structureImage: '/assets/garden/structures/bryophyllum-structure.jpg',
    uses: [
      'Eaten for diabetes',
      'Diuresis',
      'Dissolving kidney stones',
      'Respiratory tract infection',
      'Also applied to wounds', // reworded from "As well as applied to wound" for clarity
      'Boils, and insect bites',
      'Useful for preventing alcoholic, viral, and toxic liver damage', // merged two fragmented bullets from source ("It is useful for preventing alcoholic" + "Viral and toxic liver damages") that were clearly one sentence split across lines
      'Regular intake can often help with the implantation of a fertilised egg in the uterus, as the effect of Bryophyllum is similar to that of the hormone progesterone', // NOTE: this is a fairly specific clinical/hormonal claim - worth double-checking against a current pharmacological source before publishing, given the audience and subject matter of this site
      'Bryophyllum leaves can also help relieve inflammation, for example in the uterus, and support healing' // corrected "Bryophyllumleafes" to "Bryophyllum leaves" (spacing/typo on source page)
    ],
    pdf: '/assets/pdfs/garden/bryophyllum.pdf'
  },
  'yellow-allamanda': {
    botanicalName: 'ALLAMANDA CATHARTICA', // corrected from "ALLAMANDA CATHARITHICA" on source page (typo) - confirmed correct spelling by the chemical constituents text on the same page, which correctly refers to "A. cathartica"
    family: 'Apocynaceae',
    synonyms: {
      english: 'Golden trumpet',
      hindi: 'Peela Allamanda', // reformatted from "Peelaallaamaanda" (run together) - "Peela" means yellow in Hindi, a coined descriptive name
      tamil: 'Manjal Allamanda', // source text was garbled ("MañcaÃ¡ Â·alamaá¹‰â€¡á¹Ã„") but the legible fragment "Mañca" matches "Manjal" (Tamil for yellow/turmeric-colored), so this is inferred as "Manjal Allamanda" - please verify
      telugu: 'Pasupu Allamanda' // reformatted from "Pasupu allamanda" - "Pasupu" means yellow/turmeric in Telugu, a coined descriptive name
    },
    chemicalConstituents: 'Numerous phytochemical investigations of plants from A. cathartica have shown the presence of hydrocarbons, alcohols, esters, ethers, aldehydes, ketones, fatty acids, phospholipids, volatile compounds, phenolic compounds, flavonoids, alkaloids, steroids, terpenes, lactones, and carbohydrates.',
    structureImage: '/assets/garden/structures/yellow-allamanda-structure.jpg',
    uses: [
      'Used to treat abscesses',
      'Ringworm',
      'Ulcers',
      'Eczema',
      'Used to treat liver tumors',
      'Jaundice',
      'Splenomegaly',
      'Malaria',
      'May help uplift mood and promote a positive mindset',
      'In laboratory analyses, some species have shown some activity against carcinoma cells, pathogenic fungi, and HIV'
    ],
    // IMPORTANT - MISSING FROM SOURCE PAGE ENTIRELY: Allamanda cathartica is a well-documented toxic ornamental plant. All parts of the plant (especially the milky sap) are considered poisonous if ingested, causing vomiting, diarrhea, and gastrointestinal irritation - this is in fact reflected in the species name itself, "cathartica," meaning "purgative." The sap can also cause skin and eye irritation on contact. This plant is commonly listed in toxic-plant databases (e.g., for pets and children) and this safety information is standard knowledge that should accompany any discussion of its "uses" on a pharmacy college site. This was entirely absent from your source content, so I've added it here - please verify against a current toxicology reference before publishing, and ensure your template displays this as a clear warning, not just another bullet in the uses list.
    cautions: [
      'All parts of the plant, especially the milky sap, are considered poisonous if ingested',
      'Ingestion can cause vomiting, diarrhea, and gastrointestinal irritation',
      'Contact with the sap can cause skin and eye irritation',
      'Should be handled with care, especially around children and pets, and kept out of reach'
    ],
    pdf: '/assets/pdfs/garden/yellow-allamanda.pdf'
  },
  'carissa-congesta': {
    botanicalName: 'CARISSA CARANDAS', // corrected from "CARISSA CARADAS" on source page (typo, missing "n"). NOTE: "Carissa congesta" (this page's title/footer label) is a recognized botanical synonym of Carissa carandas - both names refer to the same plant (commonly known as Karonda/Bengal currant), so this isn't a species mismatch, just a spelling typo in the primary name field
    family: 'Apocynaceae',
    synonyms: {
      english: 'Bengal currant, Carandas plum', // fixed spacing from "Bengal currant,Carandas plum"
      hindi: 'Karamarda',
      tamil: 'Kalakkay',
      telugu: 'Pedda-vakkaya'
    },
    chemicalConstituents: 'Among all chemical constituents, lupeol, carissol, naringin, carissone, scopoletin, carissaeduloside A, D, and J, carandinol, sarhamnoloside, carissanol, olivil, carinol, 3β-hydroxyolean-11-en-28,13β-olide, and ursolic acid are the key bioactive constituents responsible for the pharmacological activities of the genus Carissa.', // NOTE: cleaned up several issues from source page - removed a duplicate/typo'd "carisssone" (already listed correctly as "carissone" earlier in the same sentence), corrected "13β-oilde" to "13β-olide" (typo), and completed the sentence, which was cut off mid-word as "...of genus ..." on the source page. Please verify the completed sentence against your original source if available, as I inferred "of the genus Carissa" from context
    structureImage: '/assets/garden/structures/carissa-congesta-structure.jpg',
    uses: [
      'Its fruit is used in the ancient Indian herbal system of medicine, Ayurveda, to treat acidity', // merged two fragmented bullets from source page ("Its fruit is used in the ancient Indian herbal system of medicine" + "Ayurvedicto treat acidity") that were clearly one sentence split with a missing space
      'Indigestion',
      'Fresh and infected wounds',
      'Skin diseases',
      'Urinary disorders and diabetic ulcer',
      'Biliousness',
      'Stomach pain',
      'Constipation, anaemia, skin conditions',
      'Anorexia and insanity'
    ],
    pdf: '/assets/pdfs/garden/carissa-congesta.pdf'
  },
  'nerium-oleander': {
    botanicalName: 'NERIUM OLEANDER',
    family: 'Apocynaceae (dogbane family)',
    synonyms: {
      english: 'Oleander',
      hindi: 'Kaner', // CORRECTED: source page listed "ganar plant", which doesn't match any Hindi name I can find for this plant. The well-established, widely documented Hindi name for Nerium oleander is "Kaner" (कनेर) - "ganar plant" may be a mishearing/mistyping of this. Please verify, but I'm fairly confident "Kaner" is correct
      tamil: 'Neriyam', // also commonly called "Arali" in Tamil - both are documented names, kept "Neriyam" as given since it's also correct
      telugu: 'Ganneru'
    },
    chemicalConstituents: 'Contains cardiac glycosides including neriin and oleandrin, along with phenols, tannins, flavonoids, coumarins, phlobatannins, sterols, triterpenes, and other alkaloids.', // cleaned up garbled phrasing from source ("Glycosides, neriin and, and an alkaloid, oleandrin") into a coherent sentence, and correctly identified oleandrin/neriin as cardiac glycosides specifically (relevant given the toxicity noted below)
    structureImage: '/assets/garden/structures/nerium-oleander-structure.jpg',
    uses: [
      "Popular in landscaping for its dense foliage and vibrant, long-lasting flowers; commonly used in gardens, parks, and as a hedge plant",
      'Its robust root system makes it useful for controlling soil erosion on slopes and embankments',
      'Some research has explored oleander extracts for potential anticancer properties; the plant contains compounds that have shown promise in laboratory studies, but more research is needed to determine effectiveness and safety in humans',
      "Oleander's dense foliage makes it an effective windbreak in certain climates",
      'The flowers attract pollinators such as bees and butterflies, contributing to the local ecosystem'
    ],
    // *** CRITICAL SAFETY INFORMATION - COMPLETELY ABSENT FROM SOURCE PAGE ***
    // Nerium oleander is one of the most toxic ornamental plants commonly cultivated worldwide. EVERY part of
    // the plant - leaves, flowers, stems, sap, roots, and seeds - contains potent cardiac glycosides (including
    // the oleandrin and neriin already named in the chemical constituents above). Ingesting even a small amount
    // (a single leaf can be dangerous, especially to children and small animals) can cause severe cardiac
    // arrhythmias, gastrointestinal distress, and death. Smoke from burning the plant is also toxic if inhaled,
    // and skin contact with sap can cause irritation. This is one of the most well-documented plant poisoning
    // risks in toxicology and ethnobotany literature, and cases of accidental and intentional oleander poisoning
    // are well recorded in India specifically.
    // The source page discussed this plant purely in terms of ornamental/landscaping benefits and even floated
    // "potential anticancer properties" without ANY mention that this plant is dangerously poisonous. Given this
    // is a pharmacy college website, I consider this a genuinely important omission to correct, not just a
    // stylistic gap - please verify this against a current toxicology reference and ensure your template
    // displays this prominently (e.g., a clearly visible warning box near the top of the page), not buried
    // at the bottom or omitted.
    cautions: [
      'EXTREMELY TOXIC - all parts of the plant (leaves, flowers, stems, sap, roots, and seeds) contain potent cardiac glycosides',
      'Ingestion of even small amounts, especially by children or pets, can cause severe cardiac arrhythmias, vomiting, and can be fatal',
      'Do not burn oleander plant material - the smoke is also toxic if inhaled',
      'Sap can cause skin and eye irritation on contact',
      'Should never be planted where children or grazing animals have easy access, and should be handled with gloves when pruning',
      'Seek immediate emergency medical attention if ingestion is suspected'
    ],
    pdf: '/assets/pdfs/garden/nerium-oleander.pdf'
  },
  'neem': {
    botanicalName: 'AZADIRACHTA INDICA',
    family: 'Meliaceae',
    synonyms: {
      english: 'Neem',
      hindi: 'Neem',
      tamil: 'Vembu', // source text was garbled ("VÄ"mpu") but this is a well-known word - Tamil for neem is "வேம்பு" (Vembu)
      telugu: 'Vepa' // source text was garbled ("VÄ"pa") but this is a well-known word - Telugu for neem is "వేప" (Vepa)
    },
    chemicalConstituents: 'Azadirachtin and other key compounds include nimbolinin, nimbin, nimbidin, nimbidol, sodium nimbinate, gedunin, salannin, and quercetin. Neem also contains glycoproteins, triterpenes, limonoids, flavonoids, phenols, tannins, nimbins, saponins, catechins, azadirachtin, and gallic acid.', // corrected "Neem are glycoproteins" to "Neem also contains glycoproteins" (grammar fix)
    structureImage: '/assets/garden/structures/neem-structure.jpg',
    uses: [
      'Boosts immunity',
      'Promotes brain health',
      'Manages diabetes',
      'Promotes liver health',
      'Prevents and treats infections',
      'Promotes oral health',
      'Purifies blood',
      'Treats wounds and ulcers'
    ],
    // IMPORTANT - MISSING FROM SOURCE PAGE ENTIRELY: while neem is widely used safely (especially topically and in
    // small traditional doses), there are well-documented, specific safety concerns that a pharmacy college site
    // should include alongside its "uses":
    // 1. Neem OIL is documented to be toxic to infants and young children if ingested, with cases of severe
    //    poisoning (metabolic acidosis, encephalopathy) reported, particularly in India where it is sometimes
    //    given as a traditional remedy to infants - this should never be given to babies/young children internally.
    // 2. Neem is traditionally and clinically associated with abortifacient effects and should be avoided during
    //    pregnancy and while trying to conceive.
    // 3. Given "Manages diabetes" and "Boosts immunity" are listed as uses, it's worth noting neem may enhance the
    //    effect of diabetes medications (risk of hypoglycemia) and may not be appropriate for people on
    //    immunosuppressant therapy or with autoimmune conditions, due to its immune-stimulating properties.
    // Please verify against a current pharmacological reference before publishing.
    cautions: [
      'Neem oil is toxic to infants and young children if ingested and should never be given to babies',
      'Should be avoided during pregnancy and while trying to conceive, due to traditionally and clinically documented abortifacient effects',
      'May enhance the effect of diabetes medications - people on such medication should monitor blood sugar closely and consult a doctor before use',
      'Due to its immune-stimulating properties, caution is advised for people on immunosuppressant therapy or with autoimmune conditions',
      'Prolonged internal use should be done only under medical supervision'
    ],
    pdf: '/assets/pdfs/garden/neem.pdf'
  },
  'jet-plant': {
    botanicalName: 'CRASSULA OVATA',
    family: 'Crassulaceae',
    synonyms: {
      english: 'Kerky bush', // NOTE: I could not verify this as an established common name for Crassula ovata - the widely documented common names for this plant are "Jade plant," "Money plant," "Lucky plant," and "Friendship tree." "Kerky bush" may be a typo or an uncommon regional nickname I'm not aware of - please double check against your source
      tamil: 'Crassula ovata tavara marakkanru', // NOTE: this appears to be a descriptive phrase (possibly referencing "sapling"/"small tree," given "marakkanru" relates to young tree in Tamil) rather than an established traditional Tamil name - consistent with this being a non-native ornamental succulent without deep-rooted regional naming, similar to other imported ornamentals in this project (e.g. Ming Aralia, Bottle Palm)
      telugu: 'Jade plant' // NOTE: source page just listed the English name here, not an actual Telugu name - same non-native-plant pattern as above
    },
    chemicalConstituents: 'Contains alkaloids, flavonoid C-glycosides, sterols, terpenoids, tannins, saponins, and fatty acids, along with polyphenol compounds such as flavonoids and lignans.', // NOTE: source page had two overlapping sentences that repeated several of the same compound categories (alkaloids, saponins, flavonoids, terpenoids/steroids appeared in both) - consolidated into one non-redundant sentence, and corrected "terenoids" to "terpenoids" (typo)
    structureImage: '/assets/garden/structures/jet-plant-structure.jpg',
    uses: [
      'Often used in traditional medicine for its potential benefits in treating fractures and improving bone health; believed to enhance bone healing and support joint health',
      'Has anti-inflammatory effects that may help with conditions like arthritis and other inflammatory disorders',
      'Used in some traditional remedies to support digestive health and alleviate stomach issues',
      'Contains vitamins such as vitamin C and minerals like calcium and magnesium, which can contribute to overall health',
      'Extracts are sometimes used in skincare products for their potential to improve skin health, reduce inflammation, and promote healing',
      'Used in Ayurvedic medicine as a remedy for various ailments and is considered to have rejuvenating properties',
      'Has been used in traditional African and Asian medicine systems for a range of health issues',
      "The plant's vigorous growth makes it useful for controlling soil erosion in some regions"
    ],
    // IMPORTANT - MISSING FROM SOURCE PAGE ENTIRELY: Crassula ovata (Jade Plant) is listed on standard toxic-plant
    // references (e.g. ASPCA's toxic plant database) as toxic to cats and dogs if ingested, causing vomiting,
    // loss of coordination (ataxia), depression, and low heart rate. This is a commonly grown houseplant/bonsai
    // (as shown in your photo), so pet owners handling this page's information should be aware. The source page's
    // extensive list of internal traditional-medicine uses, with no mention of any toxicity, could be misleading
    // if a pet owner assumed the plant was entirely safe to have around animals. Please verify against a current
    // veterinary toxicology reference before publishing.
    cautions: [
      'Toxic to cats and dogs if ingested, per standard veterinary toxicology references',
      'Symptoms of pet poisoning can include vomiting, loss of coordination, depression, and slowed heart rate',
      'Keep out of reach of pets, and seek veterinary attention if ingestion is suspected'
    ],
    pdf: '/assets/pdfs/garden/jet-plant.pdf'
  },
  'saraswathi-leaf': {
    botanicalName: 'CENTELLA ASIATICA',
    family: 'Apiaceae',
    synonyms: {
      english: 'Gotu Kola',
      hindi: 'Vidya Patra',
      tamil: 'Vallarai',
      telugu: 'Saraswathi Aakulu'
    },
    chemicalConstituents: 'The plant contains pentacyclic triterpenoids and trisaccharide derivatives, including asiaticoside, brahmoside, asiatic acid, and brahmic acid (also known as madecassic acid).', // corrected "Sarawathi" to "Saraswathi" and "asaitic acid" to "asiatic acid" (typos on source page)
    structureImage: '/assets/garden/structures/saraswathi-leaf-structure.jpg',
    // IMPORTANT: the uses list on the source page was largely NOT specific to Centella asiatica - it discussed
    // generic religious/ceremonial associations of "plants named after Saraswati" (used in rituals, decorating
    // altars during Vasant Panchami) rather than this plant's actual documented pharmacological properties. One
    // bullet even explicitly said "specific uses would depend on the exact species," indicating the source
    // content itself wasn't confident this was accurate for Centella asiatica specifically. Centella asiatica
    // (Gotu Kola) is one of the more extensively studied medicinal herbs, so I've replaced this with accurate,
    // well-documented uses for this specific species rather than reproduce vague/generic content. Please verify
    // against a current pharmacognosy reference, and note that the religious/cultural association with Saraswati
    // (goddess of knowledge) may still be worth keeping as separate cultural context if your page has a section
    // for that, distinct from the medicinal uses list.
    uses: [
      'Promotes wound healing by supporting collagen synthesis; used traditionally for cuts, burns, and minor skin injuries',
      'Traditionally used as a cognitive/memory tonic; some studies suggest benefits for memory and mental clarity',
      'May help reduce anxiety and stress',
      'Used to treat varicose veins and chronic venous insufficiency, supporting circulatory health',
      'Used for skin conditions including psoriasis, scleroderma, and cellulite',
      'Used to reduce scarring, including keloid and hypertrophic scars',
      'Has anti-inflammatory and antioxidant properties',
      'Used in Ayurveda as a rejuvenating tonic, traditionally associated with longevity and mental clarity'
    ],
    // NOTE: added based on general pharmacological knowledge, since the source page had no safety information at
    // all - please verify before publishing
    cautions: [
      'Generally considered safe for short-term use, but prolonged continuous use (typically beyond 6 weeks) is not usually recommended without a break',
      'May cause drowsiness, especially when combined with other sedating substances',
      'May interact with diabetes medication and cholesterol-lowering drugs - consult a doctor if taking these',
      'Traditionally avoided during pregnancy; consult a doctor before use if pregnant or breastfeeding'
    ],
    pdf: '/assets/pdfs/garden/saraswathi-leaf.pdf'
  },
  'aristolochia': {
    botanicalName: 'ARISTOLOCHIA BRACTEOLATA',
    family: 'Aristolochiaceae',
    synonyms: {
      english: "Worm killer, bracteated birthwort",
      hindi: 'Kirmar',
      tamil: 'Adutinnapaalai',
      telugu: 'Gadatigadaparaku'
    },
    // NOTE: the compound described here - a phenanthrene-1-carboxylic acid with a methylenedioxy group at the
    // 3,4 positions, a methoxy group at position 8, and a nitro group at position 10 - is the specific chemical
    // structure of ARISTOLOCHIC ACID, though the source page never names it explicitly. This is significant given
    // the safety warning below.
    chemicalConstituents: 'Contains aristolochic acid (a phenanthrene-1-carboxylic acid substituted by a methylenedioxy group at the 3,4 positions, a methoxy group at position 8, and a nitro group at position 10), among other compounds.',
    structureImage: '/assets/garden/structures/aristolochia-structure.jpg',
    uses: [
      'In some traditional medicine systems, bracteated birthwort has historically been used for its purported therapeutic effects, including treatment of various ailments, though specific traditional uses vary by region',
      'Some research has explored anti-inflammatory properties in Aristolochia species, including A. bracteolata',
      'Preliminary studies have looked at possible antioxidant properties',
      'Traditionally, some Aristolochia species have been used to support digestive health',
      'Has been used traditionally as an anthelmintic (to expel intestinal worms), reflected in its common English name "worm killer"'
    ],
    // *** CRITICAL SAFETY WARNING - THE SOURCE PAGE SEVERELY UNDERSTATED THIS RISK ***
    // Plants in the genus Aristolochia, including Aristolochia bracteolata, contain aristolochic acid - one of
    // the most well-documented toxic and carcinogenic plant compounds known in modern toxicology. This is not a
    // mild or debated risk:
    // - The International Agency for Research on Cancer (IARC) classifies aristolochic acid as a Group 1 human
    //   carcinogen (the highest-confidence category, based on strong evidence in humans) - specifically linked
    //   to cancers of the urinary tract and kidneys.
    // - It is the documented cause of "aristolochic acid nephropathy," a severe and often irreversible form of
    //   kidney failure, responsible for well-known mass poisoning events internationally (e.g. so-called "Chinese
    //   herb nephropathy" and Balkan endemic nephropathy).
    // - Regulatory bodies including the US FDA have issued public health warnings about Aristolochia-containing
    //   products, and many countries restrict or ban their sale as herbal/dietary supplements specifically because
    //   of this risk.
    // The source page's only acknowledgment of this was a single vague sentence about "potential toxicity and
    // adverse effects," which does not come close to conveying the severity of a documented human carcinogen and
    // cause of kidney failure. Given the seriousness here, I strongly recommend this page be reviewed directly by
    // qualified pharmacology/toxicology faculty before publishing - please do not simply publish this as-is
    // without that review.
    cautions: [
      'Contains aristolochic acid, classified by the International Agency for Research on Cancer (IARC) as a Group 1 human carcinogen (highest confidence level), specifically associated with cancers of the urinary tract and kidneys',
      'Documented cause of aristolochic acid nephropathy, a severe and often irreversible form of kidney failure',
      'Regulatory agencies including the US FDA have issued public health warnings regarding Aristolochia-containing products, and many countries restrict or prohibit their sale as herbal supplements',
      'Traditional historical use does NOT indicate safety by current medical and toxicological standards - this plant should not be ingested or used as an herbal remedy',
      'This page should be reviewed by qualified pharmacology/toxicology faculty before publication, given the severity and well-documented nature of this risk'
    ],
    pdf: '/assets/pdfs/garden/aristolochia.pdf'
  },
  'catharanthus': {
    botanicalName: 'CATHARANTHUS ROSEUS', // corrected from "Catharanthus roseus periwinkle" on source page - "periwinkle" is a common name and doesn't belong in the botanical name field; moved conceptually to synonyms instead
    family: 'Apocynaceae',
    synonyms: {
      english: 'Annual vinca, Madagascar periwinkle',
      hindi: 'Sadabahar', // CORRECTED: source page listed "kaitharainthas roziyas" here, which is just a phonetic transliteration of the scientific name "Catharanthus roseus" itself, not an actual Hindi name. The real, well-known Hindi common name is "Sadabahar" (सदाबहार, meaning "always blooming/evergreen")
      tamil: 'Nithyakalyani', // CORRECTED: source page listed "Catharanthus roseus" here, i.e. just the scientific name again, not a Tamil name. The real Tamil common name is "Nithyakalyani" (நித்யகல்யாணி)
      telugu: 'Billa Ganneru'
    },
    chemicalConstituents: 'Contains alkaloids, phenols, saponins, tannins, terpenoids, steroids, and flavonoids. Also contains linolenic acid ethyl ester (43.9%), stearic acid (10.6%), phytol (7.3%), and hexadecanoic acid (6.8%).', // combined two separate constituent listings from the source page into one clear paragraph
    structureImage: '/assets/garden/structures/catharanthus-structure.jpg',
    uses: [
      'The plant contains the alkaloids vincristine and vinblastine, which are used in the treatment of various cancers, including leukemia and lymphoma; these compounds are essential components of many chemotherapy regimens',
      "Extracts from the plant are studied for their potential to help manage blood sugar levels, making them of interest in diabetes research",
      'Has been used in traditional medicine for its antimicrobial properties, to treat infections and wounds',
      'Known for its drought resistance, making it a good choice for low-maintenance gardens and landscapes',
      'Continues to be a subject of pharmacological research due to its valuable compounds; scientists study it for new drug discoveries and improved therapeutic uses'
    ],
    // NOTE: added for clarity - the source page's cancer-treatment claim is accurate (vincristine and vinblastine
    // are genuinely derived from this plant and are real, important chemotherapy drugs), but it's worth being
    // clear about an important distinction that the source page didn't make: the medicines used in cancer
    // treatment are highly purified, precisely dosed pharmaceutical extracts administered under strict medical
    // supervision - NOT the raw plant itself. The raw plant contains cytotoxic alkaloids and should not be
    // self-administered or consumed as a home remedy for cancer or any other condition.
    cautions: [
      'The chemotherapy drugs vincristine and vinblastine are highly purified pharmaceutical extracts administered under strict medical supervision - this is very different from the raw plant',
      'The raw plant contains cytotoxic alkaloids and should not be self-administered, ingested, or used as a home remedy',
      'All parts of the plant should be considered mildly to moderately toxic if ingested in uncontrolled amounts; keep away from children and pets'
    ],
    pdf: '/assets/pdfs/garden/catharanthus.pdf'
  },
  'datura': {
    botanicalName: 'DATURA STRAMONIUM',
    family: 'Solanaceae',
    synonyms: {
      english: "Jimson weed, devil's trumpet",
      hindi: 'Safed Datura',
      tamil: 'Umatai',
      telugu: 'Ummetta' // corrected from "Datura" on source page, which was just the English/generic name repeated, not an actual Telugu name. "Ummetta" (ఉమ్మెత్త) is the well-known Telugu common name for this plant
    },
    chemicalConstituents: 'Contains saponins, tannins, steroids, alkaloids, flavonoids, phenols, and glycosides. Hyoscine [(-)-scopolamine] constitutes the major tropane alkaloid, along with hyoscyamine and atropine.',
    structureImage: '/assets/garden/structures/datura-structure.jpg',
    uses: [
      'Datura has been used in traditional medicine to treat conditions such as asthma, coughs, and pain; however, the seeds and leaves used for these purposes are highly risky due to the plant\'s toxicity',
      'Has been used in various spiritual and shamanic practices, particularly in parts of South America and India, due to its psychoactive properties, which can cause intense hallucinations',
      'Has been used historically as a natural insecticide, as its toxic compounds can deter or kill pests',
      "In scientific research, Datura and its alkaloids are studied for their effects on the nervous system and potential therapeutic applications; researchers investigate the plant's compounds to better understand their pharmacological effects and potential uses in medicine (this refers to controlled laboratory/pharmaceutical research, not home use)"
    ],
    // NOTE: the source page already appropriately flagged this plant's toxicity within the uses text itself,
    // which is good practice - formalized that into a dedicated caution section here (consistent with the other
    // entries in this project) and added a few specific, standard safety points that were implied but not
    // explicitly stated. Datura poisoning (from both accidental and intentional/recreational ingestion) is a
    // well-documented cause of emergency room visits and fatalities, particularly involving adolescents seeking
    // its hallucinogenic effects - please verify against a current toxicology reference before publishing.
    cautions: [
      'All parts of the plant (seeds, leaves, flowers) are highly toxic and contain potent tropane alkaloids (atropine, hyoscyamine, scopolamine)',
      'Ingestion can cause severe anticholinergic poisoning, with symptoms including delirium, hallucinations, rapid heart rate, dangerously high body temperature, and in severe cases, death',
      'There is no safe home dose - intentional or recreational use of Datura for its hallucinogenic effects is a well-documented cause of serious poisoning and fatalities, particularly among adolescents',
      'Should never be ingested or self-administered; keep away from children and pets',
      'If ingestion is suspected, seek emergency medical attention immediately'
    ],
    pdf: '/assets/pdfs/garden/datura.pdf'
  },
  'parijatham': {
    botanicalName: 'NYCTANTHES ARBOR-TRISTIS',
    family: 'Oleaceae',
    synonyms: {
      english: 'Night jasmine',
      hindi: 'Harsingar',
      tamil: 'Pavazhamalli', // CORRECTED: source page listed "parijaat" here, which is the Sanskrit/Hindi-derived name, not an actual Tamil name. The real Tamil common name is "Pavazhamalli" (பவழமல்லி)
      telugu: 'Parijatam' // decoded from garbled source text ("PÄrijÄtam") - this matches the page's own title "Parijatham" and is the standard Telugu name (పారిజాతం)
    },
    chemicalConstituents: 'Iridoid glycosides, mannitol, beta-amyrin, beta-sitosterol, hentriacontane, benzoic acid, astragalin, nicotiflorin, oleanolic acid, nyctanthic acid, friedelin, and lupeol.',
    structureImage: '/assets/garden/structures/parijatham-structure.jpg',
    uses: [
      'Often used in traditional medicine to aid digestion; believed to have properties that help relieve constipation and improve overall digestive function',
      'Has anti-inflammatory properties, making it useful in treating conditions related to inflammation, such as arthritis',
      'The flowers and leaves are sometimes used in treatments for skin conditions, including eczema and acne, due to their purported antimicrobial properties',
      'In some regions, the flowers are used as a natural flavoring agent in certain dishes and desserts; their fragrance can enhance the flavor profile of culinary preparations',
      'The pleasant aroma of the flowers makes them suitable for use in aromatherapy and natural perfumery',
      'The flowers can be used in traditional crafts, such as making garlands and decorative arrangements for festivals and ceremonies'
    ],
    // NOTE: unlike some other entries in this project (e.g. Datura, Aristolochia, Nerium oleander), Parijatham
    // does not have a well-documented history of severe toxicity - it's a commonly used Ayurvedic remedy.
    // However, the leaves are notably very bitter and, per traditional/ethnobotanical sources, excessive or
    // prolonged consumption of raw leaf preparations can cause gastrointestinal upset. Adding a mild, appropriately
    // scoped caution rather than an alarming one, since the severity here is genuinely much lower than several
    // other plants covered in this project.
    cautions: [
      'The leaves are very bitter and excessive or prolonged consumption of raw leaf preparations may cause gastrointestinal upset',
      'As with any herbal remedy, consult a healthcare professional before using for internal/prolonged medicinal purposes, especially during pregnancy or while breastfeeding'
    ],
    pdf: '/assets/pdfs/garden/parijatham.pdf'
  },
  'tamalapaku': {
    botanicalName: 'PIPER BETLE',
    family: 'Piperaceae',
    synonyms: {
      english: 'Betel leaf', // CORRECTED: source page listed "Indian Bay Leaf," which is actually Cinnamomum tamala, an unrelated plant. Piper betle's real English name is "Betel leaf" (or "betel pepper")
      hindi: 'Paan', // CORRECTED: source listed "Tej patta" (which is Hindi for Cinnamomum tamala/Indian bay leaf, not this plant). The correct Hindi name for Piper betle is "Paan"
      tamil: 'Vetrilai', // CORRECTED: source listed "Pattai Ilai" (bark-leaf, unrelated). The correct Tamil name is "Vetrilai" (வெற்றிலை), the root of the English word "betel" itself
      telugu: 'Thamalapaku' // matches the page's own title and is the standard Telugu name (తమలపాకు)
    },
    chemicalConstituents: 'Eugenol, chavicol, chavibetol, hydroxychavicol, and caryophyllene, which are the major phenolic and terpene compounds in the essential oil. Also contains phytosterols (beta-sitosterol), triterpenes, and alkaloids/other constituents such as piperine, piperbetol, and allylpyrocatechol.',
    structureImage: '/assets/garden/structures/thamalapaku-structure.jpg',
    uses: [
      'Traditionally chewed after meals as "paan," valued as a mouth freshener and digestive aid that stimulates saliva and helps relieve indigestion',
      'Used in Ayurvedic and traditional medicine for its antimicrobial and antiseptic properties, including topical use for minor wounds and skin infections',
      'Has anti-inflammatory properties and is traditionally used to help with conditions such as arthritis and general inflammation',
      'Used in traditional remedies for respiratory complaints such as cough and cold',
      'Holds cultural and ceremonial importance in India, where betel leaves are offered in religious rituals, weddings, and as a symbol of hospitality and respect',
      'Essential oil and extracts are studied for antioxidant activity, helping neutralize free radicals in the body'
    ],
    // NOTE: Betel leaf (Piper betle) itself, used plain, is considered safe in moderation and has a long history
    // of traditional use. However, real and significant health risks are strongly associated with how it is
    // commonly consumed in South Asia - as "paan" combined with areca (betel) nut, slaked lime, and often tobacco.
    // This combination, not the leaf alone, is classified as carcinogenic. Including this distinction clearly
    // rather than omitting it, since conflating "betel leaf" with "betel quid/paan with tobacco" is a common
    // and medically important point of confusion.
    cautions: [
      'The leaf itself is generally safe in moderation, but "paan" preparations combining betel leaf with areca (betel) nut, slaked lime, and especially tobacco are classified as carcinogenic and are strongly linked to oral cancer and other oral health problems',
      'Excessive or habitual chewing (even without tobacco) can cause staining of teeth, gum irritation, and mild constipation',
      'As with any herbal remedy, consult a healthcare professional before using for internal or prolonged medicinal purposes, especially during pregnancy or while breastfeeding'
    ],
    pdf: '/assets/pdfs/garden/thamalapaku.pdf'
  },
  'coriander': {
    botanicalName: 'CORIANDRUM SATIVUM',
    family: 'Apiaceae (Umbelliferae)',
    synonyms: {
      english: 'Coriander (leaves known as Cilantro)', // CORRECTED/CLARIFIED: "Cilantro" strictly refers to the fresh leaves in American English usage; "Coriander" is the umbrella name for the plant and is also what the dried seeds are always called
      hindi: 'Dhaniya',
      tamil: 'Kothamalli',
      telugu: 'Kottimira' // also commonly spelled "Kothimeera"
    },
    chemicalConstituents: 'Linalool (72.7%), followed by gamma-terpinene (8.8%), alpha-pinene (5.5%), camphor (3.7%), limonene (2.3%), geranyl acetate (1.9%), and p-cymene (1.5%).', // CORRECTED: source listed "λ-terpinene," which is not a real compound - the correct constituent, consistent with published GC-MS studies of coriander seed oil, is gamma-terpinene
    structureImage: '/assets/garden/structures/coriander-structure.jpg',
    uses: [
      'Coriander, known as cilantro in its fresh leaf form and as coriander seed when dried, is incredibly versatile and used in various ways across different cuisines',
      'Often used as a garnish or mixed into dishes for a fresh, citrusy flavor; common in Latin American, Middle Eastern, and Asian cuisines, and used in salsas, salads, and as a topping for soups and stews',
      'Used as a spice in many dishes; the seeds can be toasted to enhance their flavor and ground into a powder, and are popular in spice blends like garam masala and curry powder, as well as in pickles, marinades, and spice rubs',
      'Adds a unique, bright flavor to dishes and pairs well with a wide range of ingredients, from vegetables and meats to grains and legumes',
      'Coriander seeds are traditionally believed to aid digestion and are used to help alleviate bloating and discomfort',
      'Both the seeds and leaves contain compounds that may help reduce inflammation and oxidative stress'
    ],
    // NOTE: Coriander is a very common culinary herb/spice with a strong safety record when consumed as food.
    // The main documented caution is allergy (coriander/cilantro allergy is a recognized, if uncommon, food
    // allergy) and a well-known genetic trait where a subset of people perceive cilantro leaves as tasting
    // soapy due to an olfactory receptor variant. Adding this since the source page didn't include a
    // cautions section at all, and leaving safety information out entirely isn't appropriate for a pharmacy
    // reference page.
    cautions: [
      'Coriander/cilantro allergy, while uncommon, is a recognized food allergy and can cause reactions in sensitive individuals',
      'A genetic variation causes some people to perceive fresh cilantro leaves as tasting soapy or unpleasant; this is a harmless taste-perception difference, not a toxicity concern',
      'As with any concentrated seed extract or essential oil, medicinal-strength use should be discussed with a healthcare professional, particularly during pregnancy'
    ],
    pdf: '/assets/pdfs/garden/coriander.pdf'
  },
  'usiri': {
    botanicalName: 'PHYLLANTHUS EMBLICA',
    family: 'Phyllanthaceae (formerly classified under Euphorbiaceae)',
    synonyms: {
      english: 'Indian gooseberry',
      hindi: 'Amla',
      tamil: 'Nellikai', // CORRECTED: source text was garbled/encoding-corrupted ("Ā€mlĀ"). The correct Tamil name for Phyllanthus emblica is "Nellikai" (நெல்லிக்காய்)
      telugu: 'Usiri' // matches the page's own title and is the standard Telugu name (ఉసిరి)
    },
    chemicalConstituents: 'The fruits contain very high amounts of ascorbic acid (vitamin C), among the richest natural sources known. Other major constituents include tannins (emblicanin A and B, punigluconin, pedunculagin), phenolic acids (gallic acid, ellagic acid, chebulinic acid), flavonoids (quercetin, kaempferol derivatives), and other polyphenolic compounds, which together contribute to its strong antioxidant and anti-inflammatory properties.',
    structureImage: '/assets/garden/structures/usiri-structure.jpg',
    uses: [
      'Amla can be consumed fresh, as a juice, or in powdered form as a dietary supplement to boost overall health',
      'Used in various culinary preparations, including pickles, chutneys, and jams, particularly in Indian cuisine',
      'Rich in vitamin C and polyphenols, amla acts as a powerful antioxidant, helping to neutralize free radicals and reduce oxidative stress',
      'Its anti-inflammatory properties can help reduce inflammation and alleviate conditions like arthritis',
      'Used in various home remedies for conditions like sore throat, cough, and respiratory issues',
      'Considered a tridoshic herb in Ayurveda, believed to balance all three doshas (Vata, Pitta, and Kapha), and is used in numerous formulations for its therapeutic properties, including the well-known preparation Chyawanprash'
    ],
    // NOTE: Amla has a strong safety record as a food and traditional supplement, but a few real, documented
    // interactions/considerations exist, particularly around its blood-sugar and blood-thinning effects,
    // which are relevant for a pharmacy-context reference page.
    cautions: [
      'May lower blood sugar levels, so people with diabetes or those on blood sugar-lowering medication should monitor levels and consult a doctor before regular use',
      'May have mild blood-thinning effects, so caution is advised for those on anticoagulant/antiplatelet medication or before surgery',
      'Excessive consumption of concentrated extracts or supplements may cause stomach upset in some individuals',
      'As with any herbal remedy, consult a healthcare professional before using for internal or prolonged medicinal purposes, especially during pregnancy or while breastfeeding'
    ],
    pdf: '/assets/pdfs/garden/usiri.pdf'
  },
  'cuphea': {
    botanicalName: 'CUPHEA HYSSOPIFOLIA',
    family: 'Lythraceae',
    synonyms: {
      english: 'Mexican heather (also called false heather, Hawaiian heather, or elfin herb)', // CORRECTED: source listed "Sufia hyssopifolia," which appears to be a garbled OCR misread of the plant's own botanical name rather than a real common name
      hindi: 'No established traditional Hindi name — Cuphea hyssopifolia is a Mexican/Central American ornamental introduced to Indian gardens, not a native or traditionally used plant', // CORRECTED: source text was a garbled phonetic transliteration of the Latin name, not an actual Hindi word
      tamil: 'No established traditional Tamil name (introduced ornamental species)', // CORRECTED: source was garbled/encoding-corrupted transliteration, not a real Tamil name
      telugu: 'No established traditional Telugu name (introduced ornamental species)' // CORRECTED: same issue - garbled transliteration rather than a real Telugu name
    },
    chemicalConstituents: 'Tannins, flavonoids, phenolic acids, triterpenes, sterols, carbohydrates, and unsaturated fatty acids (including lauric acid), consistent with the phytochemical profile reported across Cuphea species.',
    structureImage: '/assets/garden/structures/cuphea-structure.jpg',
    uses: [
      'Traditionally used in some regions to help with fevers and coughs',
      'Seeds of Cuphea plants are a source of medium-chain fatty acids (notably lauric acid) and are used in the cosmetic industry to produce soaps and skincare products',
      'Used as a natural insecticide in some traditional applications',
      'Leaves and flowers have been used as a general tonic in folk preparations',
      'Widely cultivated as an ornamental garden and border plant for its compact form and continuous small flowers, which also attract pollinators like bees and butterflies'
    ],
    // NOTE: Unlike most other entries in this garden (Amla, Betel leaf, Coriander, etc.), Cuphea hyssopifolia
    // is primarily known and used as an ornamental landscaping plant rather than a well-documented traditional
    // medicinal herb. Pharmacological research on the Cuphea genus (anti-inflammatory, antioxidant, antibacterial,
    // etc.) exists, but robust human safety/dosage data for internal medicinal use is limited. A caution
    // reflecting this gap is more honest than implying it's a well-established household remedy.
    cautions: [
      'Cuphea hyssopifolia is primarily grown as an ornamental plant; robust human safety and dosage data for internal/medicinal use is limited compared to well-established medicinal herbs',
      'As with any plant material not well-documented for internal use, avoid ingestion without professional guidance, and consult a healthcare professional before any therapeutic use'
    ],
    pdf: '/assets/pdfs/garden/cuphea.pdf'
  },
};

const gardenPages = {};
gardenPlants.forEach(name => {
  const slug = slugify(name);
  gardenPages[slug] = {
    title: name,
    image: `/assets/garden/${slug}.jpg`,
    details: gardenPlantDetails[slug] || null
  };
});

app.get('/garden/:page', (req, res) => {
  const page = gardenPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }

  let contentHtml;

  if (page.details) {
    const d = page.details;
    const synonymsHtml = [
      d.synonyms.english ? `<p class="plant-synonym-line"><strong>ENGLISH:</strong> ${d.synonyms.english}</p>` : '',
      d.synonyms.hindi ? `<p class="plant-synonym-line"><strong>HINDI:</strong> ${d.synonyms.hindi}</p>` : '',
      d.synonyms.tamil ? `<p class="plant-synonym-line"><strong>TAMIL:</strong> ${d.synonyms.tamil}</p>` : '',
      d.synonyms.telugu ? `<p class="plant-synonym-line"><strong>TELUGU:</strong> ${d.synonyms.telugu}</p>` : ''
    ].join('');

    const usesHtml = d.uses.map(u => `<li class="plant-use-item">${u}</li>`).join('');

    contentHtml = `
      <div class="plant-photo-container">
        <img src="${page.image}" alt="${page.title}" class="plant-photo">
      </div>

      <p class="plant-meta"><span class="plant-meta-label">BOTANICAL NAME:</span> <em>${d.botanicalName}</em></p>
      <p class="plant-meta"><span class="plant-meta-label">FAMILY:</span> ${d.family}</p>

      <h3 class="plant-section-heading">SYNONYMS:</h3>
      ${synonymsHtml}

      <h3 class="plant-section-heading">CHEMICAL CONSTITUENTS:</h3>
      <p class="college-para">${d.chemicalConstituents}</p>

      ${d.structureImage ? `
        <div class="plant-structure-container">
          <img src="${d.structureImage}" alt="Chemical structure" class="plant-structure-img">
          <div class="plant-structure-caption">Chemical Structure</div>
        </div>
      ` : ''}

      <h3 class="plant-section-heading">USES:</h3>
      <ul class="plant-uses-list">
        ${usesHtml}
      </ul>

      <div class="pdf-card" style="margin-top: 25px;">
        <div class="pdf-card-label">${page.title}</div>
        <a href="${d.pdf}" target="_blank" class="pdf-card-view">
          <i class="bi bi-file-earmark-text"></i>
        </a>
      </div>
    `;
  } else {
    contentHtml = `
      <div class="gallery-detail-grid">
        <div class="gallery-detail-item">
          <img src="${page.image}" alt="${page.title}" class="gallery-detail-img">
        </div>
      </div>
    `;
  }

  res.render('about-page', {
    pageTitle: page.title,
    content: contentHtml,
    parentLabel: 'Garden',
    parentUrl: '#'
  });
});

app.get('/garden', (req, res) => {
  res.render('about-page', {
    pageTitle: 'Garden',
    content: `<p class="college-para">Add Garden overview content here.</p>`,
    parentLabel: 'Home',
    parentUrl: '/'
  });
});


const downloadsPages = {
  'aishe': { 
    title: 'AISHE', 
    content: `
      <p><strong>SRI SIVANI COLLEGE OF PHARMACY</strong></p>
      <p><strong>SURVEY YEAR</strong> &nbsp; <a href="/downloads/aishe/survey-2023-24.pdf" target="_blank">2023-24</a></p>

      <table class="download-table">
        <tr>
          <td>DCF-1</td>
          <td>
            <a href="/downloads/aishe/dcf-1.pdf" target="_blank" class="download-icon-btn" title="Download DCF-1">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>DCF-2</td>
          <td>
            <a href="/downloads/aishe/dcf-2.pdf" target="_blank" class="download-icon-btn" title="Download DCF-2">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>DCF-3</td>
          <td>
            <a href="/downloads/aishe/dcf-3.pdf" target="_blank" class="download-icon-btn" title="Download DCF-3">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>DCF-4</td>
          <td>
            <a href="/downloads/aishe/dcf-4.pdf" target="_blank" class="download-icon-btn" title="Download DCF-4">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
      </table>
    `
  },
  'pci': { 
    title: 'PCI Approvals', 
    content: `
      <p><strong>SRI SIVANI COLLEGE OF PHARMACY</strong></p>

      <table class="pci-links-table">
        <tr>
          <td class="pci-link-blue">PCI APPROVAL 2024-25</td>
          <td><a href="/downloads/pci/approval-2024-25.pdf" target="_blank" class="view-link">VIEW</a></td>
        </tr>
        <tr>
          <td class="pci-link-red">PCI APPROVAL 2023-24</td>
          <td><a href="/downloads/pci/approval-2023-24.pdf" target="_blank" class="view-link">VIEW</a></td>
        </tr>
        <tr>
          <td class="pci-link-purple">Previous approval</td>
          <td><a href="/downloads/pci/previous-approval.pdf" target="_blank" class="view-link">VIEW</a></td>
        </tr>
      </table>

      <table class="download-table">
        <tr>
          <td>OLD APPROVAL-1</td>
          <td>
            <a href="/downloads/pci/old-approval-1.pdf" target="_blank" class="download-icon-btn" title="Download Old Approval 1">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>OLD APPROVAL-2</td>
          <td>
            <a href="/downloads/pci/old-approval-2.pdf" target="_blank" class="download-icon-btn" title="Download Old Approval 2">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>OLD APPROVAL-3</td>
          <td>
            <a href="/downloads/pci/old-approval-3.pdf" target="_blank" class="download-icon-btn" title="Download Old Approval 3">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
      </table>
    `
  },
  'jntu-gv': { 
    title: 'JNTU GV Approvals', 
    content: `
      <p><strong>JNTU-GV</strong></p>

      <table class="download-table">
        <tr>
          <td>JNTU GV 2023-24 APPROVAL</td>
          <td>
            <a href="/downloads/jntu-gv/approval-2023-24.pdf" target="_blank" class="download-icon-btn" title="Download JNTU GV 2023-24 Approval">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>JNTU GV 2022-23 APPROVAL</td>
          <td>
            <a href="/downloads/jntu-gv/approval-2022-23.pdf" target="_blank" class="download-icon-btn" title="Download JNTU GV 2022-23 Approval">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>COLLEGE STARTING APPROVAL</td>
          <td>
            <a href="/downloads/jntu-gv/college-starting-approval.pdf" target="_blank" class="download-icon-btn" title="Download College Starting Approval">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
      </table>
    `
  },
  'aicte': { title: 'AICTE', content: `<h3 class="vision-heading">Under Process</h3>` },
  'nirf-2025': { 
    title: 'SRI SIVANI COLLEGE OF PHARMACY NIRF 2025', 
    content: `
      <p><strong>NIRF</strong></p>

      <table class="download-table">
        <tr>
          <td>NIRF 2025</td>
          <td>
            <a href="/downloads/nirf/nirf-2025.pdf" target="_blank" class="download-icon-btn" title="Download NIRF 2025">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>NIRF 2025 OVER ALL</td>
          <td>
            <a href="/downloads/nirf/nirf-2025-overall.pdf" target="_blank" class="download-icon-btn" title="Download NIRF 2025 Overall">
              <i class="bi bi-file-earmark-pdf"></i>
            </a>
          </td>
        </tr>
      </table>
    `
  },
};

app.get('/downloads/:page', (req, res) => {
  const page = downloadsPages[req.params.page];
  if (!page) {
    return res.status(404).send('Page not found');
  }
  res.render('about-page', {
    pageTitle: page.title,
    content: page.content,
    parentLabel: 'Downloads',
    parentUrl: '#'
  });
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});