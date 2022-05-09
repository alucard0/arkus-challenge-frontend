export const isEmptyObject = (object) => {
  return (
    object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype
  )
}

export const prettyDate = (date) =>{
  if(date ==='0000-00-00 00:00:00') return ''
  return new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
}
