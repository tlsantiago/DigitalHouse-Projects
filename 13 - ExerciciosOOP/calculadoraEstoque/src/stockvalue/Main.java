package stockvalue;

import java.util.Scanner;

import product.Product;

public class Main {
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.print("Digite o nome do produto: ");
		String name = scan.next();
		System.out.print("Digite o preço do produto: ");
		double price = scan.nextDouble();
		System.out.print("Digite a quantidade atual do produto: ");
		int quantity = scan.nextInt();
		
		Product x = new Product(name, price, quantity);
		
		System.out.println(" ");
		System.out.println(x.currentStockValue());
		
		System.out.println(" ");
		System.out.println("Quantas unidades devem ser adicionadas ao estoque? ");
		int moreUnits = scan.nextInt();
		x.addProduct(moreUnits);
		System.out.println(x.currentStockValue());

		System.out.println(" ");
		System.out.println("Quantas unidades devem ser removidas do estoque? ");
		int lessUnits = scan.nextInt();
		x.rmvProduct(lessUnits);
		System.out.println(x.currentStockValue());

		scan.close();
	}
}
