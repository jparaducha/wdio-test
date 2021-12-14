describe('main page', ()=>{
    it('verify list items', ()=>{

        browser.url('https://localhost:3000/');

        const listExamples = $$('ul li') //$$ busca todos los elementos;

        expect(listExamples).toBeElementsArrayOfSize({gte : 1});
        expect(listExamples).toBeElementsArrayOfSize(2);
    });

    it('should verify list items', ()=>{

        const listArray = $$('ul li');

        expect(listArray).toBeElementsArrayOfSize(4);
    })
})