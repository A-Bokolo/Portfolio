// Initialize Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyC8A7HkNEBCO07cPdsbF1RbRornKytdvFA",
    authDomain: "portfolio-10078.firebaseapp.com",
    databaseURL: "https://portfolio-10078.firebaseio.com",
    projectId: "portfolio-10078",
    storageBucket: "portfolio-10078.appspot.com",
    messagingSenderId: "107539378125",
    appId: "1:107539378125:web:eebb6c2c1933652e589e84",
    measurementId: "G-32JB892FX2"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name,  email, phone, message);
  

   
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
  }
}