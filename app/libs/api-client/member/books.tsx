import { FieldValues } from "react-hook-form";

export const getAvailableBooks = async () => {
  const response = await fetch("/api/v2/books/available");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getBorrowedBooks = async (studentId: string) => {
  const response = await fetch(`/api/v2/users/${studentId}/borrows`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getTransactions = async (studentId: string) => {
  const response = await fetch(`/api/v2/users/${studentId}/transactions`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const borrowBook = async (formData: FieldValues) => {
  const response = await fetch("/api/v2/books/transaction/burrow/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const returnBook = async (bookId: string) => {
  const response = await fetch(`/api/v2/books/transaction/return/${bookId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
