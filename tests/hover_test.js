const { I } = inject();

const hoverPage = require('../pages/hoverPage');

Feature('Наведение мыши');

Scenario('Наведение на фото',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/hovers');
    I.moveCursorTo(hoverPage.profile);
    I.clickLink('View profile');
});
