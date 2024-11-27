
import { StyleSheet, Text, View, Pressable  } from 'react-native';
import { Link } from 'expo-router';

export default function ExerciseListItem ({ item }) {
    return (
        <Link href={`/${item.name}`} asChild>
            <Pressable style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{item.name}</Text>
                <Text styles={styles.exerciseSubtitle}>
                <Text style={styles.exerciseSubtitle}>Muscle: {item.muscle} </Text>
                <Text style={styles.exerciseSubtitle}>Equipment: {item.equipment}</Text>
                </Text>
            
            </Pressable>
      </Link>
    )
  }
  
  
const styles = StyleSheet.create({
  
    exerciseContainer:{
      backgroundColor:'lightgray',
      padding:10,
      borderRadius:10,
      gap:5,
      marginHorizontal:2,

        //shadow
      shadowColor:'#000',
      shadowOffset:{
        width:0,
        height:1,
      }
  
    },
    exerciseName: {
      fontSize:20,
      fontWeight:'500',
  
    }, 
    exerciseSubtitle: {
        color:'dimgray',
    }
  });
  