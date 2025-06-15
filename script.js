// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Sample timeline data - Replace with your own experiences
const timelineData = [
    {
        title: "Software Engineering Intern",
        company: "NCR Voyix",
        date: "May 2025 - Present",
        color: "#8e44ad" // purple
    },
    {
        title: "Lab Assistant",
        company: "VPCL Lab",
        date: "Sept 2024 - Jan 2025",
        color: "#e74c3c" // red
    },
    {
        title: "Undergraduate Researcher",
        company: "VIPR Program",
        date: "August 2024 - December 2024",
        color: "#f39c12" // orange
    },
    {
        title: "Software Engineering Intern",
        company: "UPS",
        date: "June 2024 - August 2024",
        color: "#8d6748" // brown
    },
    {
        title: "Software Development Intern",
        company: "Thingsphere",
        date: "Nov 2023 - Mar 2024",
        color: "#2980b9" // blue
    }
];

// Function to create timeline items
function createTimeline() {
    const timeline = document.querySelector('.timeline');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');
        
        const content = `
            <div class="timeline-content compact" style="border-left: 6px solid ${item.color};">
                <h3 style=\"color:${item.color}\">${item.title}</h3>
                <div class="date">${item.date}</div>
                <p><strong style=\"color:${item.color}\">${item.company}</strong></p>
            </div>
        `;
        
        timelineItem.innerHTML = content;
        timeline.appendChild(timelineItem);
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createTimeline();
    handleNavbarScroll();
    initSmoothScroll();
}); 