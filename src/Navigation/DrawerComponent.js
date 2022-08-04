import {
  View,
  Text,
  ImageBackground,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Result from '../screen/Result';
import Home from '../screen/Home';
//import ImagePicker from 'react-native-image-picker';
import Profile from '../screen/Profile';
// import {styles} from 'react-native-floating-label-input/src/styles';
import * as ImagePicker from 'react-native-image-picker';

const Drawer = createDrawerNavigator();

export function CustomDrawerContent(props) {
  const [image, setImage] = useState([]);
  //const navigation = useNavigation();
  // useEffect(() => {
  //   data = {
  //     name: '',
  //     email: '',
  //   };
  // })
  // const data = async () => {
  //   const user = await AsyncStorage.getItem('currentuser');
  //   if (user) {
  //     const usersData = JSON.parse(user);
  //     console.log(usersData);
  //   }
  // }
  const handleUpload = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    console.log('upload');
    ImagePicker.launchCamera( options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
       const img = {
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        };
        setImage(img);
      }
    });
  };
  console.log("image", image);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '8200d6'}}>
        {/* <ImageBackground style={{padding: 20}}> */}
        {/* <ImageUpload 

          /> */}
        {/* <ImagePicker /> */}
        <View>
          <Image source={{uri: image.uri}} style={styles.img} />
        </View>
        <View>
          <Button title="Add" onPress={handleUpload} />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginLeft: 20,
          }}>
          {/* {usersData.name} */}
          Div
        </Text>
        {/* </ImageBackground> */}
        <DrawerItemList {...props} />
        <DrawerItem
          label="Log Out"
          onPress={async () => {
            try {
              await AsyncStorage.removeItem('currentuser');
              //console.log(props.navigation.getState());
              //props.navigation.navigate('SignIn');
              //navigation.navigate('AuthNavigation', {screen: 'SignIn'});
            } catch (e) {
              console.error(e.message);
            }
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    // resizeMode: 'contain',
  },
});

const DrawerComponent = props => {
  return (
    <Drawer.Navigator
      //screenOptions={{headerShown: false}}
      useLegacyImplementation
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile-Update" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
