// Example data array
const recentWorks = [
  {
    tumbnailImg: "/assets/images/recent-work-images/adnoc-2024/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event-ADNOC-2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/adnoc-2024/image-1.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-2.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-3.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-4.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/adnoc-2024/thumbnail-two.webp",
    alt: "thumbnail image",
    name: "Government Event-ADNOC-2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/adnoc-2024/image-1.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-2.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-3.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-4.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/adnoc-2024/thumbnail-three.webp",
    alt: "thumbnail image",
    name: "Government Event-ADNOC-2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/adnoc-2024/image-1.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-2.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-3.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-4.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/adnoc-2024/thumbnail-four.webp",
    alt: "thumbnail image",
    name: "Government Event-ADNOC-2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/adnoc-2024/image-1.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-2.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-3.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-4.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/adnoc-2024/thumbnail-five.webp",
    alt: "thumbnail image",
    name: "Government Event-ADNOC-2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/adnoc-2024/image-1.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-2.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-3.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-4.webp",
    ],
  },
];

// Function to generate the swiper slide
const generateSlide = ({ tumbnailImg, alt, name }, index) => `
     <div class="swiper-slide position-relative" data-index="${index}">
      <div class="overflow-hidden position-relative company_img br_4 w-100 d-flex justify-content-center">
        <img src="${tumbnailImg}" alt="${alt}" class="slider-card-img"data-index="${index}">
        <div class="position-absolute gradient_layer_recent_work_img text-center">
            <p class="text-white mb-0 fs-sm fw-800 leading-150 z-1">${name}</p>
        </div>;
      </div>
    </div>
  `;

// Function to populate the lightbox with images
const openLightbox = (projectImages) => {
  const lightboxSlider = document.getElementById("lightboxSlider");
  const lightboxArrow = document.querySelector(".lightbox-arrows");
  lightboxSlider.innerHTML = projectImages
    .map(
      (img) => `
      <div class="swiper-slide">
        <img src="${img}" class="d-block" />
      </div>`
    )
    .join("");

  // Show the modal by adding the active class
  document.getElementById("lightboxModal").classList.add("active");
  if (projectImages.length <= 3) {
    lightboxArrow.classList.add("d-none");
  } else {
    lightboxArrow.classList.remove("d-none");
  }
  console.log(projectImages.length, "projectImagesprojectImagesprojectImages");
  // Initialize Swiper inside the lightbox
  const swiper = new Swiper(".swiper_lighthouse", {
    navigation: {
      nextEl: ".swiper_next",
      prevEl: ".swiper_prev",
    },
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1340: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
};

// Handle thumbnail click event
const handleThumbnailClick = (event) => {
  const index = event.target.getAttribute("data-index");
  const project = recentWorks[index];
  openLightbox(project.projectDetailImage);
  document.body.classList.add("overflow-hidden");
};

// Add the slider thumbnails to the container
const sliderContainer = document.getElementById("sliderContainer");
sliderContainer.innerHTML = recentWorks.map(generateSlide).join("");

// Add event listeners to each thumbnail
sliderContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("slider-card-img")) {
    handleThumbnailClick(event);
  }
});

// Close the lightbox when clicking outside of the image or add a close button
document.getElementById("lightboxModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    document.getElementById("lightboxModal").classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  }
});
// Close lightbox
function closeLightbox() {
  document.getElementById("lightboxModal").classList.remove("active");
  document.body.classList.remove("overflow-hidden");
}