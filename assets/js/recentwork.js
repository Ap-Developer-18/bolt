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
      "/assets/images/recent-work-images/adnoc-2024/image-5.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-6.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-7.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-8.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-9.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-10.webp",
      "/assets/images/recent-work-images/adnoc-2024/image-11.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/budget-cycle-2024/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - budget cycle 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/budget-cycle-2024/image-1.webp",
      "/assets/images/recent-work-images/budget-cycle-2024/image-2.webp",
      "/assets/images/recent-work-images/budget-cycle-2024/image-3.webp",
      "/assets/images/recent-work-images/budget-cycle-2024/image-4.webp",
      "/assets/images/recent-work-images/budget-cycle-2024/image-5.webp",
      "/assets/images/recent-work-images/budget-cycle-2024/image-6.webp",
      "/assets/images/recent-work-images/budget-cycle-2024/image-7.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/budget-cycle-2024-second/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - budget cycle 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/budget-cycle-2024-second/image-1.webp",
      "/assets/images/recent-work-images/budget-cycle-2024-second/image-2.webp",
      "/assets/images/recent-work-images/budget-cycle-2024-second/image-3.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/department-of-finance-2024/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - Department of Finance 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/department-of-finance-2024/image-1.webp",
      "/assets/images/recent-work-images/department-of-finance-2024/image-2.webp",
      "/assets/images/recent-work-images/department-of-finance-2024/image-3.webp",
      "/assets/images/recent-work-images/department-of-finance-2024/image-4.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/department-of-finance-2024-second/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - Department of Finance 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/department-of-finance-2024-second/image-1.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-second/image-2.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-second/image-3.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-second/image-4.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-second/image-5.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/dubai-world-cup-2024/thumbnail.webp",
    alt: "thumbnail image",
    name: "DP WORLD VIP CHALET - DUBAI WORLD CUP 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-1.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-2.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-3.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-4.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-5.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-6.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-7.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-8.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-9.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-10.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-11.webp",
      "/assets/images/recent-work-images/dubai-world-cup-2024/image-12.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023/thumbnail.webp",
    alt: "thumbnail image",
    name: "Fujairah Mountain Shooting Championship Event - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023/image-1.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023/image-2.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023/image-3.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-second/thumbnail.webp",
    alt: "thumbnail image",
    name: "Fujairah Mountain Shooting Championship Event - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-second/image-1.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-second/image-2.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-second/image-3.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-second/image-4.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-second/image-5.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-second/image-6.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-second/image-7.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/government-event-2022/thumbnail.webp",
    alt: "thumbnail image",
    name: "Albader Festival - Government Event - 2022",
    projectDetailImage: [
      "/assets/images/recent-work-images/government-event-2022/image-1.webp",
      "/assets/images/recent-work-images/government-event-2022/image-2.webp",
      "/assets/images/recent-work-images/government-event-2022/image-3.webp",
      "/assets/images/recent-work-images/government-event-2022/image-4.webp",
      "/assets/images/recent-work-images/government-event-2022/image-5.webp",
      "/assets/images/recent-work-images/government-event-2022/image-6.webp",
      "/assets/images/recent-work-images/government-event-2022/image-7.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/government-event-2022-second/thumbnail.webp",
    alt: "thumbnail image",
    name: "Albader Festival - Government Event - 2022",
    projectDetailImage: [
      "/assets/images/recent-work-images/government-event-2022-second/image-1.webp",
      "/assets/images/recent-work-images/government-event-2022-second/image-2.webp",
      "/assets/images/recent-work-images/government-event-2022-second/image-3.webp",
      "/assets/images/recent-work-images/government-event-2022-second/image-4.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/fca-2024/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - FCA - 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/fca-2024/image-1.webp",
      "/assets/images/recent-work-images/fca-2024/image-2.webp",
      "/assets/images/recent-work-images/fca-2024/image-3.webp",
      "/assets/images/recent-work-images/fca-2024/image-4.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/ewaa-2023/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - EWAA - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/ewaa-2023/image-1.webp",
      "/assets/images/recent-work-images/ewaa-2023/image-2.webp",
      "/assets/images/recent-work-images/ewaa-2023/image-3.webp",
      "/assets/images/recent-work-images/ewaa-2023/image-4.webp",
      "/assets/images/recent-work-images/ewaa-2023/image-5.webp",
      "/assets/images/recent-work-images/ewaa-2023/image-6.webp",
      "/assets/images/recent-work-images/ewaa-2023/image-7.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/adsg-2022/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - ADSG - 2022",
    projectDetailImage: [
      "/assets/images/recent-work-images/adsg-2022/image-1.webp",
      "/assets/images/recent-work-images/adsg-2022/image-2.webp",
      "/assets/images/recent-work-images/adsg-2022/image-3.webp",
      "/assets/images/recent-work-images/adsg-2022/image-4.webp",
      "/assets/images/recent-work-images/adsg-2022/image-5.webp",
      "/assets/images/recent-work-images/adsg-2022/image-6.webp",
      "/assets/images/recent-work-images/adsg-2022/image-7.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/enoc-2023/thumbnail.webp",
    alt: "thumbnail image",
    name: "ENOC - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/enoc-2023/image-1.webp",
      "/assets/images/recent-work-images/enoc-2023/image-2.webp",
      "/assets/images/recent-work-images/enoc-2023/image-3.webp",
      "/assets/images/recent-work-images/enoc-2023/image-4.webp",
      "/assets/images/recent-work-images/enoc-2023/image-5.webp",
      "/assets/images/recent-work-images/enoc-2023/image-6.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/admo-2024/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - ADMO - 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/admo-2024/image-1.webp",
      "/assets/images/recent-work-images/admo-2024/image-2.webp",
      "/assets/images/recent-work-images/admo-2024/image-3.webp",
      "/assets/images/recent-work-images/admo-2024/image-4.webp",
      "/assets/images/recent-work-images/admo-2024/image-5.webp",
      "/assets/images/recent-work-images/admo-2024/image-6.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/adnoc-2024-second/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - ADNOC - 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/adnoc-2024-second/image-1.webp",
      "/assets/images/recent-work-images/adnoc-2024-second/image-2.webp",
      "/assets/images/recent-work-images/adnoc-2024-second/image-3.webp",
      "/assets/images/recent-work-images/adnoc-2024-second/image-4.webp",
      "/assets/images/recent-work-images/adnoc-2024-second/image-5.webp",
      "/assets/images/recent-work-images/adnoc-2024-second/image-6.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/flag-day-2024/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - Flag Day - 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/flag-day-2024/image-1.webp",
      "/assets/images/recent-work-images/flag-day-2024/image-2.webp",
      "/assets/images/recent-work-images/flag-day-2024/image-3.webp",
      "/assets/images/recent-work-images/flag-day-2024/image-4.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-third/thumbnail.webp",
    alt: "thumbnail image",
    name: "Fujairah Mountain Shooting Championship Event - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-third/image-1.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-third/image-2.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-third/image-3.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-third/image-4.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/department-of-finance-2024-third/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - Department of Finance - 2024",
    projectDetailImage: [
      "/assets/images/recent-work-images/department-of-finance-2024-third/image-1.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-third/image-2.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-third/image-3.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-third/image-4.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-third/image-5.webp",
      "/assets/images/recent-work-images/department-of-finance-2024-third/image-6.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-fourth/thumbnail.webp",
    alt: "thumbnail image",
    name: "Fujairah Mountain Shooting Championship Event - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-fourth/image-1.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-fourth/image-2.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-fourth/image-3.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-fourth/image-4.webp",
      "/assets/images/recent-work-images/fujairah-mountain-shooting-event-2023-fourth/image-5.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/crown-prince-office-2023/thumbnail.webp",
    alt: "thumbnail image",
    name: "CROWN PRINCE OFFICE - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/crown-prince-office-2023/image-1.webp",
      "/assets/images/recent-work-images/crown-prince-office-2023/image-2.webp",
      "/assets/images/recent-work-images/crown-prince-office-2023/image-3.webp",
      "/assets/images/recent-work-images/crown-prince-office-2023/image-4.webp",
    ],
  },
  {
    tumbnailImg: "/assets/images/recent-work-images/lexus-2023/thumbnail.webp",
    alt: "thumbnail image",
    name: "LEXUS - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/lexus-2023/image-1.webp",
      "/assets/images/recent-work-images/lexus-2023/image-2.webp",
      "/assets/images/recent-work-images/lexus-2023/image-3.webp",
      "/assets/images/recent-work-images/lexus-2023/image-4.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/annual-investor-meet-2023/thumbnail.webp",
    alt: "thumbnail image",
    name: "ANNUAL INVESTOR MEET - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/annual-investor-meet-2023/image-1.webp",
      "/assets/images/recent-work-images/annual-investor-meet-2023/image-2.webp",
      "/assets/images/recent-work-images/annual-investor-meet-2023/image-3.webp",
      "/assets/images/recent-work-images/annual-investor-meet-2023/image-4.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/neom-stand-cityscape-2023/thumbnail.webp",
    alt: "thumbnail image",
    name: "NEOM STAND - CITYSCAPE - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/neom-stand-cityscape-2023/image-1.webp",
      "/assets/images/recent-work-images/neom-stand-cityscape-2023/image-2.webp",
      "/assets/images/recent-work-images/neom-stand-cityscape-2023/image-3.webp",
      "/assets/images/recent-work-images/neom-stand-cityscape-2023/image-4.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/albader-festival-government-event-2022/thumbnail.webp",
    alt: "thumbnail image",
    name: "Albader Festival Event Government Event - 2022",
    projectDetailImage: [
      "/assets/images/recent-work-images/albader-festival-government-event-2022/image-1.webp",
      "/assets/images/recent-work-images/albader-festival-government-event-2022/image-2.webp",
      "/assets/images/recent-work-images/albader-festival-government-event-2022/image-3.webp",
      "/assets/images/recent-work-images/albader-festival-government-event-2022/image-4.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/government-event-2023/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/government-event-2023/image-1.webp",
      "/assets/images/recent-work-images/government-event-2023/image-2.webp",
      "/assets/images/recent-work-images/government-event-2023/image-3.webp",
      "/assets/images/recent-work-images/government-event-2023/image-4.webp",
      "/assets/images/recent-work-images/government-event-2023/image-5.webp",
      "/assets/images/recent-work-images/government-event-2023/image-6.webp",
      "/assets/images/recent-work-images/government-event-2023/image-7.webp",
      "/assets/images/recent-work-images/government-event-2023/image-8.webp",
      "/assets/images/recent-work-images/government-event-2023/image-9.webp",
    ],
  },
  {
    tumbnailImg:
      "/assets/images/recent-work-images/government-event-2023-second/thumbnail.webp",
    alt: "thumbnail image",
    name: "Government Event - 2023",
    projectDetailImage: [
      "/assets/images/recent-work-images/government-event-2023-second/image-1.webp",
      "/assets/images/recent-work-images/government-event-2023-second/image-2.webp",
      "/assets/images/recent-work-images/government-event-2023-second/image-3.webp",
      "/assets/images/recent-work-images/government-event-2023-second/image-4.webp",
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