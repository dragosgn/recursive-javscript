console.log("working");

// input

const list = [
  {
    id: 1,
    acc: ["a", "b", "c"]
  },
  {
    id: 2,
    acc: ["d", "e", "f"]
  }
];

const permute = input => {
  if (Array.isArray(input)) {
    return input.map(({ id, acc }) =>
      acc.map(i => {
        return { id: id, acc: i };
      })
    );
  }
};

console.log(JSON.stringify(permute(list), null, 4));

const expectedOut = [
  [{ id: 1, acc: "a" }, { id: 2, acc: "d" }],
  [{ id: 1, acc: "a" }, { id: 2, acc: "e" }]
];
