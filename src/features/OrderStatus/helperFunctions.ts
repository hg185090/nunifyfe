export const getStatus = (status : string) => {
    switch(status){
        case 'placed' :
            return 0
        case 'accepted':
            return 1
        case 'preparing':
            return 2
        case 'ready':
            return 3 
    }
} 

export const getEstimatedTime = (minutes : number , orderTime : string) => {
    const dateTime = new Date(orderTime);
    const expectedTime = new Date(dateTime.getTime() + minutes*60000);
    const currentTime = new Date();
    const diff = expectedTime.getTime() - currentTime.getTime();
    return Math.round(diff / 60000);
}

