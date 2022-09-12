import { useState } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

import logoImg from '../../../assets/Logo.png'
import clipboard from '../../../assets/Clipboard.png'
import trashImg from '../../../assets/trash.png'
import checkImg from '../../../assets/check.png'
import checkedImg from '../../../assets/checked.png'


interface task {  
  description: string;
  completed: Boolean;
}

export function Home() {
  const [key, setKey] = useState(1)
  const [description, setDescription] = useState('')
  const [created, setCreated] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [tasks, setTasks] = useState<task[]>([])

  const addTask = (newTask: task) => {    
    setCreated(created + 1) 
    setKey(key + 1)
    const addNewTask = [...tasks, newTask]   
    setTasks(addNewTask)    
    setDescription('')
  }

  const changeTask = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <Image source={logoImg} />
      </View>  
      <View style={styles.containerInput}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'        
          value={description}  
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => addTask({description, completed: false})}>
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
      <FlatList
        data={tasks}
        keyExtractor={item => item.description}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <TouchableOpacity>
              <Image source={checkImg}/>
            </TouchableOpacity>
            <Text style={styles.task}>
              {item.description}
            </Text>
            <TouchableOpacity>
              <Image source={trashImg} />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Image source={clipboard} />
            <Text style={styles.textGrey}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.textGrey}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
      
    </View>
  )
}