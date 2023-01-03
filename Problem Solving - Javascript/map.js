
  const arr = ["ankit", "tanuj", "parikha", "ankit", "vishal"];

  // Normal Syntax
  const updatedArrV1 = [];

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    if (name === "ankit") {
      name = "rahul";
    }

    updatedArrV1.push(name);
  }

  console.log("updatedArrV1: ", updatedArrV1);

  // With Map

  const updatedArrV2 = arr.map((item) => {
    let name = item;
    if (name === "ankit") {
      name = "rahul";
    }

    return name;
  });

  console.log("updatedArrV2: ", updatedArrV2);

  // With Map

  const updatedArrV3 = arr.map((item) => (item === "ankit" ? "rahul" : item));

  const updatedArrV4 = arr.map((item) => {
    if (item === "ankit" || item === "parikha") {
      return undefined;
    } else {
      return item;
    }
  });

  console.log("updatedArrV4: ", updatedArrV4);
  
  
  const updatedArrV31 = arr.map((item) => {
    if (item === "ankit") {
      return "rahul";
    } else {
      return item;
    }
  });

