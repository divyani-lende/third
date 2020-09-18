var overlay = document.querySelector('#overlay');

var overlay = document.querySelector('#closebtn');

var tl2 = gsap.timeline();

var closebtn=addEventListener('click',function(){
   tl2.reverse();
   this.setTimeout(function(){
    var worksamples = document.querySelector('#worksamples');
    worksamples.getElementsByClassName.display = 'initial';
   },2500)

//    setTimeout(function(){
//        gsap.to('#rightoverlay',{
//            left: '100%',
//            duration: 1,
//            ease: 'expo.inOut'
//        })
//    },2500)
});

let timeline = gsap.timeline();

timeline.to('#overlay',{
     width: 4000,
     height: 4000,
     duration: 1,
     ease: 'expo.inOut'
})

.to('#overlay h1 span',{
    top: 20,
    duration: 2,
    ease: 'expo.inOut'
})
.to('#overlay h1 span',{
    top: '-100%',
    duration: 2,
    delay: .2,
    ease: 'expo.inOut'
})
.to('#overlay',{
    opacity: 0,
    duration: 2,
    onComplete: function(){
    overlay.style.display = 'none';
},
    ease: 'expo.inOut'
})
.from('#nav h3',{
    opacity: 0,
    x:40,
    duration: 1,
    ease: 'expo.inOut'
})
.from('#nav #icons i',{
    stagger: .2,
    opacity: 0,
    x: 20,
    duration: .8,
    ease: 'expo.inOut'
})
.from('#main .line',{
    stagger: .3,
    width: 0,
    delay: -1.5,
    duration: 2,
    ease: 'expo.inOut'
})

.from('#main .anim',{
    stagger: .3,
    y: 15,
    opacity:0,
    duration: 1.5,
    delay: -2,
    ease: 'expo.inOut'
})
.from('#scroller',{
    opacity: 0,
    duration: 1.2,
    delay: .1,
    ease: 'expo.inOut'
})

.from('#right #links a',{
    stagger:.2,
    opacity: 0,
    x: 30,
    duration: 1.2,
    delay: -2,
    ease: 'expo.inOut'
})


function animateTheLayer(){
    tl2.to('#rightoverlay',{
        duration: 1.5,
        ease: 'expo.inOut',
        left: 0,
        onComplete: function(){
            var worksamples = document.querySelector('#worksamples');
            worksamples.getElementsByClassName.display = 'initial';
        }
    })
    .from('#rightoverlay h3',{
        duration: 1.5,
        x:40,
        opacity: 0,
        ease: 'expo.inOut',
    })
    .from('#rightoverlay h3 span',{
        duration: 1,
        delay: -.8,
        opacity: 0,
        ease: 'expo.inOut',
    })
    .from('#rightoverlay .work',{
        duration: .5,
        opacity: 0,
        ease: 'expo.inOut',
    })
    
    .from('#rightoverlay .work h4',{
        stagger:.3,
        duration: 1,
        x:30,
        opacity: 0,
        ease: 'expo.inOut',
    })
    
    .from('#rightoverlay .work .holder img',{
        stagger:.3,
        duration: 1,
        x:'100%',
        delay:-1.4,
        scale:1,
        ease: 'expo.inOut',
    })
}

//animateTheLayer();


gsap.from('#center img',{
    opacity:0,
    duration: 2,
    delay: 8.5,
    ease:'expo.inut'
})

















