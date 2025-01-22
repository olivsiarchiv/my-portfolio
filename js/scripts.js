function loadContent(section) {
    const sections = document.querySelectorAll('.home-content, .about-content, .projects-content, .contact-content');
    sections.forEach(el => el.style.display = 'none');

    const activeSection = document.getElementById(section);
    if(activeSection) {
        activeSection.style.display = 'block';
    }

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`a[onclick="loadContent('${section}')"]`);
    if(activeLink) {
        activeLink.classList.add('active');
    }
}

window.onload = () => loadContent('home');