export type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}
export type AllowedNames<Base, Condition> = FilterFlags<
  Base,
  Condition
>[keyof Base]

export type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>

export type TupleToObject<
  T extends readonly any[],
  M extends Record<Exclude<keyof T, keyof any[]>, PropertyKey>
> = { [K in Exclude<keyof T, keyof any[]> as M[K]]: T[K] }

export type ParameterNames<T extends new (...args: any) => any> = Record<
  Exclude<keyof ConstructorParameters<T>, keyof any[]>,
  PropertyKey
>

// typed Object.fromEntries()

export type ParametersToObject<
  T extends new (...args: any) => any,
  keys extends ParameterNames<T>
> = TupleToObject<ConstructorParameters<T>, keys>

type EntriesType =
  | [PropertyKey, unknown][]
  | ReadonlyArray<readonly [PropertyKey, unknown]>

// Existing Utils
type DeepWritable<OBJ_T> = {
  -readonly [P in keyof OBJ_T]: DeepWritable<OBJ_T[P]>
}
type UnionToIntersection<UNION_T> = // From https://stackoverflow.com/a/50375286
  (UNION_T extends any ? (k: UNION_T) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never

// New Utils
type UnionObjectFromArrayOfPairs<ARR_T extends EntriesType> =
  DeepWritable<ARR_T> extends (infer R)[]
    ? R extends [infer key, infer val]
      ? { [prop in key & PropertyKey]: val }
      : never
    : never
type MergeIntersectingObjects<ObjT> = { [key in keyof ObjT]: ObjT[key] }
type EntriesToObject<ARR_T extends EntriesType> = MergeIntersectingObjects<
  UnionToIntersection<UnionObjectFromArrayOfPairs<ARR_T>>
>

// typed Object.entries()

// ~~~~~~~~~~~~~~~~~~~~~ Typed Functions ~~~~~~~~~~~~~~~~~~~~~

export function createTypedObjectFromEntries<ARR_T extends EntriesType>(
  arr: ARR_T
): EntriesToObject<ARR_T> {
  return Object.fromEntries(arr) as EntriesToObject<ARR_T>
}

// ~~~~~~~~~~~~~~~~~~~~~~~~ Utils ~~~~~~~~~~~~~~~~~~~~~~~~

type ObjectType = Record<PropertyKey, unknown>
type PickByValue<OBJ_T, VALUE_T> = // From https://stackoverflow.com/a/55153000
  Pick<
    OBJ_T,
    { [K in keyof OBJ_T]: OBJ_T[K] extends VALUE_T ? K : never }[keyof OBJ_T]
  >
type ObjectEntries<OBJ_T> = // From https://stackoverflow.com/a/60142095
  {
    [K in keyof OBJ_T]: [keyof PickByValue<OBJ_T, OBJ_T[K]>, OBJ_T[K]]
  }[keyof OBJ_T][]

// ~~~~~~~~~~~~~~~~~~~~ Typed Function ~~~~~~~~~~~~~~~~~~~~

export function getTypedObjectEntries<OBJ_T extends ObjectType>(
  obj: OBJ_T
): ObjectEntries<OBJ_T> {
  return Object.entries(obj) as ObjectEntries<OBJ_T>
}
