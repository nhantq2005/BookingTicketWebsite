// Class lưu thông tin vé
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

// Class lưu thông tin vé đã mua
class Purchased{
    constructor(start, destination,num,position,name,phoneNumber){
        this.start=start
        this.destination=destination
        this.num=num
        this.position = position
        this.name = name
        this.phoneNumber = phoneNumber
    }
}

// Tạo dữ liệu vé
let B1 = new ticketInfo('Toàn Thắng',320000,"Giường nằm - Limousine 41 giường",'06:00','10:00','04 giờ 00 phút')
let B2 = new ticketInfo('Phương Trang',200000,"Ghế - Limousine 16 ghế",'08:00','12:00','04 giờ 00 phút')
let B3 = new ticketInfo('Bến Thành',175000,"Ghế - Limousine 36 ghế",'06:00','09:45','03 giờ 45 phút')
let B4 = new ticketInfo('Avigo',350000,"Giường nằm - Limousine 41 giường",'14:00','18:00','04 giờ 00 phút')
let B5 = new ticketInfo('Toàn Thắng',190000,"Ghế - Limousine 36 ghế",'04:30','08:00','03 giờ 30 phút')
let B6 = new ticketInfo('Huy Hoàng',310000,"Giường nằm - Limousine 36 giường",'06:00','10:00','04 giờ 00 phút')
let B7 = new ticketInfo('Ba Châu',290000,"Giường nằm- Limousine 36 giường",'14:00','18:00','04 giờ 00 phút')
let B8 = new ticketInfo('Bến Thành',290000,"Giường nằm - Limousine 41 giường",'12:30','16:30','04 giờ 00 phút')
let B9 = new ticketInfo('Avigo',180000,"Ghế - Limousine 36 ghế",'06:00','09:45','03 giờ 45 phút')

// Tạo danh sách vé
var ticketList = [B1,B2,B3,B4,B5,B6,B7,B8,B9]

// Màn hình INDEX
window.addEventListener('load',function(){
    toTop()
    let searchButton_main = document.querySelector('#searchButton_main')
    searchButton_main.onclick =function(){
        // Lấy giá trị trên thanh tìm kiếm
        let startPlace = document.getElementById('start_index').value
        let destinationPlace = document.getElementById('destination_index').value
        let dateStart = document.getElementById('dateStart_index').value
        // Kiểm tra nhâph
        if(startPlace==='' || destinationPlace==='' || dateStart==='') {
            alert('Vui lòng nhập đây đủ thông tin!')
        }
        else if(startPlace===destinationPlace){
            alert('Điểm đi trùng điểm đến. Vui lòng chọn lại!')
        }else
        {
            // Lưu các biến toàn cục để gửi qua thanh tìm kiếm màn hình Category
            sessionStorage.setItem('global_startPlace', startPlace);
            sessionStorage.setItem('global_destinationPlace', destinationPlace);
            sessionStorage.setItem('global_dateStart', dateStart);
            sessionStorage.setItem('global_dateEnd', document.getElementById('dateEnd_index').value);
            window.location='Category.html'
        }
    }
    // Hoán đổi điểm đi và đến
    let swapBtn = this.document.querySelector('#swap')
    swapBtn.onclick=function(){
        let startPlace = document.getElementById('start_index').value
        let destinationPlace = document.getElementById('destination_index').value
        document.getElementById('start_index').value=destinationPlace
        document.getElementById('destination_index').value= startPlace
    }
})

