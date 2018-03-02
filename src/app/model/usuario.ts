export class Usuario{
    nombre:string;
    apellido:string;
    email:string;
    imagen:string;
    id:number;
    sexo:Sexo;
    //solo es posible un constructor
    constructor(nombre:string='anonimo'){
        console.log('Receta Constructor');
        this.nombre= nombre;
        this.id=-1;
        this.email='athletic@bilbao,com'
        this.apellido='Plato típico vasco';
        this.imagen='https://image.tmdb.org/t/p/w300/92EQZFUNyFUkRRlfqw2PHBKaqpQ.jpg';
        this.sexo=Sexo.Indefinido;
    }  
}
    
export enum Sexo{Hombre='Hombre',Mujer='Mujer',Indefinido='Indefinido'}
    