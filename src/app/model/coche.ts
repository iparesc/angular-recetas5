export class Coche{

    id : number;
    marca : string;
    modelo : string;
    version : string;
    foto : string;

    //caracteristicas
    puertas : number;
    caballos: number;
    consumo: number;
    
    constructor( marca:string , modelo:string, version?:string ){
        this.id = -1;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.foto = 'assets/img/carro.png';
    }

}