import { Command } from "./Command";
import { Order } from "./types";

export class UndoCancelCommand extends Command {
  constructor(order: Order) {
    super((orders: Order[]) => {
      const orderToUndoCancel = orders.find((o) => o.id === order.id);
      if (
        orderToUndoCancel &&
        orderToUndoCancel.cancelationStage &&
        orderToUndoCancel.status === "Cancelled"
      ) {
        orderToUndoCancel.status = orderToUndoCancel.cancelationStage;
        orderToUndoCancel.cancelationStage = undefined;
      }
    });
  }
}
