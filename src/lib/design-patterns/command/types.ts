export interface Order {
  id: number;
  customerName: string;
  dishes: { id: number; name: string; quantity: number }[];
  status: "Pending" | "Cooking" | "Done" | "Cancelled";
  cancelationStage?: "Pending" | "Cooking";
  timeRemaining: number;
}

export interface Dish {
  id: number;
  name: string;
  type: string;
  quantity: number;
}
