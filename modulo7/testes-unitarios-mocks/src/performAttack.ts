import { Character } from "./models/Character";
import { validateCharacter } from "./validateCharacter";

//a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação.

// export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//       throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
//   };


//b. Implemente a função utilizando inversão de dependências

  export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };


  //c. Explique, com as suas palavras, as diferenças entre as duas implementações (escreva no seu código como comentário)

 // Utilizando o validator, recriamos a função a ser testada, sem a depender da outra função que a complementa, 
 // testando assim somente a função de forma isolada.