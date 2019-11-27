//1
function compare(a, b) {
    if(-10000 <= A <= 10000 && -10000 <= B <= 10000) {
        if(a > b) {
            console.log('>');
        } else if(a < b) {
            console.log('<');
        } else {
            console.log('==');
        }
    }
}

//2
function grade(score) {
    if(0 <= score <= 100) {
        if(90 >= score) {
            console.log('A');
        } else if(80 >= score) {
            console.log('B');
        } else if(70 >= score) {
            console.log('C');
        } else if(60 >= score) {
            console.log('D');
        } else {
            console.log('F');
        }
    }
}

//3
function year(a) {
    if(a%4 === 0 && (a%100 !== 0 || a%400 === 0)) {
        console.log(1);
    } else {
        console.log(0);
    }
}

//4
function alarm(H, M) {
    if(0 <= H <= 23 && 0 <= M <= 59) {
        if(M >= 45) {
            console.log(H + ' ' +(M-45));
        } else {
            if(H === 0) {
                H = 23
            } else {
                H = H - 1;
            }
            
            let m = M - 45;
            M = 60 + m;

            console.log(H + ' ' + M);

        }
    }
}

//5
function Num(a, b, c) {
    if(1 <= a <= 100 && 1 <= b <= 100 && 1 <= c <= 100) {
        if(a >= b) {
            if(a >= c) {
                if(b >= c) {
                    console.log(b);
                } else {
                    console.log(c);
                }
            } else {
                console.log(a);
            }
        } else {
            if(b >= c) {
                if(a >= c) {
                    console.log(a);
                } else {
                    console.log(c);
                }
            } else {
                console.log(b);
            }
        }
    }
}