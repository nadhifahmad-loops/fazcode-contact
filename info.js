
document.addEventListener("DOMContentLoaded", function() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 95%",
            end: "70% 50%",
            scrub: true
            // markers: true,
        }
    });

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three",
            start: "0% 95%",
            end: "20% 50%",
            scrub: true
            // markers: true,
        }
    });

    tl.to("#foto4", {
        top: "120%",
        left: "10%"
    }, 'orange');
  
    tl.to("#foto3", {
        top: "160%",
        left: "25%"
    }, 'orange');
  
    tl.to("#foto5", {
        width: "10%",
        top: "165%",
        right: "10%"
    }, 'orange');
  
    tl.to("#foto6", {
        top: "110%",
        left: "75%"
    }, 'orange');
  
    tl.to("#foto7", {
        top: "110%",
        left: "0%"
    }, 'orange');
  
  

  
    tl2.from("#cardfoto2", {
        rotate: "-90deg",
        top: "100%",
        left: "-50%"
    }, 'ca');
  
    tl2.from("#cardfoto5", {
        rotate: "90deg",
        top: "100%",
        left: "50%"
    }, 'ca');
  
  
    tl2.to("#foto3", {
        width: "10%",
        left: "35%",
        top: "210%"
    }, 'ca');

  
    tl2.to("#foto4", {
        width: "20%",
        top: "225%",
        left: "41%"
    }, 'ca');
    // Kode GSAP disini
  function updateAnimations() {
    var width = window.innerWidth;

    // Check jika lebar layar kurang dari atau sama dengan 768px
    if (width <= 426) {
        // Menyesuaikan properti animasi sesuai dengan lebar layar yang lebih kecil
        tl.to("#foto3", { left: "30%", top: "170%" }, 'orange');
        tl2.to("#foto3", { width: "10%", left: "35%",top: "232%" }, 'ca');
        tl.to("#foto4", { top: "150%", left: "10%" }, 'orange');
        tl2.to("#foto4", { width: "20%",top: "245%",left: "41%"}, 'ca');
        tl.to("#foto5", {width: "20%",top: "165%",right: "10%"}, 'orange');
    } else if (width <= 768) {
        tl.to("#foto3", { left:"30%",top: "170%"}, 'orange');
        tl2.to("#foto3", { left: "35%",top: "222%" }), 'ca';
        tl.to("#foto4", { top: "150%", left: "10%" }, 'orange');
        tl2.to("#foto4", { width: "20%",top: "240%",left: "41%"}, 'ca');
        // Menyesuaikan properti animasi untuk lebar layar antara 769px dan 900px

    } else {
        // Default animasi untuk lebar layar yang lebih besar dari 900px

      
        tl.to("#foto4", {
            top: "120%",
            left: "10%"
        }, 'orange');
      
        tl.to("#foto3", {
            top: "160%",
            left: "25%"
        }, 'orange');
      
        tl.to("#foto5", {
            width: "10%",
            top: "165%",
            right: "10%"
        }, 'orange');
      
        tl.to("#foto6", {
            top: "110%",
            left: "75%"
        }, 'orange');
      
        tl.to("#foto7", {
            top: "110%",
            left: "0%"
        }, 'orange');
      
      

      
        tl2.from("#cardfoto2", {
            rotate: "-90deg",
            top: "100%",
            left: "-50%"
        }, 'ca');
      
        tl2.from("#cardfoto5", {
            rotate: "90deg",
            top: "100%",
            left: "50%"
        }, 'ca');
      
      
        tl2.to("#foto3", {
            width: "10%",
            left: "35%",
            top: "210%"
        }, 'ca');
    
      
        tl2.to("#foto4", {
            width: "20%",
            top: "225%",
            left: "41%"
        }, 'ca');
      
     
    }
}

// Panggil fungsi updateAnimations saat ukuran layar berubah
window.addEventListener('resize', updateAnimations);

// Panggil fungsi updateAnimations saat halaman dimuat
updateAnimations();
});
  
const refreshButton = document.getElementById("btn-refresh");

refreshButton.addEventListener("click", function() {
    location.reload();
});


const btnWeb = document.getElementById("btn-web");
const divPop = document.getElementById("div-popup");
const divFull = document.getElementById("div-full");
const btnClose = document.querySelector('.ri-close-large-fill');
var statusBtn = true;

btnWeb.addEventListener("click", function(){
    if(divPop.style.display = "none"){
        divPop.style.display = "block";
        divFull.style.display = "block";
    }else{
        divPop.style.display = "none";
        divFull.style.display = "none";
    }
}
)

btnClose.addEventListener("click", function(){
    if(statusBtn == true){
        divPop.style.display = "none";
        divFull.style.display = "none";
    }else{
        divPop.style.display = "block";
        divFull.style.display = "block";
    }
})

divFull.addEventListener("click", function(){
    if(statusBtn == true){
        divPop.style.display = "none";
        divFull.style.display = "none";
    }else{
        divPop.style.display = "block";
        divFull.style.display = "block";
    }
})




