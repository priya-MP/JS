function init() {
    var name1 = prompt("priya");
    alert(name1);
    console.log("am in line 4");
    var con = confirm("are you sure?");
    console.log(con);
}



//init();
function declareVariables() {
    var a = true;
    var b = false;

    var num1 = 100;//
    var num2 = -100;
    var num3 = 100.50;

    var str1 = "str1";
    var str2 = "str2";
    var ch = 'a';
    console.log(arr[4][2], arr[5][1]);
    var obj = {
        name: "N1",
        age: 22,
        isengineer: false,
        hobbies: ["reading", "programming"],
        address: {
            "door no": 10,
            street: "s2",
            country: "india"
        }
    };
    var key1 = "age";
    console.log(obj);
    console.log(obj.age, obj.hobbies[1], obj.address.street, obj.address['door no'], obj[key1]);
}



function printBrowser() {
    var arr = [];
    var obj = {};
    var i = 0;
    var b1 = prompt('enter browser1');
    if (b1 != '') {
        arr[i] = b1;
        i = i + 1;
        obj[b1] = b1.length;
    }
    var b2 = prompt('enter browser2');
    if (b2 != '') {
        arr[i] = b2;
        i = i + 1;
        obj[b2] = b2.length;
    }
    var b3 = prompt('enter browser');
    if (b3 != '') {
        arr[i] = b3;
        obj[b3] = b3.length;
    }
    console.log(arr);
    console.log(obj);
}



function changeH1content() {
    var content = prompt("enter some content");
    document.getElementById("h1_id").innerText = content;
    document.getElementById("inp_id").value;

    var color = prompt("enter a color");
    document.getElementById("h1_id").style.color = color;
}
function changecolor(color) {
    document.getElementById("h1_id").style.color = color;
}



function increment() {
    var num1 = document.getElementById('num1');
    num1.value = Number(num1.value) + 1;
}
function decrement() {
    var num1 = document.getElementById('num1');
    if (num1.value > 0) {
        num1.value = Number(num1.value) - 1;
    }
}
function calculate(op) {
    var num1 = document.getElementById('num1');
    if (op == 'increment') {
        num1.value = Number(num1.value) + 1;
    } else {
        if (num1.value > 0) {
            num1.value = Number(num1.value) - 1;

        }
    }
}



function calculate_length() {
    var value = document.getElementById('new_id').value;
    document.getElementById("my_id").innertext = value.length;
}

function showHide() {
    var value = document.getElementById("btn_id").value;
    if (value.style.display === "none") {
        value.style.display = "block"
    } else {
        value.style.display = "none";
    }
}


function printChars(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
    }
}

function printElements(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] * arr[i]);
    }
}
function printNumbers() {
    const number = prompt("enter a number:");
    if (number % 2 == 0) {
        console.log(" the number is even");
    } else {
        console.log("the number is odd");
    }
}
function positiveNegative(number) {
    if (number > 0) {
        console.log("the number is positive");
    } else if (number == 0) {
        console.log("the number is 0")
    } else {
        console.log("the number is negative");

    }
}
function UpperLower() {
    var str = "GOOD LUCK";
    var string = str.tolower();
    document.print(string);
}
//
function sumofArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
function validatePassword(password) {
    var passobj = {};
    if (password.length >= 8 && password.length <= 15) {
        passobj.length = true;
    }
    var spcl = "!@#$%&*+=";
    for (var i = 0; i < password.length; i++) {
        var ch = password.charAt(i);
        if (ch >= "A" && ch <= "Z") {
            passobj.charCon = true;
            passobj.upperCon = true;
        } else if (ch >= "a" && ch <= "z") {
            passobj.charCon = true;
            passobj.lowerCon = true;
        } else if (ch >= "0" && "9") {
            passobj.numCon = true;
        } else if (spcl.includes(ch)) {
            passobj.spclCon = true;
        }
    }
    console.log(passobj);
    var count = 0;
    for (var key in passobj) {
        console.log(key);
        count++;
    }
    console.log(count);
    var passElem = document.getElementById('passStr');
    if (count == 6) {
        passElem.innerText = "strong";
        passElem.style.color = "green";
    } else if (count == 5 || count == 4) {
        passElem.innerText = "medium";
        passElem.style.color = "orange";
    } else {
        passElem.innerText = "weak";
        passElem.style.color = "red";
    }
}
//factorial//
function dofact(number) {
    var fact = 1;
    for (var i = 2; i <= number; i++) {
        fact = fact * i;
    }
    console.log(fact);
}

