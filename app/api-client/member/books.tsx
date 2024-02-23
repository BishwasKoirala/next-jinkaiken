import { FieldValues } from "react-hook-form";

export const fetchBooks = async () => {
  const response = await fetch("/api/dbBooks");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchTransactions = async (studentId: string) => {
  const response = await fetch(`/api/bookTransaction/userHistory/${studentId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const borrowBook = async (formData: FieldValues) => {
  const response = await fetch("/api/bookTransaction/burrow/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
