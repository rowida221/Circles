import * as React from "react";
import { colors } from "../assets/theme";
import { Input, Icon, Header } from "react-native-elements";
import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
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
  Modal,
  Pressable,
} from "react-native";
import whatsApp from "../assets/images/WhatsApp.jpeg";
import whatsApp1 from "../assets/images/WhatsApp1.jpeg";
import whatsApp2 from "../assets/images/WhatsApp2.jpeg";
import whatsApp3 from "../assets/images/WhatsApp3.jpeg";
import whatsApp4 from "../assets/images/WhatsApp4.jpeg";

export default class CritiqueScreen extends React.Component {
  state = {
    modalVisible: false,
    imageName: whatsApp,
  };

  showSlider = (module) => {
    this.setState({ modalVisible: true, imageName: module });
  };
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
                Critique
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
              <Modal
                visible={this.state.modalVisible}
                transparent={false}
                onRequestClose={() => this.setState({ modalVisible: false })}
              >
                <Pressable
                  style={{
                    minHeight: 200,
                    width: "100%",
                    alignSelf: "center",
                    flex: 6,
                  }}
                  onPress={() => this.setState({ modalVisible: false })}
                >
                  <View
                    style={{
                      height: 20,
                      width: 30,
                      alignSelf: "flex-end",
                      margin: 10,
                      marginRight: 20,
                      flex: 0.3,
                    }}
                  >
                    {Platform.OS !== "ios" && (
                      <TouchableOpacity
                        onPress={() => this.setState({ modalVisible: false })}
                        style={{ borderWidth: 1, minHeight: 25 }}
                      >
                        <Text style={{ fontSize: 25 }}> X </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  <View
                    style={{
                      width: "100%",
                      alignSelf: "center",
                      flex: 5,
                    }}
                  >
                    <Image
                      source={this.state.imageName}
                      style={{
                        width: Platform.OS === "ios" ? "85%" : "75%",
                        height: Platform.OS === "ios" ? "75%" : "90%",
                        alignSelf: "center",
                      }}
                    />
                  </View>
                </Pressable>
              </Modal>
              <View
                style={{
                  minHeight: 100,
                  width: "100%",
                  alignSelf: "center",
                  flex: 6,
                }}
              >
                <View
                  style={{
                    minHeight: 100,
                    height: 150,
                    width: "90%",
                    // backgroundColor: 'red',
                    marginTop: 10,
                    marginBottom: 10,
                    alignSelf: "center",
                    flexDirection: "row",
                    flex: 2,
                  }}
                >
                  <View
                    style={{
                      height: "60%",
                      flex: 0.3,
                      alignSelf: "center",
                      width: "100%",
                      borderColor: "gray",
                    }}
                  >
                    <TouchableOpacity onPress={() => this.showSlider(whatsApp)}>
                      <Image
                        source={whatsApp}
                        style={{ width: "90%", height: "90%", margin: 3 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
                  ></View>
                  <View
                    style={{ flex: 0.65, alignSelf: "center", width: "100%" }}
                  >
                    <Text style={{ fontSize: 30, textAlign: "justify" }}>
                      WhatsApp community
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 0.03,
                    alignSelf: "center",
                    width: "100%",
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                  }}
                ></View>

                <View
                  style={{
                    minHeight: 100,
                    height: 235,
                    width: "90%",
                    // backgroundColor: 'red',
                    marginTop: 10,
                    marginBottom: 10,
                    alignSelf: "center",
                    flexDirection: "row",
                    flex: 2,
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      flex: 0.3,
                      alignSelf: "center",
                      width: "100%",
                      borderColor: "gray",
                      borderWidth: 1,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => this.showSlider(whatsApp4)}
                    >
                      <Image
                        source={whatsApp4}
                        style={{ width: "90%", height: "95%", margin: 3 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
                  ></View>
                  <View
                    style={{ flex: 0.65, alignSelf: "center", width: "100%" }}
                  >
                    <Text style={{ fontSize: 15, textAlign: "justify" }}>
                      WhatsApp has recently added a new feature called
                      communities. The app states that this feature “provides
                      users with the ability to organize and bring related
                      groups together under one umbrella. Community admins can
                      reach members with important updates by sending
                      announcements, and community members can stay connected by
                      exploring and chatting in groups that matter to them.”
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    minHeight: 100,
                    height: 235,
                    width: "90%",
                    // backgroundColor: 'red',
                    marginTop: 10,
                    marginBottom: 10,
                    alignSelf: "center",
                    flexDirection: "row",
                    flex: 2,
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      flex: 0.3,
                      alignSelf: "center",
                      width: "100%",
                      borderColor: "gray",
                      borderWidth: 1,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => this.showSlider(whatsApp2)}
                    >
                      <Image
                        source={whatsApp2}
                        style={{ width: "90%", height: "95%", margin: 3 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
                  ></View>
                  <View
                    style={{ flex: 0.65, alignSelf: "center", width: "100%" }}
                  >
                    <Text style={{ fontSize: 15, textAlign: "justify" }}>
                      This new feature is basically multiple groups in a group.
                      The community, which is the main group have multiple group
                      chats under it, plus the “announcement” group chat.
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    minHeight: 100,
                    height: 235,
                    width: "90%",
                    // backgroundColor: 'red',
                    marginTop: 10,
                    marginBottom: 10,
                    alignSelf: "center",
                    flexDirection: "row",
                    flex: 2,
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      flex: 0.3,
                      alignSelf: "center",
                      width: "100%",
                      borderColor: "gray",
                      borderWidth: 1,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => this.showSlider(whatsApp3)}
                    >
                      <Image
                        source={whatsApp3}
                        style={{ width: "90%", height: "95%", margin: 3 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
                  ></View>
                  <View
                    style={{ flex: 0.65, alignSelf: "center", width: "100%" }}
                  >
                    <Text style={{ fontSize: 15, textAlign: "justify" }}>
                      The features WhatsApp community offers are very basic and
                      consist only of group chat platforms. However, the users
                      can choose to create group chats with a focused title for
                      different topics.
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
