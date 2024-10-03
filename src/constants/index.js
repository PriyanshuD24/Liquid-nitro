export const headData = [
  {
    name: "Home",
    about: "054e72b5-e3b2-4693-8eba-40414f15dd7a",
    reachOut: "36cde6cb-6d41-46a4-b8e0-c7536a38c1c2",
    nitroLife: "157a46c2-c1bc-4ec0-a1a5-22b3165cc178",
    offerings: "49bbfe88-9611-4a7e-8031-85562d8df8bf",
  },
  {
    name: "about",
    about: "",
    reachOut: "6d3a4460-a6a0-4be6-8fa8-958ee807049c",
    nitroLife: "69f00472-8e8c-4fb2-80de-74a07a3c3e2f",
    offerings: "4e32ebbe-e766-442d-9c69-c73d5c4b69be",
  },
  {
    name: "reachOut",
    about: "c26801ce-6022-42ff-b94f-278cf52b1888",
    reachOut: "",
    nitroLife: "86a5f27f-9c46-4e32-af26-2d5afcf82716",
    offerings: "633980e0-8138-4cd2-ac28-844407698315",
  },
  {
    name: "offerings",
    about: "ef38eacd-df56-482a-87e2-2784b9e91e73",
    reachOut: "b2fee930-20dd-4876-9b75-65a8abac6b8b",
    nitroLife: "f11a570c-f9d3-48fc-ad9f-e1675548a8b1",
    offerings: "",
  },
  {
    name: "nitroLife",
    about: "bf5ab93b-b5d2-4a3c-8808-2c43fd80fc01",
    reachOut: "d2bf52b8-63c5-4d79-85ac-09a39c7dad14",
    nitroLife: "",
    offerings: "368c708b-a65f-4756-9b86-4cb3801e33a5",
  },
];

export function findIndexByValue(value) {
  // First, find the key corresponding to the value
  let matchedKey = null;
  let matchedName = null;

  // Iterate through headData to find the key and the object it belongs to
  for (let i = 0; i < headData.length; i++) {
    const obj = headData[i];
    for (let key in obj) {
      if (obj[key] === value) {
        matchedKey = key;
        matchedName = obj.name;
        break;
      }
    }
    if (matchedKey) break;
  }

  // Now, find the index of the object where the name matches the matched key
  if (matchedName) {
    const index = headData.findIndex((item) => item.name === matchedKey);
    return index; // Return the final index
  }

  return -1; // Return -1 if no match is found
}

//export spline.setGlobalEvents(true);
