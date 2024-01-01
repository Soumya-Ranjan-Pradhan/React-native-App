import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import RightSvg1 from "../../../assets/svg/RightSvg1";
import Modal from "react-native-modal";

const Data = [
  {
    id: "1",
    names: "3201 - Frame Int Walls CMP",
  },
  {
    id: "2",
    names: "3208 - Layout INT Walls",
  },
  {
    id: "3",
    names: "3210 - Install Top Track",
  },
  {
    id: "4",
    names: "3255 - Hang Wall/Ceiling/Corner",
  },
  {
    id: "5",
    names: "3256 - Hang Bottoms",
  },
  {
    id: "6",
    names: "3257 - Hang Top Out",
  },
  {
    id: "7",
    names: "3285 - Insulate in Walls",
  },
];

const SelectToolsWorkCompleted = () => {
  const [selected, setSelected] = useState<string>();
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", width: "95%" }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 10,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setModalVisible(!isModalVisible)}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          OpenModal
        </Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>
          <View style={styles.mainBox}>
            <View style={styles.header}>
              <View style={styles.headerText}>
                <View>
                  <Text style={styles.cancelButton}>Cancel</Text>
                </View>
                <View>
                  <Text style={styles.mainTitle}>
                    Copy Selected Markup to New Phase Code
                  </Text>
                </View>
                <View>
                  <Text style={styles.done}>Done</Text>
                </View>
              </View>
            </View>

            <View style={styles.phaseCodeBox}>
              <View style={{ marginHorizontal: 20, paddingTop: 20 }}>
                <Text style={styles.phaseCodeTitle}>
                  Select a Phase Code to Copy Your Markup To
                </Text>
              </View>

              <View>
                <View style={styles.phaseCodeItem}>
                  <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.phaseCodeText}>
                      Square Feet - Wall Height
                    </Text>
                  </View>
                </View>

                <FlatList
                  data={Data}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View>
                      <View
                        style={{
                          backgroundColor:
                            selected === item.names ? "#E2F2FF" : "white",
                          width: "100%",
                          height: 47,
                          justifyContent: "center",
                          paddingHorizontal: 20,
                        }}
                      >
                        <View style={styles.listItem}>
                          <View style={styles.listConatiner}>
                            <View style={styles.dot} />

                            <View>
                              <Pressable
                                onPress={() => setSelected(item.names)}
                              >
                                <Text style={styles.listItemText}>
                                  {`${item.names}`}
                                </Text>
                              </Pressable>
                            </View>
                          </View>

                          <View style={{}}>
                            {selected == item.names && <RightSvg1 />}
                          </View>
                        </View>
                      </View>
                      <View>
                        <View style={styles.rightSvgContainer} />
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectToolsWorkCompleted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainBox: {
    width: 712,
    height: 746,
    borderRadius: 13,
    backgroundColor: "white",
    margin: "auto",
    overflow: "hidden",
  },
  header: {
    height: 44,
    backgroundColor: "white",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelButton: {
    fontSize: 17,
    fontStyle: "normal",
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: -0.4,
    fontFamily: "SF Pro",
    color: "#007AFF",
  },
  mainTitle: {
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    fontFamily: "SF Pro",
    color: "#000",
  },
  done: {
    fontSize: 17,
    fontStyle: "normal",
    lineHeight: 22,
    fontWeight: "600",
    letterSpacing: -0.4,
    fontFamily: "SF Pro",
    color: "#007AFF",
  },
  phaseCodeBox: {
    width: 614.34,
    height: 424.074,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    overflow: "hidden",
    margin: "auto",
    marginTop: 45,
  },
  phaseCodeTitle: {
    fontFamily: "Inter",
    fontSize: 17,
    fontWeight: "700",
    fontStyle: "normal",
    color: "#383A42",
  },
  phaseCodeItem: {
    backgroundColor: "#F1F5F9",
    width: "100%",
    height: 36,
    justifyContent: "center",
    marginTop: 13,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    borderStyle: "solid",
  },
  phaseCodeText: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter",
    fontStyle: "normal",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listConatiner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dot: {
    width: 13,
    height: 13,
    backgroundColor: "#FF8C21",
  },
  listItemText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
  },
  rightSvgContainer: {
    borderBottomColor: "rgba(201, 201, 201, 1)",
    borderBottomWidth: 1,
  },
});
