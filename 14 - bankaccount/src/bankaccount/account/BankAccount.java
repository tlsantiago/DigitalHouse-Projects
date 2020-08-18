package bankaccount.account;

public class BankAccount {

	private Integer accNumber;
	private String accOwner;
	private Double balance;
	
	public BankAccount(Integer accNumber, String accOwner, Double balance) {
		super();
		this.accNumber = accNumber;
		this.accOwner = accOwner;
		this.balance = balance;
	}

	public Integer getAccNumber() {
		return accNumber;
	}

	public String getAccOwner() {
		return accOwner;
	}

	public void setAccOwner(String accOwner) {
		this.accOwner = accOwner;
	}

	public Double getBalance() {
		return balance;
	}
	
	public void deposit(Double amount) {
		this.balance += amount;
	}
	
	public void withdraw(Double amount) {
		this.balance = this.balance - amount - 5.00;
	}
	
	public void accData() {
		System.out.println("Conta: " + this.getAccNumber() 
		+ ", Titular: " + this.getAccOwner() 
		+ ", Saldo: R$" + this.getBalance());
	}
	
}
