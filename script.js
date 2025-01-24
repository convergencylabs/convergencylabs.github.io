function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const cards = document.querySelectorAll('.card');
    const button = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    header.classList.toggle('dark-mode');
    header.classList.toggle('light-mode');

    cards.forEach(card => {
        card.classList.toggle('dark-mode');
        card.classList.toggle('light-mode');
    });

    themeIcon.classList.toggle('dark-mode');
    themeIcon.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Switch to Light Mode';
        themeIcon.dataset.tooltip = 'Switch to Light Mode';
        themeIcon.innerHTML = '<span>☀️</span>';
    } else {
        button.textContent = 'Switch to Dark Mode';
        themeIcon.dataset.tooltip = 'Switch to Dark Mode';
        themeIcon.innerHTML = '<span>🌙</span>';
    }
}