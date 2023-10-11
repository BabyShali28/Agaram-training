 function call(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:"",
        success:function (add){
            console.log(add)
            let hdata=""
            for (i=0;i<add.length;i++){
                console.log(add[i])

                
                hdata=hdata+ `<tr>
                            <td>${add[i].userId}</td>
                            <td>${add[i].id}</td>
                            <td><button type="button" onclick="display('${add[i].id}')">${add[i].title}</td>
                            <td>${add[i].body}</td>
                            </tr>`
        }
        document.getElementById("dis").innerHTML=hdata
        },
            error:function (err){
            console.log(err)
            }

        })}


function display(id){
    $.ajax({
        type:"get",
        url:`https://jsonplaceholder.typicode.com/posts/${id}`,
        
        data:"",
        success:function (add){
            console.log(add)
        },
        error:function (err){
            console.log(err)
            }
        })
    }

function add1(){
    $.ajax({
        type:"post",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{
            body: "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt",
            title: "id minus libero illum nam ad officiis",
            userId: 10
        },
        success:function (add){
        },
        error:function (err){
            console.log(err)
            }
    })
}




 