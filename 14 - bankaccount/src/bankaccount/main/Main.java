package bankaccount.main;

import java.util.Scanner;

import bankaccount.account.BankAccount;

public class Main {

	public static void main(String[] args) {
		
		
		Scanner scan = new Scanner(System.in);
		Double balance = 0.00;
		System.out.print("Digite o nome do titular da conta: ");
		String accOwner = scan.next();
		System.out.print("Digite o número da conta: ");
		Integer accNumber = scan.nextInt();
		System.out.println("Será feito um depósito inicial?");
		System.out.println("1 - SIM");
		System.out.println("2 - NÃO");
		Integer initialDep = scan.nextInt();
		
		
		switch(initialDep) {
		case 1:
			System.out.print("Digite o valor do depósito: ");
			balance = scan.nextDouble();
			System.out.println("Conta criada com sucesso!");
			System.out.println("");
			break;
		case 2: 	
			System.out.println("Conta criada com sucesso!");
			System.out.println("");
			break;
		default:
			System.out.println("Opção inválida, conta criada sem saldo.");
			break;
		}
		
		
		BankAccount newAccount = new BankAccount(accNumber, accOwner, balance);
		newAccount.accData();
		System.out.println("");
		
		
		System.out.println("Opções: ");
		System.out.println("1 - Depósito");
		System.out.println("2 - Saque");
		System.out.println("3 - Sair");
		
		Integer opt = scan.nextInt();
		
		switch(opt) {
		case 1:
			System.out.print("Digite o valor do depósito: ");
			Double amount = scan.nextDouble();
			newAccount.deposit(amount);
			newAccount.accData();
			break;
			
		case 2: 	
			System.out.print("Digite o valor do saque: ");
			amount = scan.nextDouble();
			newAccount.withdraw(amount);
			newAccount.accData();
			break;
			
		case 3:
			System.out.println("Até a próxima!");
			break;
			
		default:
			System.out.println("Opção inválida! Encerrando acesso.");
		}
		
		
		scan.close();
	}
	
}
