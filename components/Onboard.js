import react from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  StyleSheet,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import colors from "../assets/colors/colors";
import { useFonts } from "expo-font";

const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizzes and more",
    image: require("../assets/images/Onboard1.png"),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    image: require("../assets/images/Onboard2.png"),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("../assets/images/Onboard3.png"),
  },
];

const Onboard = () => {
  const [fontsLoaded] = useFonts({
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("../assets/fonts/OpenSans-Bold.ttf"),
    OpenSansSemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "OpenSans-Bold",
    color: colors.white,
    textAlign: "center",
    marginHorizontal: 58,
  },
  text: {
    fontSize: 14,
    fontWeight: "OpenSans-SemiBold",
    color: colors.white,
    textAlign: "center",
    marginHorizontal: 58,
    marginTop: 20,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rightText: {
    color: colors.blue,
    fontWeight: "OpenSans-SemiBold",
    fontSize: 16,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  leftText: {
    color: colors.blue,
    fontWeight: "OpenSans-SemiBold",
    fontSize: 16,
  },
  dotStyle: {
    backgroundColor: colors.bluefaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
});

export default Onboard;
