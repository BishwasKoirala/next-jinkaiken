export const fetchTransactions = async (studentId: string) => {
  const response = await fetch(`/api/bookTransaction/userHistory/${studentId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
