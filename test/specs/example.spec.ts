// import LoginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';

import { setupBrowser, WebdriverIOBoundFunctions } from '@testing-library/webdriverio'
import { queries } from '@testing-library/dom'


// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();
//
//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });

describe('Electron', () => {
    let screen: WebdriverIOBoundFunctions<typeof queries>
    before(() => {
        screen = setupBrowser(browser)
    })
    describe('DOM', () => {
        // it('should determine when an element is in the document', async () => {
        //     expect(await screen.getByTestId('disabled-checkbox')).not.toExist();
        // });
        it('should determine when an element is not visible', async () => {
            //     const das = await screen.getByTestId('11')
            //     expect(das).toBeDisplayed();
            // const s = await browser.getTitle()
            // expect(s).toEqual('DevTools')
            const ins = await $('#hh1')
            expect(await ins.getText()).toEqual('s')
        });
    })
    // it('pls Work', async () => {
    //     // const ins = await $('#hh1');
    //     // const s = await browser.getTitle()
    //     // expect(await browser.getTitle()).toEqual('My Website')
    //     // await  expect(  browser).toHaveTitle('Devtools')
    //     // expect(await ins.getText()).toEqual('sdf')
    //     // const as = await screen.getByText('h111')
    //     // console.log(as)
    //     // expect(await as.getText()).toEqual('sdf')
    //     // expect(await screen.getByTestId('disabled-checkbox')).not.toExist();
    //     // expect(await screen.queryByTestId('not-there')).not.toExist();
    //     // expect(await as.getText()).toEqual('d')
    //     // const s = await browser.url('http://webdriver.io')
    //     // expect(await browser.getTitle()).toEqual('DevTols')
    //     // const ins = await $('//body/main/h1[2]')
    //     // expect(await ins.getText()).toEqual('s')
    //     // /html/body/div/div/header/h1[1]
    //     // const ins = await $('//body/div/div/header/h1[1]');
    //     // const ins = await $('#hh1');
    //     // expect(await ins.getText()).toEqual('s');
    //
    //     //         const link = await $('=WebdriverIO')
    //     // console.log(await link.getText()) // outputs: "WebdriverIO"
    //     // console.log(await link.getAttribute('href')) // outputs: "https://webdriver.io"
    //     // const link = await $('*=driver')
    //     // console.log(await link.getText())
    //     // const nameandText = await $('[name="username"]')
    //     // expect(await nameandText.getValue()).toEqual('fd')
    //     //
    //     // const input = await $('#inputID')
    //     // await input.setValue('work???')
    //     // await $('#updatebtn').click()
    //     // const getitem = await $('#iteminput')
    //     // expect(await getitem.getText()).toEqual('na')
    //     //
    //     //
    //     // const button = await $('#iteminput')
    //     // expect(await button.getText()).toEqual('ddw')
    //
    //     // 이거 필요 
    //     // VVVVVVV
    //     setupBrowser(browser)
    //
    //     const a = browser.$('#iteminput')
    //     expect(await a.getText()).toEqual('sdf')
    //     // const screen = setupBrowser(browser)
    //     // const b = await screen.getByText(/work\?{3}/i)
    //     // expect(await b.getTitle()).toEqual('df')
    // });
    // it('222 pls Work 2222', async () => {
    //     // const s = await browser.getTitle()
    //     // expect(s).toEqual('DevTools')
    //     const ins = await $('#hh1')
    //     expect(await ins.getText()).toEqual('s')
    // })
});
