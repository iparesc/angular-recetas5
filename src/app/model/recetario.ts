export class Recetario {

    //Atributos
    id : number;
    nombre : string;
    imagen : string;
    likes  : number;
    cocinero : string;
    descripcion : string;
    isGlutenFree : boolean;
    ingredientes : string[];

    //solo es posible un constructor
    constructor( 
        nombre : string ,
        cocinero: string = 'Anonimo' //valor por defecto para 'undefined' o sin parametro
    ){

        console.log('Receta constructor');
        this.id = -1;
        this.nombre = nombre;
        this.imagen = 'assets/imgs/receta_default.jpg';
        this.likes = 0;
        this.cocinero = cocinero;
        this.descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem ipsum repellat consectetur deserunt doloribus sequi explicabo laudantium, deleniti, id totam, neque laborum debitis quia doloremque officiis incidunt labore ut.';
        this.isGlutenFree = false;
        this.ingredientes = [];

    }

    addIngrediente( ingrediente : string ){
        this.ingredientes.push(ingrediente);
    }

}