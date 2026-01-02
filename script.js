// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Scroll to the target element smoothly with snap
                    const scrollContainer = document.querySelector('.scroll-container');
                    if (scrollContainer) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }
        });
    });

    // Handle resume button click
    const resumeButton = document.querySelector('.resume-button');
    if (resumeButton) {
        resumeButton.addEventListener('click', function(e) {
            // Check if the resume file exists
            const resumePath = this.getAttribute('href');
            fetch(resumePath)
                .then(response => {
                    if (!response.ok) {
                        e.preventDefault();
                        alert('Resume file not found. Please add your resume.pdf to the assets folder.');
                    }
                })
                .catch(() => {
                    // File doesn't exist, but let the browser handle it
                    console.log('Resume file will be downloaded when available');
                });
        });
    }

    // Add active state to navigation links on scroll
    const sections = document.querySelectorAll('.page-section');
    const navLinksArray = Array.from(navLinks);
    const scrollContainer = document.querySelector('.scroll-container');

    function updateActiveNav() {
        let current = '';
        const scrollPosition = scrollContainer ? scrollContainer.scrollTop : window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Update active nav on scroll
    const scrollElement = scrollContainer || window;
    scrollElement.addEventListener('scroll', updateActiveNav);
    
    // Initial call
    updateActiveNav();

    // Animate code editor when scrolled into view
    const aboutSection = document.getElementById('about');
    const codeEditor = document.querySelector('.code-editor');
    
    if (aboutSection && codeEditor) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    codeEditor.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(aboutSection);
    }

    // Animate projects grid when scrolled into view
    const projectsSection = document.getElementById('Projects');
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (projectsSection && projectsGrid) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    projectsGrid.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(projectsSection);
    }

    // Animate skills container when scrolled into view
    const skillsSection = document.getElementById('skills');
    const skillsContainer = document.querySelector('.skills-container');
    
    if (skillsSection && skillsContainer) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillsContainer.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(skillsSection);
    }

    // Animate education container when scrolled into view
    const educationSection = document.getElementById('education');
    const educationContainer = document.querySelector('.education-container');
    
    if (educationSection && educationContainer) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    educationContainer.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(educationSection);
    }
});
