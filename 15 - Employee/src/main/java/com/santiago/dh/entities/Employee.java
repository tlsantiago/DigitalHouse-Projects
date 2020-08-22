package com.santiago.dh.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

	private String name;
	private Integer hours;
	private Double valuePerHour;

	
	public double payment() {
		return hours * valuePerHour;
	}
}
