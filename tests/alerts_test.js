const { I } = inject();

const alertPage = require('../pages/alertPage');

Feature('Алерты');

Scenario('JS alert',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/javascript_alerts');
    I.click(alertPage.button.alert);
    I.seeInPopup('I am a JS Alert');
    I.acceptPopup();
});

Scenario('JS confirm',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/javascript_alerts');
    I.click(alertPage.button.confirm);
    I.seeInPopup('I am a JS Confirm');
    I.acceptPopup();
});

Scenario('JS prompt',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/javascript_alerts');
    I.click(alertPage.button.prompt);
    I.seeInPopup('I am a JS prompt');
    I.acceptPopup();
});

Scenario('JS prompt. Нажать отменить',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/javascript_alerts');
    I.amCancellingPopups();
    I.click(alertPage.button.prompt);
    I.seeInPopup('I am a JS prompt');
    I.cancelPopup();
});