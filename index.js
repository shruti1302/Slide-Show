let pic1 ='https://images.unsplash.com/photo-1558881935-e1a1edef0091?ixlib=rb-1.2.1&auto=format&fit=crop&w=978&q=80';
let pic2 ='https://images.unsplash.com/photo-1586168728626-a4656ba1f46d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
let pic3 ='https://images.unsplash.com/photo-1431620828042-54af7f3a9e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80';
let pic4 ='https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

let picSources = [pic1, pic2, pic3, pic4];
let noOfPics = picSources.length;

let img = new Image();
img.src = picSources[0];
img.width = 500;
img.height = 375;
img.alt = 'Picture';
img.classList.add('image-border');

document.getElementById('picture').appendChild(img);

function selectPicture() {
  let pictureNo = document.pictureForm.picNo.value - 1;
  console.log(pictureNo);
  img.src = picSources[pictureNo];
  if (pictureNo > noOfPics - 1 || pictureNo < 0) {
    document.getElementById('result').innerHTML = 'There are ' + noOfPics + ' pictures. Please fill the value between 1 and ' + noOfPics +'.';
    img.src = picSources[0];
  }
}

function firstPicture() {
  img.src = picSources[0];
}

function lastPicture() {
  img.src = picSources[noOfPics - 1];
}

function nextPicture() {
  let presentImage = document.querySelector('img');
  let presentImageSrc = presentImage.src;
  let presentImageIndex = picSources.indexOf(presentImageSrc);
  img.src = picSources[presentImageIndex + 1];
  if (presentImageIndex === noOfPics - 1) {
    img.src = picSources[0];
  }
}

function prevPicture() {
  let presentImage = document.querySelector('img');
  let presentImageSrc = presentImage.src;
  let presentImageIndex = picSources.indexOf(presentImageSrc);
  img.src = picSources[presentImageIndex - 1];
  if (presentImageIndex === 0) {
    img.src = picSources[noOfPics - 1];
  }
}
