import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Binomino",
    email: "binomino@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Android King",
    email: "androidking@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
