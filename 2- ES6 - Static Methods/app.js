// Statik Metodlar


// Statik Olmadan Kullanım
class Matematik {
    cube(x){
        console.log(x*x*x);  
    }
}

const math = new Matematik();   // burada obje oluşturduk
math.cube(3); //27 olarak döndürür.




// STATİK KULLANIM
class Matematik2 {
    static cube2(x){
        console.log(x*x*x);
    }
}

Matematik2.cube2(3); //27 olarak döndürür.




// İKİSİ BİR ARADA
class Matematik3 {
    cube3(x){
        console.log(x*x*x);  
    }
    static cube4(x){
        console.log(x*x*x);
    }
}

const math3 = new Matematik();   // burada obje oluşturduk
math.cube(3); //27 olarak döndürür. 
Matematik3.cube4(3); // 27 olarak döndürür. 