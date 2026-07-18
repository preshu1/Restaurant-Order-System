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

  removeMenuItem(id) {
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].id === id) {
        const removedMenuItem = this.menu.splice(i, 1);
        return removedMenuItem[0];
      }
    }
    return null;
  },

  findMenuItemById(id) {
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].id === id) {
        return this.menu[i];
      }
    }
    return null;
  },
};

restaurant.addMenuItem("Burger", 450, "main");
restaurant.addMenuItem("Pizza", 800, "main");
restaurant.addMenuItem("Coke", 100, "drink");
restaurant.addMenuItem("Salad", 200, "appetizer");
console.log(restaurant.menu);
console.log("Removed menu item: ", restaurant.removeMenuItem(2));
console.log(restaurant.menu);
// const item = restaurant.findMenuItemById(2);
// console.log(item);
const item = restaurant.findMenuItemById(1);
console.log(item);
