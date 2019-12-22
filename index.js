for(var i=0;i<7;i++){

document.querySelectorAll("button")[i].addEventListener("click",function (){



  var audio=new Audio("sounds/"+this.innerHTML+".mp3");
   audio.play();
animation(this.innerHTML);

}



);

}



 document.addEventListener("keypress", function(event){

var audio=new Audio("sounds/"+event.key+".mp3");
 audio.play();
 animation(event.key);



} );
function animation( btn){
  document.querySelector("."+btn).classList.add("pressed");
  setTimeout(function () {  document.querySelector("."+btn).classList.remove("pressed");


  }, 100);
}
