// Modal elements
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Image data
const imageSets = {
  lesson3: [
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/44.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/45.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/46.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/47.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/48.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/49.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/50.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/51.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/52.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/53.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/54.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/55.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/56.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/57.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/58.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/59.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/60.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/61.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/62.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson3/63.jpg",
   
  ],
  lesson2: [
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/7.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/8.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/9.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/10.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/11.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/12.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/13.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/14.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/15.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/16.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/17.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/18.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/19.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/20.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/21.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/22.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/23.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/24.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/25.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/26.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/27.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/28.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/29.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson2/30.jpg",
  
  ],
lesson1: [
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
