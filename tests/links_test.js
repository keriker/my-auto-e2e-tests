const { I } = inject();

const linkPage = require('../pages/linkPage');

Feature('Ссылки');

Scenario('Переходы по ссылкам',  () => {
    I.amOnPage(linkPage.url);
    I.clickLink('File Download' );
    I.waitForVisible(linkPage.header.fileDownloader);
    I.amOnPage(linkPage.url);
    I.clickLink('File Upload' );
    I.waitForVisible(linkPage.header.fileUploader);
});

