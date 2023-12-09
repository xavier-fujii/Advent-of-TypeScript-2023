type ExcludeNaughty<T> = T extends `naughty${infer _Ignore}` ? never : T;

type RemoveNaughtyChildren<T extends Record<string, any>> = {
  [P in ExcludeNaughty<keyof T>]: T[P];
};

// add U prefix to T
type AddPrefix<T extends string, U extends string> = `${U}${T}`;

// judge if T starts with U
type StartsWith<T extends string, U extends string> = T extends `${U}${any}`
  ? true
  : false;

// type P1 = AddPrefix<"aaa", "b">;
// type P2 = AddPrefix<"aaa", "aaa_b">;

type SantasList = {
  naughty_tom: { address: "1 candy cane lane" };
  good_timmy: { address: "43 chocolate dr" };
  naughty_trash: { address: "637 starlight way" };
  naughty_candace: { address: "12 aurora" };
};
type L = keyof SantasList;
type L_2 = "good_timmy2" extends L ? "true" : "false";

type test_wellBehaved_actual = RemoveNaughtyChildren<SantasList>;
type test_wellBehaved_expected = {
  good_timmy: { address: "43 chocolate dr" };
};