//perfect number//
function prfct(number) {
    var sum = 1;
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == number) {
        console.log("perfect_number");
    } else {
        console.log("not a perfect_number");
    }
    console.log(sum);
}


//prime number//
function prime(number) {
    var isPrime = true;
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Prime")
    } else {
        console.log("Not prime")
    }
}
//to find GCD//
function findGCD(a, b) {
    var min = 0;
    if (a > b) {
        min = b;
    } else {
        min = a;
    }
    var gcd = 1;
    for (i = 2; i <= min; i++) {
        if (a % i == 0 && b % i == 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}
//palindrome//

function palindrome(str) {
    var ispalindrome = true;
    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str.charAt(i) != str.charAt(j)) {
            ispalindrome = false;
            break;
        }
    } if (ispalindrome) {
        console.log("string is a palindrome");
    } else {
        console.log("string is not a palindrome ");
    }
}
//sum of digit in a number//
function dgtsum(num) {
    var sum = 0;
    while (num > 0) {
        var rem = num % 10;
        var sum = sum + rem;
        num = parseInt(num / 10);
    }
    console.log(sum);
}

//count a digit in number//
function digit_count(n) {
    var count = 0;
    if (n >= 1) count++;
    while (n / 10 >= 1) {
        n /= 10;
        count++;
    }
    return count;
    console.log(digit_count(num));
}

var payment = {
    premium: 5,
    enterprise: 10,
    platinum: 20
}
//showHidepayment//
function showHidepaymentDiv(type) {
    var paymentDiv = document.getElementById("payment_div");
    if (type == "free") {
        paymentDiv.style.display = "none";
    } else {
        paymentDiv.style.display = "block";
        document.getElementById('cost').innerText = payment[type];
        calculateTotal();
    }
}
function calculateTotal() {
    var val = document.getElementById('text_val').value;
    var cost = document.getElementById('cost').innerText;
    document.getElementById('total').innerText = val * cost;
}
//vowelscount//
function vowelCount(str) {
    var count = 0;
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if ("aeiouAEIOU".includes(ch) && !obj[ch]) {
            obj[ch] = true;
            count++;
        }
    }
    return count;
}

function generateOptions() {
    var fname = document.getElementById('fname').value;
    var mname = document.getElementById('mname').value;
    var lname = document.getElementById('lname').value;

    var suggestion1 = fname.slice(0, 2) + mname.slice(0, 2) + lname.slice(0, 2) + fname.length + mname.length + lname.length;
    var suggestion2 = fname.slice(0, 3) + lname.slice(0, 3) + fname.length + mname.length + lname.length;

    var fvowel = vowelCount(fname);
    var mvowel = vowelCount(mname);
    var lvowel = vowelCount(lname);
    var suggestion3 = lname.slice(-3) + fname.slice(-3) + fvowel + mvowel + lvowel;

    var rand = Math.random();
    var alphas = ("abcdefghijklmnopqrstuvwxyz");
    var alphaIndex = parseInt(rand * 26);
    var randomAlphabet = (alphas[alphaIndex]);

    var threedgtNum = parseInt(rand * 1000);
    if (threedgtNum < 10) {
        threedgtNum = "00" + threedgtNum;
    } else if (threedgtNum < 100) {
        threedgtNum = "0" + threedgtNum;
    }
    var suggestion3 = lname.slice(-3) + fname.slice(-3) + randomAlphabet + threedgtNum;

    var suggestions = "<li onclick='setValueToTextbox(this.innerText)'>" + suggestion1.toLowerCase() + "</li>";
    suggestions += "<li onclick='setValueToTextbox(this.innerText)' >" + suggestion2.toLowerCase() + "</li>";
    suggestions += "<li onclick='setValueToTextbox(this.innerText)' >" + suggestion3.toLowerCase() + "</li>";
    suggestions += "<li onclick='setValueToTextbox(this.innerText)' >" + suggestion3.toLowerCase() + "</li>";
    document.getElementById('ul_id').innerHTML = suggestions;
}
function setValueToTextbox(text) {
    document.getElementById('uname').value = text;
}

