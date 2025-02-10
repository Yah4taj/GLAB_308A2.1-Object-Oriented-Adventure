
   //Part 1 Humble Beginniings

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

//Part 2 Class Fantasy

class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
      roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
      }
    }

      const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Demonstration
console.log(robin.name); // Outputs: Robin
robin.roll(); // Robin rolls a random number
robin.companion.roll(); // Leo rolls a random number
robin.companion.companion.roll(); // Frank rolls a random number

//Part 3 Class Features

class Adventurer extends Character {
    constructor(name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    // Additional method for adventurer's skill
    useSkill() {
      console.log(`${this.name} uses their ${this.role} skills!`);
    }
  }
  
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
      this.loyalty = 50; // Added loyalty attribute
    }

  // Companion-specific method
    assist() {
      console.log(`${this.name} assists their adventurer!`);
      this.roll(2); // Companions get a small bonus
    }
  }
//    Recreating Robin and companions using new classes

const robin1 = new Adventurer("Robin", "Ranger");
robin.inventory.push("sword", "potion", "artifact");

const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
frank.inventory.push("small hat", "sunglasses");

robin1.companion = leo;
leo.companion = frank;

// Demonstration of new methods
robin1.scout();
leo.assist();
frank.roll();
robin1.useSkill();




  
          