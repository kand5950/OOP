class Person {

  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here is my quirky fact: ${this.quirkyFact}`;
  }
    
  }


class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }

}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.offShift = false;
  }

 } 

 let student1 = new Student('Anit', 'nothing really');
 console.log(student1.enroll);

 let mentor1 = new Mentor('Dan', 'Will carry u in life');
 console.log(mentor1.goOnShift);
 
