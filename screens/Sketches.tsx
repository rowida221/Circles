import * as React from "react";
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { colors } from "../assets/theme";
import icon from "../assets/images/icon.png";

import RegisterScreen from "./containeres/Register";
import CommunitiesScreen from "./containeres/Communities";
import ChatsScreen from "./containeres/Chats";
import FliersScreen from "./containeres/Fliers";
import BulletinBoardScreen from "./containeres/BulletinBoard";

const RegisterRoute = () => <RegisterScreen />;
const CommunitiesRoute = () => <CommunitiesScreen />;
const ChatsRoute = () => <ChatsScreen />;
const FliersRoute = () => <FliersScreen />;
const BulletinBoardRoute = () => <BulletinBoardScreen />;

export default class SketchesScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "Register", title: "Register" },
      { key: "Communities", title: "Communities" },
      { key: "Chats", title: "Chats" },
      { key: "Fliers", title: "Fliers" },
      { key: "BulletinBoard", title: "BulletinBoard" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ opacity, fontSize: 13 }}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    Register: RegisterRoute,
    Communities: CommunitiesRoute,
    Chats: ChatsRoute,
    Fliers: FliersRoute,
    BulletinBoard: BulletinBoardRoute,
  });

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: colors.GRAY }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
                Sketches
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.05, width: "100%" }}>{/* Empty */}</View>
          <View
            style={{
              backgroundColor: colors.WHITE,
              flex: 2,
              width: "100%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
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
            <TabView
              navigationState={this.state}
              renderScene={this._renderScene}
              renderTabBar={this._renderTabBar}
              onIndexChange={this._handleIndexChange}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 5,
  },
  tabItem: {
    flex: 1,
    paddingBottom: 10,
    alignItems: "center",
  },
});
