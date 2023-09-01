// let a=2;
// let b=3;
// let c=a+b;
// console.log(c)

// let a=2;
// let b=3;
// let c=4;
// let d=5;
// let e=((b+a)*c)/(a*b*b)+a-d;
// 3+2*4/2*3*3+2-5
// console.log(e)

// let x=6;
// let y=5;
// // let hasil= x>y;

// if(x>y){
//     console.log("Benar");
// }

// else{
//     console.log("Salah");
// }

let kkm=80;
let nilai=100;

if(nilai>kkm){
    console.log("Kamu Lulus");
}
else{
    console.log("Kamu tidak Lulus");
}



let bulan=12;
let tanggal=1;
let zodiac="Belum dibuat";
if(bulan==12){
    if(tanggal >0 && tanggal <22){
        zodiac="sagitarius";}
    if(tanggal >21 && tanggal <31){
        zodiac="capricon";}  
}

if(bulan==1){
    if(tanggal >0 && tanggal <20){
        zodiac="capricon";}
    if(tanggal >19 && tanggal <32){
            zodiac="aquarius";}
    }

if(bulan==2){
    if(tanggal >0 && tanggal <19){
        zodiac="aquarius";}
    if(tanggal >18 && tanggal <29){
        zodiac="pisces";}
}
if(bulan==3){
    if(tanggal >0 && tanggal <21){
        zodiac="pisces";}
    if(tanggal >20 && tanggal <31){
        zodiac="aries";}
}
if(bulan==4){
    if(tanggal >0 && tanggal <20){
        zodiac="aries";}
    if(tanggal >19 && tanggal <30){
        zodiac="taurus";}
  
}
if(bulan==5){
    if(tanggal >0 && tanggal <21){
        zodiac="taurus";}
    if(tanggal >20 && tanggal <31){
        zodiac="gemini";}
  
}
if(bulan==6){
    if(tanggal >0 && tanggal <21){
        zodiac="gemini";}
    if(tanggal >20 && tanggal <30){
        zodiac="cancer";}
  
}
if(bulan==7){
    if(tanggal >0 && tanggal <23){
        zodiac="cancer";}
    if(tanggal >22 && tanggal <31){
        zodiac="leo";}
  
}
if(bulan==8){
    if(tanggal >0 && tanggal <23){
        zodiac="leo";}
    if(tanggal >22 && tanggal <31){
        zodiac="virgo";}
  
}
if(bulan==9){
    if(tanggal >0 && tanggal <23){
        zodiac="virgo";}
    if(tanggal >22 && tanggal <30){
        zodiac="libra";}
  
}
if(bulan==10){
    if(tanggal >0 && tanggal <23){
        zodiac="libra";}
    if(tanggal >22 && tanggal <31){
        zodiac="scorpio";}
  
}
if(bulan==11){
    if(tanggal >0 && tanggal <22){
        zodiac="scorpio";}
    if(tanggal >21 && tanggal <30){
        zodiac="sagitarius";}
  
}

console.log(zodiac)

