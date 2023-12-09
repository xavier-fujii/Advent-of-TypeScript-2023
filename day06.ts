// filter all types in union type T, that is subtype of U
type FilterChildrenBy<T, U> = T extends U ? never : T;

type test_0_actual = FilterChildrenBy<"nice" | "nice" | "nice", "naughty">;
type test_0_expected = "nice";

type test_2_actual = FilterChildrenBy<string | number | (() => void), Function>;
type test_2_expected = string | number;
