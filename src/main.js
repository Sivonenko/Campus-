document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('close-modal');
  const startBtn = document.getElementById('start-btn');

  modal.style.display = 'flex';

  startBtn.addEventListener('click', () => closeModalWindow(modal));
  closeModal.addEventListener('click', () => closeModalWindow(modal));

  document.getElementById('red-zone').addEventListener('click', showRedZone);
});

function closeModalWindow(modal) {
  modal.style.display = 'none';
}

function showRedZone() {
  setActiveScreen('screen3');
  const screen3 = document.getElementById('screen3');

  screen3.classList.add('screen-zoom-in');

  screen3.addEventListener('animationend', () => {
    screen3.classList.remove('screen-zoom-in');
  });

  generateSeats();
}

function setActiveScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active', 'screen-zoom-in');
  });
  document.getElementById(screenId)?.classList.add('active');
}

function generateSeats() {
  const seatsContainer = document.querySelector('.seats-grid');
  if (!seatsContainer) return;

  seatsContainer.innerHTML = '';

  for (let i = 1; i <= 28; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');

    // Рандомно встановлюємо клас 'booked'
    if (Math.random() < 0.3) {
      // 30% шанс зробити місце зайнятим
      seat.classList.add('booked');
    }

    seat.addEventListener('click', () => toggleSeatBooking(seat, i));

    seatsContainer.appendChild(seat);
  }
}

function toggleSeatBooking(seat, seatNumber) {
  if (seat.classList.contains('booked')) {
    confirm(`Seat ${seatNumber} is already booked. Do you want to cancel it?`);
  } else {
    seat.classList.add('change');
  }
}

//////Validation logic//////
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', () => validateEmailField(emailInput));
emailInput.addEventListener('blur', () => validateEmailField(emailInput));

passwordInput.addEventListener('input', () =>
  validatePasswordField(passwordInput)
);
passwordInput.addEventListener('blur', () =>
  validatePasswordField(passwordInput)
);

document
  .getElementById('registration-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const isEmailValid = validateEmailField(emailInput);
    const isPasswordValid = validatePasswordField(passwordInput);

    if (isEmailValid && isPasswordValid) {
      alert('Form submitted successfully!');
    }
  });

function validateEmailField(input) {
  const emailValue = input.value.trim();
  const errorElement = document.getElementById('email-error');
  if (!validateEmail(emailValue)) {
    showFieldError(input, errorElement, 'Invalid email address.');
    return false;
  } else {
    clearFieldError(input, errorElement);
    return true;
  }
}

function validatePasswordField(input) {
  const passwordValue = input.value.trim();
  const errorElement = document.getElementById('password-error');
  if (passwordValue.length < 6) {
    showFieldError(
      input,
      errorElement,
      'Password must be at least 6 characters.'
    );
    return false;
  } else {
    clearFieldError(input, errorElement);
    return true;
  }
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function showFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.display = 'block';
  input.classList.add('invalid');
}

function clearFieldError(input, errorElement) {
  errorElement.textContent = '';
  errorElement.style.display = 'none';
  input.classList.remove('invalid');
}
