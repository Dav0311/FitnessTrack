import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json'

export default function ExerciseDetailScreen () {

    const params = useLocalSearchParams();

    const exercise = exercises.find((item) => item.name === params.name );

    if(!exercise) {
        return <Text> Exercise not Found !</Text>
    }

    return(
        <View style={styles.container}>
          <Stack.Screen options={{ title:exercise.name }} />
          
            <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text styles={styles.exerciseSubtitle}>
                <Text style={styles.exerciseSubtitle}>Muscle: {exercise.muscle} </Text>
                <Text style={styles.exerciseSubtitle}>Equipment: {exercise.equipment}</Text>
                </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding:10,
    },
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
  