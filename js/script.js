const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
  
   if( document.querySelector('.nav-bar').style.display == "flex"){
    document.querySelector('.nav-bar').style.display = "none";
   }else{
    document.querySelector('.nav-bar').style.display = "flex";
    
   }
});


let a = 30;