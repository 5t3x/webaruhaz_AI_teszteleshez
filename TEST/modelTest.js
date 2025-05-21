import Modell from "../PUBLIC/Model.js";

function removeKosarItemTest(id) {
    const model = new Model()
    const termek = {
        id: 1,
        nev: "Termék 1",
        ar: 1000,
    };
    model.addKosar(termek);
    model.removeKosarItem(id);
    console.assert(
        model.getKosarLista().id === 1,
        "A termék nem lett eltavolitva."
    );
    console.log("Kosarelem eltavolitva");
}
removeKosarItemTestNemLetezoId();

function removeKosarItemTest(id) {
    const model = new Model()
    const termek = {
        id: 999,
        nev: "Termék 1",
        ar: 1000,
    };
    model.addKosar(termek);
    model.removeKosarItem(id);
    console.assert(
        model.getKosarLista().id === 999,
        "A termék nem lett eltavolitva."
    );
    console.log("Kosarelem eltavolitva");
}
removeKosarItemTest(id);

function decreaseQuantityTest(id) {
    const model = new Model()
    const termek = {
        id: 1,
        nev: "Termék 1",
        ar: 1000,
        mennyiseg: 2,
    };
    model.addKosar(termek);
    model.decreaseQuantity(termek);
    console.assert(
        model.getKosarLista().mennyiseg === 1,
        "A mennyiseg nem lett csokkentve."
    );
    console.log("Mennyiseg csokkentve");
}
decreaseQuantityTest(id);

function getKosarDarabszamTest() {
    const model = new Model();
    const termek1 = {
        id: 1,
        nev: "Termék 1",
        ar: 1000,
    };
    const termek2 = {
        id: 2,
        nev: "Termék 2",
        ar: 2000,
    };
    model.addKosar(termek1);
    model.addKosar(termek2);
    console.assert(
        model.getKosarDarabszam() === 2,
        "Darabszam nem megfelelo."
    );
    console.log("Kosár darabszám teszt sikeresen lefutott");
}
getKosarDarabszamTest();