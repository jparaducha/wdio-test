const Home = require('../pageobjects/home.page');
const Landing = require('../pageobjects/landing.page');

describe('dogs', ()=>{
    before( ()=>{
         browser.url('http://localhost:3000/');

        // await browser.pause(10000);
    })
    it('should display the home page', ()=>{
        // const homeBtn = $('a[href="/home"]');
        // const getAllDogsBtn = $('button[value="get all dogs"]');
        // const infoDog1 = $('a[href="/infoDog/1"]');

        // browser.url('http://localhost:3000');

        Landing.homeBtn.click();

        Home.getAllDogsBtn.click();

        expect(Home.infoDog1).toBeExisting();
    })
})