// MÀN HÌNH CATEGORY
window.addEventListener('load',function(){
    toTop()
    // Hoán đổi điểm đi và đến
    let swapBtn = this.document.querySelector('#swap')
    swapBtn.onclick=function(){
        let startPlace = document.getElementById('start').value
        let destinationPlace = document.getElementById('destination').value
        document.getElementById('start').value=destinationPlace
        document.getElementById('destination').value= startPlace
    }
    // Lấy dữ liệu biến toàn cục
    let startPlace = sessionStorage.getItem('global_startPlace')
    let destinationPlace = sessionStorage.getItem('global_destinationPlace')
    let dateStart = sessionStorage.getItem('global_dateStart')
    let dateEnd = sessionStorage.getItem('global_dateEnd')
    // Đưa thông tin vào thanh tìm kiếm
    document.getElementById('start').value=startPlace
    document.getElementById('destination').value=destinationPlace
    document.getElementById('dateStart').value=dateStart
    document.getElementById('dateEnd').value=dateEnd
    // In thông tin nhập từ INDEX
    appendHTML(startPlace,destinationPlace,dateStart)
    // Tìm kiếm dựa trên thanh ở CATEGORY
    let searchButton = document.querySelector('#searchButton')
    searchButton.onclick =function(){
        let startPlace = document.getElementById('start').value
        let destinationPlace = document.getElementById('destination').value
        let dateStart = document.getElementById('dateStart').value
        appendHTML(startPlace,destinationPlace,dateStart)
    }
    // Bắt onclick trên các thanh vé
    let tickets = document.querySelectorAll('#tickets li>div.ticket')   
    for(let tick of tickets){
        tick.onclick = function(){
            clickTicket()
            
        }
    }

    // Ẩn nút filter khi màn hình mobile
    let filter = this.document.querySelector(".filter")
    if(this.screen.width<500){
        filter.style.display="none"
    }
    // Tạo biến lưu trạng thái hiện của bảng Filter
    var show = true;
    let filterMobile = this.document.querySelector('#filterMobile')
    filterMobile.onclick = function(){
        show = !show
        if(show){
            filter.style.display="block"
        }else{
                filter.style.display="none"
        }
    }
})

// MÀN HÌNH USER INFORMATION    
window.addEventListener('load',function(){
    // Hiển thị thông tin đã lưu trước đó
    
    // Bắt sự kiện nút lưu
    let saveBtn=document.querySelector('#saveBtn')
    saveBtn.onclick = function(){
        saveInfo()
    }
})

// Lấy mảng từ Local Storage
const items = JSON.parse(sessionStorage.getItem('array')) || [];
// MÀN HÌNH DETAIL
window.addEventListener('load',function(){
    toTop()
    // Cập nhật thông tin lấy từ vé đã click
    updateInfo()
    const mainImg = document.getElementById('mainImg')
    let imgs = document.querySelectorAll('.thumb img')
    for(let img of imgs){
        img.onclick=function(){
            mainImg.src=this.src
        }
    }

    // Bắt sự kiện nhấn nút đặt vé
    const bookBtn = this.document.querySelector('#bookBtn')
    bookBtn.onclick = function(){
        // Tạo biến tạm lưu class thông tin vé đã mua
        let tmp = new Purchased(
                sessionStorage.getItem('global_startPlace'),
                sessionStorage.getItem('global_destinationPlace'),
                parseFloat(document.getElementById('quantity').value),
                sessionStorage.getItem('posInfo'),
                user.name,
                user.phoneNumber
            );
        // Đẩy biến tạm vào mảng
        items.push(tmp);
        sessionStorage.setItem('array', JSON.stringify(items));
        alert('Đặt vé thành công')
    }
})

// MÀN HÌNH MY TICKET
window.addEventListener('load',function(){
    toTop()
    // In màn hình vé đã mua
    showBougth();
    let deleteBtn = document.querySelector('#confirm #deleteBtn')
    let cancelBtn = document.querySelector('#confirm #cancelBtn')
    deleteBtn.onclick=function(){
        document.getElementById('state').innerText='Đã hủy'
        document.getElementById('state').style.color='#E4003A'
        document.getElementById('confirm').style.display='none'
    }

    cancelBtn.onclick = function(){
        document.getElementById('confirm').style.display='none'
    }
})

