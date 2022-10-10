// With IF ELSE IF

// const random = Math.floor(Math.random() * 100) + 1;
// console.log(random);

// let count = 1;

// let restartbutton = document.getElementById("restartbutton");
// restartbutton.addEventListener("click", function(){location.reload()});

// let submitbutton = document.getElementById("submitbutton");
// let numlbl = document.getElementById("numlbl");
// let catImg = document.getElementById("catimg");

// submitbutton.addEventListener("click", function game(event) {
//     event.preventDefault();
//     let inputname = document.getElementById("inputname").value;
//     let number = document.getElementById("inputnumber").value;
// if (number > random) {
//             console.log("It is less");
//             count++;
//             numlbl.innerHTML = `TRY n°${count}... IT IS LESS, TRY AGAIN:`;
//             document.getElementById("inputnumber").value = "";
// }
// else if (number < random) {
//             console.log("It is more");
//             count++;
//             numlbl.innerHTML = `TRY n°${count}... IT IS MORE, TRY AGAIN:`;
//             document.getElementById("inputnumber").value = "";
// }
// else {
//     if(count === 1) {numlbl.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} try! What a pro! (Or maybe you have a working F12 key)`;
//     console.log(`${inputname} WINS! In ${count} try!`)}
//     else if(count > 1 && count < 10) {numlbl.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} tries! Pretty Good!`;
//     console.log(`${inputname} WINS! In ${count} tries!`)}
//     else {numlbl.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} tries! You're not really good at this, are you?!`;
//     console.log(`${inputname} WINS! In ${count} tries!`)};
//     catImg.style.display = "block";
//     }
// });



//With SWITCH(TRUE)

const random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let count = 1;

let restartbutton = document.getElementById("restartbutton");
restartbutton.addEventListener("click", function () {
  location.reload();
});

let submitbutton = document.getElementById("submitbutton");
let numlbl = document.getElementById("numlbl");
let catImg = document.getElementById("catimg");

submitbutton.addEventListener("click", function game(event) {
  event.preventDefault();
  let inputname = document.getElementById("inputname").value;
  let number = document.getElementById("inputnumber").value;

  switch (true) {
    case (number > random): 
      console.log("It is less");
      count++;
      numlbl.innerHTML = `TRY n°${count}... IT IS LESS than ${number}, TRY AGAIN:`;
      document.getElementById("inputnumber").value = "";
      break;

    case (number < random):
      console.log("It is more");
      count++;
      numlbl.innerHTML = `TRY n°${count}... IT IS MORE than ${number}, TRY AGAIN:`;
      document.getElementById("inputnumber").value = "";
      break;

    case (number == random):
      switch (true) {
        case (count === 1):
          numlbl.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} try! What a pro! (Or maybe you have a working F12 key)`;
          console.log(`${inputname} WINS! In ${count} try!`);
          break;

        case (count > 1 && count < 10):
          numlbl.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} tries! Pretty Good!`;
          console.log(`${inputname} WINS! In ${count} tries!`);
          break;

        default:
          numlbl.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} tries! You're not really good at this, are you?!`;
          console.log(`${inputname} WINS! In ${count} tries!`);
          break;
      }
      catImg.style.display = "block";
      break;

    default:
      console.log("Invalid Input, Try Again");
      numlbl.innerHTML = `Invalid Input, Try again! You're still on try n° ${count}`;
      break;
  }
});