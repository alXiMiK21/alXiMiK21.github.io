// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// if (ScrollTrigger.isTouch !== 1) {
//     ScrollSmoother.create({
//         // wrapper: '.wrapper',
//         // content: '.content',
//         smooth: 1.5,
//         effects: true,
//     })
// }

// gsap.fromTo('.first-list', { opacity: 1 }, {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '.first-list',
//         start: 'center',
//         end: '900',
//         scrub: true
//     }
// })

let itemsL = gsap.utils.toArray('.first, .third')

itemsL.forEach(item => {
    gsap.fromTo(item, {x: -180, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 8%',
            scrub: true
        }
    })
})
let itemsL2 = gsap.utils.toArray('.prepod')

itemsL2.forEach(item => {
    gsap.fromTo(item, {x: -200, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 8%',
            scrub: true
        }
    })
})
let itemsR = gsap.utils.toArray('.second, .fourth')

itemsR.forEach(item => {
    gsap.fromTo(item, {x: 180, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 8%',
            scrub: true
        }
    })
})
