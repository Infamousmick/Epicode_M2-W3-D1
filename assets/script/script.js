/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let button1 = document.getElementById("button1");

button1.addEventListener("click", () => {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let checkCrazySum = crazySum(num1, num2);
  console.log(`Esercizio 1: ${checkCrazySum}`);
});

function crazySum(a, b) {
  if (!a || !b) {
    return "Inserisci due numeri interi";
  } else if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let button2 = document.getElementById("button2");

button2.addEventListener("click", () => {
  let num3 = parseInt(document.getElementById("num3").value);
  let checkBoundary = boundary(num3);
  console.log(`Esercizio 2: ${checkBoundary}`);
});

function boundary(number) {
  if (!number) {
    return "Inserisci due numeri interi";
  } else if ((number >= 20 && number <= 100) || number === 400) {
    return true;
  } else {
    return false;
  }
}
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let button3 = document.getElementById("button3");

button3.addEventListener("click", () => {
  let text1 = document.getElementById("text1").value;
  let checkReverseString = reverseString(text1);
  console.log(`Esercizio 3: ${checkReverseString}`);
});
function reverseString(stringInput) {
  if (!stringInput || stringInput.length == 1) {
    return "Inserisci un testo valido";
  } else {
    let stringOutput = stringInput.split("").reverse().join("");
    return stringOutput;
  }
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let button4 = document.getElementById("button4");

button4.addEventListener("click", () => {
  let text2 = document.getElementById("text2").value;
  let checkUpperFirst = upperFirst(text2);
  console.log(`Esercizio 4: ${checkUpperFirst}`);
});

function upperFirst(stringInput) {
  if (!stringInput || stringInput.length == 1) {
    return "Inserisci un testo valido";
  } else {
    let arrString = stringInput.split(" ");
    let stringOutput = "";
    let newString = "";
    arrString.forEach((element) => {
      newString = element.toLowerCase();
      stringOutput +=
        newString.replace(
          newString.charAt(0),
          element.charAt(0).toUpperCase(),
        ) + " ";
    });
    stringOutput.trim();
    console.log(arrString);
    return stringOutput;
  }
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let button5 = document.getElementById("button5");

button5.addEventListener("click", () => {
  let num4 = parseInt(document.getElementById("num4").value);
  let checkGiveMeRandom = giveMeRandom(num4);
  console.log(`Esercizio 5: ${checkGiveMeRandom}`);
});

function giveMeRandom(n) {
  if (!n) {
    return "Inserisci un numero valido";
  } else {
    let numero;
    let arrayNum = [];
    for (let i = 0; i < n; i++) {
      numero = Math.floor(Math.random() * (10 - 0 + 1) - 0);
      arrayNum.push(numero);
    }
    arrayNum.sort();
    return arrayNum;
  }
}

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let button6 = document.getElementById("button6");

button6.addEventListener("click", () => {
  let num5 = parseInt(document.getElementById("num5").value);
  let num6 = parseInt(document.getElementById("num6").value);
  let checkArea = area(num5, num6);
  console.log(`Esercizio Extra 1: ${checkArea}`);
});

function area(l1, l2) {
  if (!l1 || !l2) {
    return "Inserisci un numero valido";
  } else {
    let calcoloArea = l1 * l2;
    return `L'area del rettangolo è ${calcoloArea}`;
  }
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let button7 = document.getElementById("button7");

button7.addEventListener("click", () => {
  let num7 = parseInt(document.getElementById("num7").value);
  let checkCrazyDiff = crazyDiff(num7);
  console.log(`Esercizio Extra 2: ${checkCrazyDiff}`);
});

function crazyDiff(inputNumber) {
  if (!inputNumber) {
    return "Inserisci un numero valido";
  } else {
    const number2 = 19;
    let differenza = Math.abs(inputNumber - number2);
    if (differenza > 19) {
      return differenza * 3;
    } else {
      return differenza;
    }
  }
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let button8 = document.getElementById("button8");

button8.addEventListener("click", () => {
  let text3 = document.getElementById("text3").value;
  let checkCodify = codify(text3);
  console.log(`Esercizio Extra 3: ${checkCodify}`);
});

function codify(textInput) {
  if (!textInput) {
    return "Inserisci un testo valido";
  } else if (textInput.toLowerCase().startsWith("code")) {
    return textInput;
  } else {
    let textFinal = "";
    textFinal = textFinal.concat("code", textInput);
    return textFinal;
  }
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let button9 = document.getElementById("button9");

button9.addEventListener("click", () => {
  let num8 = parseInt(document.getElementById("num8").value);
  let checkCheck3and7 = check3and7(num8);
  console.log(`Esercizio Extra 4: ${checkCheck3and7}`);
});
function check3and7(numberInput) {
  if (!numberInput) {
    return "Inserisci un numero valido";
  } else if (numberInput <= 0) {
    return "Inserisci un numero maggiore di 0!";
  } else if (numberInput % 3 === 0 || numberInput % 7 === 0) {
    return true + ` per il numero ${numberInput}`;
  } else {
    return false + ` per il numero ${numberInput}`;
  }
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let button10 = document.getElementById("button10");

button10.addEventListener("click", () => {
  let text4 = document.getElementById("text4").value;
  let checkCutString = cutString(text4);
  console.log(`Esercizio Extra 6: ${checkCutString}`);
});

let tt = "s";
function cutString(textInput) {
  if (!textInput) {
    return "Inserisci un testo valido";
  } else {
    let newText = "";
    let textFirstLetter = textInput.charAt(0);
    let textLastLetter = textInput.charAt(textInput.length - 1);
    newText = textInput
      .trim()
      .replace(textFirstLetter, "")
      .replace(textLastLetter, "");
    return `Il testo "${textInput}" senza le lettere "${textFirstLetter}" e "${textLastLetter}" diventa ${newText}`;
  }
}
