export const calculations =(recievedNum)=>{
    return{
        type:'calculate',
        payload:recievedNum

    };
}

export const showPressed=(recievedNumber)=>{
    return{
        type:'numPressed',
        payload:recievedNumber
    };
}
export const removeNum=(recvNum)=>{
return{
    type:'deleteNum',
    payload:recvNum
}
}
export const addOperand=(operand)=>{
return{
    type:'addOperand',
    payload:operand
}
}