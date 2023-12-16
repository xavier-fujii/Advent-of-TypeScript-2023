type SantaStr = "🎅🏼";

type PlusOne<N> = N extends 0
  ? 1
  : N extends 1
  ? 2
  : N extends 2
  ? 3
  : N extends 3
  ? 4
  : N extends 4
  ? 5
  : N extends 5
  ? 6
  : never;

type Tail<T extends string[]> = T extends [string, ...infer Rest] ? Rest : [];

type FindSanta<T extends string[]> = T extends []
  ? never
  : T extends [SantaStr, ...infer Rest]
  ? 0
  : PlusOne<FindSanta<Tail<T>>>;

type Forest0 = ["s", "🎅🏼", "🎄", "🎄", "🎄"];
type test_0_actual = FindSanta<Forest0>;
type test_0_expected = 0;
