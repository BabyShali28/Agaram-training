let details={

}
let temp={}
function test(e,per_data){
    // details[e.name]=e.value
    // console.log(e.value)
    // console.log(details)
    if (per_data){
        if(details[per_data]){
            details[per_data]={...details[per_data]}
        }
        else{
            details[per_data]={}
            
        }
    details[per_data][e.name]=e.value
    }
    else{
        details[e.name]=e.value
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
function multiple_data(p_key,e_id){
    if(!details[p_key])
    {
        details[p_key]=[]
    }
    let var_name=document.getElementById(e_id).value
    console.log(var_name)
    if(var_name!=""){
        
    
    details[p_key].push(document.getElementById(e_id).value)}

    
    skill_display(details[p_key])
    // console.log(data)
    document.getElementById(e_id).value=""
    display()
}

function display(){
    document.getElementById("display").innerHTML=JSON.stringify(details,undefined,2)
}


function skill_display(skill){
    // console.log(skill)
    let htmldata=""
    for(i=0;i<skill.length;i++){
        // console.log(skill[i])
        htmldata=htmldata  +  `<span class="btn btn-primary">
        ${skill[i]}
        
        <span type="button" onclick="dlt('skills','${skill[i]}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg>
        </span>
        </span>`
       
 }
document.getElementById("list").innerHTML=htmldata
}

function dlt(p_id,del_skill){
    // alert(p_id)
    
    let list=details[p_id]
    // console.log(list)
    let newlist=[]
    for (let i=0;i<list.length;i++){
        if (del_skill!=list[i]){
            newlist.push(list[i])
        }
    
    }
    details[p_id] = newlist;
    skill_display(details[p_id])  
    display()
    // console.log(newlist)
    // details[p_node].push(newlist)
}

 function mularrayhandle(ele)
{
    temp[ele.name]=ele.value;
    console.log(temp)
}
function mularrayhandle1(p_key){
    if(!details[p_key]){
        details[p_key]=[]
    }
    details[p_key].push(temp)
    display()
}