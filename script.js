function loadingAnimation() {
    var tl = gsap.timeline();


    gsap.set(".line h1", { opacity: 0, y: 150 });

   
    tl.to(".line h1", {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.2,
        ease: "power4.out"
    });

    
    tl.from("#line1-part1", { 
        opacity: 0,
        onStart: function() {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            var interval = setInterval(function() {
                if (grow <= 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    clearInterval(interval);
                }
            }, 35);
        }
    });

  
    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1,
        duration: 0.5
    });

   
    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 1
    });

    
    tl.set("#loader", { display: "none" });

   // Reveal page content smoothly
    tl.from("#page1", {
        y: 1600,
        delay:0.1,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    });
    tl.from("#nav",{
        opacity:0
    })

    gsap.set(".hero h1", { opacity: 0, y: 150 });

   
    tl.to(".hero h1", {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
        ease: "power4.out"
    });



}

function cursonAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
         left:dets.x,
         top:dets.y
     
        })
     
     })
    
}
loadingAnimation();
cursonAnimation()
Shery.makeMagnet("#nav-part2 h4");

