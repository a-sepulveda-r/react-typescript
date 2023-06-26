// - En TypeScript es necesario especificar el tipo de dato que tendra una variable, funcion o array
// - TypeScript puede inferir el tipo de dato por lo que no es necesario indicarle a todo el tipo de dato

//La interface se usa para definir los tipos de variables que tendra un objeto, array o funcion
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "aizen",
    id: 4
}
// dara error al usar una propiedad que no esta definida en la interface
// const user: User = {
//     username: "aizen",
//     id: 4
// }

console.log(user);