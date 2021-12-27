let dugme1= document.getElementById("dugme1");
dugme1.addEventListener("click",handleDugme1);
function handleDugme1(){
  if (document.getElementById("bodyId").className==="light") {
      document.getElementById("bodyId").className="dark";
      dugme1.innerHTML="Light mode";
      dugme1.className="mod";
  }else{
  document.getElementById("bodyId").className="light";
  dugme1.innerHTML="Dark mode";
  dugme1.className="darkmod";
  }
}

function handleAClick(event){
  event.preventDefault();
  alert("Već se nalazite na ovoj stranici!");
};

function klik(event){
  window.location="index02.html"
};

/*var datum = new Date();
document.getElementById('datum-vreme').innerHTML=datum;*/

var danas = new Date();
var vreme = danas.getHours() + ":" + danas.getMinutes() + ":" + danas.getSeconds();
document.getElementById('vreme').innerHTML=vreme;

