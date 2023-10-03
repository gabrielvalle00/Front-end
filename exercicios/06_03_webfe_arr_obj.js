/*
Desenvolva uma função que receba por parâmetro as variáveis: nome do funcionário, salário e quantos anos ele trabalha na empresa.
Exibir uma mensagem amigável mostrando o nome do funcionário com seu novo salário, utilizando o RETURN mostre seu novo salário, reajustado de acordo com a tabela a seguir
- Até 3 anos de empresa: aumento de 3%
- Entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%
 */


 
const nomeFuncionario = "Valle";
const salarioAtual = 1900.00;
const anosTrabalhados = 11;

function calcularNovoSalario(nome, salario, anosNaEmpresa) {
    let novoSalario;
  
    if (anosNaEmpresa <= 3) {
      novoSalario = salario * 1.03; // Aumento de 3%
    } else if (anosNaEmpresa <= 10) {
      novoSalario = salario * 1.125; // Aumento de 12.5%
    } else {
      novoSalario = salario * 1.2; // Aumento de 20%
    }
  
    const mensagem = `${nome}, seu novo salário é R$${novoSalario}`;
    return [novoSalario, mensagem];
  }
 
  
  const [novoSalario, mensagem] = calcularNovoSalario(nomeFuncionario, salarioAtual, anosTrabalhados);

  console.log(mensagem);
  