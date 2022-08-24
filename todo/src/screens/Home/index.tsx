import { StatusBar } from 'expo-status-bar'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <Text>Logo</Text>
      </View>  
      <View>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
        />
        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}