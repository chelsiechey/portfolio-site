import { Command } from "./Command";
import { Order } from "./types";

export class TickOrdersCommand extends Command {
  constructor() {
    super((orders: Order[]) => {
      orders.forEach((order) => {
        if (order.status === "Cooking" && order.timeRemaining > 0) {
          order.timeRemaining--;
          if (order.timeRemaining === 0) {
            order.status = "Done";
          }
        }
      });
    });
  }
}
