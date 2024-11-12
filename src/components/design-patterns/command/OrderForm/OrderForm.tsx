import { menu } from "@/lib/design-patterns/command/menu";
import Image from "next/image";
import { useState } from "react";
import styles from "./OrderForm.module.css";
import Button from "@/components/Button/Button";
import { Dish } from "@/lib/design-patterns/command/types";

interface OrderFormProps {
  onPlaceOrder: (customerName: string, selectedDishes: Dish[]) => void;
}

const OrderForm = ({ onPlaceOrder }: OrderFormProps) => {
  const [customerName, setCustomerName] = useState("");
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([]);

  const handleQuantityChange = (
    dish: Omit<Dish, "quantity">,
    quantity: string
  ) => {
    const quantityNumber = parseInt(quantity);

    if (!isNaN(quantityNumber) && quantityNumber >= 0) {
      setSelectedDishes((prev) => {
        const dishIndex = prev.findIndex((d) => d.id === dish.id);
        if (dishIndex === -1) {
          return [...prev, { ...dish, quantity: quantityNumber }];
        } else {
          const updatedDishes = [...prev];
          updatedDishes[dishIndex].quantity = quantityNumber;
          return updatedDishes;
        }
      });
    } else {
      setSelectedDishes((prev) => {
        const dishIndex = prev.findIndex((d) => d.id === dish.id);
        if (dishIndex !== -1) {
          const updatedDishes = [...prev];
          updatedDishes[dishIndex].quantity = 0;
          return updatedDishes;
        }
        return prev;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || selectedDishes.length === 0) return;
    onPlaceOrder(
      customerName,
      selectedDishes.filter((dish) => dish.quantity > 0)
    );
    setCustomerName("");
    setSelectedDishes([]);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <div className={styles.menu}>
        {menu.map((dish) => (
          <div key={dish.id} className={styles.menuItem}>
            <h4>{dish.name}</h4>
            <p>{dish.type}</p>
            <div className={styles.quantityInput}>
              <label htmlFor={`quantity-${dish.id}`}>Quantity</label>
              <input
                type="number"
                id={`quantity-${dish.id}`}
                value={
                  selectedDishes.find((d) => d.id === dish.id)?.quantity || 0
                }
                onChange={(e) => handleQuantityChange(dish, e.target.value)}
                min="0"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.customerInput}>
        <label htmlFor="customerName">Customer Name</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>
      <Button
        type="submit"
        isDisabled={
          !customerName ||
          !selectedDishes.length ||
          selectedDishes.every((dish) => dish.quantity === 0)
        }
      >
        Place Order
      </Button>
    </form>
  );
};

export default OrderForm;
