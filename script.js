let buttonList = document.querySelectorAll('button');
let r = "";
let contor = 0;

let display = document.getElementById('display')

let calculator = {
    firstTerm: 0,
    secontTerm: 0,
    operation:'',
    result: 0,
};

function computeRes(firstTerm, secontTerm, operation){

    let res = 0;
    if(isNaN(secontTerm)){
        secontTerm = 0;
    }
    if(isNaN(firstTerm)){
        secontTerm = 0;
    }

    switch(operation){
        case '/': res = firstTerm / secontTerm; break; // js return automatically nan
        case '*': res = firstTerm * secontTerm; break;
        case '-': res = firstTerm - secontTerm; break;
        case '+': res = firstTerm + secontTerm; break;
    }
    display.innerHTML = res;
    resetCalculator(true, res);
}

function resetCalculator(res, val){
    calculator.firstTerm = 0;
    calculator.secontTerm = 0;
    calculator.operation = '';

    if(res){
        calculator.result = val;
       
    }

    else{
        calculator.result = 0;
        display.innerHTML = val;
    }
}

buttonList.forEach(function(e){
    e.addEventListener('click', function(i){
        let x = i.target.innerHTML;
        if(isNaN(parseFloat(x))){

            if(contor === 0){
                calculator.firstTerm = parseFloat(r);
            }

            if(contor === 1){
                calculator.secontTerm = parseFloat(r);
            }
            
            switch(x){
                case 'C' : let arr = r.split('');
                           arr = arr.slice(0,-1);
                           r = arr.join(""); display.innerHTML = r; break;

                case 'AC' : r = ''; resetCalculator(false, 0); break;
                case '/' : if(contor < 2 ) contor++; r=''; calculator.operation = "/"; break;
                case 'x' : if(contor < 2 ) contor++; r=''; calculator.operation = "*"; break;
                case '+' : if(contor < 2 ) contor++; r=''; calculator.operation = "+"; break;
                case '-' : if(contor < 2 ) contor++; r=''; calculator.operation = "-"; break;
                case '=' : computeRes(calculator.firstTerm, calculator.secontTerm, calculator.operation); r=''; contor = 0 ; break;            
            }


        }

        else{
            r = r+x;
            display.innerHTML = r;
        }
       
        console.log(calculator, contor);
    })
})