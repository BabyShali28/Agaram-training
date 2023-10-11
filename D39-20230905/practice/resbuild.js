let details = {

}
let temp = {}
function test(e, per_data) {
    // details[e.name]=e.value
    // console.log(e.value)
    // console.log(details)
    if (per_data) {
        if (details[per_data]) {
            details[per_data] = { ...details[per_data] }
        }
        else {
            details[per_data] = {}

        }
        details[per_data][e.name] = e.value
    }
    else {
        details[e.name] = e.value
    }
    display()
}

// #############............function add null value......
// function multiple_data(p_key,e_id){
//     if(!details[p_key])
//     {
//         details[p_key]=[]
//     }
//     details[p_key].push(document.getElementById(e_id).value)

//     skill_display(details[p_key])
//     // console.log(data)
//     document.getElementById(e_id).value=""
//     display()
// }

// ............function add null value......
function multiple_data(p_key, e_id,divv) {
    if (!details[p_key]) {
        details[p_key] = []
    }
    if (e_id) {
        let var_name = document.getElementById(e_id).value
        // console.log(var_name)
        if (var_name == "") {
            alart("invalid")
        }

        else {
            details[p_key].push(document.getElementById(e_id).value)
        }
        set = details[p_key]
        skill_display(set, p_key,divv)
        document.getElementById(e_id).value = ""

    }
    else {
        details[p_key].push(temp);
        let keys = Object.keys(temp)
        for (i = 0; i < keys.length; i++) {
            let each = keys[i];
            console.log(each)
            document.getElementById(each).value = "";
        }
        temp = {}
    }
    display()
}


function display() {
    document.getElementById("display").innerHTML = JSON.stringify(details, undefined, 2)
}


function skill_display(skill, p_key,id3) {
    // console.log(skill)
    let htmldata = ""
    for (i = 0; i < skill.length; i++) {
        // console.log(skill[i])
        htmldata = htmldata + `<span class="btn btn-primary">
        ${skill[i]}
        
        <span type="button" onclick="dlt('skills','${skill[i]}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg>
        </span>
        </span>`

    }
    document.getElementById(id3).innerHTML=htmldata
}

function dlt(p_id, del_skill) {
    // alert(p_id)

    let list = details[p_id]
    // console.log(list)
    let newlist = []
    for (let i = 0; i < list.length; i++) {
        if (del_skill != list[i]) {
            newlist.push(list[i])
        }

    }
    details[p_id] = newlist;
    skill_display(details[p_id],p_id,)
    display()
    // console.log(newlist)
    // details[p_node].push(newlist)
}

function mularrayhandle(ele) {
    temp[ele.name] = ele.value;
    console.log(temp)
}


// function mularrayhandle1(p_key){
//     if(!details[p_key]){
//         details[p_key]=[]
//     }
//     details[p_key].push(temp)
//     display()
// }

function final() {
    $.ajax({
        type: "POST",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "create_resume",
            user: "shali",
            resume: details
        },

        success: function (add) {
            console.log(add)

            window.location = "show.html"
            //         datas=JSON.parse(add)
            //         console.log(datas)
            // let htmld=""
            // for (i=0;i<datas.data.length;i++){
            // htmld=htmld+`<tr>
            //                 <td>${datas.data[id]}</td>
            //                 <td>${datas.data[user]}</td>
            //             </tr>`
            // }
            // document.getElementById("show").innerHTML=htmld
        },

        error: function (err) {
            console.log(err)
        }
    })

}

function displayresDetails() {
    $.ajax({
        type: "GET",
        url: "http://agaram.academy/api/action.php",
        data:
        {
            request: "get_user_resume",
            user: "shali",
        },

        success: function (add) {
            // console.log(add)
            datas = JSON.parse(add)
            console.log(datas)
            let htmld = ""
            for (i = 0; i < datas.data.length; i++) {
                htmld = htmld + `<tr>
                    <td>${datas.data[i].id} </td>
                    <td>${datas.data[i].user}</td>
                    <td><button type="button" onclick="remove('${datas.data[i].id}')"> delete</button></td>
                    <td><a href="page.html?id=${datas.data[i].id}">link</a></td>
                    </tr>`
            }
            document.getElementById("show").innerHTML = htmld
        },

        error: function (err) {
            console.log(err)
        }
    })
}



function remove(ele) {
    // alert(ele)
    $.ajax({

        type: "GET",
        url: "http://agaram.academy/api/action.php/",
        data: {

            request: "delete_user_resume",
            user: "shali",
            id: ele
        },

        success: function (add) {
            console.log(add)
            displayresDetails()
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function getEBYid(id1) {
    // alert("ss")
    console.log(id1)
    $.ajax({

        type: "GET",
        url: "http://agaram.academy/api/action.php/",
        data:
        {
            request: "get_resume_by_id",
            user: "shali",
            id: id1
        },

        success: function (add) {

            let datas = JSON.parse(add)
            console.log(datas)
            let datas1 = JSON.parse(datas.data.data)
            console.log(datas1)
            // console.log(datas1.name)
            $("#name").html(datas1.name)
            $("#obj").html(datas1.objective)
            $("#mid").html(datas1.emil)

            let personal = datas1.personal_details
            // console.log(personal)
            $("#father").html(personal.father_name)

            let skill = datas1.skills
            // console.log(skill)

            let html = ""
            for (i = 0; i < skill.length; i++) {
                // console.log(skill[i])
                html = html + `<li>${skill[i]}
                </li>`
                // console.log(html)

            }
            document.getElementById("sskil").innerHTML = html


            edu = datas1.Educational
            console.log(edu)
            let html1 = ""
            for (i = 0; i < edu.length; i++) {
                console.log(edu[i].inst_name)
                html1 = html1 + `<tr>
                            <td>${edu[i].inst_name}</td>
                            <td>${edu[i].level}</td>
                            <td>${edu[i].year}</td>
                            <td>${edu[i].percentage}</td>
                         </tr>`
            }

            document.getElementById("educat").innerHTML = html1
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function download() {
    alert('ok')
    const page = document.getElementById("total");
    var opt = {
        margin: 1,
        filename: 'Demopdf.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Choose the element that our invoice is rendered in.
    html2pdf().set(opt).from(page).save();
}
