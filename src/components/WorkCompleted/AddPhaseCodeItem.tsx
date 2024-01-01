import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChildItem from "./ChildItem";
import PlusIcon from "../../../assets/svg/PlusIcon";
const numColumns = 2;
const AddPhaseCodeItem = ({ Sheet, isClick, buttonId }) => {
  return (
    <View>
        <View>
          <FlatList
            data={Sheet}
            keyExtractor={(item) => item.thumbnailUrl}
            numColumns={numColumns}
            style={{
              backgroundColor: "#F1F5F9",
              paddingHorizontal: 10,
            }}
            renderItem={({ item }) => {
              const { phaseCodes, content2 } = item;
              console.log({ phaseCodes });
              if (content2 && content2 === "Add Phase Code") {
                return (
                  <View style={styles.container}>
                    <View style={styles.innerContainer}>
                      <View style={styles.emptyBox}></View>

                      <View style={styles.contentContainer}>
                        <View style={styles.contentContainer1}>
                          <View>
                            <Text style={styles.itemNum}>{item.num}</Text>
                          </View>
                        </View>
                        <View style={styles.rightColumn}>
                          <View>
                            <Text style={styles.statusText}>
                              {item.content2}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              } else {
                return <ChildItem item={item} numColumns={numColumns} />;
              }
            }}
          />
          <View style={styles.addSheetContainer}>
            <View style={styles.addSheetBox}>
              <View style={styles.plusIconContainer}>
                <View>
                  <PlusIcon />
                </View>
              </View>

              <View>
                <View>
                  <Text style={styles.addSheetText}>Add Sheet</Text>
                </View>
                <View>
                  <Text style={styles.addSheetDescription}>
                    Click to Select a Sheet
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

    </View>
  );
};

export default AddPhaseCodeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  innerContainer: {
    width: "100%",
    height: 116,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  emptyBox: {
    width: 88,
    height: 93,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  contentContainer: {
    flexDirection: "row",
  },
  contentContainer1: {
    flexDirection: "row",
  },
  itemNum: {
    color: "rgba(56, 58, 66, 0.6)",
    fontSize: 17,
    fontWeight: "600",
  },
  rightColumn: {
    backgroundColor: "#F1F5F9",
    borderRadius: 10.856,
    borderWidth: 1,
    borderColor: "rgba(2, 129, 253, 1)",
    width: 142.281,
    height: 21.712,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    marginLeft: 105,
  },
  statusText: {
    color: "#0281FD",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  addSheetContainer: {
    backgroundColor: "#F1F5F9",
  },
  addSheetBox: {
    width: "49%",
    height: 66.304,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  plusIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#C9C9C9",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  addSheetText: {
    color: "#383A42",
    fontSize: 17,
    fontWeight: "600",
  },
  addSheetDescription: {
    color: "#0281FD",
    fontSize: 14,
    fontWeight: "400",
  },
});
