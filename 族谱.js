#!/usr/bin/env ts-node
function createTabs(n) {
    return "----".repeat(n);
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.children = [];
        this.name = name;
    }
    Person.prototype.addChild = function (child) {
        this.children.push(child);
    };
    Person.prototype.introduceFamily = function (n) {
        n = n || 0;
        console.log("" + createTabs(n) + this.name);
        this.children.forEach(function (person) {
            person.introduceFamily(n + 1);
        });
    };
    return Person;
}());
var grandPa = new Person("王麻子");
var person1 = new Person("王大锤");
var person2 = new Person("王者");
var child11 = new Person("王毛");
var child12 = new Person("王水");
var child21 = new Person("王荣耀");
var child22 = new Person("王农药");
grandPa.addChild(person1);
grandPa.addChild(person2);
person1.addChild(child11);
person1.addChild(child12);
person2.addChild(child21);
person2.addChild(child22);
grandPa.introduceFamily();
console.dir(grandPa);
console.dir(person1);
console.dir(person2);
console.dir(child11);
console.dir(child12);
console.dir(child21);
console.dir(child22);
