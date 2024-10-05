export const headData = [
  {
    name: "Home",
    about: "4d0fe2eb-01da-4f28-a72e-1197ce3e8ed8",
    reachOut: "97efce17-a430-4327-9b10-8b1d2ae954af",
    nitroLife: "128e5299-5291-43a9-a7dc-c163f01b1032",
    offerings: "7e703f97-1dba-413d-9977-95061b2129b6",
  },
  {
    
    name: "about",
    about: "",
    reachOut: "026474b2-73af-41aa-abe8-a80d5fc44f88",
    nitroLife: "0e126f7d-cc79-46a7-b449-c340b4cc86bd",
    offerings: "ae7dacc9-0acf-44c8-aa06-cf745147e514",
  },
  {
    name: "reachOut",
    about: "a54086b5-d841-45fe-87f4-82280d080ed1",
    reachOut: "",
    nitroLife: "db19949e-5a74-40d1-b740-861447b5da66",
    offerings: "030948c7-d474-4250-8c60-e3d1c1f5d961",
  },
  {
    name: "offerings",
    about: "25c00a5b-d577-4537-bd25-fe92f9f8fbd8",
    reachOut: "eba86d26-14f2-452a-ae5b-b29b1b488fbf",
    nitroLife: "ea56d033-af78-41db-bfd8-edc88b7c2456",
    offerings: "",
  },
  {
    name: "nitroLife",
    about: "c403ca43-b819-4806-89cc-3361ce179980",
    reachOut: "fd1b4f93-e741-4623-9f19-217fee0ce72b",
    nitroLife: "",
    offerings: "5197343f-93ee-4383-9209-4815ac0476c0",
  },
];

export function findIndexByValue(value) {
  console.log(value, "value in func");
  
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
  // if (matchedName === "Home") {
  //   return 0; // Return the index for "Home"
  // }
  // Now, find the index of the object where the name matches the matched key
  if (matchedName) {
    const index = headData.findIndex((item) => item.name === matchedKey);
    // console.log(index);
    
    return index; // Return the final index
  }

  return -1; // Return -1 if no match is found
}

//export spline.setGlobalEvents(true);
