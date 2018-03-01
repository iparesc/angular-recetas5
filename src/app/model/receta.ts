/*clase para encapsular los atributos de una receta*/
 export class Receta{
    nombre:string;
    foto:string;
    likes:number;
    descripcion:string;
    imagen_gluten:string;
    isGlutenFree:boolean;
    cocinero:string;
    ingredientes:string[];
    //solo es posible un constructor
    constructor(nombre:string,cocinero:string='anonimo'){
        console.log('Receta Constructor');
        this.nombre= nombre;
        this.foto= 'assets/img/receta_default.jpg';
        this.likes=0;
        this.cocinero=cocinero;
        this.descripcion='lorem ipsum dolor'
        this.isGlutenFree=false;
        this.ingredientes=[];
     
    
    }
    
    addIngrediente(ingrediente:string){
        this.ingredientes.push(ingrediente);
    }
}