function zodiacSign(day, month) {
  if (month === "Februari") {
    if (day <= 0 || day > 29) {
      return `Input tanggal salah`;
    } else if (day >= 1 && day < 19) {
      return `Aquarius`;
    } else if (day >= 19 && day <= 29) {
      return `Pisces`;
    }
  }

  if (month === "Januari" || month === "Maret" || month === "Mei" || month === "Juli" ||
    month === "Agustus" || month === "Oktober" || month === "Desember") {
    if (day <= 0 || day > 31) {
      return `Input tanggal salah`;
    } else if ((day >= 22 && day <= 31) && month === "Desember" || (day >= 1 && day < 20) && month === "Januari") {
      return `Capricorn`;
    } else if ((day >= 20 && day <= 31) && month === "Januari") {
      return `Aquarius`;
    } else if ((day >= 1 && day <= 20) && month === "Maret") {
      return `Pisces`;
    } else if ((day >= 21 && day <= 31) && month === "Maret") {
      return `Aries`;
    } else if ((day >= 1 && day <= 20) && month === "Mei") {
      return `Taurus`;
    } else if ((day >= 21 && day <= 31) && month === "Mei") {
      return `Gemini`;
    } else if ((day >= 1 && day <= 22) && month === `Juli`) {
      return `Cancer`;
    } else if ((day >= 23 && day <= 31) && month === `Juli`) {
      return `Leo`;
    } else if ((day >= 1 && day <= 22) && month === `Agustus`) {
      return `Leo`;
    } else if ((day >= 23 && day <= 31) && month === `Agustus`) {
      return `Virgo`;
    } else if ((day >= 1 && day <= 22) && month === `Oktober`) {
      return `Libra`;
    } else if ((day >= 23 && day <= 31) && month === `Oktober`) {
      return `Scorpio`;
    } else if ((day >= 1 && day <= 21) && month === `Desember`) {
      return `Sagittarius`
    }
  } else if (month === "April" || month === "Juni" || month === "September" || month === "November") {
    if (day <= 0 || day > 30) {
      return `Input tanggal salah`;
    } else if ((day >= 1 && day <= 19) && month === "April") {
      return `Aries`;
    } else if ((day >= 20 && day <= 30) && month === "April") {
      return `Taurus`;
    } else if (day === 20 && month === "Juni") {
      return `Gemini`;
    } else if ((day >= 1 && day <= 20) && month === "Juni") {
      return `Gemini`;
    } else if ((day >= 1 && day <= 20) && month === `Juni`) {
      return `Cancer`;
    } else if ((day >= 21 && day <= 30) && month === `Juni`) {
      return `Cancer`;
    }
    else if ((day >= 1 && day <= 22) && month === `September`) {
      return `Virgo`;
    } else if ((day >= 23 && day <= 30) && month === `September`) {
      return `Libra`;
    } else if ((day >= 1 && day <= 21) && month === `November`) {
      return `Scorpio`;
    } else if ((day >= 22 && day <= 30) && month === `November`) {
      return `Sagittarius`
    }
  } else {
    return `Nama bulan salah`
  }
}

console.log(zodiacSign(1, 'Maret'));
// console.log(zodiacSign(31, 'Desember'));
// console.log(zodiacSign(41, 'Desember'));
// console.log(zodiacSign(31, 'Februari'));
// console.log(zodiacSign(29, 'Februari'));
// console.log(zodiacSign(29, 'Januari'));


module.exports = zodiacSign;
