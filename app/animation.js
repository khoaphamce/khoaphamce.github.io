
function index_animation(){
    const dance_doge = document.querySelector(".dance_doge");
    const title = document.querySelector("#title");
    const introduction = document.querySelector(".introduction");

    const tl = new TimelineMax();

    tl.fromTo(title, 1.5, {y: "100%", opacity: 0}, {y: "0%", opacity: 1, ease:Power2.easeInOut})
    .fromTo(dance_doge, 1, {x: "-120%", opacity: 0}, {x: "0%", opacity: 1, ease:Power2.easeInOut})
    .fromTo(introduction, 1, {y: "100%", opacity: 0}, {y: "0%", opacity: 1, ease:Power2.easeInOut});
}

function intro_animation(){
    const title = document.querySelector("#intro_head");
    const para_1 = document.querySelector(".intro_para_1");
    const para_2 = document.querySelector(".intro_para_2");

    const tl = new TimelineMax();

    tl.fromTo(title, 1.5, {y: "100%", opacity: 0}, {y: "0%", opacity: 1, ease:Power2.easeInOut})
    .fromTo(para_1, 1, {y: "100%", opacity: 0}, {y: "0%", opacity: 1, ease:Power2.easeInOut})
    .fromTo(para_2, 1, {y: "100%", opacity: 0}, {y: "0%", opacity: 1, ease:Power2.easeInOut});
}