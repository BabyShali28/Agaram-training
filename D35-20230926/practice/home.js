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

  

    
    

    function tableadd() {
    dataRef.once("value").then(function(snapshot){
        var datain=snapshot.val();
        // console.log(datain)
        let htmldata = "";
        for (i = 0; i < datain.length; i++) {
            console.log(datain[i])
            htmldata = htmldata + `<tr>
                                <td> ${datain[i].Name} </td>
                                <td> ${datain[i].Email} </td>
                                <td><button onclick="update('${datain[i].Email}')">&#9998</button></td>
                                <td><button onclick="del('${datain[i].Email}')">&#128465</button></td>
                                </tr>`
        }
        // console.log(datain[i].Name)
        document.getElementById("list_table_body").innerHTML = htmldata
        

        
    })
    }
    function oldlogin() {
      dataRef.once("value").then(function(snapshot){
        var datain=snapshot.val();
      if (localStorage.getItem("logged_in")) {
          
          document.getElementById("wel").innerHTML = localStorage.getItem("logged_name")
          // document.getElementById("wel").innerHTML = localStorage.getItem(`welcome ${logged_name}`)
          tableadd()
      }})
    }


    function update(up_mail) {
      // alert(up_mail)
      dataRef.once("value").then(function(snapshot){
        var datain=snapshot.val();
      for (i = 0; i < datain.length; i++) {
          if (up_mail == datain[i].Email) {
              console.log(i)
              let up_mail1 = datain[i].Email
              let up_password1 = datain[i].Password
              let up_name1 = datain[i].Name
              console.log(up_mail1)
              console.log(up_password1)
              console.log(up_name1)
              let up_mail2 = prompt("enter the updated mail id", up_mail1.innerHTML)
              let up_password2 = prompt("enter the updated password", up_password1.innerHTML)
              let up_name2 = prompt("enter the updated name", up_name1.innerHTML)
              up_mail1.innerHTML = up_mail2
              up_password1.innerHTML = up_password2
              up_name1.innerHTML = up_name2

              let lists1 = {
                Email: up_mail2,
                Password: up_password2,
                Name: up_name2
              }
                dataRef.once("value").then(function(snapshot){
                  var datain=snapshot.val();
              if (datain) {
                    datain.push(lists1);
                    dataRef.set(datain);
                
  
              }
              else{
                db.ref(`registeredUsers/${0}`).set(datain);

              }
             
              del(up_mail)
            })
          }
      }
    
    })
  }



  function del(del_email) {
    // alert(del_email)
    dataRef.once("value").then(function(snapshot){
    var datain=snapshot.val();
    let newlist = []
    for (let i = 0; i < datain.length; i++) {
        if (del_email != datain[i].Email) {
            newlist.push(datain[i])

        }
    }
    dataRef.set(newlist)
    tableadd()
  })
}


function logout() {
  localStorage.removeItem("logged_in")
  window.location="login.html"
}

function secure(){
        
  if (!localStorage.getItem("logged_in")) {
      
          window.location="login.html"
          
  }
      

      
}
