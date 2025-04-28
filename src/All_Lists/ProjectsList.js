import img1 from '../assets/blog.png'
import img2 from '../assets/todoApp.png'
import img3 from '../assets/weather.png'

const ProjectsList = [
    {
        id: 1,
        title: 'Bicycle Buy & Sell Platform',
        link: '#',
        github: 'https://github.com/Sjais6165',
        image: img1,
        description: 'React.js, Node.js, Express.js, MongoDB',
        details: [
            'Built a marketplace for buying and selling bicycles, integrated a secure payment gateway that increased successful transactions by 30%.',
            'Implemented a fast, scalable backend with real-time inventory updates, optimized MongoDB queries for efficient data handling.',
            'Designed an interactive UI with a mobile-friendly layout, improved navigation speed by 25% and ensured a seamless user experience.'
        ]
    },
    {
        id: 2,
        title: 'Secure File Sharing Application',
        link: '#',
        github: 'https://github.com/Sjais6165',
        image: img2,
        description: 'React.js, Node.js, MongoDB',
        details: [
            'Deployed a secure, containerized file-sharing platform using Docker, enabled consistent environments and streamlined DevOps workflows.',
            'Architected a scalable backend using Node.js & Express.js, optimized MongoDB queries to handle 10,000+ file transactions with 25% faster upload speeds.',
            'Modernised a responsive UI in React.js, enhanced user experience and implemented download tracking, improved security insights by 35%.'
        ]
    },
    {
        id: 3,
        title: 'E-commerce Shopping Website',
        link: '#',
        github: 'https://github.com/Sjais6165',
        image: img3,
        description: 'HTML, CSS, Node.js, MongoDB',
        details: [
            'Developed a dynamic shopping platform supported secure user authentication and role-based access control, improved user security by 40%.',
            'Operated an intuitive UI/UX using HTML & CSS, enhanced user engagement and reduced bounce rates by 30%.',
            'Built a scalable backend with Node.js & Express.js, handling 5,000+ product listings and ensured fast response times, and integrated MongoDB for data storage, optimized queries to reduce page load time by 25%.'
        ]
    }
]

export default ProjectsList