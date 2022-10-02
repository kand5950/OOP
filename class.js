class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}

let pizza1 = new Pizza('large', 'thin');
console.log(pizza1.toppings); //["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); //["cheese", "mushrooms", "peppers"]
console.log(pizza1);

let pizza2 = new Pizza();
console.log(pizza2.toppings); //["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); //["cheese", "more cheese"];
console.log(pizza2);