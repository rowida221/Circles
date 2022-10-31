import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
  Pressable,
} from "react-native";
import { colors } from "../../assets/theme";
import firstPersona from "../../assets/images/firstPersona.png";

export default class FirstPersonaScreen extends React.Component {
  state = {
    modalVisible: false,
    imageName: firstPersona,
  };

  showSlider = (module) => {
    this.setState({ modalVisible: true, imageName: module });
  };
  render() {
    return (
      <ScrollView>
        <Modal
          visible={this.state.modalVisible}
          transparent={false}
          onRequestClose={() => this.setState({ modalVisible: false })}
          style={{
            minHeight: 200,
            width: "100%",
            alignSelf: "center",
            flex: 6,
          }}
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
            <TouchableOpacity
              onPress={() => this.setState({ modalVisible: false })}
              style={{ borderWidth: 1 }}
            >
              <Text style={{ fontSize: 23 }}> X </Text>
            </TouchableOpacity>
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
                width: "55%",
                height: "60%",
                alignSelf: "center",
              }}
            />
          </View>
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
              height: 200,
              width: "90%",
              // backgroundColor: 'red',
              marginTop: 10,
              marginBottom: 10,
              alignSelf: "center",
              flexDirection: "row",
              flex: 1,
            }}
          >
            <View
              style={{
                height: "100%",
                flex: 0.45,
                alignSelf: "center",
                width: "100%",
                borderColor: "gray",
              }}
            >
              <TouchableOpacity onPress={() => this.showSlider(firstPersona)}>
                <Image
                  source={firstPersona}
                  style={{ width: "95%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text
                style={{ fontSize: 16, lineHeight: 25, textAlign: "justify" }}
              >
                Name: Sara Jefferson
              </Text>
              <Text
                style={{ fontSize: 16, lineHeight: 25, textAlign: "justify" }}
              >
                Age: 34
              </Text>
              <Text
                style={{ fontSize: 16, lineHeight: 25, textAlign: "justify" }}
              >
                Gender: female
              </Text>
              <Text
                style={{ fontSize: 16, lineHeight: 25, textAlign: "justify" }}
              >
                Job: housewife
              </Text>
              <Text
                style={{ fontSize: 16, lineHeight: 25, textAlign: "justify" }}
              >
                Social life: married, mother
              </Text>
              <Text
                style={{ fontSize: 16, lineHeight: 25, textAlign: "justify" }}
              >
                Hobby: Drawing, Hairstylist
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.01,
              alignSelf: "center",
              width: "100%",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          ></View>
          <View
            style={{
              minHeight: 100,
              width: "100%",
              alignSelf: "center",
              flex: 6,
              padding: 10,
            }}
          >
            <View style={{ flex: 1, alignSelf: "center", width: "100%" }}>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                }}
              >
                Sara got so many circles in her life. She is an extrovert always
                looking for fun conversations and events. Lately, it has been
                difficult for Sara to manage all the different chat groups; her
                friend Hana shared the same issue because their neighbourhood
                community had Halloween events to prepare for.
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                }}
              >
                She suggested they try this new app called{" "}
                <Text style={{ fontWeight: "bold", fontSize: 19 }}>
                  Circles
                </Text>
                ; her colleagues at the firm had sent her the code to join their
                community circle.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
