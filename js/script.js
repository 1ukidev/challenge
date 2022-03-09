const btnAdicionar = document.getElementById("adicionar");
const btnRemover = document.getElementById("remover");
const lista = document.getElementById("lista");
const texto = document.getElementById("texto");

btnAdicionar.onclick = () => {
    const entrada = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textnode = document.createTextNode(texto.value);

    if(texto.value == "" || !/\S/.test(texto.value)) {
        return null;
    } else {
        entrada.appendChild(checkbox);
        entrada.appendChild(textnode);
        lista.appendChild(entrada);
        texto.value = "";
    }
};

btnRemover.onclick = () => {
    const items = [].slice.call(lista.childNodes);
    let item;

    while(item = items.pop()) {
        if(item.firstChild && item.firstChild.checked) {
            lista.removeChild(item);
        }
    };
};
