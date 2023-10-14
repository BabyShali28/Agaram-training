function registration() {
    $.ajax({
        type: "POST",
        url: " http://agaram.academy/api/action.php",

        data: {
            "request": "create_candidate",
            "name": $("#name").val(),
            "email": $("#gmail").val(),
            "password": $("#password").val(),
            "aadhar": $("#aadhar").val(),
            "address": $("#address").val(),
            "phone": $("#phn").val(),
            "city": $("#city").val(),
            "area": $("#area").val(),
            "pin": $("#pin").val()
        },
        success: function (add) {
            console.log(add)
            // console.log(name)
            // disget()
            window.location="list.html"
        },
        error: function (err) {
            console.log(err)
        }
        
    })
}

function disget() {
    $.ajax({
        type: "GET",
        url: " http://agaram.academy/api/action.php",

        data: {
            "request": "getAllMembers"
        },
        success: function (add) {
            console.log(add)

            let datas=JSON.parse(add)
            console.log(datas)
            let htmld = ""
for (i = 0; i < datas.data.length; i++) {
    htmld = htmld + `<tr>
        <td>${datas.data[i].id} </td>
        <td>${datas.data[i].name}</td>
        <td>${datas.data[i].email}</td>
        <td>${datas.data[i].aadhar}</td>
        <td>${datas.data[i].address}</td>
        <td>${datas.data[i].phone}</td>
        <td>${datas.data[i].city}</td>
        <td>${datas.data[i].area}</td>
        <td>${datas.data[i].pin}</td>
        
        </tr>`
}
document.getElementById("tab").innerHTML = htmld

        },
        error: function (err) {
            console.log(err)
        }
    })
}


function login() {
    $.ajax({
        type: "POST",
        url: " http://agaram.academy/api/action.php",

        data: {
            "request": "candidate_login",
            "email": $("#gmail1").val(),
            "password":$("#password1").val()
        },
        success: function (add) {
            console.log(add)
        },
        error: function (err) {
            console.log(err)
        }
    })
}



// datas = JSON.parse(add)
// console.log(datas)
// let htmld = ""
// for (i = 0; i < datas.data.length; i++) {
//     htmld = htmld + `<tr>
//         <td>${datas.data[i].id} </td>
//         <td>${datas.data[i].user}</td>
//         <td><button type="button" onclick="remove('${datas.data[i].id}')"> delete</button></td>
//         <td><a href="page.html?id=${datas.data[i].id}">link</a></td>
//         </tr>`
// }
// document.getElementById("show").innerHTML = htmld