var
chocolateBars =
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element){
    var newArray = [element, ...cities]
    
    return newArray
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){
    return array.unshift(element)
  }