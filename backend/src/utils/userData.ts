//import hashing library
import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Mostafa Saeed',
    email: 'Admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Andrew Ibrahim',
    email: 'andrew@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: 'Yousef Safwat',
    email: 'yousef@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: 'Fady Adel',
    email: 'fady@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  }
];

export default users;
