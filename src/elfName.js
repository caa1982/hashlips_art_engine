const names = new Set();

const elfName = (tribe) => {
  const vowels = "aeiouy";
  const consonants = "bcdfghjklmnpqrstvwxz";
  const goodPairs = [
    "th",
    "ch",
    "ph",
    "sh",
    "dr",
    "wr",
    "pr",
    "tr",
    "kr",
    "br",
    "cl",
    "gl",
    "fl",
    "pl",
    "sl",
  ];

  const tribeEndings = [
    "ion",
    "riel",
    "farn",
    "mir",
    "athor",
    "wyn",
    "thien",
    "uil",
  ];

  const tribeIndex = [
    "time travelers",
    "tattooed",
    "scientist",
    "healing",
    "guardian",
    "dream",
    "tree speaking",
    "elemental",
  ].indexOf(tribe);

  const generateChar = (chars) => {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  const generatePair = (pairs) => {
    return pairs[Math.floor(Math.random() * pairs.length)];
  };

  const generatePrefix = () => {
    const length = Math.floor(Math.random() * 2) + 2;
    let prefix = "";
    for (let i = 0; i < length; i++) {
      prefix +=
        i % 2 === 0
          ? Math.random() < 0.7
            ? generateChar(consonants)
            : generatePair(goodPairs)
          : generateChar(vowels);
    }
    return prefix.charAt(0).toUpperCase() + prefix.slice(1);
  };

  const generateSuffix = (tribeIdx) => {
    const length = Math.floor(Math.random() * 2) + 1;
    let suffix = "";
    for (let i = 0; i < length; i++) {
      suffix +=
        i % 2 === 0
          ? Math.random() < 0.7
            ? generateChar(consonants)
            : generatePair(goodPairs)
          : generateChar(vowels);
    }
    return suffix + tribeEndings[tribeIdx];
  };

  let name = "";
  do {
    name = generatePrefix() + generateSuffix(tribeIndex);
  } while (names.has(name) || name.length > 10);

  names.add(name);
  console.log(name);
  return name;
};

module.exports = elfName;
