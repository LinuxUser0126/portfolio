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
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/10.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/11.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/12.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/13.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/14.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/15.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/16.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/17.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/18.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/19.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/20.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/21.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/22.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/23.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/24.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/25.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/26.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/27.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/28.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/29.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/30.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/31.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/32.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/33.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/34.jpg",
	"C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/35.jpg",
    "C:/Users/Supervisor/Desktop/Portfolio/Image/Lesson1/36.jpg",
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
