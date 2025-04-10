
# TechnicalAPITest & TechnicalFrontend

Este repositorio contiene dos proyectos: **TechnicalAPITest** (backend) y **TechnicalFrontend** (frontend). A continuación se describen las instrucciones para ejecutar ambos proyectos en tu entorno local.

## Requisitos

Asegúrate de tener los siguientes programas instalados en tu máquina:

- [Maven](https://maven.apache.org/download.cgi) para el backend.
- [Node.js](https://nodejs.org/) y [Angular CLI](https://angular.io/cli) para el frontend.

---

## **1. TechnicalAPITest (Backend)**

Para ejecutar el proyecto de backend, sigue estos pasos:

1. **Compilar el proyecto** sin ejecutar las pruebas:

   ```bash
   mvn clean package -DskipTests
   ```

2. **Ejecutar el archivo JAR generado**:

   ```bash
   java -jar target/TechnicalAPITest-0.0.1-SNAPSHOT.jar
   ```

Esto iniciará el backend y estará disponible en el puerto configurado en tu proyecto (usualmente en el puerto 8080).

---

## **2. TechnicalFrontend (Frontend)**

Para ejecutar el proyecto de frontend, sigue estos pasos:

1. **Instalar las dependencias de Node.js**:

   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo de Angular**:

   ```bash
   ng serve
   ```

El frontend estará disponible en `http://localhost:4200` por defecto.

---

## Notas adicionales

- Asegúrate de tener el backend corriendo antes de iniciar el frontend.
- Si encuentras algún problema o tienes preguntas, no dudes en abrir un _issue_ en este repositorio.

---
