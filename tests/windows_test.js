const { I } = inject();

Feature('Переход по вкладкам');

Scenario('Переход по вкладкам',  () => {
    I.amOnPage('http://the-internet.herokuapp.com/windows');
    I.clickLink('Click Here');
    I.switchToNextTab();
    I.seeInTitle('New Window');
    I.dontSeeInTitle('The Internet');
});
