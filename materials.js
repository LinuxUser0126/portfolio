// Modal elements
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Image data
const imageSets = {
lesson3: [
"https://i.postimg.cc/7LZ64k5D/Tlesson3.jpg",
"https://i.postimg.cc/bJrV784K/45.jpg",
"https://i.postimg.cc/mDnpRJsh/46.jpg",
"https://i.postimg.cc/kGt15sJs/47.jpg",
"https://i.postimg.cc/pyb05jyH/48.jpg",
"https://i.postimg.cc/bY789Ftz/49.jpg",
"https://i.postimg.cc/MZMqR8XP/50.jpg",
"https://i.postimg.cc/3J2hSCX2/51.jpg",
"https://i.postimg.cc/L8RprYDw/52.jpg",
"https://i.postimg.cc/DwgTFvYZ/53.jpg",
"https://i.postimg.cc/hGtqtkH0/54.jpg",
"https://i.postimg.cc/wB4YyWzY/55.jpg",
"https://i.postimg.cc/B6dWNXth/56.jpg",
"https://i.postimg.cc/66vxqL1F/57.jpg",
"https://i.postimg.cc/mDcfQQZz/58.jpg",
"https://i.postimg.cc/VvMxhmCz/59.jpg",
"https://i.postimg.cc/kXP3b60G/60.jpg",
"https://i.postimg.cc/Z5JGfkKh/61.jpg",
"https://i.postimg.cc/kXNrFMCc/62.jpg",
"https://i.postimg.cc/cLTV2Drt/63.jpg",   
	
lesson2: [
"https://i.postimg.cc/PJ2xPWSL/7.jpg",
"https://i.postimg.cc/dQBDHFJq/8.jpg",
"https://i.postimg.cc/VvYvfGWQ/9.jpg",
"https://i.postimg.cc/mD3hGfMy/10.jpg",
"https://i.postimg.cc/4Nxyj03p/11.jpg",
"https://i.postimg.cc/7Yth4NCd/12.jpg",
"https://i.postimg.cc/GmZp8hxj/13.jpg",
"https://i.postimg.cc/wjtvjsLv/14.jpg",
"https://i.postimg.cc/6QnpdJHx/15.jpg",
"https://i.postimg.cc/KzbvfqVk/16.jpg",
"https://i.postimg.cc/3NS8KKwm/17.jpg",
"https://i.postimg.cc/hj0458WC/18.jpg",
"https://i.postimg.cc/HnsWDJTT/19.jpg",
"https://i.postimg.cc/9XJFPBB0/20.jpg",
"https://i.postimg.cc/X7qNsy28/21.jpg",
"https://i.postimg.cc/3Jq8VJVH/22.jpg",
"https://i.postimg.cc/rwtVk22R/23.jpg",
"https://i.postimg.cc/QMGXNYj4/24.jpg",
"https://i.postimg.cc/wBX915v6/25.jpg",
"https://i.postimg.cc/RFv4K36w/26.jpg",
"https://i.postimg.cc/7h64tpN6/27.jpg",
"https://i.postimg.cc/rF7TgZRV/28.jpg",
"https://i.postimg.cc/bNZ8xfJV/29.jpg",
"https://i.postimg.cc/wMGpC0Wk/30.jpg",
],
lesson1: [
"https://i.postimg.cc/8zDcyWD7/Tlesson1.jpg",
"https://i.postimg.cc/j2j3rT9p/11.jpg",
"https://i.postimg.cc/LXDQ75yk/12.jpg",
"https://i.postimg.cc/1XYCmT1f/13.jpg",
"https://i.postimg.cc/nVdwGs9p/14.jpg",
"https://i.postimg.cc/fTJq2wYX/15.jpg",
"https://i.postimg.cc/T3b7xC73/16.jpg",
"https://i.postimg.cc/BQkYRdCz/17.jpg",
"https://i.postimg.cc/cJNDLw2M/18.jpg",
"https://i.postimg.cc/hj2Mswjp/19.jpg",
"https://i.postimg.cc/yd1vFBVD/20.jpg",
"https://i.postimg.cc/rpCf0zL6/21.jpg",
"https://i.postimg.cc/wM32GVRH/22.jpg",
"https://i.postimg.cc/XqhLSC95/23.jpg",
"https://i.postimg.cc/tRm2VL8g/24.jpg",
"https://i.postimg.cc/m2zV3mGy/25.jpg",
"https://i.postimg.cc/htVr6hvJ/26.jpg",
"https://i.postimg.cc/Qx2mfc8G/27.jpg",
"https://i.postimg.cc/d0B9QX8w/28.jpg",
"https://i.postimg.cc/mrRwsR1m/29.jpg",
"https://i.postimg.cc/269FhZct/30.jpg",
"https://i.postimg.cc/Rh31RZ2Z/31.jpg",
"https://i.postimg.cc/mZqyr7Fz/32.jpg",
"https://i.postimg.cc/MHh7r88b/33.jpg",
"https://i.postimg.cc/jd7QnCz8/34.jpg",
"https://i.postimg.cc/qvHcs0wp/35.jpg",
"https://i.postimg.cc/pLQfk7cz/36.jpg",
  ],
  student1: [
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/1.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/2.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/3.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/4.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/5.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/6.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/7.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/8.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork/9.jpg",
  ],
  student2: [
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork2/6.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork2/7.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork2/8.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork2/9.jpg",
    //"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork2/5.jpg",
  ],
  student3: [
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork3/1.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork3/2.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork3/3.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork3/4.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/StudentWork3/5.jpg",
  ],
};

let currentImages = [];
let currentIndex = 0;

// Open modal
document.querySelectorAll('.zoomable-image').forEach((image) => {
  image.addEventListener('click', (e) => {
    const context = e.target.getAttribute('data-context');
    currentImages = imageSets[context];
    currentIndex = 0;
    if (currentImages) {
      modalImage.src = currentImages[currentIndex];
      imageModal.classList.add('active');
    }
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  imageModal.classList.remove('active');
});

// Navigate images
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
});
