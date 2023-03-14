db.createUser({
  user: "root",
  pwd: "example",
  roles: [{ role: "readWrite", db: "test_docker" }],
  passwordDigestor: "server",
});

db.User.insertMany([
  {
    name: "Ruina",
    address: "Jl Cempedak",
    postalCode: "1282",
  },
  {
    name: "Toti",
    address: "Jl Apel",
    postalCode: "1732",
  },
  {
    name: "Galang",
    address: "Jl Cempaka",
    postalCode: "1382",
  },
  {
    name: "Budi",
    address: "Jl Durian",
    postalCode: "1232",
  },
]);
