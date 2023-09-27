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


document.getElementById("loginform").addEventListener("submit",loginform)

 function loginform(e){
    e.preventDefault();

    var email=document.getElementById("gmail").value;
    var emailpassword=document.getElementById("password").value;

  
    dataRef.once("value").then(function(snapshot){
        var datain=snapshot.val();
        console.log(datain)
        
        if(datain){
          var isuser=false;
          for(i=0;i<datain.length;i++){

              if ((datain[i].Email==email) && (datain[i].Password==emailpassword))
              {
                  alert("login successfully")
                  isuser=true
                  localStorage.setItem("logged_in",true)
                  localStorage.setItem("logged_name",datain[i].Name)
                  
                  window.location="home.html";
                  // document.getElementById("wel").innerHTML = `welcome ${datain[i].Name}`
                  
                //   tableadd()
                  break;
              }
              
              // else{
              //     alert("Please Register First");                
              // }
          }
          if (isuser==false){
            alert("Please Register First")
            window.location="register.html"
          }
      }


  })
}
    