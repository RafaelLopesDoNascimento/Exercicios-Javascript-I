const primeiroNome = prompt("informe o promeiro nome do recruta");
const sobrenome = prompt("informe o sobrenome");
const campoDeEstudo = prompt("qual o campo de estudo do recruta");
const anoDeNascimento = prompt("data de nascimento do recruta");

alert(
  "recruta cadastrado com sucesso\n" +
    "\n nome completo " +
    primeiroNome +
    " " +
    sobrenome +
    "\n campo de estudo " +
    campoDeEstudo +
    "\n idade " +
    (2022 - anoDeNascimento)
);
