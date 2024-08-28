document.addEventListener("DOMContentLoaded", function () {
    // Select the sections and elements to animate
    const hiSection = document.querySelector('#hi');
    const aboutSection = document.querySelector('.about');
    const aboutImg = document.querySelector('.aboutImg');
    const aboutText = document.querySelector('.aboutText');
    const educationSection = document.querySelector('#education');
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress');

    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    // Callback function for Intersection Observer
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target === skillsSection) {
                    progressBars.forEach(bar => {
                        bar.style.width = bar.classList.contains('html') ? '95%' :
                            bar.classList.contains('css') ? '87%' :
                                bar.classList.contains('js') ? '60%' :
                                    bar.classList.contains('react') ? '60%' :
                                        bar.classList.contains('express') ? '50%' :
                                            bar.classList.contains('sql') ? '70%' :
                                                bar.classList.contains('plsql') ? '65%' : '0';
                    });
                }
            } else {
                entry.target.classList.remove('visible');

                if (entry.target === skillsSection) {
                    progressBars.forEach(bar => {
                        bar.style.width = '0';
                    });
                }
            }
        });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe the sections
    observer.observe(hiSection);
    observer.observe(aboutSection);
    observer.observe(aboutImg);
    observer.observe(aboutText);
    observer.observe(educationSection);
    observer.observe(skillsSection);
});


