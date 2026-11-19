// Нэр шалгах функц
function validateName(value) {
  const v = value.trim();
  if (v === "") {
    return { valid: false, message: "Нэрээ оруулна уу." };
  }
  if (v.length < 2) {
    return { valid: false, message: "Нэр хамгийн багадаа 2 тэмдэгт байх ёстой." };
  }
  return { valid: true, message: "" };
}

// И-мэйл хаяг шалгах функц (нөхцөл тус бүрээр)
function validateEmail(value) {
  const v = value.trim();

  if (v === "") {
    return { valid: false, message: "И-мэйл хаягаа оруулна уу." };
  }
  if (/\s/.test(v)) {
    return { valid: false, message: "И-мэйл хаяг хоосон зай агуулж болохгүй." };
  }
  if (!v.includes("@")) {
    return { valid: false, message: "И-мэйл хаяг '@' тэмдэгт агуулсан байх ёстой." };
  }

  const parts = v.split("@");
  if (parts.length > 2) {
    return { valid: false, message: "И-мэйл хаяг зөвхөн нэг '@' тэмдэгттэй байна." };
  }

  const [localPart, domainPart] = parts;

  if (!localPart || !/^[^\s@]+$/.test(localPart)) {
    return { valid: false, message: "'@'-ийн өмнөх хэсэг буруу байна." };
  }
  if (!domainPart || !domainPart.includes(".")) {
    return { valid: false, message: "Домэйн хэсэг цэг (.) агуулсан байх ёстой (жишээ: gmail.com)." };
  }

  const domainParts = domainPart.split(".");
  const ext = domainParts[domainParts.length - 1];
  const host = domainParts.slice(0, -1).join(".");

  if (!host || !/^[A-Za-z0-9-]+$/.test(host)) {
    return { valid: false, message: "Домэйны нэр буруу байна." };
  }
  if (!ext || ext.length < 2 || !/^[A-Za-z]+$/.test(ext)) {
    return { valid: false, message: "Домэйны өргөтгөл (жишээ: .com, .mn) дор хаяж 2 үсэг байх ёстой." };
  }

  return { valid: true, message: "" };
}

// Нууц үг шалгах функц (бүх нөхцөлийг хамт шалгана)
function validatePassword(value) {
  if (value === "") {
    return { valid: false, message: "Нууц үгээ оруулна уу." };
  }

  const errors = [];

  if (value.length < 8) {
    errors.push("дор хаяж 8 тэмдэгт");
  }
  if (/\s/.test(value)) {
    errors.push("хоосон зайгүй");
  }
  if (!/[A-Za-zА-Яа-яӨөҮүЁё]/.test(value)) {
    errors.push("үсэг орсон");
  }
  if (!/\d/.test(value)) {
    errors.push("тоо орсон");
  }

  if (errors.length > 0) {
    return {
      valid: false,
      message: "Нууц үг: " + errors.join(", ") + " байх ёстой.",
    };
  }

  return { valid: true, message: "" };
}

// Санал хүсэлт шалгах функц
function validateMessage(value) {
  const v = value.trim();
  if (v === "") {
    return { valid: false, message: "Санал хүсэлтээ бичнэ үү." };
  }
  if (v.length < 10 || v.length > 500) {
    return { valid: false, message: "Санал хүсэлт 10–500 тэмдэгт байх ёстой." };
  }
  return { valid: true, message: "" };
}