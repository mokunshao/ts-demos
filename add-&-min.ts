function add(a: any, b: any): any {
  return a + b;
}

console.log(add('frank',1))

function min(a:number, b:number): number {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

var c = min(101, 201);
console.log(c);
