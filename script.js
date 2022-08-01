const Slideable = document.getElementById('hero-image');
const LeftArrow = document.getElementById('leftarrow');
const RightArrow = document.getElementById('rightarrow');
const Hamburger = document.getElementById('ham-menu');
const Links = document.getElementById('links');
const MainLogo = document.getElementById('logo');
const NavDiv = document.getElementById('navigation') 
const MainLinks = document.querySelector('anchors')
const Close = document.getElementById('close-icon')

let ImageArray = [
  'images/desktop-image-hero-1.jpg',
  'images/desktop-image-hero-2.jpg',
  'images/desktop-image-hero-3.jpg',
]

let ImageIndex = 0




LeftArrow.onclick = () => {
  if (ImageIndex <= 0) {
    ImageIndex = 0
  } else {
    ImageIndex--;
  }
  Slideable.style.background = `url(${ImageArray[ImageIndex]}) `
  Slideable.style.backgroundPosition = 'center'
  Slideable.style.backgroundSize = 'cover'
}

RightArrow.onclick = () => {
  if (ImageIndex >= ImageArray.length - 1 ) {
    ImageIndex = ImageArray.length -1
  } else {
    ImageIndex++;
  }
  Slideable.style.background = `url(${ImageArray[ImageIndex]})`
  Slideable.style.backgroundPosition = 'center'
  Slideable.style.backgroundSize = 'cover'
}

Hamburger.onclick = () => {
  Hamburger.style.display ='none';
  MainLogo.style.display = 'none'
  Links.style.display ='flex';
  NavDiv.style.margin = '0'
  NavDiv.style.width = '100%'
}

Close.onclick = () => {
  Links.style.display ='none'
  Hamburger.style.display ='flex';
  MainLogo.style.display = 'flex'
}



