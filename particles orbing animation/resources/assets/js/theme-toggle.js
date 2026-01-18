/**
 * Theme Toggle Component
 * Shadcn-inspired light/dark theme switcher
 */

class ThemeToggle {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    this.createToggleButton();
    this.applyTheme(this.theme);
    this.setupEventListeners();
  }

  createToggleButton() {
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'theme-toggle-container';
    toggleContainer.innerHTML = `
      <button class="theme-toggle" aria-label="Toggle theme">
        <svg class="sun-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10 2V4M10 16V18M18 10H16M4 10H2M15.5 4.5L14 6M6 14L4.5 15.5M15.5 15.5L14 14M6 6L4.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <svg class="moon-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 10.5C16.5 15.5 11.5 18.5 7 17.5C3.5 16.7 1 13.5 1.5 10C2 6.5 5.5 3.5 9.5 4C9 4.5 8.5 5.5 8.5 7C8.5 9.5 10 11.5 12.5 11.5C14 11.5 15.5 11 16.5 10C16.7 10.2 16.9 10.3 17 10.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    `;
    
    document.body.appendChild(toggleContainer);
    this.toggleButton = toggleContainer.querySelector('.theme-toggle');
  }

  setupEventListeners() {
    this.toggleButton.addEventListener('click', () => {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      this.applyTheme(this.theme);
      localStorage.setItem('theme', this.theme);
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update Three.js background color based on theme
    if (window.particleStage) {
      const bgColor = theme === 'light' ? 0xf0f4f8 : 0x0a0a0f;
      window.particleStage.renderer.setClearColor(bgColor);
    }
  }
}

export default ThemeToggle;

