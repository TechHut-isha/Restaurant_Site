var inputs = document.querySelectorAll('input');
for(let i=0;i<inputs.length;i++){
inputs[i].addEventListener('blur', function(){
  if (inputs[i].value.trim() == "") {
    inputs[i].style.borderStyle ='solid';
    inputs[i].style.borderWidth='1px';
    inputs[i].style.borderColor = 'red';
  }
    else{
      inputs[i].style.border= 'none';
    }

});
}

var checkBox = document.getElementById('check');
var completeBooking = document.getElementById('cmp_booking');
completeBooking.addEventListener('click', function(e){
    e.preventDefault();
    let can_submit = false;
    for(let i=0;i<inputs.length;i++){
        if (inputs[i].value.trim() == "") {
          inputs[i].style.borderStyle ='solid';
          inputs[i].style.borderWidth='1px';
          inputs[i].style.borderColor = 'red';
        can_submit = false;
      }
      else{
        can_submit = true;
      }
  }
  var firstName = document.getElementById('first_name');
  var lastName = document.getElementById('last_name');
  var email = document.getElementById('email_id');
  var phn = document.getElementById('phone_no');
  var date = document.getElementById('date');
  var time = document.getElementById('time');
  var noOfGuest = document.getElementById('guest');

  if(can_submit) {
    var BookingDetails = {
      'guestFirstName' : firstName.value,
      'guestLastName' : lastName.value,
      'email' : email.value,
      'phone': phn.value,
      'date' : date.value,
      'time' : time.value,
      'noofguest': noOfGuest.value
    };
    // alert($("form").first.serialize());
    
    for(let i=0;i<inputs.length;i++){
      inputs[i].value='';
    }
    localStorage.setItem('bookingDetails',JSON.stringify(BookingDetails));

    var details = JSON.parse(localStorage.getItem('bookingDetails'));
    var resDate = document.getElementsByClassName('res-date')[0];
    var resTime = document.getElementsByClassName('res-time')[0];
    var fullname = document.getElementById('fullname');
    var emailId = document.getElementById('emID');
    var phone = document.getElementById('Phone');
    var noOfGuests = document.getElementById('numGuest');
    resDate.innerHTML = details.date; 
    resTime.innerHTML = details.time;
    fullname.innerHTML= details.guestFirstName +" "+details.guestLastName;
    emailId.innerHTML = details.email;
    phone.innerHTML = details.phone;
    noOfGuests.innerHTML = details.noofguest;
  }
});

