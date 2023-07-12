// console.log('async');
/*
// const pippo = 1; // undefined
// const pluto = 2; // undefined
// const paperino = pippo + pluto; // pippo e pluto diventano 1 e 2
// const topolino= 'javascript';
// console.log(topolino + paperino);
*/

//////////////////////////////////////////////////////////////////////// 

function superFunzione(){
    console.log('sto eseguendo il codice dentro il timeout');
}

const pippo = 1; 

const pluto = 2; 

//funzione esegui lambda dopo un tempo di attesa
setTimeout(() => {
    console.log('sto eseguendo il codice dentro il timeout');
}, 20000);
//timeout tempo di attesa (20.000 20 secondi) 

const paperino = pippo + pluto;

const topolino= 'javascript';

console.log(topolino + paperino);