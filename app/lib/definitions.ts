import z from "zod";
export const loginSchema = z.object({
  email: z.string().email({ message: "Doesn't look like a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
export type loginInputs = z.infer<typeof loginSchema>;

export type User = {
  id: string;
  name: string;
  email: string;
  balance: number;
  spent: number;
  budget: number;
  password: string;
};

export type Expense = {
  id: string;
  day: string;
  amount: number;
  date: string;
};
