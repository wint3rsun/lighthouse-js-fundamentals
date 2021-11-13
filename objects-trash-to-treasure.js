function smartGarbage(trash, bins) {
  let smartBins = bins;
  smartBins[trash]++;
  return smartBins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
