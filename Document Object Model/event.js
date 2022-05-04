// there are plenty of even listener in js
// we will only use couple of them

let button = document.querySelector("button");
let i = 0;

let consolingEvent = (e) => {
    let value = e.target;
    // value = e.target.id;
    // value = e.target.className;
    // value = e.target.type;

    // clientX clientY
    // clientxy is for entire window
    // in this case base x,y = 0,0 is window's very top left corner
    // value = e.clientX;
    // value = e.clientY;

    // offsetX offsetY
    // offsetxy is only counting around that element, in out case it's base x,y = 0,0 is button's
    // very top let corner
    // value = e.offsetX;
    // value = e.offsetY;

    console.log(value);
    console.log(`Button clicked ${i} times`);
    i++;
};

// by default event return a value, we can access that figure out which element are we interacting with
button.addEventListener("click", consolingEvent);

// another important event listener is
document.addEventListener("DOMContentLoaded", () => {
    // so something.......
});
