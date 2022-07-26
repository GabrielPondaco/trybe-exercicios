export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losangle(biggerDiagonal: number, smallerDiagonal: number): number {
  return (biggerDiagonal * smallerDiagonal) / 2;
}

export function trapeze(biggerBase: number, smallerBase: number, height: number): number {
  return ((biggerBase + smallerBase) * height) / 2;
}

export function circle(radius: number): number {
  return (3.14 * Math.pow(radius, 2));
}