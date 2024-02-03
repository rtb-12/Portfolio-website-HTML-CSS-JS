const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  // multiplier: 0.5,
});

function firstPageAnimations() {
  var tl = gsap.timeline();

  tl.from(".navbar", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".innerclass", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .to(".smallheadings", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1.5,
      stagger: 0.2,
    })
    .from(".bottombar", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1.2,
      ease: Expo.easeInOut,
    });
}

function cursorFollower() {
  window.addEventListener("mousemove", (e) => {
    // console.log(e.clientX, e.clientY);
    document.querySelector(
      ".minicircle"
    ).style = `transform: translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

document.querySelectorAll(".tile").forEach((e) => {
  var rotation = 0;
  var diff_rotation = 0;
  console.log(e); 

  e.addEventListener("mouseleave", (dets) => {  
    gsap.to(e.querySelector("img"), {
    opacity: 0,
    ease: Power3,
    duration: 0.5,
  }); });

  e.addEventListener("mousemove", (dets) => {
    var diff = dets.clientY - e.getBoundingClientRect().top;
    diff_rotation = dets.clientX - rotation;
    rotation = dets.clientX;
    gsap.to(e.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diff_rotation * 0.5),
    });
  });
});

let downArrows = document.getElementsByClassName("ri-arrow-down-circle-fill");
for (let i = 0; i < downArrows.length; i++) {
  downArrows[i].addEventListener("click", () => {
    console.log("clicked");
    scroll.scrollTo('#dummy');
  });
}

document.querySelector(".bottombarheadings h4:nth-child(1)").addEventListener("click", () => {
  scroll.scrollTo('#dummy');
});

document.querySelector(".bottombarheadings h4:nth-child(2)").addEventListener("click", () => {
  scroll.scrollTo('#dummy2');
});

document.querySelector(".bottombarheadings h4:nth-child(3)").addEventListener("click", () => {
  scroll.scrollTo('#dummy3');
});

cursorFollower();
firstPageAnimations();


document.getElementById('spotifyClone').addEventListener('click', function() {
  window.open('https://github.com/rtb-12/Web-Dev-Projects/tree/main/Spotify%20Clone', '_blank');
});

document.getElementById('neuralStyleTransfer').addEventListener('click', function() {
  window.open('https://github.com/rtb-12/Neural-Style-Transfer', '_blank');
});

document.getElementById('signLanguageDetection').addEventListener('click', function() {
  window.open('https://github.com/MDGSpace-SoC-2023/sign-language-detector', '_blank');
});

document.getElementById("a'Muse").addEventListener('click', function() {
  window.open('https://github.com/rtb-12/aMuse', '_blank');
});

document.getElementById('fundFlow').addEventListener('click', function() {
  window.open('https://github.com/rtb-12/FundFlow', '_blank');
});

// Select the h4 where you want to display the time
var timeElement = document.querySelector('.bottombarheadings3-1 h4:nth-child(2)');

// Function to update the time
function updateTime() {
    // Create a new Date object and get the current time
    var now = new Date();
    var time = now.toLocaleTimeString();

    // Set the h4's text to the current time
    timeElement.textContent = time;
}

// Update the time immediately, then every second
updateTime();
setInterval(updateTime, 1000);