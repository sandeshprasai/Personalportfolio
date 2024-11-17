let text = document.querySelector(".main_text");
let intro =
  "I'm Sandesh Prasai a passionate web designer, just beginning my journey in the world of web development.";
let index = 1;

const typewriter = () => {
  let newtitle = intro.slice(0, index);
  text.innerText = newtitle;

  index>intro.length?index=1:index++

  setTimeout(() => {
    typewriter();
  }, 100);
};
typewriter();



window.addEventListener('load', function () {
  document.querySelector('.image_section').classList.add('loaded');
});