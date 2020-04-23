const { I } = inject();

const loginPage = require('../pages/loginPage');

Feature('Авторизация');

Scenario('Авторизация с валидными данными',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/login');
    I.fillField(loginPage.username, 'tomsmith');
    I.fillField(loginPage.password, 'SuperSecretPassword!');
    I.click(loginPage.button.submit);
    I.waitForVisible(loginPage.successAuth);
});

Scenario('Авторизация с невалидным именем ',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/login');
    I.fillField(loginPage.username, 'smith');
    I.fillField(loginPage.password, 'SuperSecretPassword');
    I.click(loginPage.button.submit);
    I.waitForVisible(loginPage.failAuth);
});

Scenario('Авторизация с невалидным паролем ',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/login');
    I.fillField(loginPage.username, 'tomsmith');
    I.fillField(loginPage.password, 'SuperPassword');
    I.click(loginPage.button.submit);
    I.waitForVisible(loginPage.failAuth);
});
Scenario('Авторизация с пустыми полями имя и пароль ',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/login');
    I.fillField(loginPage.username, '');
    I.fillField(loginPage.password, '');
    I.click(loginPage.button.submit);
    I.waitForVisible(loginPage.failAuth);
});