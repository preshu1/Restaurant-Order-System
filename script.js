const restaurant = {
  name: "The Tasty Bites",
  menu: [],
  order: [],
  nextMenuId: 1,
  nextOrderId: 1,

  addMenuItem(name, price, category) {
    const menuItem = {
      id: this.nextMenuId,
      name: name,
      price: price,
      category: category,
      isAvailable: true,
    };
    this.menu.push(menuItem);
    this.nextMenuId++;
  },
};

restaurant.addMenuItem("Burger", 450, "main");
restaurant.addMenuItem("Pizza", 800, "main");
restaurant.addMenuItem("Coke", 100, "drink");
restaurant.addMenuItem("Salad", 200, "appetizer");
console.log(restaurant.menu);
