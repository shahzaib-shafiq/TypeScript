function addTwo(a: number): Number {
  return a + 2;
}

function getUpper(a: string): String {
  return a.toUpperCase();
}

function UserData(name: string, email: string, isPaid: boolean) {}

UserData("Shahzaib", "shahzaib@gmail.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

addTwo(5);

const heros = ["A", "B", "C", "D"];
//const heros = [1, 2, 3];
heros.map((hero): String => {
  {
    return `hero is ${hero}`;
  }
});
