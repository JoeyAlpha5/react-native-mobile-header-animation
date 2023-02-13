import React, {useRef,useState,useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  Animated
} from 'react-native';

function App(): JSX.Element {
  let { height, width } = Dimensions.get('screen');
  const [showHeader, setShowHeader] = useState(true);
  const headerTranslate = useRef(new Animated.Value(0)).current;
  const scrolling = useRef(new Animated.Value(0)).current;

  let onScrollEvent = (event: any) => {
    let currentOffset = event.nativeEvent.contentOffset.y;
    currentOffset > 100 ? setShowHeader(false) : setShowHeader(true);
  }

  useEffect(() => {
    Animated.timing(headerTranslate, {
      toValue: showHeader ? 0 : -100,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [showHeader])

  return (
    <>
      <StatusBar barStyle={showHeader ?"light-content": "dark-content"} />
      {/* Header component */}
      <SafeAreaView edges={['left','right']} style={Styles.flexStyle}>
        <Animated.View style={[propsStyle(height*0.11).header,{
              transform: [{ translateY: headerTranslate  }],
              height: showHeader ? height*0.11 : height*0.05,
        }]}>
          <Text style={Styles.headerText}>Header</Text>
        </Animated.View>
        <Animated.ScrollView style={Styles.flexStyle}
          onScroll={onScrollEvent}
          scrollEventThrottle={16}
        >
            <Image source={{uri:'https://picsum.photos/600/700/'}} style={propsStyle(height*0.3).imageStyle}/>
            <Text style={Styles.heading}>
              Lorem ipsum
            </Text>
            <Text style={Styles.paragraph}>
              {/* long paragraph text */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nulla repudiandae quod harum dicta excepturi accusamus eaque recusandae tempora? Animi molestiae consectetur quidem optio tenetur autem ipsum ipsa officia molestias! Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo similique voluptatem consequuntur vero quidem porro laboriosam fugit dolorem quia minima saepe exercitationem, magnam sunt laborum! Quis repudiandae omnis enim!
            </Text>
            <Text style={Styles.paragraph}>
              {/* long paragraph text */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nulla repudiandae quod harum dicta excepturi accusamus eaque recusandae tempora? Animi molestiae consectetur quidem optio tenetur autem ipsum ipsa officia molestias! Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo similique voluptatem consequuntur vero quidem porro laboriosam fugit dolorem quia minima saepe exercitationem, magnam sunt laborum! Quis repudiandae omnis enim!
            </Text>
            <Text style={Styles.paragraph}>
              {/* long paragraph text */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nulla repudiandae quod harum dicta excepturi accusamus eaque recusandae tempora? Animi molestiae consectetur quidem optio tenetur autem ipsum ipsa officia molestias! Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo similique voluptatem consequuntur vero quidem porro laboriosam fugit dolorem quia minima saepe exercitationem, magnam sunt laborum! Quis repudiandae omnis enim!
            </Text>
            <Text style={Styles.paragraph}>
              {/* long paragraph text */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nulla repudiandae quod harum dicta excepturi accusamus eaque recusandae tempora? Animi molestiae consectetur quidem optio tenetur autem ipsum ipsa officia molestias! Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo similique voluptatem consequuntur vero quidem porro laboriosam fugit dolorem quia minima saepe exercitationem, magnam sunt laborum! Quis repudiandae omnis enim!
            </Text>
            <Text style={Styles.paragraph}>
              {/* long paragraph text */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nulla repudiandae quod harum dicta excepturi accusamus eaque recusandae tempora? Animi molestiae consectetur quidem optio tenetur autem ipsum ipsa officia molestias! Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo similique voluptatem consequuntur vero quidem porro laboriosam fugit dolorem quia minima saepe exercitationem, magnam sunt laborum! Quis repudiandae omnis enim!
            </Text>
        </Animated.ScrollView>
      </SafeAreaView>
    </>
  );
}



const Styles = StyleSheet.create({
  headerText:{
    color:'white',
  },
  flexStyle:{
    flex:1,
  },
  heading:{
    fontSize:20,
    fontWeight:'500',
    margin:10,
  },
  paragraph:{
    fontSize:16,
    margin:10,
  }
})

const propsStyle = (height:number)=> StyleSheet.create({
  // pass parameter to style
  header: {
    backgroundColor: 'black',
    height: height,
    width: '100%',
    shadowColor: "#000",
    justifyContent:'center',
    alignItems:'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imageStyle:{
    width:'100%',
    height:height,
    resizeMode:'cover'
  }
});

export default App;
