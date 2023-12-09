type AppendGood<T extends Record<string, any>> = {
  [P in keyof T as P extends string ? `good_${P}` : P]: T[P];
};
// three tips
// 1. template string is allowed in type space
// 2. using `as` in type space is like using assignment(`=`) in value space
// 3. there is no difference between using index signature(`{ [key: string]: any }`) or `Record<string, any>`,
// because TypeScript can't infer that property being string in `[P in keyof T]`

const a = "a";
const b = "b";
const r = `${a}${b}`;

type WellBehavedList = {
  tom: { address: "1 candy cane lane" };
  timmy: { address: "43 chocolate dr" };
  trash: { address: "637 starlight way" };
  candace: { address: "12 aurora" };
};
type test_wellBehaved_actual = AppendGood<WellBehavedList>;
