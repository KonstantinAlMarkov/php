let lastOperand = 0;
let result = null;
let operation = null;
let local_calc_status = false; //0 - не выполнялась операция; 1 - выполнялась операция
let calc_status = false; //0 - не нажимали =; 1 - нажимали =

const inputWindow = document.getElementById('inputWindow');

/*Кнопки с действиями*/
//c
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    result = null;
  //  localHistory.value += '\n'
    inputWindow.value = '0';
    localHistory.value = '';
    calc_status = false;
    local_calc_status = false;
})
//=
document.getElementById('btn_equal').addEventListener('click', function () {
    if (!isNaN(parseInt(inputWindow.value))){
        if (operation === 'sum'){
            if (calc_status)
            {
                localHistory.value = `${inputWindow.value}+${lastOperand}`;
                result += lastOperand; 
                inputWindow.value = result;   
                console.log("второе сложение:" + result);   
                console.log("last opreand:" + lastOperand);        
            }
            else
            {
                result += parseInt(inputWindow.value);
                localHistory.value += `${inputWindow.value}=`
                calc_status = true; 
                inputWindow.value = result;
                console.log("Первое сложение:" + result);
                console.log("last opreand:" + lastOperand);
            }
        }

        else if (operation === 'def'){
            result = result- parseInt(inputWindow.value);
            operation = null;
            localHistory.value += `${inputWindow.value}=` 
            calc_status = true; 
            lastOperand = 0;
            inputWindow.value = result;
        }  
        else if (operation === 'mult'){
             result = lastOperand*parseInt(inputWindow.value);
            operation = null;
            localHistory.value += `${inputWindow.value}=`
            calc_status = true;  
            lastOperand = 0;
            inputWindow.value = result;
        }     
        else if (operation === 'div'){
            if (parseInt(inputWindow.value) === 0) {}
            else {
                const result = lastOperand/parseInt(inputWindow.value);
                operation = null;
                localHistory.value += `${inputWindow.value}=`  
                calc_status = true; 
                lastOperand = 0;
                inputWindow.value = result;
            }
        } 
    }
    //else inputWindow.value = 'err';  
})
//+
document.getElementById('btn_plus').addEventListener('click', function () {
        if (!local_calc_status)
        {
            lastOperand = parseInt(inputWindow.value);
            operation = 'sum';
            localHistory.value += `${lastOperand}+`;
            result += lastOperand;
            inputWindow.value = result;
            local_calc_status = true;
            console.log("last opreand после +:" + lastOperand);
        }
})
//-
document.getElementById('btn_minus').addEventListener('click', function () {
    if (!calc_status)
    {
        lastOperand = parseInt(inputWindow.value);
        operation = 'sum';
        localHistory.value += `${lastOperand}-`;
        result = result-lastOperand;
        inputWindow.value = result;
        calc_status = true;
    }
})
//*
document.getElementById('btn_multi').addEventListener('click', function () {
    if (!isNaN(parseInt(inputWindow.value))&&!calc_status){
        lastOperand = parseInt(inputWindow.value);
        operation = 'mult';
        localHistory.value += `${lastOperand}*`;
        inputWindow.value = '';
    }
    if (!isNaN(parseInt(inputWindow.value))&&calc_status){
        lastOperand = parseInt(inputWindow.value);
        operation = 'mult';
        localHistory.value = `${lastOperand}*`;
        calc_status = false;       
        inputWindow.value = '';
    }
})
// /
document.getElementById('btn_div').addEventListener('click', function () {
    if (!isNaN(parseInt(inputWindow.value))&&!calc_status){
        lastOperand = parseInt(inputWindow.value);
        operation = 'div';
        localHistory.value += `${lastOperand}/`;
        inputWindow.value = '';
    }
    if (!isNaN(parseInt(inputWindow.value))&&calc_status){
        lastOperand = parseInt(inputWindow.value);
        operation = 'div';
        localHistory.value = `${lastOperand}/`;
        calc_status = false;           
        inputWindow.value = '';
    }
})
// sqrt
document.getElementById('btn_sqrt').addEventListener('click', function () {
    if (!isNaN(parseInt(inputWindow.value))){
        const result = Math.sqrt(parseInt(inputWindow.value));
        operation = null;
        localHistory.value += "\u221a" + inputWindow.value;
        lastOperand = 0;
        inputWindow.value = result;
        calc_status = true; 
    }
})

/*Кнопки со цифрами*/
document.getElementById('btn_0').addEventListener('click', function () {
    if (parseInt(inputWindow.value) !== 0){
    inputWindow.value += 0;
    }
})
document.getElementById('btn_1').addEventListener('click', function () {
    if (local_calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        local_calc_status = false; 
    }  
    if(calc_status)
    {
        localHistory.value = '';
        inputWindow.value = '';
        result = null;
        calc_status = false;
        lastOperand = 0;
        operation = null;
    }
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 1;
    else inputWindow.value += 1;
})
document.getElementById('btn_2').addEventListener('click', function () {
    if (calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        calc_status = false; 
    }  
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 2;
    else inputWindow.value += 2;
})
document.getElementById('btn_3').addEventListener('click', function () {
    if (calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        calc_status = false; 
    }  
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 3;
    else inputWindow.value += 3;
})
document.getElementById('btn_4').addEventListener('click', function () {
    if (calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        calc_status = false; 
    }  
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 4;
    else inputWindow.value += 4;
})
document.getElementById('btn_5').addEventListener('click', function () {
    if (calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        calc_status = false; 
    }  
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 5;
    else inputWindow.value += 5;
})
document.getElementById('btn_6').addEventListener('click', function () {
    if (calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        calc_status = false; 
    }  
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 6;
    else inputWindow.value += 6;
})
document.getElementById('btn_7').addEventListener('click', function () {
    if (calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        calc_status = false; 
    }  
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 7;
    else inputWindow.value += 7;
})
document.getElementById('btn_8').addEventListener('click', function () {
    if (calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        calc_status = false; 
    }  
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 8;
    else inputWindow.value += 8;
})
document.getElementById('btn_9').addEventListener('click', function () {
    if (calc_status)
    {
        //localHistory.value = '';
        inputWindow.value = '';
        calc_status = false; 
    }  
    if (parseInt(inputWindow.value) === 0) inputWindow.value = 9;
    else inputWindow.value += 9;
})





