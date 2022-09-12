// Bai 1 :
function timSoNguyenDuongNhoNhat() {
    var sum = 0;
    var n;
    for (let i = 1; sum <= 10000; i++) {
        n = i;
        sum += i;
        // i =1 => sum = 1
        // i =2 => sum = 3
        // i =3 => sum = 6
        // i =4 => sum = 10
        // i =5 => sum = 15 
        // 1 + 2 + 3 + 4 + 5 
    }
    console.log(n);
    document.getElementById('bai1').innerHTML = 'Số nguyên dương nhỏ nhất : ' + n;
}
// Bai 2 :
function tinhTong() {
    var nhapX = +document.getElementById('nhapX').value;
    var nhapN = +document.getElementById('nhapN').value;
    var sum = 0;
    for (let i = 1; i <= nhapN; i++) {
        sum += nhapX ** i;
        // X =2 , N =3 
        // i =1 => sum = 2^1=2
        // i =2 => sum = 2 + 2^2 = 6
        // i =3 => sum = 6 + 2^3 = 14
    }
    document.getElementById('bai2').innerHTML = 'Tổng: ' + sum;
}
// Bai 3 :
function tinhGiaiThua() {
    var nhapN = +document.getElementById('nhapSo').value;
    var sum = 1;
    for (let i = 1; i <= nhapN; i++) {
        sum *= i;
    }
    document.getElementById('bai3').innerHTML = sum;
}
// Bai 4 :
function taoDiv() {
    var divs = document.getElementsByClassName("alert alert-dark");
    for (let k = 0; k < divs.length; k++) {
        if (k % 2 == 0) {
            divs[k].style.backgroundColor = 'red';
            divs[k].innerHTML = 'div chan' + k;
        }
        else {
            divs[k].style.backgroundColor = 'blue';
            divs[k].innerHTML = 'div le' + k;
        }
    }
}

// Bai 5 : 

function kiemTraSNT(n) {
    var flag = true;
    if (n < 2) flag = false; // Nếu n<2 => n k phải là số nguyên tố
    else if (n == 2) flag = true; // Dãy số nguyến tố bắt đầu từ 2 trở đi 
    else if (n % 2 == 0) flag = false; // Số nguyên tố chỉ chia hết cho 1 và chính nó
    else {
        for (let i = 2; i < n / 2; i++) { // Vì 1 một lúc nào cũng chia hết cho 1 , cho nên xét i bắt đầu từ 2 
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}
function checkSNT() {
    var input = +document.getElementById('SNT').value;
    input = parseInt(input);
    var ketQua = '';
    for (let i = 0; i < input; i++) {
        if (kiemTraSNT(i))
            ketQua += ' ' + i;
    }
    document.getElementById('inSNT').innerHTML = ketQua;
}