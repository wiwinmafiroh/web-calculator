// Untuk menyimpan data dan kondisi pada kalulator
const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false
}

// Untuk meng-update angka pada layar kalkulator
function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

// Untuk menghapus data pada kalkulator
function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}

// Untuk memasukkan angka ke dalam nilai displayNumber kalkulator
function inputDigit(digit) {
  // Jika displayNumber bernilai '0', maka angka pertama yang dimasukkan pengguna akan menggatikan keseluruhan nilai displayNumber
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

// Menginisialisasikan nilai seluruh elemen button pada Variabel buttons
const buttons = document.querySelectorAll(".button");
// Melakukan looping
for (let button of buttons) {
  // Memberikan event click pada tiap elemen button
  button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;

    inputDigit(target.innerText);
    updateDisplay();
  });
}