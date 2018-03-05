export class Recetario{

    id : number;
    nombre : string;
    foto : string;

    //caracteristicas
    calorias : number;
    likes: number;
    descripcion: string;
    
    constructor( nombre:string , foto:string, calorias:number, likes:number, descripcion:string){
        this.id = -1;
        this.nombre = nombre;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = '';
        }    
        this.calorias = calorias;
        this.likes = likes;
        this.descripcion = descripcion;

    }

}