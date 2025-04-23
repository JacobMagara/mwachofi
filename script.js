document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Toggle body overflow when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Smooth scrolling for all navigation links
            const targetId = item.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Show more experience functionality
    const showMoreBtn = document.getElementById('show-more-exp');
    const moreExperience = document.querySelector('.more-experience');
    
    const additionalExperience = [
        {
            date: "Jan-May 2017",
            title: "Data Assistant",
            company: "Plan International Kenya, Nilinde Project",
            responsibilities: [
                "Data entry of the Orphans and Vulnerable children registration forms",
                "Counterchecking errors of the entries into the system",
                "Sorting and filing"
            ]
        },
        {
            date: "Nov 2015-Jan 2017",
            title: "Health Records and Information Officer",
            company: "Mewa Hospital, Mombasa",
            responsibilities: [
                "Data compilation of end month reports",
                "Issuing of birth and death notifications",
                "Coding and indexing of disease and surgical operations (ICD 10)",
                "Maintaining storage of protected health information"
            ]
        },
        {
            date: "Nov 2015-Dec 2016",
            title: "Temporary Data Clerk",
            company: "Gold Star Kenya, Mombasa",
            responsibilities: [
                "Data verification and collection from health care facilities",
                "Chart abstraction",
                "Data entry into the IQCARE system",
                "Updating of the CCC registers"
            ]
        },
        {
            date: "July-Nov 2015",
            title: "Volunteer",
            company: "Tudor Sub County Hospital, Mombasa",
            responsibilities: [
                "Inputting patient's information in the IQ Care system",
                "Compiling end month reports",
                "Responsible for the data quality assessment"
            ]
        }
    ];

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            if (moreExperience.classList.contains('hidden')) {
                // Add additional experience items
                additionalExperience.forEach(exp => {
                    const expItem = document.createElement('div');
                    expItem.className = 'timeline-item';
                    expItem.innerHTML = `
                        <div class="timeline-date">${exp.date}</div>
                        <div class="timeline-content">
                            <h3>${exp.title}</h3>
                            <h4>${exp.company}</h4>
                            <ul>
                                ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                    moreExperience.appendChild(expItem);
                });
                
                moreExperience.classList.remove('hidden');
                showMoreBtn.textContent = 'Show Less';
            } else {
                // Clear and hide additional experience
                moreExperience.innerHTML = '';
                moreExperience.classList.add('hidden');
                showMoreBtn.textContent = 'Show More Experience';
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! Lily will get back to you soon.');
            this.reset();
        });
    }

    // Add animation to cards when they come into view
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !e.target.closest('.nav-container') && 
            navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});