export const createArrayOfLength = (length, start = 1) => {
  const arr = []

  for (let num = 1; num <= length; num++)
    arr.push(num + start - 1)

  return arr
}