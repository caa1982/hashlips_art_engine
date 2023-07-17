const returnRandomText = require("./text.js");

function elfDescription(data) {
  const name = data.name.split("#")[0].trim();
  const attributes = data.attributes;

  const attributeMapping = {
    tribe: "tribe",
    weapons: "weapon",
    magic: "magic",
    familiar: "familiar",
    strength: "strength",
    agility: "agility",
    speed: "speed",
    luck: "luck",
    intelligence: "intelligence",
  };

  const attributesObject = Object.entries(attributeMapping).reduce(
    (obj, [key, value]) => {
      const foundAttribute = attributes.find((attr) => attr.trait_type === key);
      obj[value] = foundAttribute ? foundAttribute.value : null;
      return obj;
    },
    { name }
  );

  let descriptionString = returnRandomText("descriptions", attributesObject);

  const weaponText = {
    sword: "swordText",
    dagger: "daggerText",
    wand: "wandText",
  };

  for (const [weapon, text] of Object.entries(weaponText)) {
    if (attributesObject.weapon.includes(weapon)) {
      descriptionString += returnRandomText(text, attributesObject);
      break;
    }
  }

  const topAttributes = Object.entries(attributeMapping)
    .map(([key, value]) => ({ key: value, value: attributesObject[value] }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map(({ key }) => key);

  const attributeTextMapping = {
    magic: ["magicExpertText", "magicSpecialistText", "magicNoviceText"],
    strength: [
      "strengthExpertText",
      "strengthSpecialistText",
      "strengthNoviceText",
    ],
    luck: ["luckExpertText", "luckSpecialistText", "luckNoviceText"],
    speed: ["speedExpertText", "speedSpecialistText", "speedNoviceText"],
    agility: [
      "agilityExpertText",
      "agilitySpecialistText",
      "agilityNoviceText",
    ],
    intelligence: [
      "intelligenceExpertText",
      "intelligenceSpecialistText",
      "intelligenceNoviceText",
    ],
  };

  topAttributes.forEach((attribute) => {
    const attributeValue = attributesObject[attribute];
    const level = attributeValue > 70 ? 0 : attributeValue > 30 ? 1 : 2;
    if (attributeTextMapping[attribute]) {
      descriptionString += returnRandomText(
        attributeTextMapping[attribute][level],
        attributesObject
      );
    }
  });

  return descriptionString.trim();
}

module.exports = elfDescription;
