type SantaStr = "🎅🏼";

type FindSanta<TLand> = TLand extends [...infer Rest, infer Tail]
  ? Tail extends SantaStr
    ? Rest["length"]
    : FindSanta<Rest>
  : never;

type Forest0 = ["s", "🎅🏼", "🎄", "🎄", "🎄"];
type test_0_actual = FindSanta<Forest0>;
type test_0_expected = 0;
