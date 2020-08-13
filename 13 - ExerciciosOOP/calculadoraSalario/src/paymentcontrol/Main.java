package paymentcontrol;

import java.util.Scanner;

import employee.Employee;

public class Main {

	public static void main(String[] args) {

		
		Scanner scan = new Scanner(System.in);
		
		System.out.print("Digite o nome do funcionário: ");
		String name = scan.next();
		System.out.print("Digite o salário bruto do funcionário: ");
		double grossSalary = scan.nextDouble();
		System.out.print("Digite o valor do imposto pago pelo funcionário: ");
		int taxes = scan.nextInt();
		
		Employee x = new Employee(1, name, grossSalary, taxes);
		
		System.out.println(" ");
		System.out.println("O funcionário " + x.getName() 
							+ " recebe um salário líquido de: "
							+ x.getNetSalary());
		
		System.out.print("Qual será o percentual de aumento do funcionarío? ");
		Double amount = scan.nextDouble();
		x.raise(amount);
		System.out.println(" ");
		System.out.println("O funcionário " + x.getName() 
		+ " receberá um salário líquido de: "
		+ x.getNetSalary() + " após o aumento.");
		
		
		scan.close();
	}

}
