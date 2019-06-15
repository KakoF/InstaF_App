import React from 'react'
import { createAppContainer, createStackNavigator} from 'react-navigation'
import { Image } from 'react-native'

// Tipos de Navegação, trocar no import e no encapsulador da rota para ver o resultado
// import { createAppContainer, createBottomTabNavigator} from 'react-navigation'
// import { createAppContainer, createSwitchNavigator} from 'react-navigation'
// O que mais me agrada
// Procurar no Google ou adicionar essas libs para funcionar
// https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html
// import { createAppContainer, createDrawerNavigator} from 'react-navigation'
// import { createAppContainer, createStackNavigator} from 'react-navigation'


import Feed from './pages/Feed'
import New from './pages/New'

import logo from './assets/logo.png'

export default createAppContainer(

    createStackNavigator({
        Feed, 
        New
    }, {
        initialRouteName: 'Feed',
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
            headerBackImage: null
        },
        mode: 'modal'
    })
);