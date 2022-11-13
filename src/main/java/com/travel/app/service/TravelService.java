package com.travel.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.travel.app.model.Places;
import com.travel.app.repository.TravelRepository;

@Service
public class TravelService {

	@Autowired
	TravelRepository travelRepository;
	
	public List<Places> getPlaces() {
		return travelRepository.findAll();
	}

}
