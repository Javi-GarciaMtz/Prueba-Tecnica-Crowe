package com.technicalapitest.service;


import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.technicalapitest.model.People;
import com.technicalapitest.model.PeopleResponse;

@Service
public class SwapiService {
    private final String SWAPI_URL = "https://swapi.dev/api/people/";

    public People getPeopleById(int id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(SWAPI_URL + id + "/", People.class);
    }
    
    public PeopleResponse getAllPeople() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(SWAPI_URL, PeopleResponse.class);
    }
    
}
