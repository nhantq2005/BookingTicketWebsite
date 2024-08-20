class accountInfo{
    constructor(firstName,lastName,yearBorn,phoneNumber,email){
        this.firstName = firstName
        this.lastName = lastName
        this.yearBorn = yearBorn
        this.phoneNumber = phoneNumber
        this.email = email
    }
}

class ticketInfo{
    constructor(busName,price,seat,timeStart,timeEnd,time) {
        this.busName = busName
        this.price = price
        this.seat = seat
        this.timeStart = timeStart
        this.timeEnd = timeEnd
        this.time = time
    }
}
// Tạo dữ liệu vé
let B1 = new ticketInfo('Toàn Thắng','320.000',"Giường nằm - Limousine 41 giường",'06:00','10:00','04 giờ 00 phút')
let B2 = new ticketInfo('Phương Trang','200.000',"Ghế - Limousine 16 ghế",'08:00','12:00','04 giờ 00 phút')
let B3 = new ticketInfo('Bến Thành','175.000',"Ghế - Limousine 36 ghế",'06:00','09:45','03 giờ 45 phút')
let B4 = new ticketInfo('Avigo','350.000',"Giường nằm - Limousine 41 giường",'14:00','18:00','04 giờ 00 phút')
let B5 = new ticketInfo('Toàn Thắng','190.000',"Ghế - Limousine 36 ghế",'04:30','08:00','03 giờ 30 phút')
let B6 = new ticketInfo('Huy Hoàng','310.000',"Giường nằm - Limousine 36 giường",'06:00','10:00','04 giờ 00 phút')
let B7 = new ticketInfo('Ba Châu','290.000',"Giường nằm- Limousine 36 giường",'14:00','18:00','04 giờ 00 phút')
let B8 = new ticketInfo('Bến Thành','290.000',"Giường nằm - Limousine 41 giường",'12:30','16:30','04 giờ 00 phút')
let B9 = new ticketInfo('Avigo','180.000',"Ghế - Limousine 36 ghế",'06:00','09:45','03 giờ 45 phút')


var ticketList = [B1,B2,B3,B4,B5,B6,B7,B8,B9]
var flag =true
// Index_Search
window.addEventListener('load',function(){
    let searchButton_main = document.querySelector('#searchButton_main')
    searchButton_main.onclick =function(){
        let startPlace = document.getElementById('start').value
        let destinationPlace = document.getElementById('destination').value
        let dateStart = document.getElementById('dateStart').value
        window.location='Category.html'

        // document.getElementById('start').setAttribute('value',startPlace)
        // document.getElementById('destination').setAttribute('value',destinationPlacePlace)
        // document.getElementById('dateStart').setAttribute('value',dateStart)
        // setInterval(function(){appendHTML()},3000);
        // appendHTML()
    }
})

// Category_Search
window.addEventListener('load',function(){
    if(flag===true){
        appendHTML()
    }
    let searchButton = document.querySelector('#searchButton')
    searchButton.onclick =function(){ appendHTML()}

})

// User Information
window.addEventListener('load',function(){
    let saveBtn=document.querySelector('#saveBtn')
    saveBtn.onclick = function(){
        saveInfo()}
})


function appendHTML() {
    //Lấy ID của ul danh sách vé
    let tickets = document.getElementById('tickets');
    //Xóa tất cả các ticket lần tìm trước
    tickets.innerHTML=''
    //Lấy giá trị
    let startPlace = document.getElementById('start').value
    let destinationPlace = document.getElementById('destination').value
    let dateStart = document.getElementById('dateStart').value

    // if(startPlace==='' || destinationPlace==='' || dateStart==='') {
    //     alert('Vui lòng nhập đây đủ thông tin!')
    // }
    // else if(startPlace===destinationPlace){
    //     alert('Điểm đi trùng điểm đến. Vui lòng chọn lại!')
    // }else {
        for(let i =0;i<ticketList.length;i++){
            var div = document.createElement(`li`);
            div.innerHTML = `
        <div class="ticket" onclick='clickTicket()'  rel='${i}'>
            <h3>${ticketList[i].busName}</h3>
            <p>${ticketList[i].seat}</p>
            <div class="flex ticketInfor">
                <div>
                    <h3>${ticketList[i].timeStart}</h3>
                    <p>${startPlace}</p>
                </div>
                <i class="fa fa-long-arrow-right"></i>
                <div>
                    <h3>${ticketList[i].timeEnd}</h3>
                    <p>${destinationPlace}</p>
                </div>
                <h2>${ticketList[i].time}</h2>
                <div>
                    <p class="price">${ticketList[i].price} VNĐ<span>/Khách</span></p>
                    <button class="bookingButton" onclick="">Mua Ngay</button>
                </div>
            </div>
        </div>`;
            tickets.append(div)
        }
    }
// }
function clickTicket(){
    let tickets = document.querySelectorAll('#tickets li>div.ticket')   
    for(let tick of tickets){
        tick.onclick = function(){
            let tickNum = this.getAttribute('rel')
            alert(tickNum)
        }
    }
    // Lấy chỉ số của vé trong mảng
    // alert('Đã click')
}

function saveInfo(){
    var user = new accountInfo()
    user.lastName = document.getElementById('lastName').value
    user.firstName = document.getElementById('firstName').value
    user.yearBorn = document.getElementById('year').value
    user.phoneNumber = document.getElementById('phoneNumber').value
    user.email = document.getElementById('email').value
    alert('Lưu thông tin thành công!')
}