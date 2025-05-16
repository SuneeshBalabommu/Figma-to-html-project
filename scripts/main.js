document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navbar ul li");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menuItems.forEach((el) => el.classList.remove("active"));

      this.classList.add("active");
    });
  });
});

function playPause() {
  var video = document.querySelector("#myVideo");
  if (video.paused) {
    video.play();
    $('.play').addClass("plo");
  }
  else {
    video.pause();
    $('.play').removeClass("plo");
  }
}

$(".nav-opener").click(function () {
  $('.navbar ul').animate({
    height: 'toggle'
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Debug log to verify the script is running
  console.log("Responsive carousel script loaded");
  
  // Select all necessary elements
  const wrapper = document.querySelector('.carousal-wrapper');
  const items = document.querySelectorAll('.carousal-box .item');
  const dots = document.querySelectorAll('.carousel-dot');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  
  // Exit if essential elements aren't found
  if (!wrapper || items.length === 0) {
    console.error("Critical carousel elements not found!");
    return;
  }
  
  let currentIndex = 0;
  const totalItems = items.length;
  
  // Touch handling variables
  let touchStartX = 0;
  let touchEndX = 0;
  let isDragging = false;
  let startTranslate = 0;
  let currentTranslate = 0;
  
  // Function to update carousel position and active dot
  function updateCarousel() {
    // Update carousel position
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update active dot indicators
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // Go to previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }
  
  // Go to next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }
  
  // Set up arrow click events for desktop only
  if (leftArrow) {
    leftArrow.addEventListener('click', function(e) {
      e.preventDefault();
      prevSlide();
    });
  }
  
  if (rightArrow) {
    rightArrow.addEventListener('click', function(e) {
      e.preventDefault();
      nextSlide();
    });
  }
  
  // Setup dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      currentIndex = index;
      updateCarousel();
    });
  });
  
  // Touch events for mobile swipe
  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
    startTranslate = -currentIndex * 100;
    
    // Stop any automatic transition during manual swipe
    wrapper.style.transition = 'none';
  }
  
  function handleTouchMove(e) {
    if (!isDragging) return;
    
    touchEndX = e.touches[0].clientX;
    const diff = touchEndX - touchStartX;
    
    // Calculate how far to move based on drag distance
    const movePercentage = (diff / window.innerWidth) * 100;
    currentTranslate = startTranslate + movePercentage;
    
    // Apply some resistance when swiping beyond the first or last slide
    if (currentIndex === 0 && movePercentage > 0) {
      currentTranslate = startTranslate + (movePercentage * 0.3);
    } else if (currentIndex === totalItems - 1 && movePercentage < 0) {
      currentTranslate = startTranslate + (movePercentage * 0.3);
    }
    
    wrapper.style.transform = `translateX(${currentTranslate}%)`;
  }
  
  function handleTouchEnd() {
    if (!isDragging) return;
    isDragging = false;
    
    // Restore transition effect for slide changes
    wrapper.style.transition = 'transform 0.5s ease-in-out';
    
    const diff = touchEndX - touchStartX;
    
    // If swipe distance is significant enough, move to next/prev slide
    // Threshold is based on 15% of the screen width
    const threshold = window.innerWidth * 0.15;
    
    if (diff > threshold) {
      // Swipe right - go to previous
      prevSlide();
    } else if (diff < -threshold) {
      // Swipe left - go to next
      nextSlide();
    } else {
      // Not enough movement - return to current slide
      updateCarousel();
    }
  }
  
  // Add touch event listeners to the carousel wrapper
  wrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
  wrapper.addEventListener('touchmove', handleTouchMove, { passive: true });
  wrapper.addEventListener('touchend', handleTouchEnd);
  
  // Initialize carousel position
  updateCarousel();
  
  // Handle keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });
});
const country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

function populateCountryDropdown() {
  const countrySelect = document.getElementById('country');

  const emptyOption = document.createElement('option');
  emptyOption.value = "";
  emptyOption.textContent = "";
  countrySelect.appendChild(emptyOption);

  country_list.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
}

function initializeForm() {
  populateCountryDropdown();

  const inputFields = document.querySelectorAll('.input-field');

  inputFields.forEach(field => {
    if (field.value) {
      field.classList.add('focus');
    }

    field.addEventListener('focus', () => {
      field.classList.add('focus');
    });

    field.addEventListener('blur', () => {
      if (!field.value) {
        field.classList.remove('focus');
      }
    });

    if (field.tagName === 'SELECT') {
      field.addEventListener('change', () => {
        if (field.value) {
          field.classList.add('focus');
        } else {
          field.classList.remove('focus');
        }
      });
    }
  });
}

function clearFormFields() {
  const inputFields = document.querySelectorAll('.input-field');

  inputFields.forEach(field => {
    field.value = '';
    field.classList.remove('focus');
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validate() {
  let isValid = true;
  const requiredFields = document.querySelectorAll('.input-field[required], #country');

  requiredFields.forEach(field => {
    const parent = field.parentElement;

    if (!field.value.trim()) {
      parent.classList.add('empty');
      isValid = false;
    } else {
      parent.classList.remove('empty');
    }
  });

  const emailField = document.getElementById('b-name');
  const emailParent = emailField.parentElement;

  if (emailField.value.trim() && !isValidEmail(emailField.value)) {
    emailParent.classList.add('empty');

    const errorTooltip = emailParent.querySelector('.empty-tooltip p');
    if (errorTooltip) {
      errorTooltip.textContent = "Please enter a valid email address.";
    }

    isValid = false;
  } else if (!emailField.value.trim()) {
    const errorTooltip = emailParent.querySelector('.empty-tooltip p');
    if (errorTooltip) {
      errorTooltip.textContent = "This field can't be empty. Please fill it in.";
    }
  }

  if (isValid) {
    saveFormData();
    clearFormFields();
    window.open('thankyou.html', '_blank');
  }
}

function saveFormData() {
  const formData = {
    firstName: document.getElementById('f-name').value,
    lastName: document.getElementById('l-name').value,
    email: document.getElementById('b-name').value,
    company: document.getElementById('c-name').value,
    country: document.getElementById('country').value
  };

  console.log('Form data:', formData);
}

document.addEventListener('DOMContentLoaded', initializeForm);

