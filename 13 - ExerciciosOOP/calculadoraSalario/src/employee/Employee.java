package employee;

public class Employee {

	public String Name;
	public double GrossSalary;
	public int Taxes;
	public double NetSalary;
	public int Id;
	
	public Employee() {
	}
	
	public Employee(int id, String name, double grossSalary, int taxes) {
		this.Id = id;
		this.Name = name;
		this.GrossSalary = grossSalary;
		this.Taxes = taxes;
		this.NetSalary = grossSalary - taxes;
	}
	
	public void raise(double percentage) {
		this.GrossSalary += this.GrossSalary * (percentage/100);
		this.NetSalary = GrossSalary - Taxes;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public double getNetSalary() {
		return NetSalary;
	}

	public void setNetSalary(double netSalary) {
		NetSalary = netSalary;
	}

	public void setName(String name) {
		Name = name;
	}

	public double getGrossSalary() {
		return GrossSalary;
	}

	public void setGrossSalary(double grossSalary) {
		GrossSalary = grossSalary;
	}

	public int getTaxes() {
		return Taxes;
	}

	public void setTaxes(int taxes) {
		Taxes = taxes;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		if (Id != other.Id)
			return false;
		return true;
	}
	
	
}
