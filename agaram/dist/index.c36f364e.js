// const getname=(a)=>{
//     let message=a
//     return message
// }
// let msg=getname("agaram")
// console.log(msg)
const details = {};
let temp = {};
let test = (e, per_data)=>{
    if (per_data) {
        if (details[per_data]) details[per_data] = {
            ...details[per_data]
        };
        else details[per_data] = {};
        details[per_data][e.name] = e.value;
    } else details[e.name] = e.value;
    display();
};
let display = ()=>{
    // $("#fin").prop("disabled",false)
    document.getElementById("display").innerHTML = JSON.stringify(details, undefined, 2);
    disablee();
};
let multiple_data = (p_key, e_id, dis)=>{
    if (!details[p_key]) details[p_key] = [];
    if (e_id) {
        let var_name = document.getElementById(e_id).value;
        // console.log(var_name)
        if (var_name == "") alert("invalid");
        else details[p_key].push(document.getElementById(e_id).value);
        set = details[p_key];
        skill_display(set, p_key, dis);
        document.getElementById(e_id).value = "";
    } else {
        details[p_key].push(temp);
        console.log(details[p_key]);
        edu_Dis(details[p_key], p_key);
        let keys = Object.keys(temp);
        console.log(keys);
        for(i = 0; i < keys.length; i++){
            let each = keys[i];
            // console.log(each)
            document.getElementById(each).value = "";
        }
        temp = {};
    }
    display();
};
let skill_display = (skill, p_key, dis1)=>{
    // console.log(skill)
    let htmldata = "";
    // console.log(skill)
    let a = skill;
    console.log(a);
    for (let s of a)// console.log(skill[i])
    htmldata = htmldata + `<span class="btn btn-primary">
        ${[
        s
    ]}
        
        <span type="button" onclick="dlt('${p_key}','${[
        s
    ]}','${dis1}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg>
        </span>
        </span>`;
    document.getElementById(dis1).innerHTML = htmldata;
};
// let dlt=(p_id, del_skill,diss) =>{
//     let lists = details[p_id]
//     console.log(lists)
//     let newlist = []
//     let b=lists
//     for (let l of b) {
//         if (del_skill != l) {
//             newlist.push(l)
//         }
//     }
//     details[p_id] = newlist;
//     skill_display(details[p_id] ,p_id,diss)
//     display()
// }
let dlt = (p_id, del_skill, diss)=>{
    let lists = details[p_id];
    // let newlist = []
    let newlist = lists.filter((s)=>s != del_skill);
    details[p_id] = newlist;
    skill_display(details[p_id], p_id, diss);
    display();
};
let mularrayhandle = (ele)=>{
    temp[ele.name] = ele.value;
// console.log(temp)
};
let edu_Dis = (set1, p_key)=>{
    let htmld = "";
    // console.log(p_key)
    for(var i1 = 0; i1 < set1.length; i1++){
        let htm = "";
        for(var x in set1[i1])// console.log(x)
        // console.log(set[i]) 
        htm = htm + `<td>${set1[i1][x]}</td>`;
        htmld = htmld + `<tr>` + htm + `<td><button type=button onclick="eduDel('${i1}','${p_key}')">Delete</button></td>` + `</tr>`;
    }
    document.getElementById(p_key).innerHTML = htmld;
};
// let eduDel=(ind,p_id)=>{
//     console.log(p_id)
//     let edu=details[p_id]
//     // console.log(edu)
//     let ne=[]
//     for (i=0;i<edu.length;i++){
//         if(i!=ind){
//         ne.push(edu[i])
//         }
//     }
//     details[p_id]=ne
//     console.log(details[p_id])
//     edu_Dis(details[p_id],p_id)
//     display()
// }
let eduDel = (ind, p_id)=>{
    // console.log(p_id)
    let edu = details[p_id];
    // console.log(edu)
    // let ne=[]
    let ne = edu.filter((s)=>// console.log(ind)
        // s!=ind
        s != edu[ind]);
    console.log(edu[ind]);
    //  for(let ed of s){
    // if(i!=ind){
    //     return s;
    // }
    //   console.log(ed)  
    // console.log(s)
    details[p_id] = ne;
    // console.log(details[p_id])
    edu_Dis(details[p_id], p_id);
    display();
};
let final = ()=>{
    $.ajax({
        type: "POST",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "create_resume",
            user: "shali",
            resume: details
        },
        success: function(add) {
            console.log(add);
            window.location = "show.html";
        },
        error: function(err) {
            console.log(err);
        }
    });
};
let displayresDetails = ()=>{
    $.ajax({
        type: "GET",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "get_user_resume",
            user: "shali"
        },
        success: function(add) {
            // console.log(add)
            datas = JSON.parse(add);
            console.log(datas);
            let htmld = "";
            let htmltemp = "";
            for(i = 0; i < datas.data.length; i++)htmld = htmld + `<tr>
                    <td>${datas.data[i].id} </td>
                    <td>${datas.data[i].user}</td>
                    <td><button type="button" onclick="remove('${datas.data[i].id}')"> delete</button></td>
                    <td><a href="res.html?id=${datas.data[i].id}">link</a></td>
                    <td><a href="page.html?id=${datas.data[i].id}">link</a></td>

                    </tr>`;
            htmltemp;
            document.getElementById("show").innerHTML = htmld;
            document.getElementById("temp1").innerHTML = htmltemp;
        },
        error: function(err) {
            console.log(err);
        }
    });
};
let remove = (ele)=>{
    // alert(ele)
    $.ajax({
        type: "GET",
        url: "http://agaram.academy/api/action.php/",
        data: {
            request: "delete_user_resume",
            user: "shali",
            id: ele
        },
        success: function(add) {
            console.log(add);
            displayresDetails();
        },
        error: function(err) {
            console.log(err);
        }
    });
};
let getEBYid = (id1)=>{
    // alert("ss")
    console.log(id1);
    $.ajax({
        type: "GET",
        url: "http://agaram.academy/api/action.php/",
        data: {
            request: "get_resume_by_id",
            user: "shali",
            id: id1
        },
        success: function(add) {
            let datas1 = JSON.parse(add);
            console.log(datas1);
            let datas11 = JSON.parse(datas1.data.data);
            console.log(datas11);
            // console.log(datas1.name)
            $("#name").html(datas11.name);
            $("#obj").html(datas11.objective);
            $("#mid").html(datas11.email);
            $("#addr").html(datas11.address);
            $("#phn").html(datas11.mobile_no);
            $("#para").html(datas11.extra);
            $("#birth").html(datas11.dob);
            let personal = datas11.personal_details;
            // console.log(personal)
            $("#fath").html(personal.father_name);
            // ..........skill..........
            let skillget = datas11.skills;
            let htmlsk = "";
            for(i = 0; i < skillget.length; i++){
                // console.log(skill[i])
                htmlsk = htmlsk + `<li style="margin-bottom:1%;" >${skillget[i]}
                </li>`;
                console.log(htmlsk);
            }
            document.getElementById("sskil").innerHTML = htmlsk;
            //............langu..............
            let languget = datas11.Languages;
            console.log(languget);
            let htmllan = "";
            for(i = 0; i < languget.length; i++){
                // console.log(skill[i])
                htmllan = htmllan + `<li>${languget[i]}
                        </li>`;
                console.log(htmllan);
            }
            document.getElementById("lang").innerHTML = htmllan;
            // .........new Educational......
            let edu = datas11.Educational;
            console.log(edu);
            let html1 = "";
            for(i = 0; i < edu.length; i++){
                console.log(edu[i].inst_name);
                html1 = html1 + `<ul>
                            <li><h4>${edu[i].level}<h4></li>
                            <p>${edu[i].inst_name}</p>
                            <p>(${edu[i].year})</p>
                            <p>${edu[i].percentage}</p>
                            
                         </ul>`;
            }
            document.getElementById("educat").innerHTML = html1;
            // .........old Education......
            // let edu = datas1.Educational
            // console.log(edu)
            // let html1 = ""
            // for (i = 0; i < edu.length; i++) {
            //     console.log(edu[i].inst_name)
            //     html1 = html1 + `<tr>
            //                 <td>${edu[i].inst_name}</td>
            //                 <td>${edu[i].level}</td>
            //                 <td>${edu[i].year}</td>
            //                 <td>${edu[i].percentage}</td>
            //              </tr>`
            // }
            // document.getElementById("educat").innerHTML = html1
            // .......old project.................
            // proj=datas1.projects
            // console.log(proj)
            // let proTab=""
            // for (i = 0; i<proj.length; i++) {
            //     proTab = proTab + `<tr>
            //                     <td>${proj[i].title}</td>
            //                     <td>${proj[i].desc}</td>
            //                     <td>${proj[i].yr}</td>
            //                  </tr>`
            // }
            // document.getElementById("proj").innerHTML = proTab
            // .................new project..............
            proj = datas11.projects;
            console.log(proj);
            let proTab = "";
            for(i = 0; i < proj.length; i++)proTab = proTab + `<ul>
                    <li><h4>${proj[i].title}</h4></li>
                    <p>${proj[i].desc}</p>
                    <p>${proj[i].yr}</p>
                 </ul>`;
            document.getElementById("proj").innerHTML = proTab;
        },
        error: function(err) {
            console.log(err);
        }
    });
};
let download = ()=>{
    alert("ok");
    const page = document.getElementById("total");
    var opt = {
        margin: 1,
        filename: "Demopdf.pdf",
        image: {
            type: "jpeg",
            quality: 0.98
        },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: "in",
            format: "letter",
            orientation: "portrait"
        }
    };
    // Choose the element that our invoice is rendered in.
    html2pdf().set(opt).from(page).save();
};
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1), sURLVariables = sPageURL.split("&"), sParameterName, i1;
    for(i1 = 0; i1 < sURLVariables.length; i1++){
        sParameterName = sURLVariables[i1].split("=");
        if (sParameterName[0] === sParam) return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    return false;
};
let disablee = ()=>{
    // $("#fin").prop(disable,false)
    if (name, email, address, mobile_no, objective, father_name, mother_name, dob, skills, Languages, Educational, projects) {
        console.log(email);
        $("#fin").prop(disable, false);
    }
} // let test = details.map((s)=>{
 //     details[s.name] = s.value
 //     // return s
 //     console.log(s.name)
 // })
 // console.log(test)
 // student=[
 //     {name:"shali",
 //     mark:69},
 //     {name:"bhuv",
 //     mark:9},
 //     {name:"baw",
 //     mark:39},
 //     {name:"cat",
 //     mark:97}
 // ]
 // const mapp=student.map((s)=>{
 //     if (s.mark>50){
 //         return s;
 //     }
 // })
 // console.log(mapp)
 // const filtervalue=student.filter((s)=>
 //     (s.mark>50)
 // )
 // console.log(filtervalue)
;

//# sourceMappingURL=index.c36f364e.js.map
