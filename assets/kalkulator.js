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

    // Ketika event target merupakan elemen yg menerapkan class clear, maka panggil fungsi clearCalculator()
    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }

    // Ketika event target merupakan elemen yg menerapkan class negative
    if (target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    }

    // Ketika event target merupakan elemen yg menerapkan class equals
    if (target.classList.contains('equals')) {
      performCalculation();
      updateDisplay();
      return;
    }

    // Ketika event target merupakan elemen yg menerapkan class operator
    if (target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
}

// Untuk mengubah angka menjadi positive atau negative
function inverseNumber() {
  if (calculator.displayNumber === '0') {
    return;
  }

  calculator.displayNumber = calculator.displayNumber * -1;
}