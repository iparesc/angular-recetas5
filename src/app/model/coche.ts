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
    
    constructor( marca:string , modelo:string, puertas:number, caballos?:number, consumo?:number, foto?:string, version?:string){
        this.id = -1;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = '';
        }    
        this.puertas = puertas;
        this.caballos = caballos;
        this.consumo = consumo;

    }

}