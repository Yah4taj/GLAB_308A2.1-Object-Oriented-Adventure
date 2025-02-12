// Define character abilities and traits
const characterRoster = [
  {
      name: "Robin",
      role: "Ranger",
      abilities: {
          primary: "Precise Shot",
          secondary: "Track Enemy",
          ultimate: "Rain of Arrows",
          passive: "Nature's Ally"
      },
      stats: {
          strength: 14,
          dexterity: 18,
          constitution: 12,
          wisdom: 14
      },
      companionName: "Leo"
  },
  {
      name: "Sara",
      role: "Fighter",
      abilities: {
          primary: "Power Strike",
          secondary: "Shield Wall",
          ultimate: "Blade Storm",
          passive: "Combat Master"
      },
      stats: {
          strength: 18,
          dexterity: 14,
          constitution: 16,
          wisdom: 10
      }
  },
  {
      name: "Merlin",
      role: "Wizard",
      abilities: {
          primary: "Arcane Bolt",
          secondary: "Frost Shield",
          ultimate: "Meteor Storm",
          passive: "Mana Surge"
      },
      stats: {
          strength: 8,
          dexterity: 12,
          constitution: 10,
          wisdom: 18
      }
  },
  {
      name: "Grace",
      role: "Healer",
      abilities: {
          primary: "Healing Light",
          secondary: "Protection Aura",
          ultimate: "Divine Intervention",
          passive: "Blessed Touch"
      },
      stats: {
          strength: 10,
          dexterity: 12,
          constitution: 14,
          wisdom: 18
      }
  },
  {
    
      }
  
];

// Define companion abilities
const companionRoster = [
  {
      name: "Leo",
      type: "Cat",
      abilities: {
          primary: "Scratch",
          special: "Night Vision",
          passive: "Silent Steps"
      },
      companion: {
          name: "Frank",
          type: "Flea",
          abilities: {
              primary: "Jump",
              special: "Tiny Escape",
              passive: "Hard to Catch"
          }
      }
  }
];

// Function to display character abilities
function displayCharacterInfo(characterName) {
  const character = characterRoster.find(char => char.name === characterName);
  if (!character) {
      console.log(`Character ${characterName} not found!`);
      return;
  }
  
  console.log(`\n=== ${character.name} - ${character.role} ===`);
  console.log("Abilities:");
  Object.entries(character.abilities).forEach(([type, ability]) => {
      console.log(`- ${type}: ${ability}`);
  });
  console.log("\nStats:");
  Object.entries(character.stats).forEach(([stat, value]) => {
      console.log(`- ${stat}: ${value}`);
  });
  
  // Display companion info if character has one
  if (character.companionName) {
      const companion = companionRoster.find(comp => comp.name === character.companionName);
      if (companion) {
          console.log(`\nCompanion: ${companion.name} (${companion.type})`);
          console.log("Abilities:");
          Object.entries(companion.abilities).forEach(([type, ability]) => {
              console.log(`- ${type}: ${ability}`);
          });
      }
  }
}

// Usage examples:
displayCharacterInfo("Robin");
displayCharacterInfo("Sara");
displayCharacterInfo("Merlin");


class Character {
  static MAX_HEALTH = 100;
  
  constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
  }
  
  roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      return result;
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard", "Ranger", "Rogue"];
  
  constructor(name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
          throw new Error(`Invalid role. Choose from: ${Adventurer.ROLES.join(', ')}`);
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
  }
  
  scout() {
      console.log(`${this.name} is scouting ahead...`);
      return super.roll();
  }
  
  useSkill() {
      console.log(`${this.name} uses their ${this.role} skills!`);
  }
  
  duel(opponent) {
      if (!(opponent instanceof Adventurer)) {
          throw new Error("Can only duel another adventurer!");
      }
      
      console.log(`${this.name} begins a duel with ${opponent.name}!`);
      
      while (this.health > 50 && opponent.health > 50) {
          const thisRoll = this.roll();
          const opponentRoll = opponent.roll();
          
          if (thisRoll > opponentRoll) {
              opponent.health -= 1;
              console.log(`${this.name} wins this round! ${opponent.name}'s health: ${opponent.health}`);
          } else if (opponentRoll > thisRoll) {
              this.health -= 1;
              console.log(`${opponent.name} wins this round! ${this.name}'s health: ${this.health}`);
          } else {
              console.log("Round is a tie!");
          }
      }
      
      const winner = this.health > 50 ? this : opponent;
      console.log(`${winner.name} wins the duel!`);
      return winner;
  }
  
  specialAbility() {
      switch(this.role) {
          case "Fighter":
              console.log(`${this.name} unleashes a powerful attack!`);
              break;
          case "Healer":
              console.log(`${this.name} restores some health to an ally.`);
              break;
          case "Wizard":
              console.log(`${this.name} casts a magical spell!`);
              break;
          case "Ranger":
              console.log(`${this.name} takes aim with their bow!`);
              break;
          case "Rogue":
              console.log(`${this.name} disappears into the shadows!`);
              break;
          default:
              console.log(`${this.name} tries to use their ability!`);
      }
  }
}

class Companion extends Character {
  constructor(name, type) {
      super(name);
      this.type = type;
      this.loyalty = 50;
  }
  
  assist() {
      console.log(`${this.name} assists their adventurer!`);
      return this.roll(2);
  }
}

class AdventurerFactory {
  constructor(role) {
      if (!Adventurer.ROLES.includes(role)) {
          throw new Error(`Invalid role. Choose from: ${Adventurer.ROLES.join(', ')}`);
      }
      this.role = role;
      this.adventurers = [];
  }
  
  generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
      return newAdventurer;
  }
  
  findByIndex(index) {
      return this.adventurers[index];
  }
  
  findByName(name) {
      return this.adventurers.find((a) => a.name === name);
  }
  
  getAllAdventurers() {
      return this.adventurers;
  }
  
  removeAdventurer(name) {
      this.adventurers = this.adventurers.filter(a => a.name !== name);
  }
}

// Example usage
const healerFactory = new AdventurerFactory("Healer");
const robin = healerFactory.generate("Robin");
const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
const sara = new Companion("Sara");
const grace = healerFactory.generate("Grace");


robin.companion = leo;
leo.companion = frank;
frank.inventory = ["small hat", "sunglasses"];

// Test the functionality
robin.scout();
leo.assist();
frank.roll();
robin.specialAbility();
sara.roll();
grace.specialAbility();

