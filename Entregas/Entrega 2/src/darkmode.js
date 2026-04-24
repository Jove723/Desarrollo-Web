const themeToggle = document.getElementById('theme-toggle')
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('darkmode')

    const isDark = body.classList.contains('darkmode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
})

if(darkmode === 'active') enableDarkmode()

themeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})