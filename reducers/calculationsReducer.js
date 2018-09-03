const initialState={
    resultText:'',
    calculationText:''
}
export default (state=initialState,action)=>{
    switch(action.type){
        case 'calculate':
            console.log('aaa',action.payload)
            const txt=state.resultText
            switch(txt.slice(-1)){
                case '+':
                case '-':
                case '*':
                case '/':
                return {...state}}
            
            return {...state,calculationText:eval(action.payload)}
            break;
        case 'numPressed':
            console.log('aa',action.payload)
            return {...state, resultText:state.resultText+action.payload}
            break;
        case 'deleteNum':
            let text=state.resultText.split('')
            text.pop()
            return{...state, resultText:text.join('')}
            break;
        case 'addOperand':
            let ls=['Del','+','-','/','*']
            const lastCharacter=state.resultText.split('').pop()
            
            if (ls.indexOf(lastCharacter)>0) {
                console.log('oprnd exist');
                return {...state}}
            if(state.resultText==''){
            return{...state}
            }
            return{...state,resultText:state.resultText+action.payload}
        
        default:
        return state;
    }
} 

