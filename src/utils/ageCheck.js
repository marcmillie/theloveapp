// utils/ageCheck.js

export const isAtLeast18 = (month, day, year) => {
  const today = new Date();
  const birthDate = new Date(`${year}-${month}-${day}`);

  // Calculate the difference in years
  const age = today.getFullYear() - birthDate.getFullYear();

  // Adjust if the birthday hasn't happened yet this year
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (
    age > 18 ||
    (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
  ) {
    return true;
  } else {
    return false;
  }
};