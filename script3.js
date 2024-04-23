let ededler = [5, 10, 15, 20];
console.log(ededler);

let say = ededler.length;
console.log(say);

let cem = 0;
for (let i = 0; i < say; i++) {
    cem += ededler[i];
}

let orta = cem / say;
console.log(orta);
