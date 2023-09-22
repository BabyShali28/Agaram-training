function loginCheck() {
    let login_gmail = document.getElementById("gmail").value
    let login_password = document.getElementById("password").value
    
    let list1 = JSON.parse(localStorage.getItem("list"))
    console.log(list1)
    for (i = 0; i <= list1.length; i++) {
        console.log(list1[i].name)
        if (list1[i].email == login_gmail && list1[i].password == login_password) {
            alert("login successfully")
            
            
            localStorage.setItem("logged_in", true)
            localStorage.setItem("logged_name", list1[i].name)
            window.location="home.html";
            
            
            // document.getElementById("home").style.display = "block"
            // document.getElementById("login").style.display = "none"
            // document.getElementById("register").style.display = "none"
            // document.getElementById("out").style.display="none"
            // document.getElementById("wel").innerHTML = `welcome ${list1[i].name}`
            // document.getElementById("wel").innerHTML=`${list1[i].name}`
            
            // tableadd()
            break;
        }

    }

}
function fro_login(){
    window.location="login.html"
    
}
function fro_register(){
    window.location="register.html"
}
// function outerlogin(){
// document.getElementById("login").style.display="block" 
//     document.getElementById("home").style.display="none"
//     document.getElementById("register").style.display="none"
//     document.getElementById("out").style.display="none"
// }
// function outerreg(){
//     document.getElementById("login").style.display="none" 
//     document.getElementById("home").style.display="none"
//     document.getElementById("register").style.display="block"
//     document.getElementById("out").style.display="none"
// }
function logout() {
    localStorage.removeItem("logged_in")
    window.location="login.html"
    // document.getElementById("home").style.display = "none"
    // document.getElementById("login").style.display = "block"
    // document.getElementById("register").style.display = "block"


}


function oldlogin() {
    if (localStorage.getItem("logged_in")) {
        // window.location="home.html"
        // document.getElementById("home").style.display = "block"
        // document.getElementById("login").style.display = "none"
        document.getElementById("wel").innerHTML = localStorage.getItem("logged_name")
        tableadd()
    }
}

function registration() {

    let reg_name = document.getElementById("name").value
    let reg_password = document.getElementById("password1").value
    let reg_mail = document.getElementById("gmail1").value

    // let localdata=localStorage.getItem("list")
    // let parselocaldata=JSON.parse(localdata)
    let parseData = [];
    if (localStorage.getItem("list")) {
        parseData = JSON.parse(localStorage.getItem("list"));
    }
    parseData.push({
        email: reg_mail,
        password: reg_password,
        name: reg_name
    })
    localStorage.setItem("list", JSON.stringify(parseData))
    // document.getElementById("home").style.display="block"
    window.location="login.html"
}




function tableadd() {
    parseData = JSON.parse(localStorage.getItem("list"));
    let htmldata = "";
    for (i = 0; i < parseData.length; i++) {
        htmldata = htmldata + `<tr>
                            <td> ${parseData[i].name} </td>
                            <td> ${parseData[i].email} </td>
                            <td><button onclick="update('${parseData[i].email}')">&#9998</button></td>
                            <td><button onclick="del('${parseData[i].email}')">&#128465</button></td>
                            </tr>`
    }
    document.getElementById("list_table_body").innerHTML = htmldata
    localStorage.setItem("list", JSON.stringify(parseData))
    // window.location="home.html"
    // document.getElementById("home").style.display = "block"
    // document.getElementById("login").style.display = "block"
    // document.getElementById("register").style.display = "none"

}

function del(del_email) {
    // alert(del_email)
    userslist = JSON.parse(localStorage.getItem("list"))
    let newlist = []
    for (let i = 0; i < userslist.length; i++) {
        if (del_email != userslist[i].email) {
            newlist.push(userslist[i])

        }
    }
    localStorage.setItem("list", JSON.stringify(newlist))
    tableadd()
}

function update(up_mail) {
    alert(up_mail)
    let lists = JSON.parse(localStorage.getItem("list"))
    for (i = 0; i < lists.length; i++) {
        if (up_mail == lists[i].email) {
            console.log(i)
            let up_mail1 = lists[i].email
            let up_password1 = lists[i].password
            let up_name1 = lists[i].name
            console.log(up_mail1)
            console.log(up_password1)
            console.log(up_name1)
            let up_mail2 = prompt("enter the updated mail id", up_mail1.innerHTML)
            let up_password2 = prompt("enter the updated password", up_password1.innerHTML)
            let up_name2 = prompt("enter the updated name", up_name1.innerHTML)
            up_mail1.innerHTML = up_mail2
            up_password1.innerHTML = up_password2
            up_name1.innerHTML = up_name2
            let lists1 = []
            if (localStorage.getItem("list")) {
                lists1 = JSON.parse(localStorage.getItem("list"))

            }
            lists1.push({
                email: up_mail2,
                password: up_password2,
                name: up_name2
            })
            localStorage.setItem("list", JSON.stringify(lists1))
            del(up_mail)
        }
    }
}

function secure(){
        
        if (!localStorage.getItem("logged_in")) {
            // console.log(logged_in)
                window.location="login.html"
                
        }
            // window.location="login.html"

            
}
