const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock(){
    const now = new Date();

    //새로고침을 하지 않으면 바뀌지 않음 > 1초에 한번씩 반복하는 작업 필요
    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();    
}

//1초마다 해당 함수를 실행
setInterval(clock,1000);