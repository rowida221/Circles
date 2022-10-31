import { Input, Icon, Header } from "react-native-elements";
import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
import logo from "../assets/images/circlesLogo.png";
import icon from "../assets/images/icon.png";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { colors } from "../assets/theme";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.GRAY }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <StatusBar hidden={false} /> */}
      <Header
        backgroundColor={colors.BLUE}
        leftComponent={
          <Image source={logo} style={{ width: 305, height: 60 }} />
        }
        // rightComponent={{
        //   icon: screenView ? 'history' :'format-list-bulleted',
        //   type: 'material',
        //   color: colors.WHITE,
        //   size: 30,
        //   component: TouchableWithoutFeedback,
        //   onPress: () => {
        //     setScreenView(!screenView)
        //   },
        // }}
        // containerStyle={styles.headerStyle}
        // innerContainerStyles={styles.inrContStyle}
        // statusBarProps={{ barStyle: "light-content" }}
        // barStyle="light-content"
        // containerStyle={
        // {
        // justifyContent: 'space-around',
        // height: 80,
        // }
        // }
      />
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}
      <View
        style={{
          flex: 1,
          // backgroundColor: colors.WHITE,
          width: "100%",
          // alignSelf: 'center',
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.1, width: "100%" }}>{/* Empty */}</View>
        <View
          style={{
            // backgroundColor: 'red',
            flex: 0.1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 40,
              // backgroundColor: 'red',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Image source={icon} style={{ width: 150, height: 130 }} /> */}
            <Text
              style={{ fontSize: 30, color: colors.BLUE, fontWeight: "bold" }}
            >
              Goal of the App
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.1, width: "100%" }}>{/* Empty */}</View>
        <View
          style={{
            backgroundColor: colors.WHITE,
            flex: 2,
            width: "100%",
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1,

            elevation: 1,
          }}
        >
          <ScrollView>
            <View
              style={{
                minHeight: 100,
                width: "90%",
                // backgroundColor: 'red',
                marginTop: 20,
                alignSelf: "center",
              }}
            >
              <Text style={{ fontSize: 17, textAlign: "justify" }}>
                Circles is an app that provides a useful platform to communities
                like friends, families, neighbours, colleagues, sports teams,
                and others to communicate using different functionalities of the
                app.
              </Text>
              <Text
                style={{ fontSize: 17, textAlign: "justify", marginTop: 15 }}
              >
                The app allows the user to have multiple separate communities.
                one example of the app functionalities is a bulletin board; it
                consists of different genres like events, news, issues, and
                general topics. In each bulletin, the community members can
                view, categorise, vote, and chat within the topic.
              </Text>
              <Text
                style={{ fontSize: 17, textAlign: "justify", marginTop: 15 }}
              >
                Another functionality example is the ability to add fliers;
                members can create fliers to advertise, present opportunities,
                and ask for help. Users can chat in general with each community
                and with a specific person as well. Each community will have a
                unique identifier to share with potential members to join the
                community.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Home</Text>
    //   <View
    //     style={styles.separator}
    //     lightColor="#eee"
    //     darkColor="rgba(255,255,255,0.1)"
    //   />
    //   <Image source={logo} style={{ width: 305, height: 159 }} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
