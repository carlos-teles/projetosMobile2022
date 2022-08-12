var salario = 2000.00;
var aumento = 0.15;
var inflacao = 0.07;

novoSalario = salario + ( aumento * salario );
novoSalarioInflacao = novoSalario - ( inflacao * novoSalario );

console.log( novoSalario );
console.log( novoSalarioInflacao );