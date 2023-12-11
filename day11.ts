type SantaListProtector<T extends { [key: string | number]: any }> = {
  readonly [P in keyof T]: T[P] extends string | number | Function
    ? T[P]
    : SantaListProtector<T[P]>;
};

type test_0_actual = SantaListProtector<{
  //   ^?
  hacksore: () => "naughty";
  trash: string;
  elliot: {
    penny: boolean;
    candace: {
      address: {
        street: {
          name: "candy cane way";
          num: number;
        };
        k: "hello";
      };
      children: [
        "harry",
        {
          saying: ["hey"];
        }
      ];
    };
  };
}>;
type test_0_expected = {
  readonly hacksore: () => "naughty";
  readonly trash: string;
  readonly elliot: {
    readonly penny: boolean;
    readonly candace: {
      readonly address: {
        readonly street: {
          readonly name: "candy cane way";
          readonly num: number;
        };
        readonly k: "hello";
      };
      readonly children: readonly [
        "harry",
        {
          readonly saying: readonly ["hey"];
        }
      ];
    };
  };
};
