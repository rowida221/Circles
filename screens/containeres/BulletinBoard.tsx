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
import bulletinBord from "../../assets/images/bulletinBord.png";
import bulletin from "../../assets/images/bulletin.png";
import bulletinBordFromNavigation from "../../assets/images/bulletinBordFromNavigation.png";
import agendas from "../../assets/images/agendas.png";
import votes from "../../assets/images/votes.png";
import newBulletin from "../../assets/images/newBulletin.png";

export default class BulletinBoardScreen extends React.Component {
  state = {
    modalVisible: false,
    imageName: bulletinBord,
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
                  height: Platform.OS === "ios" ? "80%" : "90%",
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
              <TouchableOpacity
                onPress={() => this.showSlider(bulletinBordFromNavigation)}
              >
                <Image
                  source={bulletinBordFromNavigation}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Bulletin Board page: when the user selects Bulletin Board from
                the navigation bar, it directs them to this page from which they
                can select a community to view its bulletins.
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
              height: 255,
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
              <TouchableOpacity onPress={() => this.showSlider(bulletinBord)}>
                <Image
                  source={bulletinBord}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Community Bulletin Board page: shows all, or specific bulletins
                based on genre. each bulletin shows the title, the main photo,
                and the date it was added, plus the type of the bulletin. From
                this page, the user can select to add a new bulletin. If the
                user created the bulletin or is the community admin, a remove
                option button will show on the bulletin. The user can get to
                this page from the navigation bar - Bulletin Board page or the
                single community page.
              </Text>
            </View>
          </View>

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
              <TouchableOpacity onPress={() => this.showSlider(bulletin)}>
                <Image
                  source={bulletin}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Single Bulletin page: contains the title, photo, issue date, and
                description/ details of the bulletin. On this page, the members
                can discuss the topic in a chat format. From this page, the
                members can select to go to the topic’s agendas or voting page.
              </Text>
            </View>
          </View>
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
              <TouchableOpacity onPress={() => this.showSlider(agendas)}>
                <Image
                  source={agendas}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                A Bulletin’s Agendas page: shows a specific bulletin’s agendas;
                on this page, the bulletin creator and the admin can add items
                and assign handlers for each agenda or delete an item. Other
                members can only view the agendas and their handlers.
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
              <TouchableOpacity onPress={() => this.showSlider(votes)}>
                <Image
                  source={votes}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Bulletin’s Votes page: in this page, the creator of the bulletin
                and the community admin can add topics to vote on. Members can
                agree or disagree with each topic.
              </Text>
            </View>
          </View>

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
              <TouchableOpacity onPress={() => this.showSlider(newBulletin)}>
                <Image
                  source={newBulletin}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Add Bulletin page: from this page, members can select a photo,
                name, genre, and details and then, add a new bulletin.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
