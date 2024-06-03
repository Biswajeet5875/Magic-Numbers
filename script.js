const fst= document.querySelector("#inp1");
const button = document.querySelector("#btn1");
const output = document.querySelector("#proect-op");
const secnum = document.querySelector("#inp2");
const thirdnum = document.querySelector("#inp3");
const secop = document.querySelector("#n2op");
const thirdop = document.querySelector("#n3op");
const button2 = document.querySelector("#btn2");
const ans = document.querySelector("#ans");

var a,b,c;

const jerry = document.querySelector(".jerry");
jerry.hidden = true;

function fstinp(){
   //let fst= document.querySelector("#inp1").value;
    console.log(fst.value);
    let x =fst.value * 3;
    console.log(x);
    output.innerText = `your output will be ${x} `;
    button.hidden = true;
    jerry.hidden = false;
}

function guessnum1(){
    // const fst = document.querySelector("#inp1").value;
    // console.log(fst);
   // let secnum = document.querySelector("#inp2").value;
   a = fst.value - secnum.value;
    secop.innerText = `the genetated 3rd number is ${a}`
}

function guessnum2(){
    // const fst = document.querySelector("#inp1").value;
    // console.log(fst);
    // let thirdnum = document.querySelector("#inp3").value;
    b = fst.value - thirdnum.value;
    thirdop.innerText =`the generated 5th number is ${b}`; 

}


function result(){
    c =parseInt(fst.value) +parseInt(secnum.value) + parseInt(thirdnum.value) +parseInt(a)  +parseInt(b) ;
ans.innerHTML = `the sum of all 5 numbers that is<br> ${fst.value} + ${secnum.value} + ${a}
+ ${thirdnum.value} + ${b} =<br> ${c}`;
    
    

}