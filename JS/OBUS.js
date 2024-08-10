class accountInfo{
    constructor(firstName,lastName,yearBorn,phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.yearBorn = yearBorn
        this.phoneNumber = phoneNumber
    }
}

class ticketInfo{
    constructor(price,seat) {
        this.price = price
        this.seat = seat
    }
}
// Tạo dữ liệu vé
let B1 = new ticketInfo(200000,"Ghế")
let B2 = new ticketInfo(175000,"Ghế")
let B3 = new ticketInfo(190000,"Ghế")
let B4 = new ticketInfo(310000,"Giường nằm")
let B6 = new ticketInfo(350000,"Giường nằm")
let B5 = new ticketInfo(290000,"Giường nằm")
// var ticketList = []

window.onload = function(){

 
}

function getter(){
    var start = document.getElementById('dateStart').value;
    alert(start)
}