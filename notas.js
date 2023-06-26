// - En TypeScript es necesario especificar el tipo de dato que tendra una variable, funcion o array
// - Tambien es posible que TypeScript pueda inferir el tipo de dato pero idealmente es mejor indicarselo
var user = {
    name: "aizen",
    id: 4
};
// dara error al usar una propiedad que no esta definida en la interface
// const user: User = {
//     username: "aizen",
//     id: 4
// }
console.log(user);
