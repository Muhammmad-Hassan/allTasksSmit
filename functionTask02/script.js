


// function totalAmount() {
//     let totalprice = 0;
//     let numOfItem = +prompt("enter num of item");
//     for (let i = 1; i <= numOfItem; i++) {
//         let qty = +prompt(`enter num of qty item ${i}`);
//         let price = +prompt(`item price for item ${i}`);

//         let subtotal = qty * price;
//         console.log(subtotal);
//         totalprice = totalprice + subtotal;

//     }

//     console.log("total Amount is ", totalprice)
// }
// totalAmount()

// ++++++++++++++++ 2nd +++++++++++++++

function totalAmount(qty, price) {

    let subtotal = qty * price;
    return subtotal;
}


let totalprice = 0;
let numOfItem = +prompt("enter num of item");
for (let i = 1; i <= numOfItem; i++) {
    let qty = +prompt(`enter num of qty item ${i}`);
    let price = +prompt(`item price for item ${i}`);
    let subtotal = totalAmount(qty, price)
    totalprice = totalprice + subtotal;

}

console.log("total Amount is ", totalprice)






























