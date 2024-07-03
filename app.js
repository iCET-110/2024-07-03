// fetch("https://restcountries.com/v3.1/all")
// .then(res=>res.json())
// .then(data=>{
//     let tblCountries=document.getElementById("tbl");

//     let tblBody=`<tr>
//                     <th>Name</th>
//                     <th>Flag</th>
//                 </tr>`;

//     data.forEach(element => {
//         tblBody+=`<tr>
//                     <td>${element.name.common}</td>
//                     <td>${element.flag}</td>
//                 </tr>`
//     });

//     tblCountries.innerHTML=tblBody;
// })



// // https://restcountries.com/v3.1/name/{name}


// function serchCountry(){
//     let searchValue=document.getElementById("txtSearchValue").value;

//     let officialName = document.getElementById("officialName");
//    let name = document.getElementById("name")
//    let img =  document.getElementById("img")


//     console.log(searchValue);
//     fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
//     .then(res=>res.json())
//     .then(data =>{

//         data.forEach(obj=>{
//             officialName.innerText = obj.name.official;
//             name.innerText = obj.name.common;
     
//             img.innerHTML=`<img src="${obj.flags.png}" alt="">`
//         })
//         console.log(data);
    
//     })
// }


// setTimeout(() => {
// console.log("1");
// console.log("2");
// console.log("3");
// }, 1000);

// fetch(`https://restcountries.com/v3.1/all`)
// .then(res=>{
//     console.log("1");
//     console.log("2");
//     console.log("3");
// })



// console.log("mahava");
// console.log("mahava");
// console.log("mahava");
// console.log("mahava");
// console.log("mahava");
// console.log("mahava");


// class Customer{
//     name;
//     age;
//     address;
//     constructor(){

//     }

//     setName(name){
//         this.name=name;
//         return this;
//     }

//     setAge(age){
//         this.age=age;
//         return this;
        
//     }

//     setAddress(address){
//         this.address=address;
//         return this;
//     }
// }


// let customer1=new Customer();

// let saman = customer1.setName("saman").setAddress("gampaha").setAge(12);

// console.log(saman);


// setTimeout(() => {
//     console.log("Lesthi wenawa!");
//     setTimeout(() => {
//         console.log("salli Illagannawa!");
//         setTimeout(() => {
//             console.log("badu List Eka hadanawa !");
//             setTimeout(() => {
//                console.log("Kadeta Yanawa !");
//                setTimeout(() => {
//                 console.log("polime idala badu tika gannawa !");
//                 setTimeout(() => {
//                     console.log("Badu tika aragena gedara enawa !");
//                     setTimeout(() => {
//                         console.log("badu tika ammata denawa !");
//                     }, 1000);
//                 }, 3000);
//                }, 2000); 
//             }, 2000);
//         }, 3000);
//     }, 1000);
// }, 2000);


document.getElementById("btnCalc").addEventListener("click",sum)

function sum(num1,num2,displayTotalFunction){
   let sum= num1+num2;

   displayTotalFunction(sum);

   console.log(sum);


}

sum(10,20,(sum)=>{
    document.getElementById("lblTotal").innerText=sum;
});










