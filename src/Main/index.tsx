import React from "react";
import Trainings from "../screens/Trainings";
import CreateTraining from "../screens/CreateTraining";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrainingDetails from "../screens/TrainingDetails";

const Stack = createNativeStackNavigator()

export default function Main(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                 <Stack.Screen 
                    name="Trainings" 
                    component={Trainings}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="CreateTraining"
                    component={CreateTraining}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="TrainingDetails"
                    component={TrainingDetails}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}