function arrayOptions() {
    var arr = [10, 11, 55, 30, 25, 2, 100];
    arr.forEach(function (val, index) {
        console.log(val, index);
    });

    var mapArr = arr.map(function (val, index) {
        return val * val;
    });
    console.log(mapArr);

    var fil = arr.filter(function (val, index) {
        return val % 2 != 0;
    });
    console.log(fil);

    var fin = arr.find(function (val, index) {
        return val % 2 != 0;
    });
    console.log(fin);

    var finI = arr.findIndex(function (val, index) {
        return val % 2 != 0;
    });
    console.log(finI);

    var ev = arr.every(function (val, index) {
        return val % 2 != 0;
    });
    console.log(ev);

    var som = arr.some(function (val, index) {
        return val % 2 != 0;
    });
    console.log(som);

    var red = arr.reduce(function (prevVal, curVal, index) {
        console.log(prevVal, curVal, index);
        return prevVal + curVal;
    });
    console.log(red);
}


//task//............
//given number is a strong//
function strong(num) {
    var sum = 0;
    var n = num;
    while (num > 0) {
        var rem = num % 10;
        num = parseInt(num / 10);
        sum = sum + fact(rem);
    }
    if (sum == n) {
        console.log("number is strong");
    } else {
        console.log("number is not a strong");
    }
}
//factorial//
function fact(num) {
    var f = 1;
    for (i = 2; i <= num; i++) {
        f = f * i;
    }
    return f;
}

//terms of fibonaci series//

function fibonacci(num) {//num = 5
    var n1 = 0;
    var n2 = 1;
    var nextterm;
    str = '';
    for (var i = 0; i <= num; i++) {
        str = str + "<li>" + n2 + "</li>";    //ordered list..../
        nextterm = n1 + n2;
        n1 = n2;
        n2 = nextterm;
    }

    document.getElementById('my_id').innerHTML = str;


}
//amstrong number...//cube of digit is equal to number
function amstrng(num) {
    var sum = 0;
    var temp = num;
    while (temp > 0) {
        var rem = temp % 10;
        sum = sum + (rem * rem * rem);
        temp = parseInt(temp / 10);
    }
    if (sum == num) {
        console.log("number is amstrong");
    } else {
        console.log("number is not a amstrong");
    }
}
//swap the case of each character....//
function swapCase(str) {
    var newstr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            newstr += str[i].toLowerCase();
        } else {
            newstr += str[i].toUpperCase();
        }
    }
    return newstr;
}
console.log(swapCase('neWstr'));

//minmax values...///
function minMax(arr) {
    var min = arr[0], max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min, max);
}

//multiplication table....//
function multiTable(num) {
    var number = parseInt('enter the number');
    for (var i = 1; i <= 10; i++) {
        const result = i * num;
        console.log(num + "*" + i + "=" + result);
    }
}
//given number is palindrome....//
function Palindrome(num) {
    var rem, temp, final = 0;
    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        console.log("The number is Palindrome");
    }
    else {
        console.log("The number is not palindrome");
    }
}
//leap year....//
function leapYear(strt_yr, end_yr) {
    var i;
    for (var i = strt_yr; i < end_yr; i++) {
        if ((i % 4 == 0 && i % 100 !== 0) || (i % 400 === 0)) {
            console.log(i);
        }
    }
}
console.log(leapYear(2000, 2012));

