//배열 형태로 모든 button 들을 저장
const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

//컴퓨터가 내는 가위바위보
const result = ['가위', '바위', '보'];
//화면에 결과 출력
const show = (user, computer, result) => {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = result;
}

//컴퓨터와 유저 결과 비교
const game = (user, computer) => {
    let message;
    if(user === computer){
        console.log('무승부');
        message = '무승부';
    }else{
        //user+computer: 텍스트 연산이 되어 새로운 텍스트를 만들어 줌
        switch(user+computer){
            //가위보, 바위가위, 보바위 > 사용자의 승
            case '가위보':
            case '바위가위':    
            case '보바위':    
                console.log('사용자 승리');
                message = '사용자 승리';
                break;
            //가위바위, 바위보, 보가위 > 컴퓨터의 승
            case '가위바위':
            case '바위보':    
            case '보가위':    
                console.log('컴퓨터 승리');
                message = '컴퓨터 승리';
                break;
        }    
    }
    show(user, computer, message);
}

//사용자가 내는 가위바위보
const play = (event) => {
    const user = event.target.innerText;
    // 난수 생성
    const randomIndex = Math.floor(Math.random()*3);
    const computer = result[randomIndex];
    console.log(user, computer);
    game(user, computer);
}

//버튼마다 실행 
buttons.forEach((button)=>{
    button.addEventListener('click', play);
});


