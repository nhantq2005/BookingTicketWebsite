class accountInfo{
    constructor(firstName,lastName,yearBorn,phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.yearBorn = yearBorn
        this.phoneNumber = phoneNumber
    }
}

class ticketInfo{
    constructor(price,seat,timeStart,timeEnd) {
        this.price = price
        this.seat = seat
        this.timeStart = timeStart
        this.timeEnd = timeEnd
    }
}
// Tạo dữ liệu vé
let B1 = new ticketInfo('320.000',"Giường nằm")
let B2 = new ticketInfo('200.000',"Ghế")
let B3 = new ticketInfo('175.000',"Ghế")
let B4 = new ticketInfo('350.000',"Giường nằm")
let B5 = new ticketInfo('190.000',"Ghế")
let B6 = new ticketInfo('310.000',"Giường nằm")
let B7 = new ticketInfo('290.000',"Giường nằm")
var ticketList = [B1,B2,B3,B4,B5,B6,B7]
function appendHTML() {
    //Lấy ID của ul danh sách vé
    var tickets = document.getElementById('tickets');
    //Xóa tất cả các ticket lần tìm trước
    tickets.innerHTML=''
    //Lấy điểm đi và điểm đến
    var startPlace = document.getElementById('start').value
    var destinationPlace = document.getElementById('destination').value

    for(let i =0;i<ticketList.length;i++){
        var div = document.createElement('li');
        div.innerHTML = `
        <div class="ticket">
            <h3>Dien Linh Limousine</h3>
            <p>Limousine</p>
            <div class="flex ticketInfor">
                <div>
                    <h3>11:30</h3>
                    <p>${startPlace}</p>
                </div>
                <i class="fa fa-long-arrow-right"></i>
                <div>
                    <h3>11:30</h3>
                    <p>${destinationPlace}</p>
                </div>
                <h2>7 giờ 5 phút</h2>
                <div>
                    <p class="price">${ticketList[i].price} VNĐ<span>/Khách</span></p>
                    <button class="bookingButton">Mua Ngay</button>
                </div>
            </div>
        </div>`;
        tickets.append(div)
    }
}
function getter(){
    var start = document.getElementById('dateStart').value;
    if(start===null)
        alert('NULL')
}