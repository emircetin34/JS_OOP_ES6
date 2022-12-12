// Syntactic Sugar
// ES6 ile yapılan söz dizimine yani syntax yapısına Syntactic Sugar 'denir



// ES6 ÖNCESİ ESKİ YÖNTEM
function Employee(name,age,salary){
    this.name = name;
    this.age=age;
    this.salary=salary;
}
//Constructor fonksiyon ekleme (Prototype)
Employee.prototype.showInfos= function(){
    console.log("İsim: ", this.name , + " Yaş: "+ this.age + " Maaş: " + this.salary);
}

const emp = new Employee("Ahmet",30,4000);
console.log(emp)



// ES6 İLE YENİ YÖNTEM  (Syntactic Sugar)

class Employee2 {
    constructor(name,age,salary){
        this.name = name;
        this.age=age;
        this.salary=salary;
    }

    showInfos(){
        console.log("İsim: ", this.name , + " Yaş: "+ this.age + " Maaş: " + this.salary);
    }
}

const emp2 = new Employee2("Ahmet",30,4000);
console.log(emp2);