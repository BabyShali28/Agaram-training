list=["a","b","c"]
    // console.log(typeof(list))
localStorage.setItem("list1",JSON.stringify(list))
// localStorage.setItem("alpha","")
 let list2=JSON.parse(localStorage.getItem("list1"))
    console.log(list2)
    