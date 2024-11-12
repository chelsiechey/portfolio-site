import { Order } from "@/lib/design-patterns/command/types";
import OrderCard from "../OrderCard/OrderCard";
import styles from "./OrderList.module.css";

interface OrderListProps {
  orders: Order[];
  onCancelOrder: (order: Order) => void;
  onUndo: (order: Order) => void;
  onStartCooking: (order: Order) => void;
}

const OrderList = ({
  orders,
  onCancelOrder,
  onUndo,
  onStartCooking,
}: OrderListProps) => {
  const groupedOrders = orders.reduce(
    (acc, order) => {
      acc[order.status].push(order);
      return acc;
    },
    {
      Pending: [],
      Cooking: [],
      Done: [],
      Cancelled: [],
    } as Record<string, Order[]>
  );

  return (
    <div className={styles.orderList}>
      {/* Pending Orders Column */}
      <div className={styles.orderColumn}>
        <h3>Pending</h3>
        {groupedOrders.Pending.length === 0 ? (
          <p>No orders pending.</p>
        ) : (
          <ul>
            {groupedOrders.Pending.map((order) => (
              <OrderCard
                order={order}
                key={order.id}
                onCancel={onCancelOrder}
                onUndo={onUndo}
                onStartCooking={onStartCooking}
              />
            ))}
          </ul>
        )}
      </div>

      {/* Cooking Orders Column */}
      <div className={styles.orderColumn}>
        <h3>Cooking</h3>
        {groupedOrders.Cooking.length === 0 ? (
          <p>No orders cooking.</p>
        ) : (
          <ul>
            {groupedOrders.Cooking.map((order) => (
              <OrderCard
                order={order}
                key={order.id}
                onCancel={onCancelOrder}
                onUndo={onUndo}
                onStartCooking={onStartCooking}
              />
            ))}
          </ul>
        )}
      </div>

      {/* Done Orders Column */}
      <div className={styles.orderColumn}>
        <h3>Done</h3>
        {groupedOrders.Done.length === 0 ? (
          <p>No orders done.</p>
        ) : (
          <ul>
            {groupedOrders.Done.map((order) => (
              <OrderCard
                order={order}
                key={order.id}
                onCancel={onCancelOrder}
                onUndo={onUndo}
                onStartCooking={onStartCooking}
              />
            ))}
          </ul>
        )}
      </div>

      {/* Cancelled Orders Column */}
      <div className={styles.orderColumn}>
        <h3>Cancelled</h3>
        {groupedOrders.Cancelled.length === 0 ? (
          <p>No orders cancelled.</p>
        ) : (
          <ul>
            {groupedOrders.Cancelled.map((order) => (
              <OrderCard
                order={order}
                key={order.id}
                onCancel={onCancelOrder}
                onUndo={onUndo}
                onStartCooking={onStartCooking}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrderList;
