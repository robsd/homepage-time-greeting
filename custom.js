currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour < 12) {
    greetingType = 'morning';
}
else if (currentHour >= 12 && currentHour < 18) {
    greetingType = 'afternoon';
}
else {
    greetingType = 'evening';
}

document.querySelector('.information-widget-greeting').querySelector('span').textContent = 'Good ' + greetingType + '!';
