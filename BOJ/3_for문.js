//1

function goo(N) {
    if(1 <= N <= 9) {
        for(let i = 1; 9 >= i; i++) {
            console.log(N + ' * ' + i + ' = ' + N*i);
        }
    }
}

//2

function sum(a,b) {
    if(0 < a < 10 && 0 < b < 10) {
        console.log(a+b);
    }
}

//3
function SUM(N) {
    let result = 0;
    for(let i = 1; N >= i; i++) {
        result = result + i;
    }
    console.log(result);
}

//4
function test() {
    let T = prompt("몇 번 테스트하시겠습니까?");

    for(let i = 0; Number(T) > i; i++) {
        let A = prompt("A의 값을 입력하세요.");
        let B = prompt("B의 값을 입력하세요.");
        console.log(Number(A) + Number(B));
    }
}


//5
function numbering(N) {
    if(1 <= N <= 100000) {
        for(let i = 1; N >= i; i++) {
            console.log(i);
        }
    }
}

//6
function numb(N) {
    if(1 <= N <= 100000) {
        for(let i = N; 0 < i; i--) {
            console.log(i);
        }
    }
}

//7
function plus() {
    let T = prompt("몇 번 테스트하시겠습니까?");

    for(let i = 1; Number(T) > i; i++) {
        let A = prompt("A의 값을 입력하세요.");
        let B = prompt("B의 값을 입력하세요.");
        console.log('Case #' + i + ' : ' + (Number(A)+Number(B)));
    }
}

//8
function plustest() {
    let T = prompt("몇 번 테스트하시겠습니까?");

    for(let i = 1; Number(T) > i; i++) {
        let A = prompt("A의 값을 입력하세요.");
        let B = prompt("B의 값을 입력하세요.");
        console.log('Case #' + i + ':' + Number(A) + ' + ' + Number(B) + ' = ' + (Number(A) + Number(B)));
    }
}

//9
function star(N) {
    if(1<=N<=100) {
        let star = '';
        for(let i = 1; N >= i; i++) {
            star = star + '*';
        
            console.log(star);
        }
    }
}

//10
function Star(N) {
    if(1<=N<=100) {
        
        for(let i = 1; N >= i; i++) {
            let line = '';
            for(let m = 1; N-i >= m; m++) {
                line = line + ' ';
            }
            for(let n = line.length+1; N >= n; n++) {
                line = line + '*';
            }
            console.log(line);
        }
    }
}

//11
function filter(arr, x) {
    if(1 <= x <= 10000) {
        let line = '';
        for(let i = 0; arr.length > i; i++) {
            if(arr[i] < x) {
                line = line + arr[i] + ' ';
            }
        }
        console.log(line);
    }
}