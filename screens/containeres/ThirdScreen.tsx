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
import cs from "../../assets/images/cs.png";
import fl from "../../assets/images/fl.png";

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
          <View
            style={{
              flex: 0.001,
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
                Meanwhile, Hana added another bulletin erasing an issue to
                discuss. And other members added Tips to keep the community
                clean bulletin, and someone else added a news item informing the
                members of construction work on a certain street.
              </Text>
              <Image
                source={fl}
                style={{ width: "55%", height: 45, alignSelf: "center" }}
              />
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 25,
                  textAlign: "justify",
                  marginBottom: 10,
                }}
              >
                After the party, Sara noticed that someone forgot their watch.
                She posted a flier with the watch image asking its owner to come
                and collect it. While browsing through the community fliers,
                Sara saw that someone added a flier asking for a hairstylist
                with a suitable price. She entered the flier page and read more
                about the flier/opportunity details; then, she selected the chat
                button to message the person and discuss the agreement.
              </Text>
              <Image
                source={cs}
                style={{ width: "60%", height: 75, alignSelf: "center" }}
              />
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                Sara enjoyed the app experience so much that she added three
                more communities to her Circles:
              </Text>
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                • Family{" "}
              </Text>
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                • College friends
              </Text>
              <Text
                style={{ fontSize: 17, lineHeight: 25, textAlign: "justify" }}
              >
                • Sunshine kindergarten (her son’s kindergarten)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
