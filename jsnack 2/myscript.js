// JSnack 2
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

let N = parseInt(prompt("inserisci un numero"))
let NArr = []

for(let i=0; i<N; i++){
    let randN = Math.floor(Math.random() *100 + 1);
    NArr.push(randN);
    console.log(NArr)
}
document.write(NArr)
