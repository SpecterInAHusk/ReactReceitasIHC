class Receitas{
    constructor(){
        const fs = require('fs');
        this.receitas = JSON.parse(fs.readFileSync('../public/receitas.json', 'utf8'));
        console.log(this.receitas);
    }
}

