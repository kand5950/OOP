// Super class
class Person {

  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here is my quirky fact: ${this.quirkyFact}`;
  }
    
  }

// Sub classes
class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at LHL. ${super.bio()}`;
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.offShift = false;
  }

  bio() {
    return `I'm a mentor at LHL. ${super.bio()}`;
  }

 } 

 let anit = new Student('Anit', 'nothing really');
 console.log(anit.bio());

 let dan = new Mentor('Dan', 'Will carry u in life');
 console.log(dan.bio());
