// DOM ATTRIBUTE
let ol = document.querySelector("ol");
// creaeting an element
let newitem = document.createElement("li");

// adding id and class
newitem.id = "newID";
newitem.className = "newclass";
newitem.setAttribute("data-name", "a new element");
newitem.textContent = "A whole new element by js";
console.log(newitem);

ol.appendChild(newitem);

// removing any element
let lists = document.querySelectorAll("li");
console.log(lists.length);
for (let i = 0; i < lists.length; i++) {
    if (i == 0) {
        // let deleted = lists[0];
        lists[0].remove();
        // console.log(`${deleted.textContent} successfully deleted`);
        console.log(`${lists[0].textContent} successfully deleted`);
    }
    console.log(`Item ${i}: ${lists[i].textContent}`);
}

// checking if any attribute existed
console.log("-----------------------");
let hasattr = ol.hasAttribute("class");
console.log(hasattr);

// we can also remove any attribute
let olclass = ol;
console.log(olclass);
ol.removeAttribute("class");
console.log(ol);
