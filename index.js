const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letsym = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letnum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const numsym = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
function generate(){
    pass1.textContent = "";
    pass2.textContent = "";
    let length = document.getElementById("length").value;
    let numbertick = document.getElementById('number').checked;
    let lettertick = document.getElementById('letter').checked;
    let symbolstick = document.getElementById('symbols').checked;
    if(length == ''){
        alert("Pls enter value");
    }else if(length < 8){
        alert("Password length must be greater than 8");
    }else if(numbertick && lettertick && symbolstick){
        for(let i = 0; i<length; i++){
            let x = Math.floor(Math.random() * characters.length);
            let y = Math.floor(Math.random() * characters.length);
            pass1.textContent += characters[x];
            pass2.textContent += characters[y];
        }
    }else if(numbertick && lettertick){
        for(let i = 0; i<length; i++){
            let x = Math.floor(Math.random() * letnum.length);
            let y = Math.floor(Math.random() * letnum.length);
            pass1.textContent += letnum[x];
            pass2.textContent += letnum[y];
        }
    }else if(numbertick && symbolstick){
        for(let i = 0; i<length; i++){
            let x = Math.floor(Math.random() * numsym.length);
            let y = Math.floor(Math.random() * numsym.length);
            pass1.textContent += numsym[x];
            pass2.textContent += numsym[y];
        }
    }else if(lettertick && symbolstick){
        for(let i = 0; i<length; i++){
            let x = Math.floor(Math.random() * letsym.length);
            let y = Math.floor(Math.random() * letsym.length);
            pass1.textContent += letsym[x];
            pass2.textContent += letsym[y];
        }
    }else if(numbertick){
        for(let i = 0; i<length; i++){
            let x = Math.floor(Math.random() * number.length);
            let y = Math.floor(Math.random() * number.length);
            pass1.textContent += number[x];
            pass2.textContent += number[y];
        }
    }else if(lettertick){
        for(let i = 0; i<length; i++){
            let x = Math.floor(Math.random() * letter.length);
            let y = Math.floor(Math.random() * letter.length);
            pass1.textContent += letter[x];
            pass2.textContent += letter[y];
        }
    }else if(symbolstick){
        for(let i = 0; i<length; i++){
            let x = Math.floor(Math.random() * symbols.length);
            let y = Math.floor(Math.random() * symbols.length);
            pass1.textContent += symbols[x];
            pass2.textContent += symbols[y];
        }
    }else{
        alert("Pls select the password type");
    }
}