import React from 'react';

const { PUBLIC_URL } = process.env;

const activities = [
  {
    title: 'Associate Researcher',
    subtitle: 'Microsoft Research Cambridge, UK',
    content_paragraphs: [
      <span>
        Research, data analysis and insight derivation in terms of Qualitative Data Coding (QDC).
      </span>,
      <span>
        Co-authorship of intelligent-meetings publication at CHI 2021.
      </span>,
    ],
    type: 'employment',
    date: '2020 - 2021',
    icon: <img src={`${PUBLIC_URL}/images/microsoft.png`} alt="" />,
  },
  {
    title: 'WBCSD Atendee / Assistant',
    subtitle: 'World Business Council for Sustainable Development, Montreux, France',
    content_paragraphs: [
      <span>
        Taking part in the World Business Council for Sustainable Development
        Liaison Delegate meeting as an event atendee/assistant.
      </span>,
      <span>
        During this experience I had an opportunity to listen to, network with
        and contribute to the talks between over 500 liaison delegates from
        large businesses worldwide.
      </span>,
      <span>
        The talks revolved around sustainable management, technology and
        risks associated with its adoption / deployment.
      </span>,
    ],
    type: 'employment',
    date: '2019',
    icon: <img src={`${PUBLIC_URL}/images/wbcsd.jpeg`} alt="" />,
  },
  {
    title: 'Teaching Assistant',
    subtitle: 'Lancaster University',
    content_paragraphs: [
      <span>
        Teaching duties ranging from supervising practical sessions to delivering
        lectures and 1-to-1 support to students.
      </span>,
      <span>
        Completed an Introduction to Teaching at Lancaster (ITL) certificate
        and specialize in teaching topics such as:
      </span>,
      <span>- Operating Systems</span>,
      <span>- Programming</span>,
      <span>- Computer Networks</span>,
      <span>- Distributed Systems</span>,
    ],
    type: 'employment',
    date: '2019 - Present',
    icon: <img src={`${PUBLIC_URL}/images/lancs.png`} alt="" />,
  },
  {
    title: 'PhD Computer Science',
    subtitle: 'Lancaster University',
    content_paragraphs: [
      <span>
        Investigation of the relationships between high-performance computing
        infrastructures for Machine Learning and their impacts on the energy
        consumption, environment and the society.
      </span>,
      <span>
        Specifically, the project focuses on discovery of cognitive value
        provided by AI, the required computational resources and how best to
        manage the associated trade-offs from the energy and cost perspectives.
      </span>,
      <span>
        This research is conducted in a project-based fashion, where the hypotheses
        are realised in prototype systems that are designed, tested, validated and
        evaluated in labortory setting before publishing or open-sourcing.
      </span>,
    ],
    type: 'education',
    date: '2018 - Present',
    icon: <img src={`${PUBLIC_URL}/images/lancs.png`} alt="" />,
  },
  {
    title: 'Web Developer',
    subtitle: 'Freelance ',
    content_paragraphs: [
      <span>
        Full-stack Web-development with the use of technologies such as HTML5, CSS3, JS,
        Angular, VUE, Java Spring, custom-built Python web-servers, Docker, Kubernetes,
        Nginx/Apache, Wordpress.
      </span>,
      <span>
        <b>Projects: </b>
        <br />
        - <a href="https://esl.lancs.ac.uk">esl.lancs.ac.uk</a>
        <br />
        - <a href="https://dslab.lancs.ac.uk">dslab.lancs.ac.uk</a>
        <br />
        - <a href="https://woodplumptonclub.co.uk">woodplumptonclub.co.uk</a>
        <br />
        - <a href="https://3hgroup.co.uk">3hgroup.co.uk</a>
        <br />
      </span>,
    ],
    type: 'employment',
    date: '2018 - Present',
    icon: <img src={`${PUBLIC_URL}/images/web.png`} alt="" />,
  },
  {
    title: 'Data Engineer',
    subtitle: 'Digital Rail Ltd.',
    content_paragraphs: [
      <span>
        Development of intelligence provisioning platform for the purpose of data
        analysis, AI-based intelligence gathering and predictions centred around
        railway infrastructure faults and maintenance improvements.
      </span>,
    ],
    type: 'employment',
    date: '2018',
    icon: <img src={`${PUBLIC_URL}/images/drail.png`} alt="" />,
  },
  {
    title: 'Department Prize',
    subtitle: 'Lancaster University',
    content_paragraphs: [
      <span>
        For the best Final Year Project in the cohort.
      </span>,
    ],
    type: 'achievement',
    date: '2018',
    icon: <img src={`${PUBLIC_URL}/images/lancs.png`} alt="" />,
  },
  {
    title: 'Chancellor’s Medal',
    subtitle: 'Lancaster University',
    content_paragraphs: [
      <span>
        For accomplishments during the BSc.
      </span>,
    ],
    type: 'achievement',
    date: '2018',
    icon: <img src={`${PUBLIC_URL}/images/lancs.png`} alt="" />,
  },
  {
    title: 'Mini Operating System',
    subtitle: 'Lancaster University',
    content_paragraphs: [
      <span>
        My Final Year Project for the BSc disseration.
      </span>,
      <span>
        Developed DBOS - a multitasking operating system with memory protection,
        virtual file-system, graphical support, device drivers
        and userspace similar to a typical UNIX interface.
        Developed in C and Assembly (35k LOC).
      </span>,
      <span>
        Presented my dissertation on it - as PDF
      </span>,
    ],
    type: 'project',
    date: '2017 - 2018',
    icon: <img src={`${PUBLIC_URL}/images/lancs.png`} alt="" />,
  },
  {
    title: 'Best 2nd Year Results',
    subtitle: 'British Computer Society (BCS)',
    content_paragraphs: [],
    type: 'achievement',
    date: '2017',
    icon: <img src={`${PUBLIC_URL}/images/bcs.jpg`} alt="" />,
  },
  {
    title: 'Junior Software Developer',
    subtitle: 'Lancaster University Library',
    content_paragraphs: [
      <span>
        Developed web applications to improve efficient utilisation
        of the Library spaces, including a modular digital mapping
        system and an incident reporting application.
      </span>,
    ],
    type: 'employment',
    date: '2016 - 2018',
    icon: <img src={`${PUBLIC_URL}/images/lancs.png`} alt="" />,
  },
  {
    title: 'Computer Science BSc',
    subtitle: 'Lancaster University',
    content_paragraphs: [
      <span>
        <b>
          (1st class honours – avg. 90%)
        </b>
      </span>,
      <span>
        <b>Core Modules:</b>
        <br />
        - Artificial Intelligence
        <br />
        - Languages and Compilation
        <br />
        - Software Design
        <br />
        - Advanced Programming
        <br />
        - Distributed Systems
        <br />
        - Operating Systems
        <br />
        - Advanced Networking
        <br />
        - Embedded Systems
        <br />
        - Communication Systems
      </span>,
    ],
    type: 'education',
    date: '2015 - 2018',
    icon: <img src={`${PUBLIC_URL}/images/lancs.png`} alt="" />,
  },
  {
    title: '3rd place',
    subtitle: 'ICAEW BASE Competition',
    content_paragraphs: [
      <span>
        ICAEW - Institute of Chartered Accountants in England and Wales
      </span>,
    ],
    type: 'achievement',
    date: '2015',
    icon: <img src={`${PUBLIC_URL}/images/icaew.jpg`} alt="" />,
  },
  {
    title: 'Secondary Education',
    subtitle: 'Bay Leadership Academy',
    content_paragraphs: [
      <span>
        <b>GCSEs:</b> English, Maths, Science. Grades [A - C]
      </span>,
      <span>
        <b>A-Levels:</b> Media Studies, Business Studies, IT, Photography. Grades [Distinction]
      </span>,
    ],
    type: 'education',
    date: '2011 - 2015',
    icon: <img src={`${PUBLIC_URL}/images/bla.png`} alt="" />,
  },
  {
    title: 'Moved to United Kingdom',
    subtitle: 'Somewhere between Poland and UK',
    content_paragraphs: [
      <span>
        My first airplane journey
      </span>,
    ],
    type: 'life_event',
    date: '2010',
    icon: <img src={`${PUBLIC_URL}/images/uk.png`} alt="" />,
  },
  {
    title: 'Secondary Education',
    subtitle: 'Poland',
    content_paragraphs: [],
    type: 'education',
    date: '2009 - 2010',
    icon: <img src={`${PUBLIC_URL}/images/poland.png`} alt="" />,
  },
  {
    title: 'Programmed for the first time',
    subtitle: 'Poland',
    content_paragraphs: [
      <span>
        Developed a calculator in C++ that crashed every time division was performed.
        Looking back, I don&apos;t think there&apos;s an easy way to reproduce this
        and am still amazed as to how I managed to accomplish such error.
      </span>,
    ],
    type: 'achievement',
    date: '2008',
    icon: <img src={`${PUBLIC_URL}/images/poland.png`} alt="" />,
  },
  {
    title: 'Got my first computer',
    subtitle: 'Poland',
    content_paragraphs: [
      <span>
        <b>CPU:</b> Intel Pentium 2.80GHz
      </span>,
      <span>
        <b>RAM:</b> 256MB
      </span>,
      <span>
        <b>GPU:</b> GeForce 8600 GT 256MB
      </span>,
      <span>
        <b>DISK:</b> 160GB
      </span>,
    ],
    type: 'life_event',
    date: '2006',
    icon: <img src={`${PUBLIC_URL}/images/poland.png`} alt="" />,
  },
  {
    title: 'Learned to swim',
    subtitle: 'Poland',
    content_paragraphs: [],
    type: 'achievement',
    date: '2005',
    icon: <img src={`${PUBLIC_URL}/images/poland.png`} alt="" />,
  },
  {
    title: 'First time used a computer',
    subtitle: 'Poland',
    content_paragraphs: [
      <span>
        Printed my own name in 3 different colours.
      </span>,
    ],
    type: 'achievement',
    date: '2003',
    icon: <img src={`${PUBLIC_URL}/images/poland.png`} alt="" />,
  },
  {
    title: 'Primary Education',
    subtitle: 'Poland',
    content_paragraphs: [],
    type: 'education',
    date: '2002 - 2010',
    icon: <img src={`${PUBLIC_URL}/images/poland.png`} alt="" />,
  },
  {
    title: 'Learned to ride a bike',
    subtitle: 'Poland',
    content_paragraphs: [
      <span>
        Also realized that I cannot carry a football and steer the bike at the same time
      </span>,
    ],
    type: 'achievement',
    date: '2002',
    icon: <img src={`${PUBLIC_URL}/images/poland.png`} alt="" />,
  },
  {
    title: 'Birth',
    subtitle: 'Undisclosed hospital, Poland',
    content_paragraphs: [
      <span>Successfully managed to arrive on this world.</span>,
      <span>
        Exercised a great deal of focus to meet a tight deadline <b>(9 months)</b>.
      </span>,
      <span>
        Utilized a range of interpersonal skills
        <b> (lookin&apos; damn cute, loud crying)</b> to
        successfully network with industry experts <b> (Mum) </b>
        in order to procure invaluable resources <b>(milk) </b>
        to deploy a production ready project <b>(poop in the nappy)</b>.
      </span>,
      <span>
        Maintained a positive and open approach from the outset and throughout.
      </span>,
    ],
    type: 'life_event',
    date: '30 January 1997',
    icon: <img src={`${PUBLIC_URL}/images/poland.png`} alt="" />,
  },
];

export default activities;
