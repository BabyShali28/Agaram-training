// a=4
// console.log(typeof(a))
// f="agaram"
// console.log(typeof(f))
// r=0.467
// console.log(typeof(r))
// d=true 
// console.log(typeof(d))
// array=[3,6,8,9]
// console.log(typeof(array))
// print(d)


var resume={name:"shali",
           email:"shalibaby15@gmail.com",
           mobileno:9994049863,
           objective:"i am a hardworking person and self motivated graduate",
           soft_skills:["python","java","c","mysql"],
           hard_skills:["time management","team work","leadership"],
edu_quali:[{level:"10th" ,percentage:94,year:2017,
              institute_name:"st'michaels high school",place:"kodimunai"},
             {level:"12 th",percentage:74,year:2019,
              institute_name:"babuji memorial school",place:"manavalakurichi"},
             {level:"BE",percentage:90,year:2023,
              institute_name:"st'xaviers catholic college",place:"chunkankadai"}],
projects:[{tittle:"expense tracking syatem",year:2022,technology:"javascript"},
            {tittle:"pregnent women monitoring system",year:2022,technology:"iot"}],
experience:[{company_name:"tcs",experience:1.4,role:"junior developer"},
              {company_name:"hexaware",experience:2.3,role:"senior developer"}],
hobbies:["dancing","reading books","travelling"],
personal_details:{father_name:"antony",
                    occupation:"fisherman",
                    languages_known:["tamil","english"],
                    dob:"28-01-2002",
                    gender:"female",
                    maritial_status:"unmarried",
                    address:{"door no":"13/8E13","street name":"kodimunai",
                    village_name:"colachel"}}}



// resume.experience[0].role="senior_developer"
// console.log(resume)
    // console.log(resume.email)
// resume.hard_skills.push("manage")
// for(i=0;i<resume.edu_quali.length;i++){
//     resume.edu_quali[i].achievement="excellent"
//     console.log(resume.edu_quali[i].achievement)
// }
    
// resume.edu_quali[0].gender="female"
//     console.log(resume.edu_quali[0].gender)
    // console.log(resume.edu_quali[0].level)
// resume.personal_details.city="kodimunai"
//     console.log(resume.personal_details)



let a=["sunday","monday","tuesday"]

// // console.log(a[2])
// // console.log(a.length)
// // console.log(a[a.length-1])
// a.push("friday")
// console.log(a)
// // a[1]="wednesday"
// // console.log(a)
// // a.pop(a[2])
// // console.log(a)
// // var b={
// //     name:"shali",
// //     age:21,
// //     place:"kodimunai"
// // }
// // console.log(b.age)
// // b.name="shalu"
// // console.log(b)
// // b.gender="female"
// // console.log(b)
// // let a=["sunday","monday","tuesday","wednesday"]
// a=56
//     function getname(b){
//     	console.log(b)
//     }
//     getname(a)
// a=3
// b=2
//     function add(c,d){
//     	console.log(c+d)}
//     add(a,b)
// for(i=0;i<5;i++){
//     console.log(i)
// }
// for (i=0;i>-10;i--){
//     console.log(i)
// }
a=["monday","tuesday","wednesday"]

// for(i=1;i<a.length;i++){
//     console.log(a[i])
// }

// a=[{level:"10th" ,percentage:94,year:2017,
//     institute_name:"st'michaels high school",place:"kodimunai"
//     },
//     {level:"12 th",percentage:74,year:2019,
//     institute_name:"babuji memorial school",place:"manavalakurichi"
//     },
//     {level:"BE",percentage:90,year:2023,
//     institute_name:"st'xaviers catholic college",place:"chunkankadai"
//     }]
// for (i=0;i<a.length;i++){
//     console.log(a[i].level)
// }

// function find_level(education){
//     for(i=0;i<education.length;i++){
    
//         console.log(i+1,education[i].level)

//     }
// }
// find_level(resume.edu_quali)



// function find_level(education){
//     for(i=education.length-1;i>=0;i--){
    
//         console.log(i,education[i].level)
//     }
// }
// find_level(resume.edu_quali)

// localStorage.setItem("name","agaram")
// // SessionStorage.setItem("name","agaram")
//     console.log(localStorage.getItem("name"))

// localStorage.setItem("name",true)
// m=localStorage.getItem("name")
//     console.log(typeof(m))
//     console.log(m)

var alpha=["a","b","c"]
var stringlist=JSON.stringify(alpha)
localStorage.setItem("alpha",stringlist)
    console.log(localStorage.getItem("alpha"))

    
var list_1=localStorage.getItem("alpha")
var clist=JSON.parse(list_1)
    console.log(clist[1])

