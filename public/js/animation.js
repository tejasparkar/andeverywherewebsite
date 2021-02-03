const flypath = {
    curviness : 1.25,
    autoRotate : true,
    values : [
       {x:100,y:-20},
       {x:300,y:10},
       {x:500,y:100},
       {x:750,y:-100},
       {x:350,y:-50},
       {x:600,y:100},
       {x:800,y:0},
       {x:window.innerWidth,y:-250},
   
        
    ]
}
const flypath1 = {
    curviness : 1.25,
    autoRotate : true,
    values : [
       {x:100,y:-20},
       {x:300,y:10},
       {x:500,y:100},
       {x:400,y:-20},
       {x:200,y:10},
       {x:-20,y:100},
       {x:190,y:-100},
       {x:350,y:-50},
       {x:750,y:-100},
       {x:350,y:-50},
       {x:600,y:100},
       {x:800,y:0},
       {x:window.innerWidth,y:-250},
   
        
    ]
}
const flypath2 = {
    curviness : 1.25,
    autoRotate : true,
    values : [
        {x:800,y:0},
        {x:600,y:100},
        {x:350,y:-50},
       {x:400,y:-20},
       {x:200,y:10},
       {x:-20,y:100},
       {x:190,y:-100},
       {x:350,y:-50},
       {x:600,y:100},
       {x:800,y:0},
       {x:window.innerWidth,y:-250},
   
        
    ]
}


 ////
const tween = new TimelineLite();

tween.add(

    TweenLite.to('.paperplane',2,{
        bezier : flypath,
        ease: Power1.easeInOut
    })
)
const tween2 = new TimelineLite();

tween2.add(

    TweenLite.to('.paperplane2',5,{
        bezier : flypath1,
        ease: Power1.easeInOut
    })
)

const tween3 = new TimelineLite();

tween3.add(

    TweenLite.to('.paperplane3',8,{
        bezier : flypath2,
        ease: Power1.easeInOut
    })
)





const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement : '.animation',
    duration :3000,
    triggerHook : 0
})
.setTween(tween)
.setPin('.animation')
//.addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement : '.animation',
    duration :3000,
    triggerHook : 0
})
.setTween(tween2)


const scene3 = new ScrollMagic.Scene({
    triggerElement : '.animation',
    duration :3000,
    triggerHook : 0
})
.setTween(tween3)




controller.addScene([
    scene,
    scene2,
    scene3
    
])

