const EmptyEmailListException = require('./exceptions/EmptyEmailListException')
const EmptyShoppingListException = require('./exceptions/EmptyShoppingListException')


function main(shoppingList, emailList) {
    try {
        splitShoppingListByEmail(shoppingList, emailList)
    } catch (e) {
        return e
    }

}

function splitShoppingListByEmail(shoppingList, emailList) {

    if (!shoppingList.length) {
        throw EmptyShoppingListException()
    }

    if (!emailList) {
        throw EmptyEmailListException()
    }


    let totalPrice = 0;
    shoppingList.map((item) => {
        item['total_price'] = item.quantity * item.price
        totalPrice += item['total_price']
    })

    let numberOfPeopleToPay = emailList.length
    let valueToPay = Math.floor(totalPrice / numberOfPeopleToPay)
    let remainingAmount = totalPrice - (numberOfPeopleToPay * valueToPay)


    let map  = new Map();
    emailList.map((email) => {
        map.set(email, valueToPay)
    })

    if (remainingAmount) {
        const lastEmail = emailList[emailList.length -1]
        const lastValueToPay = (valueToPay + remainingAmount) 
        map.set(last_email, lastValueToPay)
    }


    return map;
}