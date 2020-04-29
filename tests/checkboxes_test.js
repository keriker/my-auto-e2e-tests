const { I } = inject();

const checkboxPage = require('../pages/checkboxPage');

Feature('Чекбоксы');

Scenario('Выбор чекбокса',  () => {
    I.amOnPage('http://the-internet.herokuapp.com/checkboxes');
    I.dontSeeCheckboxIsChecked(checkboxPage.checkbox.first);
    I.seeCheckboxIsChecked(checkboxPage.checkbox.second);
    I.checkOption(checkboxPage.checkbox.first);
    I.seeCheckboxIsChecked(checkboxPage.checkbox.first);
    I.uncheckOption(checkboxPage.checkbox.second);
    I.dontSeeCheckboxIsChecked(checkboxPage.checkbox.second);
});
