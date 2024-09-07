const subTotal = document.querySelector("#subtotal");
const VAT = document.querySelector("#vat");
const grandTotal = document.querySelector("#grand-total");
const invoiceNumber = document.querySelector("#invoice-number");
const poNumber = document.querySelector("#PO-number");
const invoiceDate = document.querySelector("#invoice-date");
const invoiceTbody = document.querySelector(".invoice-table tbody");
const invoiceSn = document.querySelector(
  ".invoice-table tbody tr td:nth-child(1)"
);
const addButton = document.querySelector("#addBtn");

const Price = document.querySelectorAll(
  ".invoice-table tbody tr td:nth-child(3)"
);
const QTY = document.querySelectorAll(
  ".invoice-table tbody tr td:nth-child(4)"
);
const Total = document.querySelectorAll(
  ".invoice-table tbody tr td:nth-child(5)"
);

// eventlistensers
window.addEventListener("load", poNum);
invoiceTbody.addEventListener("input", calculate);
addButton.addEventListener("click", addRow);

// functions
function poNum() {
  let aplpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let ranApl1 = Math.floor(Math.random() * 26);
  let ranApl2 = Math.floor(Math.random() * 26);
  let ranApl3 = Math.floor(Math.random() * 26);
  let randomNum = Math.floor(Math.random() * 500) + 100;
  let porandomNum = Math.floor(Math.random() * 9999999) + 1000000;

  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dayFormatted = day.toString().padStart(2, "0");
  let mothFormatted = month.toString().padStart(2, "0");
  invoiceNumber.innerText = `${aplpha[ranApl1]}${aplpha[ranApl2]}${aplpha[ranApl3]}/ ${randomNum}/ ${dayFormatted}-${year}`;
  poNumber.innerText = `PO: ${porandomNum}`;
  invoiceDate.innerText = `${dayFormatted}-${mothFormatted}-${year}`;
}

function calculate() {
  const Row = document.querySelectorAll(".invoice-table tbody tr");
  let qtyIndex = 2;
  let priceIndex = 3;
  let total = 0;
  let totalIndex = 4;
  let percentage = 7.5;

  Row.forEach((rows) => {
    let cells = rows.querySelectorAll("td");
    let qtycCell = parseFloat(cells[qtyIndex].innerText.trim()) || 0;
    let priceCell = parseFloat(cells[priceIndex].innerText.trim()) || 0;

    let rowtotal = qtycCell * priceCell;
    cells[totalIndex].innerText = rowtotal.toLocaleString();
    total += rowtotal;

    let vatcalc = (percentage / 100) * total;
    VAT.innerText = vatcalc.toLocaleString();

    let grancalc = total + vatcalc;
    grandTotal.innerText = grancalc.toLocaleString();
    subTotal.innerText = total.toLocaleString();
  });
}

function addRow() {
  let tbody = document.querySelector("table tbody");
  let newrow = document.createElement("tr");
  for (i = 0; i < 5; i++) {
    let tabledata = document.createElement("td");
    tabledata.setAttribute("contenteditable", "true");
    newrow.append(tabledata);
  }
  tbody.append(newrow);

   updateSerialNumber()
}

function updateSerialNumber(){
  let serialNumberRow = document.querySelectorAll(".invoice-table tbody tr");
serialNumberRow.forEach((row,index)=>{
  let serialNumberCell= row.querySelectorAll("td")
  if(serialNumberCell.length>0){
    serialNumberCell[0].innerText= index+1
  }
})

}