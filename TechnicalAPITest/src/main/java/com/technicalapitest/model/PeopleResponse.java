package com.technicalapitest.model;
import java.util.List;

public class PeopleResponse {
    private int count;
    private String next;
    private String previous;
    private List<People> results;

    // Constructor vacío
    public PeopleResponse() {}

    // Constructor con parámetros
    public PeopleResponse(int count, String next, String previous, List<People> results) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }

    // Getters y Setters
    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getNext() {
        return next;
    }

    public void setNext(String next) {
        this.next = next;
    }

    public String getPrevious() {
        return previous;
    }

    public void setPrevious(String previous) {
        this.previous = previous;
    }

    public List<People> getResults() {
        return results;
    }

    public void setResults(List<People> results) {
        this.results = results;
    }
}
