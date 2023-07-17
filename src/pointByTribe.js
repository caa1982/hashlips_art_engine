const tribes = [
  "time travelers",
  "tattooed",
  "scientist",
  "healing",
  "guardian",
  "dream",
  "tree speaking",
  "elemental",
];

const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const points = (tribe) => {
  const traits = {
    magic: randomInRange(1, 100),
    speed: randomInRange(1, 100),
    intelligence: randomInRange(1, 100),
    strength: randomInRange(1, 100),
    agility: randomInRange(1, 100),
    luck: randomInRange(1, 100),
    defense: randomInRange(1, 100),
    attack: randomInRange(1, 100),
  };

  const tribeSpecifics = {
    "time travelers": {
      magic: [71, 100],
      speed: [51, 100],
      intelligence: [51, 100],
    },
    scientist: { intelligence: [71, 100], magic: [51, 100] },
    guardian: { strength: [71, 100], defense: [51, 100], agility: [51, 100] },
    healing: { magic: [71, 100], defense: [51, 100] },
    tattooed: { agility: [71, 100], luck: [51, 100], attack: [51, 100] },
    dream: { magic: [71, 100], speed: [50, 100] },
    "tree speaking": {
      intelligence: [61, 100],
      agility: [51, 100],
      defense: [51, 100],
    },
    elemental: { strength: [51, 100], agility: [71, 100], magic: [51, 100] },
  };

  if (tribeSpecifics.hasOwnProperty(tribe)) {
    for (const [trait, range] of Object.entries(tribeSpecifics[tribe])) {
      traits[trait] = randomInRange(range[0], range[1]);
    }
  }

  return traits;
};

module.exports = points;
