package com.travel.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travel.app.model.Places;

public interface TravelRepository extends JpaRepository<Places, Integer> {

}
