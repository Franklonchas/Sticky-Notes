// Modelo

class Nota {

    constructor(titulo, texto) {
        this.titulo = titulo;
        this.texto = texto;
        this.fecha = "Fecha de creacion: " + new Date();
    }
}

// Vista
var idNota;
var arrayNotas = [];

function vistaNota(nota) {
    var divraiz = document.createElement("DIV");
    var divh1 = document.createElement("H1");
    var divh2 = document.createElement("H2");
    var divh5 = document.createElement("H5");
    var button = document.createElement("button");

    divraiz.setAttribute("class", "note");
    divh1.setAttribute("class", "title");
    divh2.setAttribute("class", "text");
    divh5.setAttribute("class", "date");
    button.setAttribute("id", "Bborrar");
    button.innerHTML = "Borrar";

    divh1.addEventListener("click", function (e) {
        idNota = [...document.getElementsByClassName("note")].indexOf(e.target.parentElement);
        document.getElementById("change").style.visibility = "visible";
    });
    divh2.addEventListener("click", function (e) {
        idNota = [...document.getElementsByClassName("note")].indexOf(e.target.parentElement);
        document.getElementById("change").style.visibility = "visible";
    });
    divh5.addEventListener("click", function (e) {
        idNota = [...document.getElementsByClassName("note")].indexOf(e.target.parentElement);
        document.getElementById("change").style.visibility = "visible";
    });
    button.addEventListener("click", function (e) {
        idNota = [...document.getElementsByClassName("note")].indexOf(e.target.parentElement);
        arrayNotas.splice(idNota, 1);
        document.getElementsByClassName("note")[idNota].remove();
        almacenarNotas();
    });

    divh1.innerHTML = nota.titulo;
    divh2.innerHTML = nota.texto;
    divh5.innerHTML = nota.fecha;

    divraiz.appendChild(divh1);
    divraiz.appendChild(divh2);
    divraiz.appendChild(divh5);
    divraiz.appendChild(button);

    return divraiz;

}

function crearNotas() {
    var titulo = document.getElementById("titulo").value;
    var texto = document.getElementById("texto").value;
    var nota = new Nota(titulo, texto);

    arrayNotas.push(nota);
    document.getElementById("panel").appendChild(vistaNota(arrayNotas[arrayNotas.length - 1]));
    document.getElementById("titulo").value = "";
    document.getElementById("texto").value = "";
    almacenarNotas();
}

function modificar() {
    var newTitulo = document.getElementById("titulo2").value;
    var newRecordatorio = document.getElementById("texto2").value;
    arrayNotas[idNota].titulo = newTitulo;
    arrayNotas[idNota].texto = newRecordatorio;
    document.getElementsByClassName("note")[idNota].children[0].innerHTML = newTitulo;
    document.getElementsByClassName("note")[idNota].children[1].innerHTML = newRecordatorio;
    document.getElementById("change").style.visibility = "hidden";
    almacenarNotas();
}

function almacenarNotas() {
    localStorage.setItem("Notes", JSON.stringify(arrayNotas));
}

function cargarNotas() {
    if (localStorage.getItem("Notes")) {
        let aux = JSON.parse(localStorage.getItem("Notes"));
        for (let i = 0; i < aux.length; i++) {
            arrayNotas.push(aux[i]);
            document.getElementById("panel").appendChild(vistaNota(arrayNotas[arrayNotas.length - 1]));
        }
    } else
        console.log("No hay nada almacenado");
}