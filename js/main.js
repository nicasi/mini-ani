// REVEALING MODULE PATTERN
let animate = (() => {
    let animations = [],
        running = false,
        propsArr = [],
        style,
        el,
        t = 0;
        
    let to = (element, propsObj) => {
        el = element;
        propsArr = Object.entries(propsObj);
        style = window.getComputedStyle(el);
        animations = [];
        
        for (const [property, value] of propsArr) {
            let fromValue = parseInt(style[property]);
            animations.push({
                prop: property,
                from: fromValue,
                to: value
            });
        }
        
        startAnimation();
    }
    
    let startAnimation = () => {
        t = 0;
        if (!running) {
            running = true;
            step();
        }
    }
    
    let step = () => {
        for (let a of animations) {
            let e = easeOutElastic(t / 100);
            x = e * (a.to - a.from) + a.from;
            el.style[a.prop] = x + "px";
        }

        t++;
        if (t < 150 && running) requestAnimationFrame(step);
        else running = false;
    }
    
    let easeOutElastic = (t) => {
        let p = 0.2;
        return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    }
    
    // REVEAL
    return {
        to: to
    }
})();


// Example call

let box = document.querySelector(".box");

document.addEventListener("click", () => {
    animate.to(box, {
        left: Math.floor(Math.random() * 500),
        top: Math.floor(Math.random() * 500),
        width: Math.floor(Math.random() * 500),
        height: Math.floor(Math.random() * 500)
    })
});