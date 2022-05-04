// ===============================
//   PART 1: CONCEPT OF DOM
// ===============================
let value;
value = this;

// we can now access plenty of Dom element
value = this;
value = document.URL;
value = document.domain;
value = document.contentType;
value = document.links;
value = document.forms;

// we can also access any attribute like className, href, id etc
// so on and so on............

console.log(value);
console.log("-------------------------");

// we can not access DOM array by default. we need to convert it into nomal array like this
let links = Array.from(document.links);

links.forEach((link) => {
    console.log(link);

    // we can add/manipulate any attribute
    link.classList.add("red__link");
});

// ========================================
//   PART 2: ACCESSING DOM IN SEVERAL WAYS
// ========================================

// access dom
console.log("-------------------------");
let dom = document.getElementById("dom");
console.log(dom);
console.log(`DOM Id: ${dom.id}`);

// change style of dom
dom.style.color = "#fff";
dom.style.padding = "1rem 2rem";
dom.style.background = "linear-gradient(220deg, #49DEB2, #49BCF6)";

// dom.textContent = "DOM Modified";
// dom.innerText = "DOM Modified 2";
dom.innerHTML = "<i>DOM Modified 3</i>"; // can modify html element like

// query selector
console.log("-------------------------");
let query_form = document.querySelector("form"); // only access first element by tag name
// if we want to access anything with id or call we need to use . for class or # for id
let query_form_id = document.querySelector("#form1"); // only access first element by tag name
let query_form_class = document.querySelector(".list");

console.log(query_form);
console.log(query_form_id);
console.log(query_form_class);

// accessing multiple element
console.log("-------------------------");
let lists = document.querySelectorAll("li");
lists.forEach((list) => {
    console.log(list);
});
