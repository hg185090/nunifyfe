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

export const getEstimatedTime = (minutes : number , orderTime : string) => {
    const dateTime = new Date(orderTime);
    const expectedTime = new Date(dateTime.getTime() + minutes*60000);
    const currentTime = new Date();
    const diff = expectedTime.getTime() - currentTime.getTime();
    return Math.round(diff / 60000);
}