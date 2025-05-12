function removeModal() {
  const modalBackdrop = document.querySelector('.modal-backdrop.fade.show');
  if (modalBackdrop) {
    modalBackdrop.remove();
  }

  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.remove();
  });
}

// Remove modal after 2 seconds
setTimeout(removeModal, 2000);
setTimeout(removeModal, 5000);
setTimeout(removeModal, 10000);