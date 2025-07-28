enum CharacterClass {
  Warrior,
  Mage,
  Rogue,
  Healer,
}

enum PlayerStatus {
  online,
  inGame,
  offline,
}

type DifficultyLevel = "Easy" | "Medium" | "Hard";

let Player1Class = CharacterClass.Warrior;
let PlayerClass = PlayerStatus.inGame;

let gameDifficulty: DifficultyLevel = "Easy";

type UserProfile = {
  name: string;
  details?: {
    location?: {
      city?: string;
    };
  };
};

const UserWithProfile: UserProfile = {
  name: "Mustapha Osman",
  details: {
    location: {
      city: "Lakeside",
    },
  },
};

const UserWithoutProfile: UserProfile = {
  name: "Zachary Quinto",
};

console.log(UserWithProfile.details?.location?.city);
console.log(
  UserWithoutProfile.details?.location?.city ?? "The City is unknown"
);

console.log(UserWithProfile.details!.location!.city);

type MathOperation = {
  func: (num1: number, num2: number) => number;
};

let add: MathOperation = {
  func: (a, b) => a + b,
};
let subtract: MathOperation = {
  func: (a, b) => a - b,
};

console.log(add.func(5, 2));
console.log(subtract.func(10, 2));

let myfunc: MathOperation = {
  func: (a, b) => a * b,
};

myfunc.func(1, 1);
