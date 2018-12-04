class People {
  public name: string;
  public nation: string;
  constructor(name: string, nation: string) {
    this.name = name;
    this.nation = nation;
    this.run();
  }
  run() {
    console.log(`${this.nation} ${this.name} is running.`);
  }
}

let a = new People("Ken", "China");

class Student extends People {
  public school: string;
  constructor(name: string, nation: string, school: string) {
    super(name, nation);
    this.school = school;
    this.speech();
  }
  speech() {
    console.log(
      `${this.name} is born in ${this.nation} and study at ${this.school}`
    );
  }
}

let b = new Student("Jack", "USA", "UCLA");