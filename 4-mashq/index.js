class Person {
    #type="Person"
    #age    
    constructor(name,age) {
        this.#age=age;
        this.name=name;
    };
    get ageconfig(){
        return this.#age;
    }
    set ageconfig(newage){
        return this.#age=newage;
    }
};
let person1=new Person("ali",18);
console.log(person1.ageconfig);
