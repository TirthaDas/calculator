/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super()
    this.state={
      resultText:'',
      calculationText:''
    }
    this.operations=['Del','+','-','*','/']

  }
  calulateResult(){
    const text=this.state.resultText;
    this.setState({
      calculationText:eval(text)
    }) 
  }
  validate(){
    const text = this.state.resultText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
      return false;
    }
    return true;
  }
  buttonPressed(text){
    console.log(text);
    if(text=="="){
      return this.validate() && this.calulateResult();
    }
    this.setState({
      resultText:this.state.resultText+text
    })
  }
  operate(operation){
    switch(operation){
      case 'Del':
        let text=this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText:text.join('')
        })
        break;
      case '+':
      case '-':
      case '*':
      case '/':

        const lastCharacter=this.state.resultText.split('').pop()
        if (this.operations.indexOf(lastCharacter)>0) return;
        if(this.state.Text==''){
          return
        }
        this.setState({  
          resultText:this.state.resultText+operation
        })
    }
  }
  render() {
    let rows=[]
    let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for(let i=0; i< 4;i++){
      let row=[]
      for(let j=0; j<3;j++){
        row.push(<TouchableOpacity onPress={()=> this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnTxt}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    let ops=[]
    for(let i=0;i<5;i++){
      ops.push(<TouchableOpacity onPress={()=> this.operate(this.operations[i])} style={styles.btn}>
        <Text style={[styles.btnTxt, styles.white]}>{this.operations[i]}</Text>
      </TouchableOpacity>)
    }

    return (

      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
             {rows}
          </View>
          <View style={styles.operations}>
            {ops}
            
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  
  calculationText:{
    fontSize:40,
    color:'black'
  },
  resultText:{
    fontSize:30,
    color:'black'
  },
  btnTxt:{
    fontSize:27,
    color: 'white'
  },
  btn: {
    flex:1,
    alignItems:"center",
    justifyContent:'center',
    flexDirection:'row'
  },
  row:{
   
    flexDirection:'row',
    flex:1,
    justifyContent:"space-around",
    alignItems:'center'
    
  },
  result:{
    flex:2,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'

  },
  calculation:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  buttons:{
    flex:7,
    flexDirection:'row'
  },
  numbers:{
    flex:3,
    backgroundColor:  '#434343'
    
  },
  operations:{
    flex:1,
    backgroundColor:'#636363',
    justifyContent:"space-around",
    alignItems:"center"
  },
  
 
  
  
  white:{
    color:'white'
  }
  

});
