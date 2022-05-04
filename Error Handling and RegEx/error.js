console.log("before error");

try {
    error();
} catch (err) {
    console.log("-----------");
    console.log(err);
    // we can be more specific
    console.log("-----------");
    console.log(err.message);
    console.log(err.name);
} finally {
    console.log("-----------");
    console.log("rest of the code 😎😎😎");
}

console.log("after error");

// we can also create self generate error message using throw

let age = 125;

try {
    if (age < 15) throw "too small";
    else if (age > 22) throw "too big";
} catch (err) {
    console.log(err);
} finally {
    console.log(`your age is ${age}`);
}
