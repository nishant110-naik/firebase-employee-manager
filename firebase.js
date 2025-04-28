const firebaseConfig = {
    apiKey: "AIzaSyCW-u_0HhuLexApLwEyG0nZ0fXU58EtObI",
    authDomain: "employee-e1a27.firebaseapp.com",
    databaseURL: "https://employee-e1a27-default-rtdb.firebaseio.com",
    projectId: "employee-e1a27",
    storageBucket: "employee-e1a27.firebasestorage.app",
    messagingSenderId: "729195408625",
    appId: "1:729195408625:web:3dc6097e52e0fa14838d50"
  };
 
  firebase.initializeApp(firebaseConfig);

  var employeeDB=firebase.database().ref("employee");
  document.getElementById("employee").addEventListener("submit",submitForm);


  function submitForm(e) {
    e.preventDefault();

    var name=getElementVal('name');
    var email=getElementVal('email');
    var mobile=getElementVal('mobile');
    var gender=getElementVal('gender');

    saveMessages(name,email,mobile,gender);

    
  }

  const saveMessages=(name, email, mobile, gender)=>{
    var newEmployee=employeeDB.push();

    newEmployee.set({
        name:name,
        email:email,
        mobile:mobile,
        gender:gender,
    });
  };

  function getElementVal(id) {
    return document.getElementById(id).value;
}


document.getElementById("employee").addEventListener("submit", function(e){
  e.preventDefault();
  window.location.href="firebase.html";
});




function validateName(name) {
  const nameRegex =/^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

 const nameInput = document.getElementById('name');

  nameInput.addEventListener('blur', function() {
const nameRegex = /^[a-zA-Z\s]+$/; //
if (!nameRegex.test(this.value)) {
this.setCustomValidity('Please enter a valid User name');
} else {
this.setCustomValidity(''); // Reset validation message
}
});



function validateMobile(mobile) {
  const mobileRegex =/^\d{10}$/;
  return mobileRegex.test(name);
}

 const mobileInput = document.getElementById('mobile');

  mobileInput.addEventListener('blur', function() {
const mobileRegex = /^\d{10}$/; //
if (!mobileRegex.test(this.value)) {
this.setCustomValidity('Please enter a valid Mobile Number');
} else {
this.setCustomValidity(''); // Reset validation message
}
});