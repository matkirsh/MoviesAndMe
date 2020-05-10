import React from 'react'
import {StyleSheet, Image} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import Test from '../Components/Test'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions:{
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const MoviesTabNavigator = createBottomTabNavigator ({
  Test: {
    screen: Test,
  },
  Search: {
    screen : SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source = {require('../Images/ic_search.png')}
        style = {styles.icon}
        />
      }
    }
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source = {require('../Images/ic_favorite.png')}
        style = {styles.icon}
        />
      }
    }
  }
},
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', //couleur arrière-plan onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', //couleur background onglet non sélectionné
      showLabel: false, //ne pas montrer le nom des onglets
      showIcon: true //montrer l'icône de l'onglet
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)
