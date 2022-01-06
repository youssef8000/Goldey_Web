let btnConfirm = document.getElementById('confirm');
let inputInfo = document.querySelectorAll('input');
let data = document.querySelector('.data');
let confirm_data = () => {
  let dataName1 = inputInfo[0].value;
  let dataName2 = inputInfo[1].value;
  let dataEmail = inputInfo[2].value;
  let datapass = inputInfo[3].value;
  if (dataEmail.trim() == 0 || dataName1.trim() == 0 || dataName2.trim() == 0 ||datapass.trim()==0) {
    alert('please enter your Data')
  } else {

    data.innerHTML = 'Your name is ' + dataName1 + ' ' + dataName2 + `<br>` + 'your email is ' + dataEmail + `<br>`;
    data.innerHTML += ` <button id="next" type="button" class="btn btn-success" onclick="location.href='home.html'"style="width: 30%;">Next</button>`
  }

}
btnConfirm.addEventListener('click', confirm_data)
