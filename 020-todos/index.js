const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

//등록 누르면 입력한 값이 li 태그 list 형식으로 출력 
form.addEventListener('submit', (evnet)=>{
    //ipnut 공백 폼 전송 막기 
    if(input.value != ''){
        evnet.preventDefault();

        const li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);
    
        //입력창 초기화 
        input.value = '';
    }   
});

//TODO: 리스트 저장 기능 추가
//TODO: 삭제 기능 추가