//handle exception....//
function handleException() {
    var inputArray = [
        100, -100, 0, Infinity, -Infinity, NaN,
        true, false,
        undefined, null,
        "this is correct", "this is error",
        "A", "@", "a",
        { success: true }, { error: true },
        [1, 2, 3, 4], [1, 2, 3, 4, 5]
    ];
    inputArray.forEach(function (val, index) {
        try {
            if (typeof val === "number") {
                if (val <= 0) {
                    throw "Encountered 0 or neg num at index" + index;
                }
                if (isNaN(val)) {
                    throw "Encountered NaN at index" + index;
                }
            } else if (typeof val == "boolean") {
                if (val == false) {
                    throw "Encountered false at index" + index;
                }
            } else if (typeof val === "undefined") {
                throw "Encountered undefined at index" + index;
            } else if (typeof val === "object") {
                if (val instanceof Array) {
                    if (val.length < 5) {
                        throw "Encountered array less than 5 at index" + index;
                    }
                } else if (val instanceof Object) {
                    if ('error' in val) {
                        throw "Encountered object with key error at index" + index;
                    }
                } else {
                    throw "Encountered null at index" + index;
                }
            } else if (typeof val === "string") {
                if (val.length == 1) {
                    if (val < "A" || val > "Z") {
                        throw "Encountered lowercase or spcl char at index" + index;
                    }
                } else {
                    if (val.includes("error")) {
                        throw "Encountered error string at index" + index;
                    }
                }
            }
        } catch (ex) {
            console.log("Exception:", index, ex);
        } finally {
            console.log("Finally:", index);
        }

    })
}
//printbill.......//
function printBill() {
    var booksArr = [
        { name: "B1", q: 20 },
        { name: "B2", q: 15 },
        { name: "B3", q: 43 },
        { name: "B4", q: 11 },
    ];
    var booksObj = {
        "B1": 450,
        "B2": 235,
        "B3": 200,
        "B4": 100
    }
    var trStr = '';
    var total = 0;
    booksArr.forEach(function (value, index) {
        var price = booksObj[value.name];
        var amount = price * value.q;
        total += amount;
        trStr += '<tr>';
        trStr += '<td>' + (index + 1) + '</td>';
        trStr += '<td>' + value.name + '</td>';
        trStr += '<td>' + price + '</td>';
        trStr += '<td>' + value.q + '</td>';
        trStr += '<td>' + amount + '</td>';
        trStr += '</tr>';
    });
    trStr += '<tr>';
    trStr += "<td></td>";
    trStr += "<td></td>";
    trStr += "<td></td>";
    trStr += "<td>Total</td>";
    trStr += "<td>" + total + "</td>";
    trStr += '</tr>';

    document.getElementById('bill_tbody').innerHTML = trStr;
}

document.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === 'complete') {
        printBill();
    }
}


//......timer....//
var timer = 0, x;
function startTimer() {
    var btn = document.getElementById('timer_btn');
    if (btn.value === "Start") {
        btn.value = "Stop";
        btn.style.background = "red";
        x = setInterval(runTimer, 1000);
    } else {
        clearInterval(x);
        btn.value = "Start";
        btn.style.background = "green";
    }
}

function runTimer() {
    timer++;
    document.getElementById('timer').innerText = timer;
    if (timer == 10) {
        clearInterval(x);
        var btn = document.getElementById('timer_btn');
        btn.value = "Start";
        btn.style.background = "green";
    }
}

