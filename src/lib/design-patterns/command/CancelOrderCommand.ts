import { Command } from "./Command";
import { Order } from "./types";

export class CancelOrderCommand extends Command {
  constructor(order: Order) {
    super((orders: Order[]) => {
      const orderToCancel = orders.find((o) => o.id === order.id);
      if (
        orderToCancel &&
        orderToCancel.status !== "Done" &&
        orderToCancel.status !== "Cancelled"
      ) {
        orderToCancel.cancelationStage = orderToCancel.status;
        orderToCancel.status = "Cancelled";
      }
    });
  }
}