function appendHTML(startPlace,destinationPlace,dateStart) {
    //Lấy ID của ul danh sách vé
    let tickets = document.getElementById('tickets');
    //Xóa tất cả các ticket lần tìm trước
    tickets.innerHTML=''
    // Kiểm tra thông tin nhập
    if(startPlace==='' || destinationPlace==='' || dateStart==='') {
        alert('Vui lòng nhập đây đủ thông tin!')
    }
    else if(startPlace===destinationPlace){
        alert('Điểm đi trùng điểm đến. Vui lòng chọn lại!')
    }else {
        for(let i =0;i<ticketList.length;i++){
            // Tạo thẻ li
            var li = document.createElement(`li`);
            // Gán HTML cho thẻ li
            li.innerHTML = `
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
        // Thêm li vào ul
            tickets.append(li)
        }
    }
}
function clickTicket(){
    let tickets = document.querySelectorAll('#tickets li>div.ticket')   
    for(let tick of tickets){
        tick.onclick = function(){
            // Lấy rel để biết vị trị ptử thông tin trong mảng
            sessionStorage.setItem('posInfo',this.getAttribute('rel'))
            window.location='Detail.html'
        }
    }
}

function saveInfo(){
    // Tạo các biến toàn cục lưu thông tin
    sessionStorage.setItem('lastName',document.getElementById('lastName').value)
    sessionStorage.setItem('firstName',document.getElementById('firstName').value)
    sessionStorage.setItem('yearBorn',document.getElementById('year').value)
    sessionStorage.setItem('phoneNumber',document.getElementById('phoneNumber').value)
    sessionStorage.setItem('email',document.getElementById('email').value)
    alert('Lưu thông tin thành công!')
}


// Hien thi thong tin chi tiet cua ve trong man hinh Detail
function updateInfo(){
    // Lấy positin trong mảng
    let i = sessionStorage.getItem('posInfo')
    // Thay đổi thông tin trong màn hình DETAIL
    document.getElementById("nameBus").innerText=`Nhà xe ${ticketList[i].busName}`
    document.getElementById("seat").innerText=`${ticketList[i].seat}`
    document.getElementById("place").innerText=`${sessionStorage.getItem('global_startPlace')} - ${sessionStorage.getItem('global_destinationPlace')}`
    document.getElementById("price").innerText=`Giá vé: ${ticketList[i].price} VNĐ`
    document.getElementById("startPlace").innerText=`${sessionStorage.getItem('global_startPlace')}`
    document.getElementById("stratTime").innerText=`${ticketList[i].timeStart}`
    document.getElementById("detailPlace").innerHTML=`<p><strong>Địa chỉ:</strong> Đưởng Võ Văn Tần, Quận 3, ${sessionStorage.getItem('global_startPlace')}</p>`
    document.getElementById("destinationPlace").innerText=`${sessionStorage.getItem('global_destinationPlace')}`
    document.getElementById("endTime").innerText=`${ticketList[i].timeEnd}`
    document.getElementById("detailDestination").innerHTML=`<p><strong>Địa chỉ:</strong> Đường Nguyễn Bình, Phường 1, ${sessionStorage.getItem('global_destinationPlace')}</p>`
}

function showBougth(){
    let listTicks = document.getElementById('mytickets');
    //Xóa tất cả các ticket lần tìm trước
    listTicks.innerHTML=''
    items.forEach(item => {
        var li = document.createElement(`li`);
        li.innerHTML = `<div class="ticket">
            <div class="flex">
                <h3>${ticketList[item.position].busName}</h3>
                <h3 id="state">Đã đặt</h3>
            </div>
            <p>Ghế</p>
            <div class="flex ticketInfor">
                <div>
                    <h2>${ticketList[item.position].timeStart}</h2>
                    <p>${item.start}</p>
                </div>
                <i class="fa fa-long-arrow-right"></i>
                <div>
                    <h2>${ticketList[item.position].timeEnd}</h2>
                    <p>${item.destination}</p>
                </div>
                <h2>${ticketList[item.position].time}</h2>
                <div>
                    <p class="price">${ticketList[item.position].price} VNĐ<span>x${item.num}</span></p>
                </div>
            </div>
            <h3>
                Thông tin
            </h3>
            <p><strong>Tên:</strong> ${sessionStorage.getItem('firstName')} ${sessionStorage.getItem('lastName')}</p>
            <p><strong>Số điện thoại:</strong> ${sessionStorage.getItem('phoneNumber')}</p>
            <div class="flex">
                <h2>Tổng tiền:</h2>
                <p class="price">${ticketList[item.position].price*item.num} VNĐ</p>
            </div>
            <button popovertarget="confirm" id="cancelTicket">&times; Hủy vé</button>
        </div>
        <div id="confirm" popover>
            <p>Bạn có chắc muốn hủy vé?</p>
            <button id="deleteBtn">Xóa vé</button>
            <button id="cancelBtn">Hủy</button>
        </div>`;
        listTicks.append(li)
        }
    )
}

function toTop(){
    const scrollToTopBtn = document.getElementById('toUp')
    const docEl = document.documentElement
    document.addEventListener('scroll',()=>{
        const scrollTotal = docEl.scrollHeight - docEl.clientHeight

        if((docEl.scrollTop/scrollTotal)>=0.2){
            scrollToTopBtn.hidden = false
        }
        else{
            scrollToTopBtn.hidden=true
        }
    })

    scrollToTopBtn.onclick=function(){
        docEl.scrollTo({top:0})
    }
}