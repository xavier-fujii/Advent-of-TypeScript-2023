type Letter =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

// maybe GetFirstLetter can be inlined to Reverse
type GetFirstLetter<T> = T extends `${infer F}${infer _Ignore}`
  ? F extends Letter
    ? F
    : never
  : never;

type Reverse<T extends string> = T extends `${Letter}${infer Rest}`
  ? Rest extends ""
    ? GetFirstLetter<T>
    : `${Reverse<Rest>}${GetFirstLetter<T>}`
  : "";

type test_0_actual = Reverse<"rehsaD">;
type test_0_expected = "Dasher";
