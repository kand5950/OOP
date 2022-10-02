class Pizza {

  constructor(crust) {
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l' ) {
    this._size = size;
  }
}

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }
}

let pizza1 = new Pizza('medium', 'thin');
// console.log(pizza1.toppings); //["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
pizza1.size = 'm'; // m 
pizza1.price;
// console.log(pizza1.toppings); //["cheese", "mushrooms", "peppers"]
console.log(pizza1);

let pizza2 = new Pizza('large', 'thin');
// console.log(pizza2.toppings); //["cheese"]
pizza2.addTopping("more cheese");
pizza2.size = 'l'; // l
pizza2.price;
// console.log(pizza2.toppings); //["cheese", "more cheese"];
console.log(pizza2);