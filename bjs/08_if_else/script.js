let minValue = parseInt(document.getElementById('minValField').value); 
let maxValue = parseInt(document.getElementById('maxValField').value);
document.getElementById('maxValField').col
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = false;
let gameStarted = false;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
document.getElementById('btnLess').disabled = true;
document.getElementById('btnOver').disabled = true;
document.getElementById('btnEqual').disabled = true;
orderNumberField.innerText = '0';

document.getElementById('minValField').addEventListener('change', function () {
    tmpVal = parseInt(document.getElementById('minValField').value);

    if (!(tmpVal||NaN))
    {
        document.getElementById('minValField').value = 0; 
    }

    tmpVal <= -1000 ? document.getElementById('minValField').value = '-999':tmpVal = parseInt(document.getElementById('minValField').value);

    if (tmpVal >= parseInt(document.getElementById('maxValField').value))
    {
        document.getElementById('minValField').value = parseInt(document.getElementById('maxValField').value) - 1;        
    }

    minValue = parseInt(document.getElementById('minValField').value);
    document.getElementById('gameCollapseBut').innerHTML = `Задайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
})

document.getElementById('maxValField').addEventListener('change', function () {
    tmpVal = parseInt(document.getElementById('maxValField').value);
    
    if (!(tmpVal||NaN))
    {
        document.getElementById('maxValField').value = parseInt(document.getElementById('minValField').value) + 1;
    }

    tmpVal >= 1000 ? document.getElementById('maxValField').value = '999':tmpVal = parseInt(document.getElementById('maxValField').value);
    
    if (tmpVal <= parseInt(document.getElementById('minValField').value))
    {
        document.getElementById('maxValField').value = parseInt(document.getElementById('minValField').value) + 1;        
    }

    maxValue = parseInt(document.getElementById('maxValField').value);
    document.getElementById('gameCollapseBut').innerHTML = `Задайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
})

document.getElementById('btnRetry').addEventListener('click', function () {
   if (!gameRun & !gameStarted)
   {
        var stringNum;
        var outputNum;
        minValue = parseInt(document.getElementById('minValField').value); 
        maxValue = parseInt(document.getElementById('maxValField').value);
        document.getElementById('btnRetry').innerHTML = "Заново";      
        gameRun = true;
        gameStarted = true;     
        orderNumber = 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumberField.innerText = orderNumber;
        stringNum = getNumInString(answerNumber.toString());
        stringNum.length > 20 ? outputNum = answerNumber: outputNum= stringNum;
        answerField.innerText = `Вы загадали число ${outputNum}?`;
        gameRun = true;
        document.getElementById('gameCollapseBut').disabled = true;
        $('.collapse').collapse('hide');
        document.getElementById('btnLess').disabled = false;
        document.getElementById('btnOver').disabled = false;
        document.getElementById('btnEqual').disabled = false;                 
        $('.collapse').collapse('show');
    }    
    else
    {
        document.getElementById('btnRetry').innerHTML = "Играть";
        orderNumberField.innerText = '0';
        answerField.innerText = `Загадайте число и нажмите "Играть", я отгадаю`;
        document.getElementById('gameCollapseBut').disabled = false; 
        document.getElementById('btnLess').disabled = true;
        document.getElementById('btnOver').disabled = true;
        document.getElementById('btnEqual').disabled = true;     
        $('.collapse').collapse('show');
        gameStarted = false;
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){            
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 0) ?
                `Вы загадали неправильное число!\n\u{1F914}` : (phraseRandom === 1)?
                `Я сдаюсь..\n\u{1F92F}`: `Вы жулик, сэр \n\u{1F910}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
            //document.getElementById('btnRetry').innerHTML = "Играть";
            document.getElementById('btnLess').disabled = true;
            document.getElementById('btnOver').disabled = true;
            document.getElementById('btnEqual').disabled = true;
            document.getElementById('gameCollapseBut').disabled = true; 
           // $('.collapse').collapse('show');
        } else {
            var stringNum;
            var outputNum;
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            stringNum = getNumInString(answerNumber.toString());
            stringNum.length > 20 ? outputNum = answerNumber: outputNum= stringNum;
            const answerPhrase = (phraseRandom === 0) ?
                `Вы загадали число ${outputNum}?` : (phraseRandom === 1)?
                `Вероятно, это число ${outputNum}?`: `Это же ${outputNum}?`;                 
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
         if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 0) ?
                `Вы загадали неправильное число!\n\u{1F914}` : (phraseRandom === 1)?
                `Я сдаюсь..\n\u{1F92F}`: `Вы жулик, сэр \n\u{1F910}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
            document.getElementById('btnLess').disabled = true;
            document.getElementById('btnOver').disabled = true;
            document.getElementById('btnEqual').disabled = true;  
            document.getElementById('gameCollapseBut').disabled = true;                     
           //document.getElementById('btnRetry').innerHTML = "Играть";
           // $('.collapse').collapse('show');

        } else {
            var stringNum;
            var outputNum;

            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);

            stringNum = getNumInString(answerNumber.toString());
            stringNum.length > 20 ? outputNum = answerNumber: outputNum= stringNum;

            const answerPhrase = (phraseRandom === 0) ?
                `Вы загадали число ${outputNum}?` : (phraseRandom === 1)?
                `Вероятно, это число ${outputNum}?`: `Это же ${outputNum}?`;            
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);        
        const answerPhrase = (phraseRandom === 0) ?
            `Я всегда угадываю\n\u{1F60E}` : (phraseRandom === 1)?
            `Даже не напрягался\n\u{1F61E}`: `Как всегда прав\n\u{1F63E}`;   
        answerField.innerText = answerPhrase;
        document.getElementById('btnLess').disabled = true;
        document.getElementById('btnOver').disabled = true;
        document.getElementById('btnEqual').disabled = true;  
        document.getElementById('gameCollapseBut').disabled = true;                     
       // document.getElementById('btnRetry').innerHTML = "Играть";
       // $('.collapse').collapse('show');
        gameRun = false;
    }
})


