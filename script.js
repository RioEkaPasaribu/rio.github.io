document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-right form");
  const nameInput = form.querySelector('input[name="Name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="Message"]');

  form.addEventListener("submit", function (event) {
    // Validasi nama
    if (nameInput.value.trim() === "" || nameInput.value.length < 5) {
      event.preventDefault();
      alert("Nama harus diisi dan minimal 5 karakter.");
      nameInput.focus();
      return false;
    }

    // Validasi email
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
      event.preventDefault();
      alert("Email tidak valid.");
      emailInput.focus();
      return false;
    }

    // Validasi pesan
    if (
      messageTextarea.value.trim() === "" ||
      messageTextarea.value.length < 10
    ) {
      event.preventDefault();
      alert("Pesan harus diisi dan minimal 10 karakter.");
      messageTextarea.focus();
      return false;
    }
    alert("Berhasil Terkirim");
  });

  // Fungsi untuk memeriksa validitas email dengan menggunakan regular expression
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
