class Producto {
    constructor(numeros){
        this.numeros=numeros.split('').join('');
    }

    LargoP(){
        let max = 0;
        for (let i = 0; i < this.numeros.length - 12; i++) {
        let part = this.numeros.substring(i, 13);
        let resMultiplicacion = 1;
        for (let n of part) {
            resMultiplicacion *= +n;
        }
        return max = Math.max(max, resMultiplicacion);
        }
    }
}

var cadenaNum = new Producto ("73167176531330624919225119674426574742355349194934969835203127745063262395783180169848018694788518438586156078911294949545950173795833195285320880551");
console.log(cadenaNum.LargoP());

// la cadena completa la pueden ingresar con (``) que se usa paracomentar en multilinea :)
