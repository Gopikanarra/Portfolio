document.addEventListener('DOMContentLoaded', () => {
    // Function to load HTML content into a target element
    const loadHTML = (url, targetId) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(targetId).innerHTML = data;
            });
    };

    // Load each section
    loadHTML('navbar.html', 'navbar-container');
    loadHTML('home.html', 'home');
    loadHTML('about.html', 'about');
    loadHTML('projects.html', 'projects');
    loadHTML('skills.html', 'skills');
    loadHTML('blogs.html', 'blogs');
    loadHTML('contact.html', 'contact');
    loadHTML('footer.html', 'footer');

    // Mobile menu toggle
    document.getElementById('menu-button').addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });
});
