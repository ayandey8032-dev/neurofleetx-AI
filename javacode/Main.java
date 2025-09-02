package javacode;

class Car {
    
    String brand;
    int year;

    
    void displayDetails() {
        System.out.println("Car Brand: " + brand);
        System.out.println("Year: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
       
        Car myCar = new Car();

    
        myCar.brand = "Tesla";
        myCar.year = 2023;

        
        myCar.displayDetails();
    }
}
