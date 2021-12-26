let dugme1= document.getElementById("dugme1");
dugme1.addEventListener("click",handleDugme1);
function handleDugme1(){
  console.log("Pritisnuto dugme");
  if (document.getElementById("bodyId").className==="light") {
      document.getElementById("bodyId").className="dark";
      dugme1.innerHTML="Light mode";
  }else{
  document.getElementById("bodyId").className="light";
  dugme1.innerHTML="Dark mode";
  }
}