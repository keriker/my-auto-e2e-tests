const { I } = inject();

const linkPage = require('../pages/linkPage');

Feature('Ссылки');

Scenario('Переходы по ссылкам',  async() => {
    I.amOnPage(linkPage.url);
    I.clickLink('File Download' );
    I.waitForVisible(linkPage.header.fileDownloader);
    // I.amOnPage(linkPage.url);
    await I.goBack();
    I.clickLink('File Upload' );
    I.waitForVisible(linkPage.header.fileUploader);
});

Scenario('Ошибка на странице',  async() => {
    I.amOnPage('https://the-internet.herokuapp.com/javascript_error');
});

