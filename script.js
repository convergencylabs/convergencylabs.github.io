function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const cards = document.querySelectorAll('.card');
    const button = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const table = document.querySelector('table');


    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    header.classList.toggle('dark-mode');
    header.classList.toggle('light-mode');
    
    table.classList.toggle('dark-mode');
    table.classList.toggle('light-mode');

    cards.forEach(card => {
        card.classList.toggle('dark-mode');
        card.classList.toggle('light-mode');
    });

    themeIcon.classList.toggle('dark-mode');
    themeIcon.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        themeIcon.innerHTML = '🌞'; // Sun icon for dark mode
        themeIcon.setAttribute('data-tooltip', 'Switch to Light Mode');
    } else {
        themeIcon.innerHTML = '🌙'; // Moon icon for light mode
        themeIcon.setAttribute('data-tooltip', 'Switch to Dark Mode');
    }
}