const { I } = inject();
Feature('Главная страница');

Scenario('Открытие главной @test', async () => {
I.amOnPage('/');
});
