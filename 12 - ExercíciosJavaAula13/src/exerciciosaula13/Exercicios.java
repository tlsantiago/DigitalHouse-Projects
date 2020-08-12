package exerciciosaula13;

import java.util.Scanner;

public class Exercicios {

	public static void main(String[] args) {

		
		  //Exercício 04 
		  Scanner scan = new Scanner(System.in);
		  System.out.print("Digite seu nome: "); String name = scan.next();
		  System.out.println(); System.out.println("Saudações, " + name + "!");
		  System.out.println(" ");
		  
		  
		  //Exercício 05 
		  System.out.println("Digite sua idade: "); Integer age =
		  scan.nextInt();
		  
		  if(age >= 18) { System.out.println(name + " é maior de idade.");
		  System.out.println(" "); 
		  } else { 
			  System.out.println(name + " é menor de idade."); System.out.println(" "); }
		  
		  //Exercício 06 
		  System.out.println("Que dia da semana é hoje? ");
		  System.out.println("1 - Domingo"); 
		  System.out.println("2 - Segunda");
		  System.out.println("3 - Terça"); 
		  System.out.println("4 - Quarta");
		  System.out.println("5 - Quinta"); 
		  System.out.println("6 - Sexta");
		  System.out.println("7 - Sábado");
		  
		  Integer dayOfTheWeek = scan.nextInt();
		  
		  switch(dayOfTheWeek) {
		  
		  case 1: 
		  case 7: 
			  System.out.println("É final de semana."); 
			  break; 
			  
		  case 2: 
		  case 3: 
		  case 4: 
		  case 5:
		  case 6: 
			  System.out.println("Não é final de semana.");
			  break; 
			  
		  default:
			  System.out.println("Opção inválida!");
		
		}
		 
	  
	    //Exercício 07
	    System.out.println("Quantos anos você tem? ");
	    Integer age2 = scan.nextInt();
	    
	    	if(age2 >= 18) {
	    	    System.out.print("Você possui habilitação?" );
	    	    System.out.println(" ");
	    	    System.out.println("1 - Sim");
	    	    System.out.println("2 - Não");
	    	    Integer license = scan.nextInt();
	    	    
	    	    if(license ==  2) {
	    	    	System.out.println("Você não pode dirigir.");
	    	    } else if(license == 1) {
	    	    	System.out.println("Pode dirigir!");
	    	    } else {
	    	    	System.out.println("Opção inválida!");
	    	    }
	    	} else {
	    		System.out.println("Não pode dirigir!");
	    	}

	    
	}

}
