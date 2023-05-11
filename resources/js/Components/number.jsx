export default function number(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}