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

  findMenuItemsById(id) {
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].id === id) {
        return this.menu[i];
      }
    }
    return null;
  },

  findMenuItemsByCategory(category) {
    const allItems = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].category === category) {
        allItems.push(this.menu[i]);
      }
    }
    return allItems;
  },

  displayMenu() {
    console.log(this.name);
    console.log("\n");
    const categories = ["main", "drink", "appetizer"];
    categories.forEach((category) => {
      const items = this.findMenuItemsByCategory(category);
      console.log(`CATEGORY : ${category.toUpperCase()}`);
      items.forEach((item) => {
        console.log(` ${item.name} -${item.price}`);
      });
      console.log("\n");
    });
  },
};

restaurant.addMenuItem("Burger", 450, "main");
restaurant.addMenuItem("Pizza", 800, "main");
restaurant.addMenuItem("Coke", 100, "drink");
restaurant.addMenuItem("Salad", 200, "appetizer");
restaurant.addMenuItem("Sandwich", 350, "main");

console.log(restaurant.menu);
console.log("Removed menu item: ", restaurant.removeMenuItem(2));
console.log(restaurant.menu);
// const item = restaurant.findMenuItemById(2);
// console.log(item);
const item = restaurant.findMenuItemsById(1);
console.log(item);
// const foundItems = restaurant.findMenuItemsByCategory("main");
// console.log(foundItems);
const foundItems = restaurant.findMenuItemsByCategory("dessert");
console.log(foundItems);
restaurant.displayMenu();
