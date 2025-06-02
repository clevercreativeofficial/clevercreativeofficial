// Modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("button.bg-primary");
  const modal = document.getElementById("testimonial-modal");
  const closeButton = document.getElementById("close-modal");
  const cancelButton = document.getElementById("cancel-modal");

  if (addButton) {
    addButton.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.remove("hidden");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
  }

  if (cancelButton) {
    cancelButton.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
  }

  // Rating stars functionality
  const ratingInputs = document.querySelectorAll(".rating-input input");
  const ratingLabels = document.querySelectorAll(".rating-input label");

  ratingLabels.forEach((label) => {
    label.addEventListener("click", function () {
      const value = this.previousElementSibling.value;
      resetStars();
      highlightStars(value);
    });
  });

  function resetStars() {
    ratingLabels.forEach((label) => {
      label.classList.remove("text-yellow-400");
      label.classList.add("text-gray-300", "dark:text-gray-600");
    });
  }

  function highlightStars(value) {
    for (let i = 0; i < value; i++) {
      ratingLabels[i].classList.add("text-yellow-400");
      ratingLabels[i].classList.remove("text-gray-300", "dark:text-gray-600");
    }
  }

  // Avatar preview
  const avatarInput = document.getElementById("client-avatar");
  const avatarPreview = document.getElementById("avatar-preview");

  if (avatarInput) {
    avatarInput.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          avatarPreview.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});
