const reactElement = React.createElement; //define reactElement como un alias para React.createElement. Esta función se utiliza para crear un elemento React (un objeto que describe cómo se debe representar un componente en el DOM).
const mainContainer = document.getElementById('app') //Aquí estás obteniendo una referencia al elemento del DOM con el id 'app'. Este es el contenedor donde se montará el árbol de componentes de React. Este contenedor debe existir en el HTML.
const root = ReactDOM.createRoot(mainContainer);// raíz de React en el contenedor del DOM de React 18 para habilitar el renderizado concurrente
root.render(reactElement(App));//crea un elemento React que representa al componente App, y root.render() monta este elemento en el contenedor mainContainer.
//Este código renderiza el componente App dentro del elemento HTML con el id 'app'. 


