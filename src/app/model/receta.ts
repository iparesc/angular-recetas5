/*clase para encapsular los atributos de una receta*/
 export class Receta{
    nombre:string;
    imagen:string;
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
        this.imagen= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCSOhTADTYOEgbzGXIq_HWOZH3dtLTvpxOdjEfvY0uCuuHcMD';
        this.likes=0;
        this.cocinero=cocinero;
        this.descripcion='Plato típico vasco';
        this.isGlutenFree=false;
        this.ingredientes=[];
     
    
    }
    
    addIngrediente(ingrediente:string){
        this.ingredientes.push(ingrediente);
    }
}