function getNumInString(numToGen)
{
    var notMinus = true;
    if(parseInt(numToGen) < 0) {
        numToGen = (Math.abs(parseInt(numToGen))).toString();
        notMinus = false;
    }

    var zeroTen = [
        [0, 'ноль'],
        [1, 'один'],
        [2, 'два'],
        [3, 'три'],
        [4, 'четыре'],
        [5, 'пять'],
        [6, 'шесть'],
        [7, 'семь'],
        [8, 'восемь'],
        [9, 'девять']
    ];
    
    var tenNinety = [
        [11, 'одиннадцать'],
        [12, 'двенадцать'],
        [12, 'тринадцать'],
        [14, 'четырнадцать'],
        [15, 'пятнадцать'],
        [16, 'шестнадцать'],
        [17, 'семнадцать'],
        [18, 'восемнадцать'],
        [19, 'девятнадцать']
    ];
    
    var dozens = [
        [1, 'десять'],
        [2, 'двадцать'],
        [3, 'тридцать'],
        [4, 'сорок'],
        [5, 'пятьдесят'],
        [6, 'шестьдясят'],
        [7, 'семьдясят'],
        [8, 'восемьдесят'],
        [9, 'девяносто']
    ];
    
    var hundreds = [
        [1, 'сто'],
        [2, 'двести'],
        [3, 'триста'],
        [4, 'четыреста'],
        [5, 'пятсот'],
        [6, 'шестсот'],
        [7, 'семьсот'],
        [8, 'восемьсот'],
        [9, 'девятьсот']
    ];
    
    var outputNum = '';
    
    switch(numToGen.length){
        case 1:
            for (let k=0; k < zeroTen.length; k++)
            {
                if(parseInt(zeroTen[k][0])===parseInt(numToGen[0]))
                {
                    outputNum = zeroTen[k][1]; 
                    break;
                }
            }
            break;
        case 2:
            if(parseInt(numToGen) > 10 && parseInt(numToGen) < 20)
            {
                for (let j=0; j < tenNinety.length; j++){
                    if(parseInt(tenNinety[j][0])===parseInt(numToGen.substring(0,2)))
                    {
                        outputNum = tenNinety[j][1];
                        break;
                    }    
                }
            }
            else{
                for (let k=0; k < dozens.length; k++)
                {
                    if(parseInt(dozens[k][0])===parseInt(numToGen[0]))
                    {
                        outputNum = dozens[k][1];
                            if(parseInt(numToGen[1])!==0)
                            {
                                for (let l=0; l < zeroTen.length; l++)
                                {
                                    if(parseInt(zeroTen[l][0])===parseInt(numToGen[1]))
                                    {
                                        outputNum = `${outputNum} ${zeroTen[l][1]}`; 
                                        break;
                                    }
                                }
                            }
                        break;
                    }
                }
            }
            break;    
        case 3:
            for (let m=0; m < hundreds.length; m++)
            {
                if(parseInt(hundreds[m][0])===parseInt(numToGen[0]))
                {
                    outputNum = hundreds[m][1];
                    
                    if(parseInt(numToGen.substring(1,3)) > 10 && parseInt(numToGen.substring(1,3)) < 20)
                    {
                        for (let j=0; j < tenNinety.length; j++){
                            if(parseInt(tenNinety[j][0])===parseInt(numToGen.substring(1,3)))
                            {
                                outputNum =`${outputNum} ${ tenNinety[j][1]}`; 
                                break;
                            }    
                        }
                    }
                    else{
                        for (let k=0; k < dozens.length; k++)
                        {
                            if(parseInt(dozens[k][0])===parseInt(numToGen[1]))
                            {
                                outputNum = `${outputNum} ${dozens[k][1]}`;
                                if(parseInt(numToGen[2])!==0)
                                {
                                    for (let l=0; l < zeroTen.length; l++)
                                    {
                                        if(parseInt(zeroTen[l][0])===parseInt(numToGen[2]))
                                        {
                                            outputNum = `${outputNum} ${zeroTen[l][1]}`; 
                                            break;
                                        }
                                    }
                                }
                                break;
                            }
                        }
                    }                
                    break;
                }
            }       
            break;        
        default:
            outputNum =  numToGen;
    } 

    if(!notMinus)
    {
        return `минус ${outputNum}`;
    }
    else
    {
        return outputNum;        
    }
}
