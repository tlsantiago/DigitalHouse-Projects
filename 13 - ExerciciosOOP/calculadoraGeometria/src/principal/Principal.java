package principal;

import java.util.Scanner;

import geometria.Retangulo;

public class Principal {

	public static void main(String[] args) {

		/*
		 * Scanner scan = new Scanner(System.in);
		 * 
		 * System.out.println("Digite os três lados do triângulo X: "); double ladoA =
		 * scan.nextDouble(); double ladoB = scan.nextDouble(); double ladoC =
		 * scan.nextDouble(); Triangulo x = new Triangulo(ladoA, ladoB, ladoC);
		 * 
		 * System.out.println("Digite os três lados do triângulo Y: "); ladoA =
		 * scan.nextDouble(); ladoB = scan.nextDouble(); ladoC = scan.nextDouble();
		 * Triangulo y = new Triangulo(ladoA, ladoB, ladoC);
		 * 
		 * double xArea = x.calcularArea(); double yArea = y.calcularArea();
		 * 
		 * System.out.println("A área do triângulo X é: " + xArea);
		 * System.out.println("A área do triângulo Y é: " + yArea);
		 * 
		 * if (xArea > yArea) {
		 * System.out.println("A área do triângulo X é maior que a do triângulo Y"); }
		 * else {
		 * System.out.println("A área do triângulo Y é maior que a do triângulo X");
		 * 
		 * } scan.close();
		 */
		
		Scanner scan = new Scanner(System.in);
		System.out.print("Digite o valor da base do retângulo: ");
		double base = scan.nextDouble();
		System.out.print("Digite o valor da altura do retângulo: ");
		double altura = scan.nextDouble();
		
		Retangulo x = new Retangulo(1, base, altura);
		
		System.out.println("A área do retângulo com ID " + x.getId() + " é: " + x.calcularArea());
		System.out.println("O perímetro do retângulo com ID " + x.getId() + " é: " + x.calcularPerimetro());
		System.out.println("A diagonal do retângulo com ID " + x.getId() + "é: " + x.calcularDiagonal());

		scan.close();
	}

}
