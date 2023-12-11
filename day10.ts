type StreetSuffixTester<
  T extends string,
  U extends string
> = T extends `${string}${U}` ? true : false;
// it's amazing that string type can be put inside template string braces

type test_0_actual = StreetSuffixTester<"Candy Cane Way", "Way">;
type test_0_expected = true;

type test_3_actual = StreetSuffixTester<
  "Fifth Dimensional Nebulo 9",
  "invalid"
>;
type test_3_expected = false;
