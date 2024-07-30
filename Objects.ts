const User = {
  name: "Shahzaib",
  email: "shahzaib@gmaio.com",
  isActive: true,
};

function createUser({ name: String, isActive: boolean }) {}

let newUser = { name: "Shahzaib", isPaid: false };

createUser(newUser);
