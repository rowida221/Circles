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
import chats from "../../assets/images/chats.png";
import chat from "../../assets/images/chat.png";

export default class ChatsScreen extends React.Component {
  state = {
    modalVisible: false,
    imageName: chats,
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
                width: "75%",
                height: "90%",
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
              <TouchableOpacity onPress={() => this.showSlider(chats)}>
                <Image
                  source={chats}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Chats page: this page shows a list of the users chats with the
                ability to search for a specific person or community to chat
                with.
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
              height: 200,
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
              <TouchableOpacity onPress={() => this.showSlider(chat)}>
                <Image
                  source={chat}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Single chat page: it shows the chat messages between the user
                and the person, or all members of the community.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
