type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}

// recursive version

type MyReadonlyRecursive<T> = {
    readonly [key in keyof T]: T[key] extends object ? MyReadonlyRecursive<T[key]> : T[key]
}
