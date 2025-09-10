// utils/dateUtils.js
export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getCurrentMonth() {
    return new Date().getMonth()
}

export function getCurrentYear() {
    return new Date().getFullYear()
}

export function getCurrentDate() {
    return new Date().getDate()
}

export function getCurrentDayInMonthIndex (year, month, day) {
    // return new Date(year, month, day).toLocaleDateString("en-GB", { weekday: "short" })
    return new Date(year, month, day).getDay()
}   

export function getCurrentDateToLocaleString(year,month,day) {
    return new Date(year,month,day).toLocaleDateString()
}

export function formatDate(year, monthIndex, day) {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  // Validate inputs
  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error("Month index must be between 0 and 11");
  }
  
  if (day < 1 || day > 31) {
    throw new Error("Day must be between 1 and 31");
  }
  
  console.log(`${day} ${monthNames[monthIndex]} ${year}`)
  return `${day} ${monthNames[monthIndex]} ${year}`;
};