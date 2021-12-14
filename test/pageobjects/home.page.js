const Page = require('./page');

class Home extends Page(){


    get getAllDogsBtn(){
        
        return $('button[value="get all dogs"]');
    }
    get infoDog1() {
        return $('a[href="/infoDog/1"]');}


}

module.exports = new Home();