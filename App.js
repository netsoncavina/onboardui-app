import react from "react";
import { SafeAreaView, Text, View, StatusBar, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Onboard from "./components/Onboard";

const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizzes and more",
    image: require("./assets/images/Onboard1.png"),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    image: require("./assets/images/Onboard2.png"),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("./assets/images/Onboard3.png"),
  },
];

const App = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} />
        <View>
          <Text>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
      />
    </View>
  );
};

export default App;
