const { I } = inject();

Feature('Главная страница');

Scenario('Открытие главной',  () => {
    I.amOnPage('/');
});
