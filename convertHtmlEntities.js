// version 1 with for loop and switch

// const convertHTML = (str) => {
//   let temp = str.split("");

//   for (let i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;

//       default:
//         break;
//     }
//   }
// };

// version 2 more short with map

const convertHTML = (str) => {
  const htmlEntitles = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((i) => htmlEntitles[i] || i)
    .join("");
};

convertHTML("Dolce & Gabbana");
