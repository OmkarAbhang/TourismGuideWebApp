package com.travel.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "destinations")
public class Places {
	
	@Id
	@Column(name = "id")
	int id;
	
	@Column(name = "place_name")
	String placeName;
	
	@Column(name = "description")
	String description;
	
	public Places() {
		// TODO Auto-generated constructor stub
	}

	public Places(int id, String placeName, String description) {
		super();
		this.id = id;
		this.placeName = placeName;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPlaceName() {
		return placeName;
	}

	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
