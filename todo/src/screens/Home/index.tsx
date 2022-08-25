import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

import logoImg from '../../../assets/Logo.png'
import clipboard from '../../../assets/Clipboard.png'

interface task {
  key: number;
  description: string;
  completed: Boolean;
}

export function Home() {
  const [created, setCreated] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [tasks, setTasks] = useState<task[]>([])

  const addTask = () => {
    setCreated(created + 1)    
  }

  const changeTask = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <Image source={logoImg}/>
      </View>  
      <View style={styles.containerInput}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonContent}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <View style={styles.menuText}>
          <Text style={styles.textBlue}>Criadas</Text>
          <Text style={styles.counter}>{created}</Text>
        </View>
        <View style={styles.menuText}>
          <Text style={styles.textPurple}>Concluídas</Text>
          <Text style={styles.counter}>0</Text>
        </View>
      </View>
      <View style={styles.empty}>
        <Image source={clipboard} />
        <Text style={styles.textGrey}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textGrey}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
      <View>

      </View>
    </View>
  )
}