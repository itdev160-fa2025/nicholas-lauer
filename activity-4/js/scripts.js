// Welcome Message

var user = "Nick";
var salutation = "Hello, ";
var greeting = salutation + user + "! Check out the latest reviews on the NS7iii.";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

//prpduct price
    var price = 1500;
    studentDiscount = .10;
    var studentPrice = price - (price * studentDiscount);
    priceEl = document.getElementById("price");
    studentPriceEl = document.getElementById("student-price");

    priceEl.textContent = price.toFixed(2);
    studentPriceEl.textContent = studentPrice.toFixed(2);