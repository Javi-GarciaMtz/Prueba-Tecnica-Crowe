package com.technicalapitest.model;

public class AddPeopleResponse {
    private String status;
    private int code;
    private String message;

    // Constructor vacío
    public AddPeopleResponse() {}

    // Constructor con parámetros
    public AddPeopleResponse(String status, int code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }

    // Getters y Setters
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
