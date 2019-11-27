//1
console.log('Hello World!');

//2
console.log('강한친구 대한육군\n강한친구 대한육군');

//3
console.log("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|");

//4
console.log('|\\_/|\n|q p|   /}\n( 0 )"""\\\n|"^"`    |\n||_/=\\\\__|');

//5
console.log(123);
console.log('Your_ICPC_Team_Name');

//6
function plus(a, b) {
    if(0<a<10 && 0<b<10) {
        console.log(a+b);
    } else {
        console.log('조건에 맞지 않습니다.');
    }
}

//7
function min(a, b) {
    if(0<a<10 && 0<b<10) {
        console.log(a-b);
    } else {
        console.log('조건에 맞지 않습니다.');
    }
}

//8
function multi(a, b) {
    if(0<a<10 && 0<b<10) {
        console.log(a*b);
    } else {
        console.log('조건에 맞지 않습니다.');
    }
}

//9
function div(a, b) {
    if(0<a<10 && 0<b<10) {
        console.log(a/b);
    } else {
        console.log('조건에 맞지 않습니다.');
    }
}

//10
function cul(a, b) {
    if(1 <= a <= 10000 && 1 <= b <= 10000) {
        console.log((a+b) + '\n' + (a-b) + '\n' + (a*b) + '\n' + (a/b) + '\n' + (a%b));
    } else {
        console.log('조건에 맞지 않습니다.');
    }
}

//11
function abc(a,b,c) {
    if(2 <= a <= 10000 && 2 <= c <= 10000) {
        console.log(((a+b)%c) + '\n');
        console.log(((a%c + b%c)%c) + '\n');
        console.log(((a*b)%c) + '\n');
        console.log(((a%c * b%c)%c));
    }
}

//12
function multiply(a,b) {
    //숫자를 문자열로 바꿈 -> 세자리수인지 확인
    //A * 1의 자리
    //A * 10의 자리
    //A * 100의 자리
    //해당하는 자릿수를 꺼내서 숫자로 바꿔줌
    let A = a.toString();
    let B = b.toString();
    
    if(A.length === 3 && B.length === 3) {
        let o = Number(B[2]);
        let t = Number(B[1]);
        let h = Number(B[0]);

        console.log((A*o) + '\n');
        console.log((A*t) + '\n');
        console.log((A*h));
        console.log(a*b);
    }
}