const firebaseConfig = {
    apiKey: "AIzaSyBcdws9XRox_OgjzQ8E2-qiczOOpH8y8NU",
    authDomain: "recipeapp-d51b4.firebaseapp.com",
    databaseURL: "https://recipeapp-d51b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "recipeapp-d51b4",
    storageBucket: "recipeapp-d51b4.appspot.com",
    messagingSenderId: "271988910225",
    appId: "1:271988910225:web:8721ab8dfcabdcef1ff730"
  };

  // initialise firebase 
  firebase.initializeApp(firebaseConfig);

//reference your database

var recipeDB = firebase.database().ref("Recipes");

document.getElementById("recipe").addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var ingridients = getElementVal("ingridients");
    var steps = getElementVal("steps");

    console.log(name, ingridients, steps);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}