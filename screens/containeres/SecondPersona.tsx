import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { colors } from "../../assets/theme";
import firstPersona from "../../assets/images/firstPersona.png";
import logo from "../../assets/images/circlesLogo.png";
import com from "../../assets/images/com.png";
import bb from "../../assets/images/bb.png";
import acv from "../../assets/images/acv.png";

export default class ThirdScreen extends React.Component {
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
          <Image source={logo} style={{ width: "100%", height: 90 }} />
          <View
            style={{
              flex: 0.001,
              alignSelf: "center",
              width: "100%",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          ></View>
          <Image
            source={com}
            style={{ width: "80%", height: 70, alignSelf: "center" }}
          />
          <View
            style={{
              minHeight: 100,
              width: "100%",
              alignSelf: "center",
              flex: 5,
              padding: 10,
            }}
          >
            <View style={{ flex: 1, alignSelf: "center", width: "100%" }}>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                  marginBottom: 10,
                }}
              >
                Sara and Hana downloaded the app. Register with a unique
                username and log in to Circles. On the home page, they saw the
                option to create a new community. Sara created a community
                called “neighbourhood”, and added a description of it and a
                lovely photo of their local park as the community profile pic.
                After the community was created, Sara copied the community’s
                unique code by pressing on it, and was added to her phone’s
                clipboard. She shared the code with her neighbours and told them
                to join in the app.
              </Text>
              <Image
                source={bb}
                style={{ width: "80%", height: 50, alignSelf: "center" }}
              />
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                }}
              >
                Sara navigated to the neighbourhood community and then to the
                Bulletin Board page. From there, Sara added a new bulletin with
                the title “Halloween party” and selected a spooky picture. In
                the description section, she wrote “Neighbourhood Halloween
                party at my house at 10:00 pm, all welcome to join”. Hana and
                other members confirmed their attendance in the bulletin chat
                section and offered to help with the preparations. Afterward,
                Sara added the party’s agendas in the provided section within
                the bulletin. Some of the items she entered were:
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                }}
              >
                • Beverages
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                }}
              >
                • Snacks
              </Text>
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                • Buying decoration
              </Text>
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                • Installing decoration{" "}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                  marginBottom: 10,
                }}
              >
                • Music
              </Text>
              <Image
                source={acv}
                style={{ width: "85%", height: 60, alignSelf: "center" }}
              />
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                  marginBottom: 10,
                }}
              >
                They discussed in the chat area who will be responsible for
                which agenda. After deciding, Sara entered the handler(s)
                name(s) next to the task their taking. The members disagreed on
                the party’s theme; they narrowed it down to three options:
              </Text>
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                • Heroes{" "}
              </Text>
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                • Carnival{" "}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                  marginBottom: 10,
                }}
              >
                • Hollywood
              </Text>
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                Sara entered the items on the bulletin’s Vote page, and each
                member voted for the idea they liked the most.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
