package geometria;

public class Retangulo {

	public double Base;
	public double Altura;
	public int Id;
	
	public Retangulo () {
	}
	
	public Retangulo (int id, double base, double altura) {
		this.Base = base;
		this.Altura = altura;
		this.Id = id;
	}
	
	public double calcularArea() {
		double area = Base * Altura;
		return area;
	}
	
	public double calcularPerimetro() {
		double perimetro = 2*(Base + Altura);
		return perimetro;
	}
	
	public double calcularDiagonal() {
		double diagonal = Math.sqrt((Base*Base) + (Altura*Altura));
		return diagonal;
	}

	public double getBase() {
		return Base;
	}

	public void setBase(double base) {
		Base = base;
	}

	public double getAltura() {
		return Altura;
	}

	public void setAltura(double altura) {
		Altura = altura;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
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
		Retangulo other = (Retangulo) obj;
		if (Id != other.Id)
			return false;
		return true;
	}
	
	
}
