{
  enum Gender {
    Male,
    Female
  }
  interface Person {
    name: string;
    gender: Gender;
  }

  function merry(a: Person, b: Person) {
    if (a.gender !== b.gender) {
      return [a.name, b.name];
    } else {
      throw new Error("性别相同不能结婚");
    }
  }

  let a = { name: "Jack", gender: Gender.Male };
  let b = { name: "Amy", gender: Gender.Female };
  console.log(merry(a, b));
}
