const firebaseConfig = {
    apiKey: "AIzaSyBYP0Bg0gJIisidwxvbRjlpOk2UsRP8TaM",
    authDomain: "login-form-a384d.firebaseapp.com",
    databaseURL: "https://login-form-a384d-default-rtdb.firebaseio.com",
    projectId: "login-form-a384d",
    storageBucket: "login-form-a384d.appspot.com",
    messagingSenderId: "267131233290",
    appId: "1:267131233290:web:dafd42dc1cd43a3fd2abf3"
  };
  
    
   
    
    // initialize firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database();

  var dataRef = db.ref("registeredUsers");

    // firebase.database().ref("Form")

    // firebase.database().ref("/").set({
    //     name:"shali"   });
    
    document.getElementById("register").addEventListener("submit",RegisterForm)

    function RegisterForm(e){
        e.preventDefault();

        var name=document.getElementById("name").value;
        var email=document.getElementById("gmail1").value;
        var password=document.getElementById("password1").value;
        // console.log(name,email,password)
        let datas={
            Name:name,
            Email:email,
            Password:password,

        }
    
        // let data=firebase.database().ref("/registedusers")
        dataRef.once("value").then(function(snapshot){
        var datain=snapshot.val();
        // console.log(datain)
        if(datain){
            datain.push(datas);
            db.ref('registeredUsers').set(datain);
        }
        else{
            db.ref(`registeredUsers/${0}`).set(datas);
        }
    })
}


