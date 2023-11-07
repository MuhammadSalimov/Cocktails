
const Reduce = (state , action) => {

  switch (action.type) {
    case "ADD": 
    const ExistingItemIndex = state.items.findIndex(item => item.id === action.Malumot.id)
    const ExistingItemCart  = state.items[ExistingItemIndex]
    let UpdateItem , UpdateItems
    if(ExistingItemCart){
      UpdateItem = {
        ...ExistingItemCart,
        amount:(+ExistingItemCart.amount) + (+action.Malumot.amount)
      }
      UpdateItems= [
        ...state.items
      ]
      UpdateItems[ExistingItemIndex] = UpdateItem
    }else{
      UpdateItems = state.items.concat(action.Malumot)
    }
   const umumiyNarx = state.TotalAmount + action.Malumot.price*action.Malumot.amount
   return {
    items:UpdateItems,
    TotalAmount:umumiyNarx
   }

   case "Remove":
    const ExistingItemIndex1 = state.items.findIndex(item => item.id === action.id)
    const ExistingItemCart1  = state.items[ExistingItemIndex1]
    let UpdateItem1 , UpdateItems1 , umumiyNarx1
    umumiyNarx1 = state.TotalAmount - ExistingItemCart1.price
    if(ExistingItemCart1.amount === 1){
      UpdateItems1 = state.items.filter(item => item.id !== action.id)
    }else{
      UpdateItem1 = {
        ...ExistingItemCart1,
        amount:(+ExistingItemCart1.amount) -1
      }
      UpdateItems1= [
        ...state.items
      ]
      UpdateItems1[ExistingItemIndex1] = UpdateItem1
    }
   return {
    items:UpdateItems1,
    TotalAmount:umumiyNarx1
   }
    default:return state
  }


}

export default Reduce