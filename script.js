const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile = document.getElementById('profile');
const name = document.getElementById('name');
const date = document.getElementById('date');

setTimeout(getData,2000)

const animated_bgs = document.querySelectorAll('.animated-bg');
const text_bgs = document.querySelectorAll('.animated-bg-text');

function getData() {
  header.innerHTML = ` <img src="laptop2.jpg" alt="">`
  title.innerHTML = `<h3> Lorem ipsum dolor sit amet.</h3>`
  excerpt.innerHTML = `<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit Vel, rerum.</p>`
  profile.innerHTML = `<img src ="https://randomuser.me/api/portraits/men/44.jpg">`
  name.innerHTML = `<strong> John Doe </strong>`
  date.innerHTML = `<small> July 15 , 2022 </small>`


  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  text_bgs.forEach(bg => bg.classList.remove('animated-bg-text'))
}
