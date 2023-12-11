
// gsap.to("#box", {
//   x: 1200,
//   duration: 2,
//   rotation: 360,
//   backgroundColor: "red",
//   delay: 1,
// });
// gsap.from("#page1 #box",{
//   scale:0,
//   duration: 2,
//  delay: 1,
//  rotation: 360,
// })
// gsap.from("#page2 #box",{
//   scale:0,
//   duration: 2,
//  delay: 1,
//  rotation: 360,
//  scrollTrigger:{
// trigger:"#page2 #box",
// scoller:"body",
// // markers:true,
// start:"top 60% ",
// end:"top 30%",
// scrub:2

//  }
// })
var tl=gsap.timeline()
tl.from("#nav",{
  opacity:0,
  
  delay:0.5,
})
tl.from("#nav h1,#nav h4,#nav h3",{
  y:-80,
  opacity:0,
  duration:0.8,
  delay:0.5,
  stagger:0.3
}
  )
  tl.from("#left h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.5
  })
  tl.from("#right img",{
    scale:2,
    opacity:0,
    duration:0.8,
    
  })
  gsap.from("#page2 .box1",{
    scale:0,
      duration: 2,
    //  delay: 1,
     rotation: 360,
     stragger:"#page2",
     scrollTrigger:{
    trigger:"#page2 #box",
    scoller:"body",
    // markers:true,
    // start:"top 60% ",
    // end:"top 30%",
    scrub:2
     }
  })
