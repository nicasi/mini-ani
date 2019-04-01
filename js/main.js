let box = document.querySelector(".box");
let running = false;

let run = (el, prop, fromValue, toValue) => {

    //console.log(`Animate ${el}: ${prop} from ${fromValue} to ${toValue}`);
}

let move = (el, propsObj) => {
    const propsArr = Object.entries(propsObj);
    let animations = [];
    let aniId = 0;
    let style = window.getComputedStyle(el);

    /*
    
    [
        {
            prop: "left",
            from: 100,
            to: 200
        },
        {
            prop: "right",
            from: 10,
            to: 50
        },
        ...
    ]
    
    
    */
    for (const [property, value] of propsArr) {
        let fromValue = parseInt(style[property]);
        animations.push({
            prop: property,
            from: fromValue,
            to: value
        });
    }
    
    console.log(animations);

    let step = () => {
        for (let a of animations) {
            let e = easeOutElastic(t / 100);
            x = e * (a.to - a.from) + a.from;
            el.style[a.prop] = x + "px";
        }
        t++;
        if (t < 150 && running) requestAnimationFrame(step)
        else running = false;
    }

    function easeOutElastic(t) {
        let p = 0.2;
        return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    }
    
    let startAnim = () => {
        if(!running) {
            t = 0;
            running = true;
            step();
        }
    }
    
    startAnim();
}



document.addEventListener("click", () => {
    move(box, {
        left: Math.floor(Math.random()*500),
        top: Math.floor(Math.random()*200),
        width: Math.floor(Math.random()*200),
        height: Math.floor(Math.random()*200)
    })
});



/*

let t = 0,
    x = 0,
    y = 0,
    target_x,
    target_y,
    start_x = x,
    start_y = y,
    run = false,
    vw = window.innerWidth,
    vh = window.innerHeight,
    dimensions = [];

function move(evt) {
    t = 0;
    start_x = x;
    target_x = evt.clientX - 50;
    start_y = y;
    target_y = evt.clientY - 50;

    if (!run) {
        run = true;
        step();
    }
}

function step() {
    t += 1;
    let e = easeOutElastic(t / 100);
    x = e * (target_x - start_x) + start_x;
    y = e * (target_y - start_y) + start_y;
    box.style.left = x + "px";
    box.style.top = y + "px";
    if (t < 150) requestAnimationFrame(step)
    else run = false;
}

function easeOutElastic(t) {
    let p = 0.2;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
}

(function randomizeTargets() {
    let targets = document.querySelectorAll(".target");

    for (let t of targets) {
        t.style.top = Math.floor(Math.random() * vh - 100) + "px";
        t.style.left = Math.floor(Math.random() * vw - 100) + "px";
        t.style.width = Math.floor(Math.random() * 100 + 100) + "px";
        t.style.height = Math.floor(Math.random() * 100 + 100) + "px";
        dimensions.push(t.getBoundingClientRect());
    }


})();

*/
