import { Command } from "./Command";
import { Order } from "./types";

export class OrderManager {
  private orders: Order[];
  private static idCounter = 1;

  constructor() {
    this.orders = [];
  }

  execute(command: Command, ...args: any[]): void {
    command.execute(this.orders, ...args);
  }

  getOrders(): Order[] {
    return this.orders;
  }

  static generateId(): number {
    return OrderManager.idCounter++;
  }
}
