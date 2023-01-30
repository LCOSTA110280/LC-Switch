import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet,Switch } from 'react-native';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      status :false,
    }
    
  }

  render(){  
  return (
    <View style={styles.container}>
      <Switch
        value={this.state.status}
        onValueChange={(valorSwitch)=>this.setState({status:valorSwitch})}
        thumbColor={'green'}
      >
      </Switch>
      <Text>{(this.state.status)?"Ativo":"Inativo"}</Text>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  
    
})

export default App;