//.....sum of multiple values...//
function sumMultiple(lower, upper) {
    var sum = 0;
    for (var i = lower; i <= upper; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
//.......find 2nd largest numbers in array of n numbers.....//
function findsecondLargest(array) {
    //var arra="";
    var second_largest = array[0];
    // Find second largest
    for (var i = 1; i < array.length; i++) {
        if (array[i] > second_largest) {
            second_largest = array[i];
        }
        if (array[i] <= second_largest) {
            second_largest = array[i];
        }
    }
    console.log(second_largest);
}
//....count of each character in a string...///
function countChar(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (obj[ch]) {
            obj[ch]++;
        } else {
            obj[ch] = 1;
        }
    }
    return obj;
}
//....mean,median,mode of numbers in an array...
function meanMedianmode(num) {
    // mean of [input values]
    var total = 0;
    var mode;
    var mean;
    var median, k;
    var n = num.length;
    for (var i = 1; i < num.length; i++) {
        total += num[i];
        mean = total / n;
    }
    console.log("mean = " + mean);
    {
        k = parseInt(n / 2);// k value means intial value...0123
        if (n % 2 == 0) {
            median = parseInt(num[k - 1] + num[k]) / 2;
        } else {
            median = num[k];
        }
    }
    console.log("median = " + median);
}



//HTTP method....
//GET - sendGetRequest......./
//POST - sendPostRequest....../
function sendGetRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://reqres.in/api/users?page=3&per_page=3");
    xhttp.send();

    //callback
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            var data = response.data;
            var trStr = '';
            data.forEach(function (value, index) {
                console.log(index, value);
                trStr += "<tr>";
                trStr += "<td>" + value.id + "</td>";
                trStr += "<td>" + value.Email + "</td>";
                trStr += "<td>" + value.first_name + " " + value.last_name + "</td>";
                trStr += "<td><img src='" + value.avatar + "'/></td>";
                trStr += "</tr>";
            })
            document.getElementById('ajax_tbody').innerHTML = trStr;
        }
    }
}
function sendPostRequest() {
    var n1 = document.getElementById('n1').value;
    var j1 = document.getElementById('j1').value;
    var error = false;
    if (n1 == '') {
        error = true;
        document.getElementById('n1').style.border = "1px solid red";
    } else {
        document.getElementById('n1').style.border = "1px solid lightgrey";
    }
    if (j1 == '') {
        error = true;
        document.getElementById('j1').style.border = "1px solid red";
    } else {
        document.getElementById('j1').style.border = "1px solid ligthgrey";
    }
    if (error) {
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://reqres.in/api/users");
    xhttp.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');
    xhttp.send("name" + n1 + "&job" + j1);
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 201) {
            alert("Data added successfully!");
        }
    }
    console.log();
}
//union of two arrays
function union(x, y) {
    var result = [];
    var arr;
    for (var i = 0; i < x.length; i++) {
        arr[x[i]] = x[i];
    }
    for (var j = 0; j < y.length; j++) {
        arr[y[j]] = y[j];
        result.arr;
    }
    return result;
    console.log(array);
}
//fizzbuzz.......////
function fizzBuzz(frst, last) {
    var i;
    for (i = frst; i < last; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        }
        else if (i % 5 == 0) {
            console.log("buzz");
        }
        else if (i % 3 == 0) {
            console.log("fizz");
        }
        else {
            console.log(i);
        }
    }
}
// //insert dashes in two even numbers..///
function insertDashes(num) {
    var str = String(num);
    var i;
    var str1 = "";
    for (i = 0; i < str.length; i++) {
        str1 += str.charAt(i);
        if (str.charAt(i) % 2 == 0 && str.charAt(i + 1) % 2 == 0 && i !== str.length - 1) {
            str1 += "-";
        }
    }
    console.log(str1);
}


// //last elements of array...//
// function arraylast(arr) {
//     var k = arr.length - 1;
//     var last = arr[k];
//     for (var i=0;i<arr.length;i++) {
//     console.log(last);
// }
//}



