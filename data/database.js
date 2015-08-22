// Model types
class Game extends Object {}
class HidingSpot extends Object {}

// Mock data
let game = new Game();
game.id = '1';

let hidingSpots = [];
() => {
  let hidingSpot;
  const indexOfSpotWithTreasure = Math.floor(Math.random() * 9);
  for (let i = 0; i < 9; ++i) {
    hidingSpot = new HidingSpot();
    hidingSpot.id = `${i}`;
    hidingSpot.hasTreasure = (i === indexOfSpotWithTreasure);
    hidingSpot.hasBeenChecked = false;
    hidingSpots.push(hidingSpot);
  }
};

let turnsRemaining = 3;

export const checkHidingSpotForTreasure = id => {
  if (hidingSpots.some(hs => hs.hasTreasure && hs.hasBeenChecked)) return;

  --turnsRemaining;

  let hidingSpot = getHidingSpot(id);
  hidingSpot.hasBeenChecked = true;
};

export const getHidingSpot = id => hidingSpots.find(hs => hs.id === id);
export const getGame = () => game;
export const getHidingSpots = () => hidingSpots;
export const getTurnsRemaining = () => turnsRemaining;
