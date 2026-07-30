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

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});