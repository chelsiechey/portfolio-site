import { Command } from "./Command";
import { Order } from "./types";

export class StartCookingCommand extends Command {
  constructor(order: Order) {
    super((orders: Order[]) => {
      const orderToStartCooking = orders.find((o) => o.id === order.id);
      if (orderToStartCooking && orderToStartCooking.status === "Pending") {
        orderToStartCooking.status = "Cooking";
      }
    });
  }
}
