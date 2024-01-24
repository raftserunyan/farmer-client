export const setObjectValues = (object = {}, value) => {
  const objectUpdated = Object.assign({}, object)

  Object.keys(object || {}).forEach(key => {
    objectUpdated[key] = value
  })

  return objectUpdated
}