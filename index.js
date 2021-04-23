function kotak() {
  let hasil = "";
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
      hasil += "*";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(kotak());

function segitiga() {
  let hasil = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      hasil += "*";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga());

function segitigaterbalik() {
  let hasil = "";
  for (let i = 0; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
      hasil += "*";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitigaterbalik());

function selangseling() {
  let hasil = "";
  for (let i = 0; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
      if (j % 2 === 0) {
        hasil += "!";
      } else {
        hasil += "*";
      }
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(selangseling());

function kotakpola() {
  let hasil = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      if (i % 2 == 0 && j == 3) {
        hasil += "!";
      } else if (i % 2 == 1 && j == 2) {
        hasil += "!";
      } else {
        hasil += "*";
      }
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(kotakpola());
