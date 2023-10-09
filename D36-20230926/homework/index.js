const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyBYP0Bg0gJIisidwxvbRjlpOk2UsRP8TaM",
  authDomain: "login-form-a384d.firebaseapp.com",
  databaseURL: "https://login-form-a384d-default-rtdb.firebaseio.com",
  projectId: "login-form-a384d",
  storageBucket: "login-form-a384d.appspot.com",
  messagingSenderId: "267131233290",
  appId: "1:267131233290:web:dafd42dc1cd43a3fd2abf3"
 });
const db = firebase.database();
const auth = firebase.auth();
    
    

function registration(){
  var email=document.getElementById("gmail1").value
  var password=document.getElementById("password1").value
  console.log(email)
  console.log(password)
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    // console.write("you are signed up")
    alert ("you are signed up")
    console.log(result)
    // var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // ..
  });
    }

    

function login(){
  var name=document.getElementById("Name").value
  var email=document.getElementById("gmail").value
  var password=document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    document.write("you are signed in")
    console.log(result)

    const user=firebase.auth().currentUser;
    var uid=user.uid
    console.log(uid)
    let details={
      user_name:name,
      user_mail:email,
      logged_in:true
    }
    db.ref("RegisteredUsers/"+uid).set(details)
    window.location="home.html"
    // Signed in
    // var user = userCredential.user;
    // ...
  })

  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    // var errorCode = error.code;
    // var errorMessage = error.message;
  })
  // window.location="home.html"
}
 function tableadd(){
  firebase.auth().onAuthStateChanged((user)=>
  {
  if (user){
    var uid=user.uid
    db.ref(`RegisteredUsers/${uid}`).once("value")
    .then(function(snapshot){
      var data=snapshot.val();
      let htmldata = "";
      htmldata = htmldata + `<tr>
                          <td> ${data.user_name} </td>
                          <td> ${data.user_mail} </td>
                          <td><button onclick="update('${data.user_mail}')">&#9998</button></td>
                          <td><button onclick="del('${data.user_mail}')">&#128465</button></td>
                          </tr>`
      document.getElementById("list_table_body").innerHTML = htmldata                 
      
  }
  )

            }
  })
}

function oldlogin(){
  
    firebase.auth().onAuthStateChanged((user)=>
    {
    if (user){
      var uid=user.uid
      db.ref(`RegisteredUsers/${uid}`).once("value")
      .then(function(snapshot){
        var data=snapshot.val();
    if(data.logged_in==true){
      document.getElementById("wel").innerHTML =data.user_name
      tableadd()
    }
})
    }
  })
}

function secure(){
  firebase.auth().onAuthStateChanged((user)=>
    {
    if (user){
      var uid=user.uid
      db.ref(`RegisteredUsers/${uid}`).once("value")
      .then(function(snapshot){
        var data=snapshot.val();
        if (data.logged_in==false){
          window.location="login.html";

        }
})
    }})}


 function logout(){
  firebase.auth().onAuthStateChanged((user)=>
    {
    if (user){
      var uid=user.uid
      db.ref(`RegisteredUsers/${uid}`).once("value")
      .then(function(snapshot){
        var data=snapshot.val();
        if(data.logged_in==true){
          let logg={
            logged_in:false
          }
          db.ref("RegisteredUsers/"+uid).set(logg)
          window.location="login.html"

        }})}})}