// let dizi = [10, 20, 30, 50, 100];

// for (let i = 0; i < dizi.length; i++) {
//   console.log(dizi[i]);
//   if (dizi[i] > 40) {
//     // filter methodunun yaptığı işi yaptı.
//     son1.push(dizi[i]);
//   }
// }

// continue
// for (let i = 0; i < dizi.length; i++) {
//   console.log(dizi[i]);
//   if (dizi[i] == 30) {
//     continue;
//   }
//   dizi[i] *= 2;
//   console.log("dizi");
// }
// console.log(dizi);

// for (let i in dizi) {
//   console.log(dizi[i]);
//   console.log(i);
// }
// let i = 0;
// for (let item of dizi) {
//   console.log(i++);
//   console.log(item);
// }

// dizi.forEach((items, index) => {
//   console.log(items);
//   console.log(index);
// });

// dizi.map((x, index, array) => {
//   array[index] = x * 2;
// });
// // console.log(degisim);
// console.log(dizi);
// let son = dizi.filter((x) => x > 40).map((y) => y / 2);
// console.log(son);

// let maas = [1000, 2000, 3000, 5000, 10000]; // maaşı 4000 tl den fazla olanlara %30 zam altında olanlara % 40 zam
// let zamliMaas = maas.filter((maas) => maas < 4000).map((maas) => maas * 1.4);
// // console.log(zamliMaas);
// let zamliMaas2 = maas.filter((maas) => maas >= 4000).map((maas) => maas * 1.3);
// // console.log(zamliMaas.concat(zamliMaas2));
// console.log(zamliMaas);
// console.log(zamliMaas2);
// zamliMaas = zamliMaas.concat(zamliMaas2);
// zamliMaas2 = null;
// console.log(zamliMaas);
// console.log(zamliMaas2);
// let maas = [1000, 2000, 3000, 5000, 10000]; // maaşlara %40 zam yapıp maaşı 7000 tl ve üzeri olanlar ayrı bir dizi altında olanlar ayrı bir dizi olsun
// let alt = maas
//   .map((maas, index, array) => (array[index] = maas * 1.4))
//   .filter((maas) => maas < 7000);
// let ust = maas.filter((maas) => maas >= 7000);
// //   .map((maas) => {
// //     return maas * 1.4;
// //   })
// console.log(alt);
// console.log(maas);
// console.log(ust);

let dizi5 = [10, 30, 100, 40, 20, 50];
let dizi4 = [10, 30, 100, 40, 20, 50, -10, -20, 0, 5];
// console.log(dizi3.splice(dizi3.indexOf(10), 1));

let enkucuk = (dizi) => {
  let dizi2 = [];
  while (dizi.length != 0) {
    let enk = 200;
    // console.log(dizi);
    for (let i = 0; i < dizi.length; i++) {
      if (dizi[i] < enk) {
        enk = dizi[i];
      }
    }
    dizi2.push(enk);
    // console.log(enk);
    dizi.splice(dizi.indexOf(enk), 1);
  }
  return dizi2;
};

let enbuyuk = (dizi) => {
  let dizi3 = [];
  while (dizi.length != 0) {
    let enb = -200;
    // console.log(dizi);
    for (let i = 0; i < dizi.length; i++) {
      if (dizi[i] > enb) {
        enb = dizi[i];
      }
    }
    dizi3.push(enb);
    // console.log(enb);
    dizi.splice(dizi.indexOf(enb), 1);
  }
  return dizi3;
};
console.log(enkucuk(dizi5));
console.log(enbuyuk(dizi4));