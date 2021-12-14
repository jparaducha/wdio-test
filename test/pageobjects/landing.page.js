const Page = require('./page');

class Landing extends Page(){

    
    get homeBtn (){
        return $('a[href="/home"]');
    }
}

module.exports = new Landing();