const generateLevel = (level) => {
  const tiles = [];
  for (let i = 0; i < level * level; i++) {
    let shelf;
    while (true) {
      shelf = Math.floor(Math.random() * (level * level) + 1);
      if (tiles[shelf - 1] === undefined) break;
    }
    tiles[shelf - 1] = i + 1;
  }
  return tiles;
};

export { generateLevel };
