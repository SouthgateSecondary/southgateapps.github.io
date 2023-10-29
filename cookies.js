document.addEventListener('DOMContentLoaded', function() {
    const cookiesNotification = document.querySelector('.cookies-notification');
    const cookiesCloseButton = document.querySelector('.cookies-close');

    cookiesCloseButton.addEventListener('click', function() {
        cookiesNotification.style.display = 'none';
        // Set a cookie to remember that the notification has been closed
        document.cookie = 'cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    });

    // Check if the cookie 'cookiesAccepted' exists
    const cookiesAccepted = document.cookie.split(';').some((item) => item.trim().startsWith('cookiesAccepted='));
    if (cookiesAccepted) {
        cookiesNotification.style.display = 'none';
    }
});
