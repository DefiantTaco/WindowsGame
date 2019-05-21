var autoClick = 0;
var SlimeFactory = 0;
var SlimeGalactica = 0;
var SlimeExplosive = 0;
var SlimeRad = 0;
var SlimeClick = 0;
var SlimeClickExplosive = 0;
var dpsAuto = 0;
var dpsGalactica = 0;
var dpsFactory = 0;
var dpsExplosive = 0;
var dpsRad = 0;
var Click = 1;

function buySlimeClick(){
    if (cookiecount >= 200) {
      cookiecount = cookiecount - 200;
      Click = Click * 2;
      document.getElementById("SlimeClick").style.display = "none";
    }
}

function buySlimeExplosiveClick(){
    if (cookiecount >= 500) {
      cookiecount = cookiecount - 500;
      Click = Click * 2;
      document.getElementById("SlimeExplosiveClick").style.display = "none";
    }
}

function buyAutoClick(){
  if (cookiecount >= ((autoClick+1) * 3)) {
    cookiecount = cookiecount - ((autoClick+1) * 3);
    autoClick = autoClick + 1;
    dpsAuto = 0;
    dpsAuto = autoClick * 0.1;
    update();
  }
}

function buySlimeFactory(){
  if (cookiecount >= ((SlimeFactory+1) * 25)) {
    cookiecount = cookiecount - ((SlimeFactory+1) * 25);
    SlimeFactory = SlimeFactory + 1;
    dpsFactory = 0;
    dpsFactory = SlimeFactory * 0.3;
    update();
  }
}

function buySlimeGalactia(){
  if (cookiecount >= ((SlimeGalactica+1) * 100)) {
    cookiecount = cookiecount - ((SlimeGalactica+1) * 100);
    SlimeGalactica = SlimeGalactica + 1;
    dpsGalactica = 0;
    dpsGalactica = SlimeGalactica * 1;
    update();
  }
}

function buySlimeExplosive(){
    if (cookiecount >= ((SlimeExplosive+1) * 500)) {
      cookiecount = cookiecount - ((SlimeExplosive+1) * 500);
      SlimeExplosive = SlimeExplosive + 1;
      dpsExplosive = 0;
      dpsExplosive = SlimeExplosive * 3;
      update();
    }
  }

function buySlimeRad(){
      if (cookiecount >= ((SlimeRad+1) * 1500)) {
        cookiecount = cookiecount - ((SlimeRad+1) * 1500);
        SlimeRad = SlimeRad + 1;
        dpsRad = 0;
        dpsRad = SlimeRad * 10;
        update();
      }
    }

function UpdateShop(){
  document.getElementById("amountAutoClick").innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById("costAutoClick").innerHTML = ((autoClick+1) * 3) + " Slime Coins";

  document.getElementById("amountSlimeFactory").innerHTML = "You Own " + SlimeFactory + " Slime Factories";
  document.getElementById("costSlimeFactory").innerHTML = ((SlimeFactory+1) * 25) + " Slime Coins";

  document.getElementById("amountSlimeGalactica").innerHTML = "You Own " + SlimeGalactica + " Slime Galacticas";
  document.getElementById("costSlimeGalactica").innerHTML = ((SlimeGalactica+1) * 100) + " Slime Coins";

  document.getElementById("amountSlimeExplosive").innerHTML = "You Own " + SlimeExplosive + " Slime Explosives";
  document.getElementById("costSlimeExplosive").innerHTML = ((SlimeExplosive+1) * 500) + " Slime Coins";

  document.getElementById("amountSlimeRad").innerHTML = "You Own " + SlimeRad + " Slime Radioactivers";
  document.getElementById("costSlimeRad").innerHTML = ((SlimeRad+1) * 1500) + " Slime Coins";
}
