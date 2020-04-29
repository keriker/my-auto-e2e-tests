const { I } = inject();

const forgotPasswordPage = require('../pages/forgotPasswordPage');

Feature('Восстановление пароля');

Scenario('Восстановление пароля',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/forgot_password');
    I.fillField(forgotPasswordPage.email, 'test@mail.ru');
    I.click(forgotPasswordPage.submit);
    I.waitInUrl('email_sent');
});
