// SETTINGS PANEL TOGGLE
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');

settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
});

function closeSettings() {
    settingsPanel.classList.add('hidden');
}

// INTERFACE SWITCHING
function changeInterface(style) {
    const hub = document.getElementById('hub');
    hub.classList.remove('ps3', 'ps4', 'ps5');
    hub.classList.add(style);
}

// CONTROLLER DETECTION
const controllerDisplay = document.getElementById('controllerType');

function detectController() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if(isMobile) {
        controllerDisplay.textContent = "Touchscreen / Mobile Controller";
    } else {
        controllerDisplay.textContent = "Keyboard / Gamepad";
    }
}

// Run detection on page load
window.addEventListener('load', detectController);