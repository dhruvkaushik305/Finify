import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // Fetch the statement and related expenses for the given userId
    const statement = await prisma.statement.findUnique({
      where: { userId },
      include: { Expense: true },
    });

    if (!statement) {
      return NextResponse.json(
        { error: "Statement not found" },
        { status: 404 },
      );
    }

    // Transform the expenses into the desired format
    const transformedData = statement.Expense.map((expense) => ({
      day: expense.date.toISOString().split("T")[0], // Format the date as YYYY-MM-DD
      amount: expense.amount,
    }));

    return NextResponse.json(transformedData);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
