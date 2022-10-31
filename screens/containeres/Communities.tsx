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
import communities from "../../assets/images/communities.png";
import community from "../../assets/images/community.png";
import addCreateCommunities from "../../assets/images/addCreateCommunities.png";
import addCommunities from "../../assets/images/addCommunities.png";
import createCommunities from "../../assets/images/createCommunities.png";
import manageCommunities from "../../assets/images/manageCommunities.png";
import members from "../../assets/images/members.png";
import member from "../../assets/images/member.png";

export default class CommunitiesScreen extends React.Component {
  state = {
    modalVisible: false,
    imageName: communities,
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
              <TouchableOpacity onPress={() => this.showSlider(communities)}>
                <Image
                  source={communities}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Home page: this page contains a list of all the user’s
                communities. If the user created the community, a manage button
                will appear next to community’s name. the user can logout from
                this page.
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
              <TouchableOpacity
                onPress={() => this.showSlider(manageCommunities)}
              >
                <Image
                  source={manageCommunities}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Manage community page: from this page the admin can edit the
                name, photo, and description of the community. They can also
                view, and remove members of the community, and accept pending
                requests.
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
              <TouchableOpacity onPress={() => this.showSlider(community)}>
                <Image
                  source={community}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Single community page: when selecting a community from the home
                page, the user is redirected to this page where they can view
                the community description; from here the user can chose to
                navigate to the community’s bulletin board, fliers, general chat
                area, or the members list. The community unique code is viewed
                and can be copied to the device clipboard to share with
                potential members. From here the user can choose to leave the
                community.
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
              minHeight: 200,
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
                onPress={() => this.showSlider(addCreateCommunities)}
              >
                <Image
                  source={addCreateCommunities}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                When clicking the plus sign in the home page: a popup modal
                appears showing three options buttons.The Add button shows a
                model containing a text field for the user to enter the code of
                the community they like to join; after pressing “join” the
                user’s request will be sent to the community’s admin and it will
                be pending approval.
              </Text>
            </View>
          </View>
          <View
            style={{
              minHeight: 200,
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
              <TouchableOpacity onPress={() => this.showSlider(addCommunities)}>
                <Image
                  source={addCommunities}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                The Create button shows a model from which the user can enter
                the photo, name, and description and create the new community;
                then a message will appear containing the community’s copiable
                unique code.
              </Text>
            </View>
          </View>
          <View
            style={{
              minHeight: 200,
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
                onPress={() => this.showSlider(createCommunities)}
              >
                <Image
                  source={createCommunities}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                The Pending Request button will show a list of pending requests.
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
              <TouchableOpacity onPress={() => this.showSlider(members)}>
                <Image
                  source={members}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Members page: this page views all members of the community. The
                user is directed to this page from the Single community page.
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
              <TouchableOpacity onPress={() => this.showSlider(member)}>
                <Image
                  source={member}
                  style={{ width: "90%", height: "90%", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 0.03, alignSelf: "center", width: "100%" }}
            ></View>
            <View style={{ flex: 0.65, alignSelf: "center", width: "100%" }}>
              <Text style={{ fontSize: 15, textAlign: "justify" }}>
                Single Member page: this page views the information of a
                specific member of the community. When the chat button is
                pressed, it redirects to a chat area with the chosen member. The
                user is directed to this page from Members page.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
