// ten kod nie jest wewn�trz �adnej funkcji wi�c zostanie wykonany w momencie za�adowania skryptu do pliku


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


let parent = document.getElementById('lista')

function prawo(){
let lastChild = document.querySelector('.slider ul li:last-child');
parent.prepend(lastChild)
}

function lewo(){
    let lastChild = document.querySelector('.slider ul li:first-child');
    parent.append(firstChild)
}

document.onkeydown = (e)=>{
    switch(e.keyCode){
        case 37: //left
        moveLeft();
        break;
        case 39: //right
        moveright();
        break;
    }
}

// zmienne globalne
let txt = 'ruchomy tekst...';
let work = false;  // pomocnicza zmienna logiczna do w��czenia i wy��czenia funkcji
const delay = 200; // czas op�nienia
let t = 0; 

function slider()
{
    clearTimeout(t);  // czy�cimy zmienn� t do kt�rej przypiszemy funkcj� setTimeout, tak by po klikni�ciu napis nam nie przyspiesza�
    
    // je�li chcemy wpisa� w�asny tekst to zaczynamy od pobrania tego tekstu z elementu o 'id = rTekst'
    txt = document.getElementById("rTekst").value;

    let space = '';
    let empty = document.getElementById("rTekst").size - txt.length;
    for (let i = 0; i < empty; i++)
    {
        space += "\xa0\xa0\xa0\xa0\xa0";
    } // wype�niamy puste miejsce spacjami

    // przesuni�cie napisu przy pomocy funkcji substring zwracaj�cej wybrany ci�g znak�w
    // z tekstu pobieramy pierwszy znak i umieszczamy na ko�cu tekstu, a nast�nie przypisujemy do zmiennej 'txt', itd.*/
    txt = txt.substring(1, txt.length) + space + txt.substring(0, 1);
    // pobieranie do zmiennej obiektu ze strony o okre�lonym id
    let object = document.getElementById("rTekst");
    // ustawienie nowego napisu 
    object.value = txt;
    // czy�cimy zmienn� dla spacji 
    space = ''; 
    // funkcja setTimeout uruchamia kod podany jako paramater z op�nieniem w milisekundach
    if (work)
    {
        t = setTimeout(slider, delay);
    }
}

