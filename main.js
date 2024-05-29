// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plush5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let xFishingInp = document.getElementById("x-fishing");
let fishingInv = document.getElementById("inventory");
let sortFish = document.getElementById("sort");

// Images Globals
let codImg = `<img src="img/Raw-Cod.png" width="25px" />`;
let salmonImg = `<img src="img/Raw-Salmon.png" width="25px" />`;
let tropicalImg = `<img src="img/Tropical-Fish.png" width="25px" />`;
let pufferImg = `<img src="img/Pufferfish.png" width="25px" />`;

// Fish Count Variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event Listeners
plush5Btn.addEventListener("click", plusFive);
until200Btn.addEventListener("click", until200);
xFishingInp.addEventListener("change", fishXAmount);
sortFish.addEventListener("click", fishSort);

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishOnce);

function fishOnce() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;
  let randNum = Math.random();

  if (character === `steve`) {
    // Fish with Steve
    if (randNum < 0.7) {
      resultImg = `img/Raw-Cod.png`;
      numCod++;
      numCodSpan.innerHTML = `${numCod}`;
      fishingInv.innerHTML += codImg;
    } else if (randNum < 0.9) {
      resultImg = `img/Raw-Salmon.png`;
      numSalmon++;
      numSalmonSpan.innerHTML = `${numSalmon}`;
      fishingInv.innerHTML += salmonImg;
    } else if (randNum < 0.95) {
      resultImg = `img/Tropical-Fish.png`;
      numTropical++;
      numTropicalSpan.innerHTML = `${numTropical}`;
      fishingInv.innerHTML += tropicalImg;
    } else {
      resultImg = `img/Pufferfish.png`;
      numPuffer++;
      numPufferSpan.innerHTML = `${numPuffer}`;
      fishingInv.innerHTML += pufferImg;
    }
  } else if (character === `alex`) {
    // Fish with Alex
    if (randNum < 0.1) {
      resultImg = `img/Raw-Cod.png`;
      numCod++;
      numCodSpan.innerHTML = `${numCod}`;
      fishingInv.innerHTML += codImg;
    } else if (randNum < 0.2) {
      resultImg = `img/Raw-Salmon.png`;
      numSalmon++;
      numSalmonSpan.innerHTML = `${numSalmon}`;
      fishingInv.innerHTML += salmonImg;
    } else if (randNum < 0.5) {
      resultImg = `img/Tropical-Fish.png`;
      numTropical++;
      numTropicalSpan.innerHTML = `${numTropical}`;
      fishingInv.innerHTML += tropicalImg;
    } else {
      resultImg = `img/Pufferfish.png`;
      numPuffer++;
      numPufferSpan.innerHTML = `${numPuffer}`;
      fishingInv.innerHTML += pufferImg;
    }
  } else if (character === `villager`) {
    // Fish with Villager
    if (randNum < 0.25) {
      resultImg = `img/Raw-Cod.png`;
      numCod++;
      numCodSpan.innerHTML = `${numCod}`;
      fishingInv.innerHTML += codImg;
    } else if (randNum < 0.5) {
      resultImg = `img/Raw-Salmon.png`;
      numSalmon++;
      numSalmonSpan.innerHTML = `${numSalmon}`;
      fishingInv.innerHTML += salmonImg;
    } else if (randNum < 0.75) {
      resultImg = `img/Tropical-Fish.png`;
      numTropical++;
      numTropicalSpan.innerHTML = `${numTropical}`;
      fishingInv.innerHTML += tropicalImg;
    } else {
      resultImg = `img/Pufferfish.png`;
      numPuffer++;
      numPufferSpan.innerHTML = `${numPuffer}`;
      fishingInv.innerHTML += pufferImg;
    }
  }
}

function plusFive() {
  for (let n = 1; n <= 5; n++) {
    fishOnce();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;

  while (numCod < codTarget) {
    fishOnce();
    count++;
  }
  console.log(count);
}

function fishXAmount() {
  if (xFishingInp.value < 0) {
    xFishingInp.value = 0;
  }

  for (let n = 1; n <= xFishingInp.value; n++) {
    fishOnce();
  }
  xFishingInp.value = ``;
}

function fishSort() {
  fishingInv.innerHTML = ``;
  for (let n = 1; n <= numCod; n++) {
    fishingInv.innerHTML += codImg;
  }
  for (let n = 1; n <= numSalmon; n++) {
    fishingInv.innerHTML += salmonImg;
  }
  for (let n = 1; n <= numTropical; n++) {
    fishingInv.innerHTML += tropicalImg;
  }
  for (let n = 1; n <= numPuffer; n++) {
    fishingInv.innerHTML += pufferImg;
  }
}
