// it gives us the exact number of elements. It returns 4 or 5 etc because we pass tuples (readonly any[])
// it we were to pass an array that would return "number"
type Length<T extends readonly any[]> = T['length']
