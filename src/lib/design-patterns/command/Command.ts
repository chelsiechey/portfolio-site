import { Order } from "./types";

export class Command {
  execute: (orders: Order[], ...args: any[]) => void;

  constructor(execute: (orders: Order[], ...args: any[]) => void) {
    this.execute = execute;
  }
}
