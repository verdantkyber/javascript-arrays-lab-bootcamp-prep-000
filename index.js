// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(cat){
  kittens.push(cat);
}

function destructivelyPrependKitten(cat){
  kittens.unshift(cat);
}

function destructivelyRemoveLastKitten(cat){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(cat){
  kittens.shift();
}

function appendKitten(cat){
  var cats = kittens.concat(cat);
  return cats;
}