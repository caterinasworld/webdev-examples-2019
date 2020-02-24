console.log('Hello World, TypeScript!');

function hello(name: string, date: number): string {
  return `Hello ${name}, it's Feb ${date}`;
}

const result: string = hello('Caterina', 24);
console.log(result);

// creating our own types
type Hello = { name: string; date: number };

function hello2({ name, date }: Hello): string {
  return `Hello ${name}, it's Feb ${date}`;
}

const result2: string = hello2({ name: 'Spongebob', date: 25 });
console.log(result2);
