let popUp = document.getElementById('popup')


function whenClicked(e){

    e.preventDefault();
    popUp.classList.add('popup-appear') 
}

 

function Close() {
    popUp.classList.remove('popup-appear')
}


















// let fName =document.getElementById('fname')
// let lName = document.getElementById('lname')
// let telNum = document.getElementById('tel-number')
// let sAddress = document.getElementById('address')
// let cityName = document.getElementById('city')
// let stateName = document.getElementById('state')
// let eMail = document.getElementById('email')
// let birthDate = document.getElementById('date')
// let form = document.getElementById('form')
// let erroMsg = document.getElementsByClassName('error')




// id for all ids in content
// err for errclass
// message will print a text in the errClass{errMsg}

// trim() for removing white space
// // function
// let data =(id)=>{

//     if(id.fName.value.trim() == null || id.fName.value.trim()==" " ){
//         erroMsg[0].innerHTML ="Enter your first name"
//         id.fName.style.border ="1px solid red"
//         return
//     }

//     if(id.lName.value.trim() == null || id.lName.value.trim()==" " ){
//         erroMsg[1].innerHTML= "Enter your last name"
//         id.lName.style.border ="1px solid red"
//         return
//     }
    
   
//     if(id.telNum.value.trim() == null||id.telNum.value.trim()==" " ){

 
//         erroMsg[2].innerHTML= "Enter your phone number"
//        id.telNum.style.border ="1px solid red"
//        return
//     }
  
//     if(id.sAddress.value.trim() == null || id.sAddress.value.trim()==" " ){
//         erroMsg[3].innerHTML = "Enter your street Address"
//         id.sAddress.style.border ="1px solid red"
//         return
//     }
    
//     if(id.cityName.value.trim() == null || id.cityName.value.trim()==" " ){
//         erroMsg[4].innerHTML = "Enter your city name"
//         id.cityName.style.border ="1px solid red"
//         return
//     }
   
  
//     if(id.stateName.value.trim() == null || id.stateName.value.trim()==" " ){
//         erroMsg[5].innerHTML ="Enter your city name"
//        id.stateName.style.border ="1px solid red"
//        return
//     }
    
//     if(id.eMail.value.trim() == null || id.eMail.value.trim()==" " ){
//         erroMsg[6].innerHTML = "Enter your email address"
//        id.eMail.style.border ="1px solid red"
//        return
//     }
   
   
//     if(id.birthDate.value.trim() == null ||id.birthDate.value.trim()==" " ){
//         erroMsg[7].innerHTML = "Enter your date of birth"
//        id.birthDate.style.border ="1px solid red"
//     }
    
//    else{

//    }
// }

// form.addEventListener("submit", (e)=>{


//     e.preventDefault();
//     data(fName)
// data(lName)
// data(telNum)
// data(sAddress)
// data(cityName)
// data(stateName)
// data(eMail)
// data(birthDate)
// })

