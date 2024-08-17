"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/db";

export async function fetchBalance(userId: string) {
  const session = await auth();
  if (!session) return { success: false, error: "Unauthorized" };
  const balance = await prisma.statement.findUnique({
    where: {
      userId,
    },
    select: {
      balance: true,
    },
  });
  return { success: true, balance };
}

export async function fetchExpenses() {
  const session = await auth();
  if (!session) return { success: false, error: "Unauthorized" };
  const expenses = await prisma.expense.findMany({
    where: { Statement: { userId: session!.user!.id }, type: "Debit" },
  });
  const transformedData = expenses.map((expense) => ({
    day: expense.date.toLocaleDateString("en-US", { weekday: "long" }),
    amount: expense.amount,
  }));
  return { success: true, expenses: transformedData };
}

export async function addExpense(data: {
  amount: number;
  type: "Debit" | "Credit";
}) {
  const session = await auth();
  if (!session) return { success: false, error: "Unauthorized" };
  const statement = await prisma.statement.update({
    where: {
      userId: session?.user?.id,
    },
    data: {
      spent: {
        increment: data.amount,
      },
    },
    select: {
      id: true,
    },
  });
  if (!statement) return { success: false, error: "No statement found" };
  const expense = await prisma.expense.create({
    data: {
      amount: data.amount,
      type: data.type,
      Statement: { connect: { id: statement.id } },
    },
  });
  console.log("expense", expense);
  return { success: true };
}
