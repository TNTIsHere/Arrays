//Oppgave 1A
//Hennsikten med en array er å lagre informasjon og gruppere det i en variabel.

//Oppgave 1B
//Arrays i Javascript kan inneholde flere forskjellige datatyper, intiger, string, objekt, osv, mens andre programmeringsspråk kan bare ha en om gangen.

//Oppgave 2A
let testArray1 = [];
testArray1[0];

//Oppgave 2B
testArray1 = ["Johan", "Pawel", "Adrian", "Samepappa", "Ilja", "Max", "Birk", "Shane", "Espen", "Texmex"];

//Oppgave 2C
console.log([testArray1[1],testArray1[4],testArray1[7]]);

//Oppgave 3A
//En index står for hvilken posisjon en verdi er på. F.eks første verdi i en array er alltid index "0".

//Oppgave 3B
//Den første indexen er alltid 0, hvis du mangler noe fra en array blir den til index -1.

//Oppgave 3C
//Den siste indexen i en array er alltid et tall mindre enn len

//Oppgave 3D
//Lengden på en array står for hvor mange verdier er det i en array. Alle forskjellige verdier han sin egen index/nummereringsplass.

//Oppgave 3E
//Får å finne ut hvor lang en array er må du kunne bruke array.length. Du vet ikke om arrayen går opp til 5 eller til 500 før du har skjekket det ved bruk av array.length.

//Oppgave 4A
console.log(typeof testArray1); //Den skriver ut at en Array er en objekt.

//Oppgave 4B
Array.isArray(testArray1);

//Oppgave 4C
function oppgave4(parameter1) {
    if(Array.isArray(parameter1))
    console.log("Argumentet er en Array")
    else(console.log("Argumentet er ikke en Array"))
}
oppgave4(5);
oppgave4(["Test"]);