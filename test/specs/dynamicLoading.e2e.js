describe('dynamic loading', async ()=>{

    before( ()=>{

        const startBtn = $('#start button');
        browser.url('https://the-internet.herokuapp.com/dynamic_loading/1');
        startBtn.click();

        // await browser.pause(10000);
    });
    it('should wait for the hidden element to show', async ()=>{

        const finish =  $('#finish h4');

        const elLoading =  $('#loading');

        await elLoading.waitForDisplayed();

        await elLoading.waitForDisplayed({reverse:true});

        // await finish.waitForDisplayed();

        expect( await finish.getText()).toEqual('Hello World!');
    });
})