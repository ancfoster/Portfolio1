/* jshint esversion: 11 */
document.getElementById("size-minus").addEventListener("click", minus_size);
document.getElementById("size-plus").addEventListener("click", plus_size);
let size_current = document.getElementById("booking_size").value;
function minus_size() {
    if (size_current > 1) {
        size_current = size_current - 1;
        document.getElementById("booking_size").value = size_current;
    }
}
function plus_size() {
    if (size_current < 6) {
        size_current = Number(size_current) + 1;
        document.getElementById("booking_size").value = size_current;
    }
}