const openButton = document.querySelector('.open');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close');

//버튼 클릭 시 컨테이너의 내용 불러오기 
openButton.addEventListener('click', () => {
    container.style.display = 'flex';
    openButton.style.display = 'none';
})

//close 버튼 클릭시 처음으로 돌아가기 
closeButton.addEventListener('click', ()=> {
    container.style.display = 'none';
    openButton.style.display = 'block';  
})