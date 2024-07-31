import { Expense, User } from "./definitions";

export const user: User = {
  id: "something",
  name: "John Doe",
  email: "johndoe@example.com",
  balance: 10000,
  budget: 7000,
  spent: 4000,
};

export const expenditure: Expense[] = [
  {
    id: "something",
    day: "Monday",
    date: "2021-09-06",
    amount: 1000,
  },
  {
    id: "something",
    day: "Tuesday",
    date: "2021-09-07",
    amount: 2000,
  },
  {
    id: "something",
    day: "Wednesday",
    date: "2021-09-08",
    amount: 500,
  },
  {
    id: "something",
    day: "Thursday",
    date: "2021-09-09",
    amount: 4000,
  },
  {
    id: "something",
    day: "Friday",
    date: "2021-09-10",
    amount: 5000,
  },
  {
    id: "something",
    day: "Saturday",
    date: "2021-09-11",
    amount: 100,
  },
  {
    id: "something",
    day: "Sunday",
    date: "2021-09-12",
    amount: 7000,
  },
];
