var salario = 2000.50;
var aumento = 0.15;
var inflacao = 0.07;

novoSalario = salario + ( aumento * salario );
novoSalarioInflacao = novoSalario - ( inflacao * novoSalario );

console.log( novoSalario );
console.log( novoSalarioInflacao );

var strnovoSalario = `O novo salário é:\n R$\t ${novoSalario}`;
var strnovoSalarioInflacao = `O novo salário aplicada inflação é:\n R$  ${novoSalarioInflacao}`;
console.log( strnovoSalario );
console.log( strnovoSalarioInflacao );