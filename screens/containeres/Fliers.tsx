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
import fliers from "../../assets/images/fliers.png";
import flier from "../../assets/images/flier.png";
import fliersFromNavigation from "../../assets/images/fliersFromNavigation.png";
import addFlier from "../../assets/images/addFlier.png";

export default class FliersScreen extends React.Component {
  state = {
    modalVisible: false,
    imageName: fliers,
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
                onPress={() => this.showSlider(fliersFromNavigation)}
              >
                <Image
                  source={fliersFromNavigation}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Fliers page: when the user selects fliers from the navigation
                bar, it directs them to this page from which they can select a
                community to view its fliers.
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
              height: 220,
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
              <TouchableOpacity onPress={() => this.showSlider(fliers)}>
                <Image
                  source={fliers}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Fliers list page: this page contains the community’s fliers; the
                user can choose to view all the community’s fliers or the ones
                they created only; each flier shows the title the main photo,
                and the date it was added. If the user created the flier, a
                remove option button will show. From this page: the user can
                select to add a flier. The user can get to this page from the
                navigation bar - Fliers page or the single community page.
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
              <TouchableOpacity onPress={() => this.showSlider(flier)}>
                <Image
                  source={flier}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Single flier page: contains the title, photos, issue date, and
                description/ details of the flier. The page shows an option
                button to communicate and chat with the member that added the
                flier.
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
              <TouchableOpacity onPress={() => this.showSlider(addFlier)}>
                <Image
                  source={addFlier}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Add Flier page: from this page the user enters a name and a
                description and selects photos then adds a flier to the
                community.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
