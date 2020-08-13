package product;

public class Product {

	public String Name;
	public double Price;
	public int Quantity;
	
	public Product() {
	}
	
	public Product(String name, double price, int quantity) {
		this.Name = name;
		this.Price = price;
		this.Quantity = quantity;
	}
	
	public void addProduct(int quantity) {
		Quantity += quantity;
	}
	
	public void rmvProduct(int quantity) {
		Quantity -= quantity;
	}
	
	public double totalValue() {
		return Quantity * Price;
	}
	
	public String currentStockValue() {
		return ("Estoque atual do produto " + this.Name + ": " 
				+ "Preço unitário = R$ " + this.Price + ", "
				+ this.Quantity + " unidades em estoque, " 
				+ "Valor total do estoque: $ " 
				+ this.totalValue());
	}
	

}
	

