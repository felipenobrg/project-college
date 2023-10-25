const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^.{8,}$/;

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    const emailInput = document.getElementById("input-email");
    const passwordInput = document.getElementById("input-password");

    if (!document.getElementById("login-form").checkValidity()) {
      Swal.fire({
        title: "Erro!",
        text: "Por favor, preencha os campos corretamente.",
        icon: "error",
        confirmButtonText: "OK",
      });
      event.preventDefault();
    }

    if (!emailRegex.test(emailInput.value)) {
      Swal.fire({
        title: "Erro!",
        text: "Por favor, insira um email válido.",
        icon: "error",
        confirmButtonText: "OK",
      });
      event.preventDefault();
    }

    if (!passwordRegex.test(passwordInput.value)) {
      Swal.fire({
        title: "Erro!",
        text: "A senha deve ter no mínimo 8 caracteres.",
        icon: "error",
        confirmButtonText: "OK",
      });
      event.preventDefault();
    }
  });
