import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import Routes from './src/navigations/Routes';
import store from './src/redux/Store';


const App = () => {

  return (
    <>
      <PaperProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
          <Toast />
        </Provider>
      </PaperProvider>
    </>
  )
}

export default App  
