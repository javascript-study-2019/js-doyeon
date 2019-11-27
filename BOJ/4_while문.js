//while문
//1
function PLUS() {
    let A;
    let B;
    while(A !== '0' && B !== '0') {
        A = prompt("A의 값을 입력하세요.");
        B = prompt("B의 값을 입력하세요.");
        console.log(Number(A) + Number(B));
    } 
}

//2
function plus_arr() {
    while(true) {
        A = prompt("A의 값을 입력하세요.");
        B = prompt("B의 값을 입력하세요.");
        if(0 > A || A > 10 || 0 > B || B > 10) {
            break;
        }
        console.log(Number(A) + Number(B));
    }
}

//3
function cyc(N) {
    //10보다 작다면 앞에 0을 붙여서 두자리수로 만들어줌
    //각 자리수를 더해줌
    //N의 1의 자리 수와 새로 만들어진 1의 자리 수를 붙여서 새로운 수를 만듦
    //원래 주어진 N이 나올 때까지 반복
    let con = N
    let num1;
    let num2;
    let M;
    let cycle = 0;
    
    while(N !== M) {  //주어진 N과 새로운 값인 M이 다를 경우 반복
        num1 = con.toString();  //주어진 수를 num1에 문자열로 대입
        if(num1.length === 1) { //num1의 길이가 1이면 두자리수로 만들어줌
            num1 = '0' + num1;
        }
        num2 = (Number(num1[0]) + Number(num1[1])).toString(); 
        if(num2.length === 1) {
            num2 = '0' + num2;
        }
        M = Number(num1[1] + num2[1]);
        con = M;
        cycle = cycle + 1;

    }
    console.log(cycle);
}