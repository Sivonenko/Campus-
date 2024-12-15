document.addEventListener('DOMContentLoaded', () => {
  const coffeeBtn = document.getElementById('coffee-btn');
  const lunchBtn = document.getElementById('lunch-btn');
  const coffeeModal = document.getElementById('coffee-modal');
  const lunchModal = document.getElementById('lunch-modal');
  const closeCoffee = document.getElementsByClassName('link-back');
  const closeLunch = document.getElementsByClassName('link-back');
  const screenTicket = document.getElementById('screen-ticket');

  if (coffeeBtn) {
    coffeeBtn.addEventListener('click', () => {
      console.log('Coffee modal should open');
      screenTicket.style.display = 'none';
      coffeeModal.style.display = 'flex';
    });
  }

  if (lunchBtn) {
    lunchBtn.addEventListener('click', () => {
      console.log('Lunch modal should open');
      lunchModal.style.display = 'flex';
      screenTicket.style.display = 'none';
    });
  }

  if (closeCoffee) {
    closeCoffee.addEventListener('click', () => {
      coffeeModal.style.display = 'none';
      screenTicket.style.display = 'block';
    });
  }

  if (closeLunch) {
    closeLunch.addEventListener('click', () => {
      lunchModal.style.display = 'none';
      screenTicket.style.display = 'block';
    });
  }

  window.addEventListener('click', event => {
    if (event.target === coffeeModal) {
      coffeeModal.style.display = 'none';
    }
    if (event.target === lunchModal) {
      lunchModal.style.display = 'none';
    }
  });
});
