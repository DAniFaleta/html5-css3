function subirtela(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
 }
 
 
function dicidirbotaoscroll() {
     if(window.scrollY === 0){
         document.querySelector('.subirbutton').style.display = 'none'
     } else {
         document.querySelector('.subirbutton').style.display = 'block'
     }
 }
 
window.addEventListener('scroll', dicidirbotaoscroll,)



 
