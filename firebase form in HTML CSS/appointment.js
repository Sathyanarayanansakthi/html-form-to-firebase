const firebaseConfig = {
    apiKey: "AIzaSyBOIZi0Y7l9teqHodMWMUj8t-7vn00m2Tg",
    authDomain: "appiontmentform.firebaseapp.com",
    databaseURL: "https://appiontmentform-default-rtdb.firebaseio.com",
    projectId: "appiontmentform",
    storageBucket: "appiontmentform.appspot.com",
    messagingSenderId: "118919349803",
    appId: "1:118919349803:web:7afe16a72282cb4ccbcc6e"
  };
  firebase.initializeApp(firebaseConfig);

// reference your database
var appointmentFormDB = firebase.database().ref("appointmentForm");

document.getElementById("appointmentForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var mailid= getElementVal("mailid");
  var phno= getElementVal("phno");
  var dob= getElementVal("dob");
  var doa= getElementVal("doa");
  var dep= getElementVal("dep");
  var doc= getElementVal("doc");

  saveMessages(name, mailid, phno, dob , doa ,dep ,doc);

  

  //   reset the form
  document.getElementById("appointmentForm").reset();
}

const saveMessages = (name, mailid,phno, dob , doa ,dep ,doc ) => {
  var newAppointmentForm = appointmentFormDB.push();

  newAppointmentForm.set({
    name: name,
    emailid: mailid,
    phonenumber:phno,
    dateofbirth:dob,
    dateofappointment:doa,
    department:dep,
    doctor:doc

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};