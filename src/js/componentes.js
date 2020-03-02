
import '../css/componentes.css'

export const saludar = ( nombre ) => {

    console.log('creando h1, en el HTML');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }, vamos a esforzarnos por apreder ;)`;

    document.body.append(h1);
}