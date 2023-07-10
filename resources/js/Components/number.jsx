export default function number(x) {
    const formattedNumber = x.toString().replace(/\./g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedNumber;
  }