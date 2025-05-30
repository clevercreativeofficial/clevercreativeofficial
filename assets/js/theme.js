const toggleButton = document.getElementById('themeToggle');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Initialize theme based on localStorage or OS preference
const userPref = localStorage.getItem('darkMode');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userPref === 'true' || (userPref === null && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    if (moonIcon && sunIcon) {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
} else {
    document.documentElement.classList.remove('dark');
    if (moonIcon && sunIcon) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

// Toggle function
toggleButton?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);

    if (moonIcon && sunIcon) {
        moonIcon.classList.toggle('hidden');
        sunIcon.classList.toggle('hidden');
    }
});