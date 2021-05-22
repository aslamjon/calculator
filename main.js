
let his = [];
let mathResult = 0;
let isIshora;
let isBoolen = false;
let enterdNumber = 0;
let clock = document.querySelector('.clock');

let d = new Date()
clock.innerHTML = `${d.getHours()}:${d.getMinutes()}`;

setInterval(function() {
    let d = new Date()
    clock.innerHTML = `${d.getHours()}:${d.getMinutes()}`;
},10000)


function clickButton(btn, ishora) {
    let history = document.querySelector('.history');
    let result = document.querySelector('.result');
    
    if (btn !== undefined) 
        his.push(btn);

    if (ishora == '+' || ishora == '-' || ishora == '*' || ishora == '/' || ishora == '%') 
        if ((his[his.length-1] !== ishora) && (his[his.length-1] !== '+') && (his[his.length-1] !== '-') && (his[his.length-1] !== '/') && (his[his.length-1] !== '*') && (his[his.length-1] !== '%')) 
            his.push(ishora);

    if (ishora == 'back') his.pop()
    
    // to the screen
    if ((his.length / 22) >= 1) {
        if (his.length == 22) {
            if (his.lastIndexOf('+') > 0) 
                his.splice(his.lastIndexOf('+'),0,'<br>'); 
            else if (his.lastIndexOf('-') > 0)
                his.splice(his.lastIndexOf('-'),0,'<br>'); 
            else if (his.lastIndexOf('/') > 0)
                his.splice(his.lastIndexOf('/'),0,'<br>'); 
            else if (his.lastIndexOf('*') > 0)
                his.splice(his.lastIndexOf('*'),0,'<br>'); 
            else if (his.lastIndexOf('%') > 0)
                his.splice(his.lastIndexOf('%'),0,'<br>'); 
        } else if (his.length == 44) {
            if (his.lastIndexOf('+') > 0) 
                his.splice(his.lastIndexOf('+'),0,'<br>'); 
            else if (his.lastIndexOf('-') > 0)
                his.splice(his.lastIndexOf('-'),0,'<br>'); 
            else if (his.lastIndexOf('/') > 0)
                his.splice(his.lastIndexOf('/'),0,'<br>'); 
            else if (his.lastIndexOf('*') > 0)
                his.splice(his.lastIndexOf('*'),0,'<br>'); 
            else if (his.lastIndexOf('%') > 0)
                his.splice(his.lastIndexOf('%'),0,'<br>'); 
        }
    }
    history.innerHTML = numberWithCommas(his.join('').replace('/',' ÷ ').replace('+',' + ').replace('-',' - ').replace('*',' x ').replace('%',' % '));
    if (ishora == undefined || ishora == 'back') 
        if ((his[his.length-1] !== ishora) && (his[his.length-1] !== '+') && (his[his.length-1] !== '-') && (his[his.length-1] !== '/') && (his[his.length-1] !== '*') && (his[his.length-1] !== '%') && (his[0] !== undefined)) 
            result.innerHTML = numberWithCommas(eval(his.join('').replace('<br>','').replace('<br>','').replace('<br>','').replace('<br>','').replace('<br>','')));
        else result.innerHTML = '';

    // clear
    if (ishora == 'c') {
        his = [];
        mathResult = 0;
        isIshora = undefined;
        isBoolen = false;
        result.innerHTML = '';
        history.innerHTML = '';
        enterdNumber = 0;
    }


    // if (mathResult == 0) {
    //     if (btn == '1') mathResult = 1;
    //     if (btn == '2') mathResult = 2;
    //     if (btn == '3') mathResult = 3;
    //     if (btn == '4') mathResult = 4;
    //     if (btn == '5') mathResult = 5;
    //     if (btn == '6') mathResult = 6;
    //     if (btn == '7') mathResult = 7;
    //     if (btn == '8') mathResult = 8;
    //     if (btn == '9') mathResult = 9;
    //     history.innerHTML = ' ' + btn;
    //     enterdNumber = '' + btn;
    // } else {
    //     // ikkinchi son yoki ishorani qabul qilish
    //     /*
    //     let his;
    //     let mathResult = 0;
    //     let isIshora;
    //     let isBoolen = false;
    //     let count = 1;
    //     */

    //     if (ishora !== undefined) isIshora = ishora;
        
    //     if (btn !== undefined) { // btn da raqam bo'lsa
    //         if (enterdNumber == 0) 
    //             enterdNumber = '' + btn;
    //         else 
    //             enterdNumber = enterdNumber + '' + btn; 
            

    //         if (isIshora !== undefined) { // xotirada ishora mavjud bo'lsa
    //             if (isIshora == "+") {
    //                 if (isBoolen) {
    //                     history.innerHTML += ` ${btn}`;
    //                 }
    //                 else {
    //                     history.innerHTML += ` ${numberWithCommas(mathResult)} + ${btn}`;
    //                 }
    //                 mathResult = Number(mathResult) + Number(btn);
    //                 result.innerHTML = numberWithCommas(mathResult);
    //                 isBoolen = false;
    //             } else if (isIshora == '-') {
    //                 if (isBoolen == '-') {
    //                     history.innerHTML += ` ${btn}`;
    //                 }
    //                 else {
    //                     history.innerHTML += ` ${numberWithCommas(mathResult)} - ${btn}`;
    //                 }
    //                 mathResult = Number(mathResult) - Number(btn);
    //                 result.innerHTML = numberWithCommas(mathResult);
    //                 isBoolen = false;
    //             } else if (isIshora == 'x') {
    //                 if (isBoolen == 'x') {
    //                     history.innerHTML += ` ${btn}`;
    //                 }
    //                 else {
    //                     history.innerHTML += ` ${numberWithCommas(mathResult)} x ${btn}`;
    //                 }
    //                 mathResult = Number(mathResult) * Number(btn);
    //                 result.innerHTML = numberWithCommas(mathResult);
    //                 isBoolen = false;
    //             } else if (isIshora == '/') {
    //                 if (isBoolen == '/') {
    //                     history.innerHTML += ` ${btn}`;
    //                 }
    //                 else {
    //                     history.innerHTML += ` ${numberWithCommas(mathResult)} ÷ ${btn}`;
    //                 }
    //                 mathResult = Number(mathResult) / Number(btn);
    //                 result.innerHTML = numberWithCommas(mathResult);
    //                 isBoolen = false;
    //             }

    //             isIshora = undefined;
                
    //         } 
    //         else { // ishora oldin boslimagan bo'lsa
    //             history.innerHTML += numberWithCommas(btn);
    //             mathResult = eval(history.innerHTML);
    //             result.innerHTML = eval(history.innerHTML);
    //         }
    //     } 
        
    //     else { // ishoralar qabul qilayotganda
    //         console.log(enterdNumber);
    //         if (isIshora !== undefined){// xotirada ishora mavjud bo'lsa
    //             if (ishora == '=') {
    //                 result.innerHTML = numberWithCommas(mathResult);
    //             } else if (ishora == '+') {
    //                 if (history.innerHTML[history.innerHTML.length-1] !== '+') {
    //                     history.innerHTML += ' +';
    //                     isBoolen = true;
    //                     enterdNumber = 0;
    //                 } 
    //             } else if (ishora == '-') {
    //                 if (history.innerHTML[history.innerHTML.length-1] !== '-') {
    //                     history.innerHTML += ' -';
    //                     isBoolen = '-';
    //                     enterdNumber = 0;
    //                 }
    //             } else if (ishora == 'x') {
    //                 if (history.innerHTML[history.innerHTML.length-1] !== 'x') {
    //                     history.innerHTML += ' x';
    //                     isBoolen = 'x';
    //                     enterdNumber = 0;
    //                 }
    //             } else if (ishora == '/') {
    //                 if (history.innerHTML[history.innerHTML.length-1] !== '/') {
    //                     history.innerHTML += ' ÷';
    //                     isBoolen = '/';
    //                     enterdNumber = 0;
    //                 }
    //             }           
    //         }
    //         if (ishora == 'c') {// clear
    //             his = undefined;
    //             mathResult = 0;
    //             isIshora = undefined;
    //             isBoolen = false;
    //             result.innerHTML = '';
    //             history.innerHTML = '';
    //             enterdNumber = 0;
    //         } else if (ishora == 'back') {
    //             let enterLength = enterdNumber.length;
    //             let temp = '';
    //             for (let i = 0; history.innerHTML.lastIndexOf(enterdNumber)-3 > i; i++) {
    //                 temp += history.innerHTML[i]
    //             }
    //             if (eval(temp) !== undefined) {
    //                 result.innerHTML = eval(temp);
    //                 mathResult = eval(temp);
    //             }
    //             else {
    //                 result.innerHTML = temp
    //                 console.log(temp,'temp');
    //             }
                
    //             history.innerHTML = temp;
    //         }
            
    //     }
    // }       
}


