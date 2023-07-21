export const getStatus = (status : string) => {
    switch(status){
        case 'placed' :
            return "Your order is being Placed"
        case 'preparing':
            return "Your order is being Prepared"
        case 'ready':
            return "Hooray !! your order is Ready" 
    }
}