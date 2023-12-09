// type SantasList<T extends any[], U extends any[]> = ;

// Today's puzzle is concatenating two tuples in type space
// related documentation: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types

// Let's write some little tips about tuple types

// 1st, concat two tuples with only one item inside them
type Concat_1<T extends [any], U extends [any]> = [T[0], U[0]];
// type Concat_1_T = Concat_1<["a"], ["b"]>;

// 2nd, slice a tuple
type TupleToPair<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [First, Rest]
  : [];

type SantasList<
  T extends readonly any[],
  U extends readonly any[]
> = U extends readonly [infer First, ...infer Rest]
  ? Rest extends []
    ? [...T, First]
    : SantasList<readonly [...T, First], [...Rest]>
  : T;

const bads = ["tommy", "trash"] as const;
const goods = ["bash", "tru"] as const;

type test_0_actual = SantasList<typeof bads, typeof goods>;
type test_0_expected = ["tommy", "trash", "bash", "tru"];
