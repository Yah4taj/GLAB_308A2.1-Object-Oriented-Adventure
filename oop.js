
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: ...
//     roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//     }
//     }

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat"
//     }
//     }
    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
          name: "Leo",
          type: "Cat",
          companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
          }
      },
      
        // ... other properties
        roll(mod = 0) {
          const result = Math.floor(Math.random() * 20) + 1 + mod;
          console.log(`${this.name} rolled a ${result}.`)
        }
      };
      
      // Demonstration of accessing nested properties
console.log(adventurer.companion.name); // Outputs: Leo
console.log(adventurer.companion.companion.name); // Outputs: Frank
console.log(adventurer.companion.companion.belongings); // Outputs: ["small hat", "sunglasses"]

// Demonstrating the roll method
adventurer.roll(); // Outputs: Robin rolled a [random number between 1-20]
adventurer.roll(2); // Outputs: Robin rolled a [random number between 3-22]


//     class Character {
//         constructor (name) {
//           this.name = name;
//           this.health = 100;
//           this.inventory = [];
//         }
//       }
//       const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

          