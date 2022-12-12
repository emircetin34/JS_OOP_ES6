class Person { //Superclass yada Baseclass olarak geçer.
    constructor(name,age){
        this.name = name;
        this.age= age;
    }

    showInfos(){
        console.log(" İsim: ", + this.name + " Yaş "+ this.age);
    }
}



class Employee extends Person { //Derived Class , Subclass , ChildClass
    constructor(name,age,salary){
        // this.name = name;
        // this.age= age;
        super(name,age); // Üst sınıfın constructorını kullanamak isteğimiz durumlarada super() metodunu kullanabiliriz.
        this.salary=salary;
    }
    showInfos(){ // OVERRIDE : Yukarıdaki showInfos yeterli gelmeyip revize ihtiyacı duyarsak , aynı fonksiyon ismini farklı işlevlerde tanımlamaya override denir. İptal işlemide dahil.
        console.log(" İsim: ", + this.name + " Yaş "+ this.age + " Maaş " + this.salary);
    }
    toString(){ //OVERRIDE
        console.log("OVERRIDE toString");
    }

    raiseSalary(amount){//Exstra
        this.salary += amount;
    }
}

const emp = new Employee("Emir", 25, 4000);
emp.raiseSalary(1250);
emp.toString();
console.log(emp);


