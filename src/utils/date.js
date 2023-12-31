export function getDaysArray(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
) {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
}

export function getYearsArray() {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i > currentYear - 100; i--) {
    years.push(i);
  }
  return years;
}
