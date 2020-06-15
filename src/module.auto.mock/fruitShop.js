import fruit, { apple, strawberry } from "./fruit";

function getApple() {
  return apple;
}

function getStrawberry() {
  return strawberry();
}

function getBanana() {
  return fruit();
}

export { getBanana, getStrawberry, getApple };
