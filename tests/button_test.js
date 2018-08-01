import { Selector } from 'testcafe';

fixture `Button Test`
    .page `../index.html`;

test('My button test', async t => {
    await t
        .click('#app-button')
        .expect(Selector('#text-container').innerText).eql('You clicked the button!');
});