//passing parameter n return  n elements...//
function arraylast(arr, n) {                   //1234  2
    var k = arr.length - n;
    for (var i = k; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

//....ajax...//
//...GET method...//
function getRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhttp.send();
    //callback......
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            var trStr = '';
            response.forEach(function (value, index) {
                console.log(index, value);
                trStr += "<tr>";
                trStr += "<td>" + value.id + "</td>";
                trStr += "<td>" + value.name + "</td>";
                trStr += "<td>" + value.username + "</td>";
                trStr += "<td>" + value.email + "</td>";
                trStr += "<td>" + value.address.suite + "" + value.address.street + "" + value.address.city + "" + value.address.zipcode + "</td>";
                trStr += "<td>" + value.address.geo.lat + "" + value.address.geo.lng + "</td>";
                trStr += "</tr>";
            })
            document.getElementById('ajax_tbody1').innerHTML = trStr;
        }
    }
}
//s.no 1 of set.no (1) 
function add() {
    var sum = 0;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;
    sum += n3 + n4;
    var sum = document.getElementById('total_id').innerHTML = sum++;
}

function multiply() {
    var sum = 0;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;
    sum += n3 * n4;
    var sum = document.getElementById('total_id').innerHTML = sum;
}
function subtract() {
    var sum = 0;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;
    sum += n3 - n4;
    var sum = document.getElementById('total_id').innerHTML = sum;
}
//..s.no (5(2(3))).merge 2 arrays..remove duplicate elements and sort them
function mergeArray() {
    var obj = {};
    var str = "";
    var arr1 = [1, 2, 3];
    var arr2 = [2, 5, 6];
    var result = arr1.concat(arr2); // [1,2,3,2,5,6]
    for (var i = 0; i < result.length; i++) {
        //    let slicedArray = result.slice(i)//[]
        //    if(result[i] )
        var arr = str.length(i);
        for (var j = 0; j < result.length; j++) {
            obj[arr[j]] = arr[j];
            result.str;
        }
    }
    return result;
    console.log(mergeArray(arr1, arr2));
}
//...GET method...//
function getRequest1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://run.mocky.io/v3/d0e0d19a-4b75-48d1-97aa-71b2d2bf5501");
    xhttp.send();
    //callback......
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            var trStr = '';
            var data = response.users;
            data.forEach(function (value, index) {
                console.log(index, value);
                trStr += "<tr>";
                trStr += "<td>" + value.name + "</td>";
                trStr += "<td>" + value.age + "</td>";
                trStr += "<td>" + value.qualification + "</td>";
                trStr += "<td>" + value.hobbies + "</td>";
                //  trStr += "<td>" + value.address.street + "" + value.address.doorNo+ "</td>";
                trStr += "</tr>";
            })
            document.getElementById('ajax_tbody2').innerHTML = trStr;
        }
    }
}
//...remove falsy values..//
function falsy(arr) {
    var value = [];
    for (var i = 0; i < arr.length; i++) {
        (!!arr[i]) ? value.push(arr[i]) : value;
        //   if(typeof arr[i]===undefined && typeof arr[i] ===null && typeof arr[i] ===0 && typeof arr[i] ==="")
        // {  

        // Pop.arr[i];
        // console.log("it is truthy");
        // }
        // else 
        // {
        //     console.log("it is falsy");  
        // }
    }
    return value;

}
// indices of two numbers is equal to the target number..//
function targetval(myarray,trgt)    // x is a array name and y is a target name
{
    
    for (var i = 0; i < myarray.length; i++) 
    {
        for ( var j = (i + 1); j < myarray.length; j++) 
        {
            if (myarray[i] + myarray[j] == trgt) 
            {
                console.log(myarray[i] + "and" + myarray[j]);
            }
            break;
        }
    }
}

// indices of two numbers is equal to the target number..//
//Targtnum([10,20,10,40],30)

function targetval(x,y)    //  x is a array name and y is a target name
{

for(var i=0; i<x.length; i++)
{
    for(var j=(i+1); j<x.length; j++)    //dont want equal to the i and j values...so , give i+1//
    {
        if(x[i]+x[j]==y)   //checking the indices of value is eql to the target(y) value.
        {
            document.getElementById("123").innerHTML = x[i] + " & " + x[j];
        }
        // else
        // {
        //     document.getElementById("123").innerHTML="no pair";
        // }
    }

}
}
