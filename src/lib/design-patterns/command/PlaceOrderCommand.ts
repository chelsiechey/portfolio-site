import { Command } from "./Command";
import { OrderManager } from "./OrderManager";
import { Dish, Order } from "./types";

export class PlaceOrderCommand extends Command {
  constructor(customerName: string, selectedDishes: Dish[]) {
    super((orders: Order[]) => {
      orders.push({
        id: OrderManager.generateId(),
        customerName,
        dishes: selectedDishes,
        status: "Pending",
        timeRemaining: 10,
      });
    });
  }
}
