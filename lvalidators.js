// Даалгавар 3: Form validation функцүүд
// Бүгд { valid: boolean, message: string } буцаана.

function validateName(value) {
  const v = value.trim(); // хоёр захын зайг хасна
  if (v === "") return { valid: false, message: "Нэрээ оруулна уу." };
  if (v.length < 2 || v.length > 50) {
    return { valid: false, message: "Нэр 2–50 тэмдэгт байх ёстой." };
  }
  if (/\d/.test(v)) return { valid: false, message: "Нэр тоо агуулж болохгүй." };
  return { valid: true, message: "" };
}

function validateEmail(value) {
  const v = value.trim();
  if (v === "") return { valid: false, message: "И-мэйл хаягаа оруулна уу." };
  // нэр@домэйн.өргөтгөл
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!re.test(v)) {
    return { valid: false, message: "И-мэйл хаяг буруу байна (жишээ: bold@example.com)." };
  }
  return { valid: true, message: "" };
}

function validatePassword(value) {
  if (value === "") return { valid: false, message: "Нууц үгээ оруулна уу." };
  if (value.length < 8) {
    return { valid: false, message: "Нууц үг дор хаяж 8 тэмдэгт байх ёстой." };
  }
  if (/\s/.test(value)) {
    return { valid: false, message: "Нууц үг хоосон зай агуулж болохгүй." };
  }
  if (!/[A-Za-zА-Яа-яӨөҮүЁё]/.test(value)) {
    return { valid: false, message: "Нууц үг үсэг (кирилл эсвэл латин) агуулна." };
  }
  if (!/\d/.test(value)) {
    return { valid: false, message: "Нууц үг тоо агуулна." };
  }
  return { valid: true, message: "" };
}

function validateMessage(value) {
  const v = value.trim();
  if (v === "") return { valid: false, message: "Санал хүсэлтээ бичнэ үү." };
  if (v.length < 10 || v.length > 500) {
    return { valid: false, message: "Санал хүсэлт 10–500 тэмдэгт байх ёстой." };
  }
  return { valid: true, message: "" };
}