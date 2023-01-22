// You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight  1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle?  You can only use the scale once.

// Function to find heavy bottle
function findHeavyBottle(bottles) {
  // base case: if only one bottle, return it
  if (bottles.length === 1) {
    return bottles[0];
  }

  // divide bottles into two groups
  let group1 = bottles.slice(0, bottles.length / 2);
  let group2 = bottles.slice(bottles.length / 2);

  // weigh the pills in one group
  let weight1 = weighPills(group1);
  let weight2 = weighPills(group2);

  // check which group has the heavier pills
  if (weight1 > weight2) {
    // recursively search the group with heavier pills
    return findHeavyBottle(group1);
  } else {
    // recursively search the group with lighter pills
    return findHeavyBottle(group2);
  }
}

// Helper function to weigh pills
function weighPills(group) {
  let weight = 0;
  for (let i = 0; i < group.length; i++) {
    weight += group[i];
  }
  return weight;
}

// Example usage
let bottles = [
  1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
  1.0, 1.0, 1.0, 1.0, 1.1,
];
console.log(findHeavyBottle(bottles));
