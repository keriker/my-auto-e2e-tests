const { I } = inject();

Feature('Главная страница');

Scenario('Открытие главной @test',  () => {
I.amOnPage('/');
});
