const rewriteDate = (dateStr) => {
  const dateArr = dateStr.split(' ');
  const months = {
    'JAN': 'January',
    'FEB': 'Febuary',
    'MAR': 'March',
    'APR': 'April',
    'MAY': 'May',
    'JUN': 'June',
    'JUL': 'July',
    'AUG': 'August',
    'SEP': 'September',
    'OCT': 'October',
    'NOV': 'November',
    'DEC': 'December',
  };
  const month = months[dateArr[1]];
  const newDates = [month,`${dateArr[0]},`,dateArr[2]];
  return newDates.join(' ');
};

export default rewriteDate;