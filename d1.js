const f = ({
  a: x,
  b: {
    c: [y, z]
  }
}) => ({ x, y, z });

const r = f({ a: 1, b: { c: [2, 3] } });

console.log(r);
