// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('start-btn').addEventListener('click', showMap);
//   document.getElementById('red-zone').addEventListener('click', showRedZone);
// });

// function showMap() {
//   setActiveScreen('screen2');
// }

// function showRedZone() {
//   setActiveScreen('screen3');
//   const screen3 = document.getElementById('screen3');

//   screen3.classList.add('screen-zoom-in');

//   screen3.addEventListener('animationend', () => {
//     screen3.classList.remove('screen-zoom-in');
//   });

//   generateSeats();
// }

// function setActiveScreen(screenId) {
//   document.querySelectorAll('.screen').forEach(screen => {
//     screen.classList.remove('active', 'screen-zoom-in');
//   });
//   document.getElementById(screenId)?.classList.add('active');
// }

// function generateSeats() {
//   const seatsContainer = document.querySelector('.seats-grid');
//   if (!seatsContainer) return;

//   seatsContainer.innerHTML = '';

//   for (let i = 1; i <= 28; i++) {
//     const seat = document.createElement('div');
//     seat.classList.add('seat');

//     seat.addEventListener('click', () => toggleSeatBooking(seat, i));

//     seatsContainer.appendChild(seat);
//   }
// }

// function toggleSeatBooking(seat, seatNumber) {
//   if (seat.classList.contains('booked')) {
//     if (
//       confirm(`Seat ${seatNumber} is already booked. Do you want to cancel it?`)
//     ) {
//       seat.classList.remove('booked');
//     }
//   } else {
//     seat.classList.add('booked');
//   }
// }

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
    // if (
    confirm(`Seat ${seatNumber} is already booked. Do you want to cancel it?`);
    // ) {
    //   seat.classList.remove('booked');
    // }
  } else {
    seat.classList.add('change');
  }
}
