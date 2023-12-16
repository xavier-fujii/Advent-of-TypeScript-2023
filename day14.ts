type DecipherNaughtyList<T extends string> =
  T extends `${infer Prefix}/${infer Suffix}`
    ? DecipherNaughtyList<Suffix> | DecipherNaughtyList<Prefix>
    : T;

type test_0_actual = DecipherNaughtyList<"timmy/jimmy">;
type test_0_expected = "jimmy" | "timmy";
