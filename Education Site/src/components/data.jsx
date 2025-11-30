import { CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa";
export const cardsData = [
    {
        id: 1,
        img: <CiMap />,
        title: "Books Library",
        description:
            "The gradual accumulation of information about atomic and small-scale behaviour...",
        color: "#e74040",
        bgColor: "#ffdcd1",
    },
    {
        id: 2,
        img: <FaImages />,
        title: "Market Analysis",
        description:
            "The gradual accumulation of information about atomic and small-scale behaviour...",
        color: "#2dc071",
        bgColor: "#b9eaa8",
    },
    {
        id: 3,
        img: <FaCreditCard />,
        title: "50+ online courses",
        description:
            "The gradual accumulation of information about atomic and small-scale behaviour...",
        color: "#23a6f0",
        bgColor: "#b2e3ff",
    },
];

export const courses = [
    {
        id: 1,
        img: "https://summer.harvard.edu/wp-content/uploads/sites/7/2022/06/how-to-study-like-a-harvard-student.jpg",
        department: "Web Development",
        title: "Mastering JavaScript: From Basics to Advanced",
        rating: 4.8,
        description:
            "Learn JavaScript step by step through hands-on projects, real coding challenges, and clear explanations. This course guides you through essential concepts like variables, functions, DOM manipulation, and APIs. You'll build real-world projects, strengthen your problem-solving skills, and gain the foundation needed for modern frameworks.",
        sales: 1350,
        price: 79.99,
        discount: 49.99,
        duration: "18 hours",
        lessons: 92,
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9C6Kk4eK-4eEWZXMEqqAr--84GA1sczU9zA&s",
        department: "Data Science",
        title: "Python for Data Analysis & Machine Learning",
        rating: 4.7,
        description:
            "A complete guide to Python, NumPy, Pandas, and Machine Learning models with practical examples. You'll explore data cleaning, visualization, model building, and evaluation techniques. The course includes hands-on exercises, real datasets, and step-by-step projects to prepare you for real industry work and data-driven decision making.",
        sales: 980,
        price: 89.99,
        discount: 59.99,
        duration: "22 hours",
        lessons: 110,
    },
    {
        id: 3,
        img: "https://www.patuck.edu.in/wp-content/uploads/2024/01/jan-blog-banner-1.jpg",
        department: "UI/UX Design",
        title: "Complete UI/UX Design Bootcamp",
        rating: 4.9,
        description:
            "Master modern UI/UX principles, wireframing, prototyping, and user-centered design. This course teaches you how to build intuitive interfaces using tools like Figma, understand user psychology, and design seamless digital experiences. You'll work on real-world design problems and develop a professional portfolio that stands out.",
        sales: 1520,
        price: 99.99,
        discount: 69.99,
        duration: "26 hours",
        lessons: 120,
    },
];
export const ratings = [
    {
        id: 1,
        stars: "★ ★ ★ ☆ ☆",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        description:
            "This course exceeded my expectations. The explanations were clear, the examples were practical, and I finally feel confident building real projects on my own.",
        name: "Sarah Kim",
        job: "Developer",
    },
    {
        id: 2,
        stars: "★ ★ ★ ★ ☆",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        description:
            "Very informative and well-structured. The hands-on tasks helped me understand complex concepts quickly. Definitely recommended for beginners and intermediates.",
        name: "Michael Lee",
        job: "Data Analyst",
    },
    {
        id: 3,
        stars: "★ ★ ★ ★ ☆",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        description:
            "Amazing content and great teaching style. I learned a lot of new techniques that I can directly apply in my work. Totally worth the time, investment and effort for the quality of the course.",
        name: "Emily Carter",
        job: "UI/UX Designer",
    },
];
