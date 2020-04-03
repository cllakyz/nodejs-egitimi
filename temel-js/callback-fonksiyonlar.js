function soyle(text, callback){
  console.log(text);
  callback();
}

soyle("Merhaba", function () {
    console.log("Çay Demleniyor...");
});