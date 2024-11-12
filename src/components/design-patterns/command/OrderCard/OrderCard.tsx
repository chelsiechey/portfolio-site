import Button from "@/components/Button/Button";
import styles from "./OrderCard.module.css";
import { Order } from "@/lib/design-patterns/command/types";

interface OrderCardProps {
  order: Order;
  onCancel: (order: Order) => void;
  onUndo: (order: Order) => void;
  onStartCooking: (order: Order) => void;
}

const OrderCard = ({
  order,
  onCancel,
  onUndo,
  onStartCooking,
}: OrderCardProps) => {
  return (
    <div key={order.id} className={styles.container}>
      <p>
        <strong>{order.customerName}</strong>
      </p>
      <div>
        {order.dishes.map((dish) => (
          <p key={dish.id}>{`${dish.name} (${dish.quantity})`}</p>
        ))}
      </div>
      {order.status === "Cooking" && (
        <p>Time Remaining: {order.timeRemaining}s</p>
      )}
      <div className={styles.buttons}>
        {order.status === "Pending" && (
          <Button size="small" onPress={() => onStartCooking(order)}>
            Start Cooking
          </Button>
        )}
        {order.status !== "Done" && order.status !== "Cancelled" && (
          <Button
            size="small"
            variant="secondary"
            onPress={() => onCancel(order)}
          >
            Cancel Order
          </Button>
        )}
        {order.status === "Cancelled" && (
          <Button size="small" onPress={() => onUndo(order)}>
            Undo
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
