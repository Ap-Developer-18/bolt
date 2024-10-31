const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  state: "",
};

let formValues = { ...initialValue };
let formErrors = {};
let isSubmitted = false;

// Handle input changes
function handleInputChange(event) {
  const { name, value } = event.target;
  formValues = { ...formValues, [name]: value };

  if (isSubmitted) {
    validateField(name, value);
  }
}

// Realtime validation using ternary operators
function validateField(name, value) {
  formErrors[name] = !value
    ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
    : name === "email"
    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? undefined
      : "Invalid email format"
    : name === "phone"
    ? /^\d{10}$/.test(value)
      ? undefined
      : "Invalid phone number format"
    : undefined;

  // Show error messages
  document.getElementById(`${name}Error`).innerText = formErrors[name] || "";
}

// Validate the entire form using ternary operators
function validateForm() {
  let isValid = true;
  Object.keys(formValues).forEach((key) => {
    formErrors[key] = !formValues[key]
      ? `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
      : undefined;
    isValid = isValid && !formErrors[key];

    // Show all errors after submit
    document.getElementById(`${key}Error`).innerText = formErrors[key] || "";
  });
  return isValid;
}

// Form submit function
function handleSubmit(event) {
  event.preventDefault();
  isSubmitted = true;

  if (validateForm()) {
    document.querySelector(".submit-successfully").classList.add("top-20");
    document.body.classList.add("overflow-hidden");
    // After form submission, reset values
    setTimeout(() => {
      document.querySelector(".submit-successfully").classList.remove("top-20");
      document.body.classList.remove("overflow-hidden");
    }, 2000);
    formValues = { ...initialValue };
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    isSubmitted = false;

    // Clear error messages after reset
    Object.keys(formErrors).forEach((key) => {
      document.getElementById(`${key}Error`).innerText = "";
    });
  }
}
// COUNTER
document.addEventListener("DOMContentLoaded", function () {
  const counters = [
    { element: document.getElementById("counter1"), targetNumber: 150 },
    { element: document.getElementById("counter2"), targetNumber: 50 },
    { element: document.getElementById("counter3"), targetNumber: 100 },
    { element: document.getElementById("counter4"), targetNumber: 20 },
  ];

  let duration = 6000;

  counters.forEach((counter) => {
    if (!counter.element) return; // Check if the element exists

    let isCounting = false;

    // Add the + sign to the elements initially
    counter.element.textContent = "0+";

    function startCounting(counterElement, targetNumber) {
      let currentNumber = 0;
      let increment = targetNumber / (duration / 20);

      function count() {
        if (currentNumber < targetNumber) {
          currentNumber += increment;
          // Only update the number, keep the + sign static
          counterElement.textContent = Math.floor(currentNumber) + "+";
          requestAnimationFrame(count);
        } else {
          counterElement.textContent = targetNumber + "+";
        }
      }

      count();
    }

    function checkVisibility() {
      let rect = counter.element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        if (!isCounting) {
          isCounting = true;
          startCounting(counter.element, counter.targetNumber);
        }
      }
    }

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
  });
});
// RECENT WORK TABS
document.querySelectorAll(".tab_heading").forEach((tab, index) => {
  tab.addEventListener("click", function () {
    // Hide all tab contents
    document.querySelectorAll(".tab_content").forEach((content) => {
      content.style.display = "none";
    });

    // Remove active class from all tab buttons
    document.querySelectorAll(".tab_heading").forEach((button) => {
      button.classList.remove("active");
    });

    // Show the clicked tab's content
    document.querySelector(
      `.tab_content[data-content="${index}"]`
    ).style.display = "block";

    // Add active class to the clicked tab
    this.classList.add("active");
  });
});