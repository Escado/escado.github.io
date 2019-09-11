let words = [ 'Less is more.', 'Vilmantas Petrusevičius' ]
let divs = [ 'main-text', 'subtitle-text']
let wordIndex = 0;
let word = words[wordIndex];
let letterIndex = 0;

let boo = true;

const timeouts = {
    letterTimeout: 70,
    emptyTimeout: 4000,
}

let typerState = {
    letterIndex: 0,
    currentItem: undefined,
    items: [
        {
            class: 'main-text',
            text: 'Less is more.'
        },
        {
            class: 'subtitle-text',
            text: 'Vilmantas Petrusevicius'
        }
    ]
}

var typer = function() {
    if (typerState.letterIndex === 0) {
        document.getElementsByClassName(typerState.currentItem.class)[0].textContent = document.getElementsByClassName(typerState.currentItem.class)[0].innerHTML.replace('&nbsp;', typerState.currentItem.text[typerState.letterIndex]);
    } else {
        document.getElementsByClassName(typerState.currentItem.class)[0].textContent += typerState.currentItem.text[typerState.letterIndex];
    }
    typerState.letterIndex++;
    if (typerState.letterIndex < typerState.currentItem.text.length) {
        setTimeout(typer, timeouts.letterTimeout);
    } else if (typerState.currentItem !== typerState.items[typerState.items.length - 1]){
        typerState.letterIndex = 0;
        setTimeout(() => {
            document.getElementsByClassName(typerState.currentItem.class)[0].classList.toggle('piped');
            typerState.currentItem = typerState.items[typerState.items.indexOf(typerState.currentItem) + 1];
            document.getElementsByClassName(typerState.currentItem.class)[0].classList.toggle('piped');
        }, 1000); 
        
        setTimeout(() => { 
            setTimeout(typer, 900); 
        }, 1200);
    } else {
        setTimeout(() => {
            document.getElementsByClassName(typerState.currentItem.class)[0].textContent += '.'
        }, 500);
        setTimeout(() => {
            document.getElementsByClassName(typerState.currentItem.class)[0].classList.toggle('piped');
        }, 1000); 

        setTimeout(() => {

        }, 500);
    }
}

typerState.items.forEach(element => {
    document.getElementsByClassName(element.class)[0].innerHTML = '&nbsp'
});

typerState.currentItem = typerState.items[0]
document.getElementsByClassName(typerState.currentItem.class)[0].classList.toggle('piped');
setTimeout(() => {
    typer()
}, 1000);
