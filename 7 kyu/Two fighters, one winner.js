// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// ##Example:

//   declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") => "Lew"

//   // Python
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// ####Technical note for Clojure programmers: The second fighter argument (f2) always attacks first.

// Javascript

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }
// Python

// class Fighter(object):
//     def __init__(self, name, health, damage_per_attack):
//         self.name = name
//         self.health = health
//         self.damage_per_attack = damage_per_attack
// Java

// public class Fighter {
//   public String name;
//   public int health, damagePerAttack;
//   public Fighter(String name, int health, int damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//   }
// }
// C Sharp

// public class Fighter {
//   public string Name;
//   public int Health, DamagePerAttack;
//   public Fighter(string name, int health, int damagePerAttack) {
//     this.Name = name;
//     this.Health = health;
//     this.DamagePerAttack = damagePerAttack;
//   }
// }
// Clojure

// (defrecord Fighter [name hp attack])
// C++

// class Fighter
// {
// private:
//     std::string name;

//     int health;

//     int damagePerAttack;

// public:
//     Fighter(std::string name, int health, int damagePerAttack)
//     {
//         this->name = name;
//         this->health = health;
//         this->damagePerAttack = damagePerAttack;
//     }

//     ~Fighter() { };

//     std::string getName()
//     {
//         return name;
//     }

//     int getHealth()
//     {
//         return health;
//     }

//     int getDamagePerAttack()
//     {
//         return damagePerAttack;
//     }

//     void setHealth(int value)
//     {
//         health = value;
//     }
// };


