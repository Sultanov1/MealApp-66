export interface Meal {
  id: string;
  time: 'Breakfast' | 'Snack' | 'Lunch' | 'Dinner';
  description: string;
  colories: number;
}