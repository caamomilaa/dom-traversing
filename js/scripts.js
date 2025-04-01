// # Ejercicios

// ## DOM

// Usando el HTML que os dejo a continuación realiza los siguientes ejercicios:

// - Del div con el id box-1 imprime por consola: Todos los hijos de la lista y el item especial por separado
// - Del div con el id box-2 imprime por consola: El textContent y las clases del h2 y el p
// - Del h2 con el id subtitle-1 imprime por consola: Su textContent; la clase del div; y la clase del p que tiene debajo.
// - Del h2 con el id subtitle-2 imprime por consola: Su textContent; el textContent y la clase de los dos span que tiene.

const boxOneElement = document.getElementById('box-1');

console.dir(
  `${boxOneElement.children[0].children[0].textContent} ${boxOneElement.children[0].children[1].textContent} ${boxOneElement.children[0].children[3].textContent}`
);
console.dir(`${boxOneElement.children[0].children[2].textContent}`);

const boxTwoElement = document.getElementById('box-2');
console.dir(
  `${boxTwoElement.children[0].children[0].textContent}, ${boxTwoElement.children[0].children[1].textContent}. Clases del h2: ${boxTwoElement.children[0].children[0].classList[0]}. Clases del p: ${boxTwoElement.children[0].children[1].classList}.`
);

const subtitleOneElement = document.getElementById('subtitle-1');
console.dir(
  `${subtitleOneElement.textContent}. Clase del div: ${subtitleOneElement.parentElement.classList}. Clase del p: ${subtitleOneElement.nextElementSibling.classList}`
);

const subtitleTwoElement = document.getElementById('subtitle-2');
console.dir(
  `${subtitleTwoElement.textContent}. Texto primer span: ${subtitleTwoElement.previousElementSibling.textContent}. Su clase: ${subtitleTwoElement.previousElementSibling.classList}.
  Texto segundo span: ${subtitleTwoElement.nextElementSibling.textContent}. Su clase: ${subtitleTwoElement.nextElementSibling.classList}.`
);
