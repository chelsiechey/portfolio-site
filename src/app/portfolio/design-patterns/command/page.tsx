"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import OrderForm from "@/components/design-patterns/command/OrderForm/OrderForm";
import OrderList from "@/components/design-patterns/command/OrderList/OrderList";
import { OrderManager } from "@/lib/design-patterns/command/OrderManager";
import { PlaceOrderCommand } from "@/lib/design-patterns/command/PlaceOrderCommand";
import { CancelOrderCommand } from "@/lib/design-patterns/command/CancelOrderCommand";
import { UndoCancelCommand } from "@/lib/design-patterns/command/UndoCancelCommand";
import { StartCookingCommand } from "@/lib/design-patterns/command/StartCookingCommand";
import { TickOrdersCommand } from "@/lib/design-patterns/command/TickOrdersCommand";
import { Dish, Order } from "@/lib/design-patterns/command/types";
import { usePathname } from "next/navigation";

const CommandPattern = () => {
  const pathname = usePathname();
  const [orderManager] = useState(new OrderManager());
  const [orders, setOrders] = useState<Order[]>([]);

  const getAllOrders = useCallback(() => {
    setOrders([...orderManager.getOrders()]);
  }, [orderManager]);

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  const placeOrder = (customerName: string, selectedDishes: Dish[]) => {
    const command = new PlaceOrderCommand(customerName, selectedDishes);
    orderManager.execute(command);
    getAllOrders();
  };

  const cancelOrder = (order: Order) => {
    const command = new CancelOrderCommand(order);
    orderManager.execute(command);
    getAllOrders();
  };

  const undoCancelOrder = (order: Order) => {
    const command = new UndoCancelCommand(order);
    orderManager.execute(command);
    getAllOrders();
  };

  const startCooking = (order: Order) => {
    const command = new StartCookingCommand(order);
    orderManager.execute(command);
    getAllOrders();
  };

  const tickOrders = useCallback(() => {
    const command = new TickOrdersCommand();
    orderManager.execute(command);
    getAllOrders();
  }, [orderManager, getAllOrders]);

  useEffect(() => {
    const interval = setInterval(() => {
      tickOrders();
    }, 1000);

    return () => clearInterval(interval);
  }, [tickOrders]);

  return (
    <div className={styles.container}>
      <section className={styles.description}>
        <h2>Restaurant Orders - Command Pattern</h2>
        <p>
          In this project, the Command pattern is used to model a restaurant
          order management system. When a customer places an order, a
          &quot;command&quot; object is created to represent the action. These
          commands include actions like <strong>placing an order</strong>,{" "}
          <strong>starting cooking</strong>, and{" "}
          <strong>cancelling an order</strong>. The key benefit of using the
          Command pattern is that the client (waiter) does not need to know how
          the action is performed—instead, the command object encapsulates all
          the details of the request. The order status is updated through
          various stages: <strong>Pending</strong>, <strong>Cooking</strong>,
          and <strong>Done</strong>, with the ability to cancel any order before
          it&apos;s finished. The use of the Command pattern makes it easy to
          add new actions, modify existing ones, or change the behavior of the
          system without altering the core logic.
        </p>
        <p>
          To see the code for this project, see my Github repository{" "}
          <strong>portfolio-site</strong> at src/app{pathname}
          /page.tsx
        </p>
      </section>
      <section className={styles.projectSection}>
        <OrderForm onPlaceOrder={placeOrder} />
        <OrderList
          orders={orders}
          onCancelOrder={cancelOrder}
          onUndo={undoCancelOrder}
          onStartCooking={startCooking}
        />
      </section>
    </div>
  );
};

export default CommandPattern;
