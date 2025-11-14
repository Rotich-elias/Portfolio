// Shared React Components for Portfolio
class SharedComponents {
    static Header() {
        return (
            <header>
                <div className="header-content">
                    <div className="logo">
                        <h1>Rotich Kipkosgei Elius</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="skills.html">Skills</a></li>
                            <li><a href="experience.html">Experience</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="education.html">Education</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

    static Footer() {
        return (
            <footer>
                <div className="social-links">
                    <a href="mailto:elgeiy8@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/rotichelius-elgeiy-96b9631b5" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="tel:+254721237811" title="Phone"><i className="fas fa-phone"></i></a>
                </div>
                <p>&copy; 2025 Rotich Kipkosgei Elius. All rights reserved.</p>
            </footer>
        );
    }

    static PageNavigation({ previous, next }) {
        return (
            <div className="page-nav">
                {previous && <a href={previous.href}>&larr; {previous.text}</a>}
                {next && <a href={next.href}>{next.text} &rarr;</a>}
            </div>
        );
    }

    static ScrollObserver() {
        React.useEffect(() => {
            const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('section, .nav-card, .edu-card, .project-card, .experience-card, .skill-card');
            elements.forEach(el => observer.observe(el));

            return () => {
                elements.forEach(el => observer.unobserve(el));
            };
        }, []);
        
        return null;
    }

    static ErrorBoundary({ children }) {
        const [hasError, setHasError] = React.useState(false);

        React.useEffect(() => {
            const errorHandler = (error) => {
                console.error('Component error:', error);
                setHasError(true);
            };

            window.addEventListener('error', errorHandler);
            return () => window.removeEventListener('error', errorHandler);
        }, []);

        if (hasError) {
            return (
                <div className="error-boundary">
                    <i className="fas fa-exclamation-triangle"></i>
                    <h3>Something went wrong</h3>
                    <p>Please refresh the page or try again later.</p>
                </div>
            );
        }

        return children;
    }
}

// Utility functions
const PortfolioUtils = {
    // Lazy load images
    lazyLoadImages: () => {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    },

    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Format date for consistency
    formatDate: (dateString) => {
        const options = { year: 'numeric', month: 'long' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
};