function numberWithCommas(x) {return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); } 




// dark and light mode
let light = document.getElementById('light');
let dark = document.getElementById('dark');

let card = document.querySelector('.cardd');
let another = document.querySelector('.another');
let td = document.querySelectorAll('td');
let c = document.querySelector('.c');
let mainActions = document.querySelectorAll('.mainActions');
let equal = document.querySelector('.equal');
let bakcspace = document.querySelector('.bakcspace');
let history = document.querySelector('.history');
let result = document.querySelector('.result');
light.onclick = () => {
    document.body.style.transition = '0.3s'
    document.body.style.background = 'linear-gradient(140deg, #FCFCFC, #DEE2E5)';
    dark.style.opacity = 1;
    light.style.opacity = 0;
    setTimeout(function(){
        light.style.zIndex = 2;
        dark.style.zIndex = 3;
    }, 550);
    // card
    for (let key of td) {
        key.children[0].style.background = '#F2F3F5';
        key.children[0].style.boxShadow = '2px 1px 6px #d7d8d9, -2px -2px 2px white';
        key.children[0].style.color = '#4E4F53';

        key.children[0].onmouseover = function() {
            key.children[0].style.background = '#e7e7e7';
        };
        key.children[0].onmouseout = function() {
            key.children[0].style.background = '#F2F3F5';
        };
    }
    for (let key of mainActions) { //mainActions
        key.children[0].style.background = '#E1D5E9';
        key.children[0].style.boxShadow = '2px 1px 6px #CEB3E6';
        key.children[0].style.color = '#71379D';

        key.children[0].onmouseover = function() {
            key.children[0].style.background = '#ddcbe9';
        };
        key.children[0].onmouseout = function() {
            key.children[0].style.background = '#E1D5E9';
        };
    }
    // equal
    equal.children[0].style.background = 'linear-gradient(to bottom, #8927D6, #9E2DF9)';
    equal.children[0].style.boxShadow = '2px 1px 6px #9B49DB';
    equal.children[0].style.color = '#fff';
    equal.children[0].onmouseover = function() {
        equal.children[0].style.background = 'linear-gradient(to bottom, #9221e9, #a438fd)';
    };
    equal.children[0].onmouseout = function() {
        equal.children[0].style.background = 'linear-gradient(to bottom, #8927D6, #9E2DF9)';
    };
    card.style.background = 'linear-gradient(to bottom, #FEFEFE, #E8ECEF)';
    card.style.boxShadow = '3px 6px 20px #CED2D5';
    another.innerHTML = `<img src="img/Capture.JPG" alt="">`;
    bakcspace.children[0].children[0].style.background = 'black';
    bakcspace.children[0].style.background = '#E8E9ED';

    c.children[0].style.background = '#FEB92D';
    c.children[0].style.color = '#fff';
    c.children[0].style.boxShadow = '2px 1px 6px #F3BA55';
    c.children[0].addEventListener('mouseover', function() {
        c.children[0].style.background = '#fab01c';
    });
    c.children[0].addEventListener('mouseout', function() {
        c.children[0].style.background = '#FEB92D';
    });

    result.style.color = '#5B6870';
    history.style.color = '#9EABB9';
    
}
dark.onclick = () => {
    document.body.style.transition = '0.3s'
    document.body.style.background = 'linear-gradient(140deg, #2E3235, #1E2225)';
    dark.style.opacity = 0;
    light.style.opacity = 1;
    setTimeout(function(){
        light.style.zIndex = 3;
        dark.style.zIndex = 2;
    }, 550);

    // card
    for (let key of td) { // td
        key.children[0].style.background = '#383C3F';
        key.children[0].style.boxShadow = '2px 1px 6px #1B1E1F, -1px -1px 2px #696a6b';
        key.children[0].style.color = '#A9ABA6';

        key.children[0].onmouseover = function() {
            key.children[0].style.background = '#4c4f52';
        };
        key.children[0].onmouseout = function() {
            key.children[0].style.background = '#383C3F';
        };
    }
    for (let key of mainActions) { //mainActions
        key.children[0].style.background = '#48325C';
        key.children[0].style.boxShadow = '2px 1px 6px #1B1E1F, -1px -1px 2px #696a6b';
        key.children[0].style.color = '#C47CE6';

        key.children[0].onmouseover = function() {
            key.children[0].style.background = '#53376d';
        };
        key.children[0].onmouseout = function() {
            key.children[0].style.background = '#48325C';
        };
    }
    // equal
    equal.children[0].style.background = 'linear-gradient(to bottom, #8927D6, #9E2CF9)';
    equal.children[0].onmouseover = function() {
        equal.children[0].style.background = 'linear-gradient(to bottom, #9725ee, #a940ff)';
    };
    equal.children[0].onmouseout = function() {
        equal.children[0].style.background = 'linear-gradient(to bottom, #8927D6, #9E2CF9)';
    };
    card.style.background = 'linear-gradient(to bottom, #4B4F51, #1E2225)';
    card.style.boxShadow = '3px 6px 20px #424242';
    another.innerHTML = `<img src="img/Capture2.JPG" alt="">`;
    c.children[0].style.background = '#FEB92D';
    c.children[0].style.color = '#fff';
    c.children[0].style.boxShadow = '2px 1px 6px #F3BA55';
    c.children[0].addEventListener('mouseover', function() {
        c.children[0].style.background = '#fab01c';
    });
    c.children[0].addEventListener('mouseout', function() {
        c.children[0].style.background = '#FEB92D';
    });
    bakcspace.children[0].children[0].style.background = '#63696b';
    bakcspace.children[0].style.background = '#282A2C';
    
    result.style.color = '#A7AEAE';
    history.style.color = '#8A8582';

}