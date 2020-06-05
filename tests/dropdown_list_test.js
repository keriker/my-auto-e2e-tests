const { I } = inject();

Feature('Выпадающий список');

Scenario('Выбираем опцию Option 1',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown');
    I.selectOption('#dropdown', 'Option 1' );
    I.waitForValue('#dropdown', '1')
});

Scenario('Выбираем опцию Option 2',  () => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown');
    I.selectOption('#dropdown', '2' );
    I.seeTextEquals('Option 2', '//option[@selected]');
});