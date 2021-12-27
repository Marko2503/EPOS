/*const ime=document.getElementById('korisnik');
const telefon=document.getElementById('fon');

const forma=document.getElementsById('forma1');
const greska=document.getElementsById('greska');

forma.addEventListener('submit',(e)=>{
    let poruka=[];

    if(ime.value==='' || ime.value==null){
        poruka.push('Ime je obavezno');
    }

    if(telefon.value==='' || telefon.value==null){
        poruka.push('Broj telefona je obavezan');
    }

    if(poruka.length>0){
        e.preventDefault();
        greska.innerText=poruka.join(', ')
    }
})*/

 /*function dani(){
    var ponedeljak=document.getElementById("1");
    var utorak=document.getElementById("2");
    var sreda=document.getElementById("3");
    var cetvrtak=document.getElementById("4");
    var petak=document.getElementById("5");
    var subota=document.getElementById("6");
    var nedelja=document.getElementById("7");
    
    var tekst1=document.getElementById("tekst1");
    var tekst2=document.getElementById("tekst2");
    var tekst3=document.getElementById("tekst3");
    var tekst4=document.getElementById("tekst4");
    var tekst5=document.getElementById("tekst5");
    var tekst6=document.getElementById("tekst6");
    var tekst7=document.getElementById("tekst7");
    
    if(ponedeljak.checked==true){
        tekst1.style.display="block";
    } else{
        tekst1.style.display="none";
    }
    
    
    if(utorak.checked==true){
        tekst2.style.display="block";
    } else{
        tekst2.style.display="none";
    }
    
    if(sreda.checked==true){
        tekst3.style.display="block";
    } else{
        tekst3.style.display="none";
    }
    
    if(cetvrtak.checked==true){
        tekst4.style.display="block";
    } else{
        tekst4.style.display="none";
    }
    
    if(petak.checked==true){
        tekst5.style.display="block";
    } else{
        tekst5.style.display="none";
    }
    
    if(subota.checked==true){
        tekst6.style.display="block";
    } else{
        tekst6.style.display="none";
    }
    
    if(nedelja.checked==true){
        tekst7.style.display="block";
    } else{
        tekst7.style.display="none";
    }
 }*/

function prikazi(e) {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
    message = "<ul><li><b>Ime: </b>" + document.forma.korisnik.value;
    message += "<li><b>Broj telefona: </b>" + document.forma.telefon.value;
    message += "<li><b>Trener: </b>" + document.forma.trener.value;
    message += "<li><b>Dani: </b>" + document.forma.dan.value;
    message += "<li><b>Napomena: </b>" +document.forma.napomena.value;
    message += "<li><b>Plaćanje: </b>" +document.forma.placanje.value + "</ul>";
    DispWin.document.write(message);
}

   