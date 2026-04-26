function showCookieConsent() {
    const consentBanner = document.querySelector('.cookie-consent-card');
    const acceptButton = document.querySelector('.accept-btn');
    const closeButton = document.querySelector('.close-btn');

    // Check if the user has already given consent
    if (!localStorage.getItem('cookieConsent')) {
        consentBanner.classList.remove('hidden');
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'true');
        consentBanner.classList.add('hidden');
    });

    closeButton.addEventListener('click', () => {        
        consentBanner.classList.add('hidden');
    });
}