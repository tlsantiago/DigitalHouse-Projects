package com.santiago.dh.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class OutsourcedEmployee extends Employee {

	private Double additionalCharge;

	@Override
	public double payment() {
		return super.payment() + additionalCharge * 1.1;
	}

	public OutsourcedEmployee(String name, int hours, double valuePerHour, double additionalCharge2) {
		this.setName(name);
		this.setHours(hours);
		this.setValuePerHour(valuePerHour);
		this.setAdditionalCharge(additionalCharge);
	}
}
