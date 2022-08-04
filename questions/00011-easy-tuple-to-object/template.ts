// the constraint T extends readonly any[] basically says that T must extend a tuple
// T[number] means that any number is possible so we're basically iterating over an array and assigning each value
// to key
type TupleToObjectStarter<T extends readonly any[]> = {
    [key in T[number]]:  key
}

type TupleToObject<T extends readonly PropertyKey[]> = {
    [key in T[number]]:  key
}
