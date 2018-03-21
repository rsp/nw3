const f = ({
  a: x,
  b: {
    c: [y, z]
  }
}: {
  a: string,
  b: {
    c: number[]
  }
}) => ({ x, y, z });

const r = f({ a: '1', b: { c: [2, 3] } });

console.log(r);
