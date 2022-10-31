import { Input, Icon, Header } from "react-native-elements";
import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
import expo from "../assets/images/expo.png";
import firebase from "../assets/images/firebase.jpeg";
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

export default function TechnologiesScreen() {
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
        <View style={{ flex: 0.2, width: "100%" }}>{/* Empty */}</View>
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
              Technologies/Frameworks
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
              <View
                style={{
                  height: "70%",
                  flex: 0.3,
                  alignSelf: "center",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    height: 80,
                    flex: 0.3,
                    alignSelf: "center",
                    width: "65%",
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={expo} style={{ width: 230, height: 60 }} />
                </View>
              </View>
              <View
                style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
              ></View>
              <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
                <Text style={{ fontSize: 16, textAlign: "justify" }}>
                  an open-source platform for making universal native apps for
                  Android, iOS, and the web with JavaScript and React.
                </Text>
              </View>
            </View>
            <View
              style={{
                minHeight: 100,
                width: "90%",
                // backgroundColor: 'red',
                marginTop: 20,
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  height: "70%",
                  flex: 0.3,
                  alignSelf: "center",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    height: 80,
                    flex: 0.3,
                    alignSelf: "center",
                    width: "65%",
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={firebase} style={{ width: 230, height: 60 }} />
                </View>
              </View>
              <View
                style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
              ></View>
              <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
                <Text style={{ fontSize: 16, textAlign: "justify" }}>
                  Firebase is a Backend as a Service (BaaS) app development
                  platform that provides hosted backend services such as
                  real-time database, cloud storage, authentication, crash
                  reporting, analytics, and so on. It is built on Google's
                  infrastructure and scales automatically.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          minHeight: 100,
          width: "90%",
          // backgroundColor: 'red',
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
          <Text
            style={{ fontSize: 17, textAlign: "justify", fontWeight: "bold" }}
          >
            I am very confident with these technologies and has previous
            projects done using them.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
