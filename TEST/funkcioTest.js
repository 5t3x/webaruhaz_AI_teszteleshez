import Termekek from '../PUBLIC/Termekek.js';
function termekAdataiTest() {
    const lista = [
        {
            id: 0,
            nev: "Termék 1",
            ar: 1000,
            kep: "../kepek/placeholder.jpg",
            leiras: "Ez egy példa termék.",
        },
        {
            id: 1,
            nev: "Termék 2",
            ar: 1500,
            kep: "../kepek/placeholder.jpg",
            leiras: "Ez egy példa termék.",
        }
    ]

    const termek = new termek(lista);
    const termekLista = new Termekek(lista)
    lista.forEach((termek) => {
        const termekElem = document.createElement("div");
        termekElem.innerHTML = `
            <h2>${termek.nev}</h2>
            <p>${termek.leiras}</p>
            <img src="${termek.kep}" alt="${termek.nev}">
            <p>${termek.ar} Ft</p>
        `;
        szuloElem.appendChild(termekElem);
    });

    megjelenitettTermekek.forEach((elem, index) => {
        const eredeti = lista[index];

        const nev = elem.querySelector(".nev");
        const leiras = elem.querySelector(".leiras");
        const ar = elem.querySelector(".ar");
        const id = lista.id;

        if (nev !== eredeti.nev) {
            console.assert(`Hibás név: "${eredeti.nev}", de "${nev}" jelent meg`);
        }
        if (leiras !== eredeti.leiras) {
            console.assert(`Hibás leírás: "${eredeti.leiras}", de "${leiras}" jelent meg`);
        }
        if (ar !== `${eredeti.ar} Ft`) {
            console.assert(`Hibás ár: "${eredeti.ar} Ft", de "${ar}" jelent meg`);
        }
        if (id !== eredeti.id) {
            console.assert(`Hibás ID: "${eredeti.id}", de "${id}" jelent meg`);
        }
    });
}
termekAdataiTest()

function kosarbaTeszGombTest() {
    const gombok = szuloElem.querySelectorAll("button");
    gombok.forEach((gomb) => {
        if (!gomb.textContent.includes("Kosárba")) {
            console.log(`"Kosárba" gomb nem található`);
        }

    });
}
kosarbaTeszGombTest