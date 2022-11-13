package com.travel.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.travel.app.model.Places;
import com.travel.app.service.TravelService;

@Controller
//The @Controller annotation indicates that a particular class serves the role of a controller. 
//Spring Controller annotation is typically used in combination with annotated handler methods based on the @RequestMapping annotation. 
public class TravelController {
	
	@Autowired
	TravelService travelService;
	
	@RequestMapping("/travel/fetch/places")
	public ResponseEntity<List<Places>> getPlaces(){
		List<Places> places = travelService.getPlaces();
		return new ResponseEntity<List<Places>>(places, HttpStatus.OK);
	}

}