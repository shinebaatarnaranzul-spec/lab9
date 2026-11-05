// Даалгавар 4: validation функцийг form-той холбох

const form = document.getElementById("feedbackForm");

const fields = [
  { id: "name", validate: validateName },
  { id: "email", validate: validateEmail },
  { id: "password", validate: validatePassword },
  { id: "message", validate: validateMessage },
];

function showResult(input, result) {
  const err = document.getElementById(input.id + "Error");
  err.textContent = result.message;
  input.classList.toggle("invalid", !result.valid);
  input.classList.toggle("valid", result.valid);
}

function checkField(field) {
  const input = document.getElementById(field.id);
  const result = field.validate(input.value);
  showResult(input, result);
  return result.valid;
}

// Бичиж байх үед болон талбараас гарахад шалгана
fields.forEach((f) => {
  const input = document.getElementById(f.id);
  input.addEventListener("blur", () => checkField(f));
  input.addEventListener("input", () => checkField(f));
});

// Илгээхэд бүгдийг шалгана
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let allValid = true;
  fields.forEach((f) => {
    if (!checkField(f)) allValid = false;
  });

  const status = document.getElementById("status");
  if (allValid) {
    status.textContent = "Санал хүсэлт амжилттай илгээгдлээ. Баярлалаа!";
    status.className = "status ok";
    form.reset();
    fields.forEach((f) => {
      const input = document.getElementById(f.id);
      input.classList.remove("valid", "invalid");
    });
  } else {
    status.textContent = "Алдаатай талбаруудыг засна уу.";
    status.className = "status bad";
  }
});