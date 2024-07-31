let person = {
  firstName: "John",
  lastName: "Doe",
  age: "32",
};

function logPerson(obj: {
  firstName: string;
  lastName: string;
  age: string;
}): void {
  console.log("Name: " + obj.firstName + " " + obj.lastName);
  console.log("Age: " + obj.age);
}

// To pass an object to a TypeScript function, you need to follow these steps:

// Define an Interface or Type for the Object: First, define the structure of the object using an interface or a type. This helps TypeScript understand the shape of the object and ensures type safety.

// Define the Function: Create the function that accepts an object of the specified type as its parameter.

// Call the Function: Pass an object that matches the defined type when calling the function.

interface User {
  name: string;
  age: number;
  email?: string; // optional property
}

const user1: User = {
  name: "Alice",
  age: 30,
};

const user3: User = {
  name: "Alice",
  age: 30,
  email: "abc@gmail.com",
};

function greetUser(user: User): void {
  console.log(`Hello, ${user.name}!`);
  if (user.email) {
    console.log(`Your email is ${user.email}`);
  }
}

const user2: User = {
  name: "Bob",
  age: 25,
  email: "bob@example.com",
};

greetUser(user1); // Output: Hello, Alice!
greetUser(user3); // Output: Hello, Bob! Your email is bob@example.com

//nested objects

interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface UserProfile {
  name: string;
  age: number;
  address: Address;
}

function printUserProfile(profile: UserProfile): void {
  console.log(`Name: ${profile.name}`);
  console.log(`Age: ${profile.age}`);
  console.log(
    `Address: ${profile.address.street}, ${profile.address.city}, ${profile.address.postalCode}`
  );
}

// Example usage
const userProfile: UserProfile = {
  name: "John Doe",
  age: 40,
  address: {
    street: "123 Elm St",
    city: "Gotham",
    postalCode: "12345",
  },
};

printUserProfile(userProfile);

// Optional Properties and Method Parameters
// Consider a scenario where you have a function that takes an object with optional properties

interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number; // Optional property
}

function displayProduct(product: Product): void {
  console.log(`Product ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price}`);
  if (product.discount) {
    console.log(`Discount: ${product.discount}%`);
  }
}

// Example usage
const product1: Product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
};

const product2: Product = {
  id: 102,
  name: "Smartphone",
  price: 499.99,
  discount: 10,
};

displayProduct(product1);
displayProduct(product2);

// Type Unions and Discriminated Unions
// Type unions can be used when a parameter could be one of several types. Here’s an example with a discriminated union:
interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

// Example usage
const circle: Circle = {
  kind: "circle",
  radius: 10,
};

const rectangle: Rectangle = {
  kind: "rectangle",
  width: 20,
  height: 15,
};

console.log(`Circle area: ${calculateArea(circle)}`);
console.log(`Rectangle area: ${calculateArea(rectangle)}`);
