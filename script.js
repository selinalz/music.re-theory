// //show pressed keyboards
// let result = document.querySelector("#result");

// document.addEventListener("keydown", function(event){
//   console.log(event);
//   console.log("keypressed:")
//   console.log(event.key)
//   result.innerText = event.key;
// })

// create web audio api context
const audioCtx = new AudioContext();
// create Oscillator node
const oscillator = audioCtx.createOscillator();

//add notes when key pressed
document.addEventListener('keydown', function (event) {
	let container = document.createElement("div");
    container.classList.add("container");
    document.querySelector(".main").append(container);
  
  //key a = A
  if (event.key === 'a') {
  	let box = document.createElement("div");
  	box.classList.add("box");
  	let container = document.getElementsByClassName("container") [0];
  	container.append(box);
    box.style.left = "Math.floor(Math.random() * 10)%";
    box.style.top = "Math.floor(Math.random() * 10)%";
  	let note = document.createElement("note");
  	note.classList.add("note");
  	box.append(note);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(100, audioCtx.currentTime); // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    // oscillator.stop(audioCtx.currentTime + 5);
  }

  //key c = C
  if (event.key === 'c') {
    let box = document.createElement("div");
    box.classList.add("box");
    let container = document.getElementsByClassName("container") [0];
    container.append(box);
    box.style.left = "45%";
    box.style.top = "-5%";
    let note = document.createElement("note");
    note.classList.add("note");
    box.append(note);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(150, audioCtx.currentTime); // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    // oscillator.stop(audioCtx.currentTime + 5);
}

//key space bar pressed, page refreshes
if (event.key === ' '){
    window.location.reload();
  }

});