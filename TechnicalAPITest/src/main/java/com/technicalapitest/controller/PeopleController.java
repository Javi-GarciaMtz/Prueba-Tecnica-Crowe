package com.technicalapitest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.technicalapitest.model.AddPeopleResponse;
import com.technicalapitest.model.People;
import com.technicalapitest.model.PeopleResponse;
import com.technicalapitest.service.SwapiService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/people")
@CrossOrigin(origins = "*")
public class PeopleController {

    private final SwapiService swapiService;
    private final List<People> localPeopleList = new ArrayList<>();

    public PeopleController(SwapiService swapiService) {
        this.swapiService = swapiService;
    }

    // Obtener información de un personaje por id
    @GetMapping("/{id}")
    public People getCharacterById(@PathVariable int id) {    	
        return swapiService.getPeopleById(id);
    }
    
    // Obtener todos los personajes
    @GetMapping("/all")
    public PeopleResponse getAllCharacters() {
    	return swapiService.getAllPeople();
    }

    // Insertar un nuevo personaje en la lista local
    @PostMapping("/add")
    public ResponseEntity<AddPeopleResponse> addCharacter(@RequestBody People person) {
        localPeopleList.add(person);
        
        AddPeopleResponse response = new AddPeopleResponse("success", 201, "Person added successfully!");
        
        return ResponseEntity.status(201).body(response);
    }
    
    
}
