function textnumber(value) {
    document.getElementById('text').value += value;
}
function calculate() {
    document.getElementById('text').value = eval(document.getElementById('text').value);
}
function reset() {
    document.getElementById('text').value = '0';

}