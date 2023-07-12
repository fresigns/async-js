// // console.log('async');
// function superFunzione(){
//     console.log('sto eseguendo il codice dentro il timeout');
// }

// const pippo = 1; 

// const pluto = 2; 


// // setTimeout(() => {
// //     console.log('sto eseguendo il codice dentro il timeout');
// // }, timeout); // tempo di attesa
// setTimeout(superFunzione, 20000);

// const paperino = pippo + pluto;

// const topolino= 'javascript';

// console.log(topolino + paperino);

// // setInterval(() => {
// // }, interval);

// setInterval(() => {
//        console.log('sto eseguendo il codice dentro l\'interval'); 
// }, 2000);

//                        response
function gestisciRisposta(resp){
    // return resp.text();
    console.log('response', resp);
    return resp.json();
}

function gestisciRisultatoFinale(res){
    // const dittoObj = JSON.parse(res)
    // console.log(dittoObj);
    console.log(res);
}

// catch gestisce errori
function gestisciEmergenze(error){
    console.log(error.message);
}

/* posso scriverlo anche in lambda */
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((resp) => resp.text())
// .then((res) => console.log(res));

// fetch non parte finchè non ha una callback (then)

fetch('https://pokeapi.co/api/v2/pokemon/ditto') /* promise - quando*/
/* fetch: chiamata web seguita da due callback */ 
.then(gestisciRisposta) /* cosa */
.then(gestisciRisultatoFinale)
.catch(gestisciEmergenze);


/*posso scriverlo anche in lambda */
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((resp) => resp.json())
.then((res) => console.log(res))
.catch((error) => console.log(error.message));