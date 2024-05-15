let val1 = [];
let val2 = [];
let val3 = [];
let val4 = [];
let val5 = [];
let val6 = [];
let val7 = [];
let val8 = [];
let n = 1,
  x = 0;
function add() {
  let rowadd = document.getElementById("table");
  let newrow = rowadd.insertRow(n);
  val1[x] = document.getElementById("first-name").value;
  val2[x] = document.getElementById("last-name").value;
  val3[x] = document.getElementById("address").value;
  val4[x] = document.getElementById("pincode").value;

  let radio = document.getElementsByName("gender");
  let selectedGender;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      selectedGender = radio[i].value;
      break;
    }
  }
  val5[x] = selectedGender;

  let checkboxes = document.querySelectorAll('input[name="food"]:checked');
  if (checkboxes.length < 2) {
    alert("Please select at least 2 food choices.");
    return;
  }

  if (!selectedGender) {
    alert("Please select gender.");
    return;
  }

  let selectedFoods = [];
  checkboxes.forEach(function (checkboxes) {
    selectedFoods.push(checkboxes.value);
  });
  val6[x] = selectedFoods.join(", ");
  val7[x] = document.getElementById("state").value;
  val8[x] = document.getElementById("country").value;

  if (
    val1[x] === "" ||
    val2[x] === "" ||
    val3[x] === "" ||
    val4[x] === "" ||
    val5[x] === "" ||
    val6[x] === "" ||
    val7[x] === "" ||
    val8[x] === ""
  ) {
    alert("Please fill in all the required fields.");
    return;
  }
  let cel1 = newrow.insertCell(0);
  let cel2 = newrow.insertCell(1);
  let cel3 = newrow.insertCell(2);
  let cel4 = newrow.insertCell(3);
  let cel5 = newrow.insertCell(4);
  let cel6 = newrow.insertCell(5);
  let cel7 = newrow.insertCell(6);
  let cel8 = newrow.insertCell(7);
  cel1.innerHTML = val1[x];
  cel2.innerHTML = val2[x];
  cel3.innerHTML = val3[x];
  cel4.innerHTML = val4[x];
  cel5.innerHTML = val5[x];
  cel6.innerHTML = val6[x];
  cel7.innerHTML = val7[x];
  cel8.innerHTML = val8[x];
  n++;
  x++;
  document.getElementById("form").reset();
}