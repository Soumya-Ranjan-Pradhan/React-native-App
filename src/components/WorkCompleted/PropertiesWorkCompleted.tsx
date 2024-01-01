import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import MinusSvg from "../../../assets/svg/MinusSvg";
import PlusIcon from "../../../assets/svg/PlusIcon";
import PropertiesWorkCompletedProps from "./PropertiesWorkCompletedProps";
import Modal from "react-native-modal";
const Data = [
  {
    id: "1",
    names: "3255 - Hang Wall/Ceiling...",
    content: "14’",
    content1: "0”",
  },
  {
    id: "2",
    names: "3257 - Hang Top Out",
    content: "14’",
    content1: "0”",
  },
  {
    id: "3",
    names: "3285 - Insulate in Walls",
    content: "10’",
    content1: "3”",
  },
];

const ColorsData = [
  {
    id: "1",
    color: "#FF2D2D",
  },
  {
    id: "2",
    color: "#34E230",
  },
  {
    id: "3",
    color: "#6B8ED8",
  },
];

const PropertiesWorkCompleted = () => {
  const [selected, setSelected] = useState();
  const [count, setCount] = useState<any>(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <View style={styles.container}>
      <View>
        <View>
          <PropertiesWorkCompletedProps
            colors={ColorsData}
            selected={selected}
            setSelected={setSelected}
          />
        </View>

        {selected ? (
          <FlatList
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }: { item: any; index: number }) => {
              return (
                <View>
                  <View style={styles.mainContainer}>
                    <View style={styles.rowContainer}>
                      <View style={styles.itemContainer}>
                        <View
                          style={[
                            styles.coloredBox,
                            {
                              backgroundColor:
                                ColorsData[index]?.color || "gray",
                            },
                          ]}
                        />
                        <View>
                          <Text style={styles.itemTextContainer}>
                            {item.names}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.inputContainer}>
                        <View style={styles.inputRowContainer}>
                          <View style={styles.wallContainer}>
                            <View>
                              <Text style={styles.labelText}>Wall Height</Text>
                            </View>

                            <TouchableOpacity
                              onPress={() => {
                                setModalVisible(true);
                                setSelectedItem(item.id);
                              }}
                            >
                              <View style={styles.inputBox}>
                                <View style={{ flexDirection: "row", gap: 5 }}>
                                  <View>
                                    <Text style={styles.numericInputBox}>
                                      {item.content}
                                    </Text>
                                  </View>
                                  <View>
                                    <Text style={styles.zeroText}>
                                      {item.content1}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>

                        <View style={styles.playContainer}>
                          <View style={styles.playContainers}>
                            <View>
                              <Text style={styles.playText}>Play</Text>
                            </View>

                            <View style={styles.oneText}>
                              <Text
                                style={{
                                  fontSize: 17,
                                  fontWeight: "400",
                                  lineHeight: 22,
                                  fontFamily: "SF Pro",
                                }}
                              >
                                {count[item.id] || 0}
                              </Text>
                            </View>

                            <View style={styles.minusContainer}>
                              <View style={styles.minusContainers}>
                                <TouchableOpacity
                                  onPress={() =>
                                    setCount((prevCounts) => ({
                                      ...prevCounts,
                                      [item.id]: Math.max(
                                        (prevCounts[item.id] || 0) - 1,
                                        0
                                      ),
                                    }))
                                  }
                                >
                                  <MinusSvg />
                                </TouchableOpacity>
                                <View style={styles.plusIcons} />
                                <TouchableOpacity
                                  onPress={() =>
                                    setCount((prevCounts) => ({
                                      ...prevCounts,
                                      [item.id]: (prevCounts[item.id] || 0) + 1,
                                    }))
                                  }
                                >
                                  <PlusIcon />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <Modal
                    isVisible={isModalVisible}
                    backdropColor="transparent"
                    onBackdropPress={() => setModalVisible(false)}
                  >
                    <View
                      style={{
                        width: 198.5,
                        height: 213.5,
                        borderRadius: 13,
                        backgroundColor: "red",
                        position: "absolute",
                        top: 81,
                        left: 360,
                      }}
                    >
                      {selectedItem}
                    </View>
                  </Modal>
                </View>
              );
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default PropertiesWorkCompleted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    // backgroundColor: "#F1F5F9",
    backgroundColor: "white",
    width: "100%",
    height: 64.643,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C9C9C9",
    borderStyle: "solid",
    // marginVertical: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingLeft: 20,
  },
  coloredBox: {
    width: 12.949,
    height: 12.949,
    backgroundColor: "#FF2D2D",
  },
  itemTextContainer: {
    color: "#000",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 18,
  },
  inputRowContainer: {
    width: 250,
    height: 44.148,
    borderRadius: 10,
    backgroundColor: "#F1F5F9",
    // backgroundColor: "red",
    justifyContent: "center",
  },
  wallContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  labelText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "center",
  },
  inputBox: {
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderWidth: 0.5,
    borderColor: "rgba(0, 122, 255, 1)",
  },
  numericInputBox: {
    color: "rgba(0, 122, 255, 1)",
    fontFamily: "SF Pro",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
    fontStyle: "normal",
  },
  zeroText: {
    color: "rgba(0, 122, 255, 1)",
    fontFamily: "SF Pro",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
    fontStyle: "normal",
  },
  playContainer: {
    width: 250,
    height: 44.148,
    borderRadius: 10,
    backgroundColor: "#F1F5F9",
    // backgroundColor: "green",
    justifyContent: "center",
  },
  playContainers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  playText: {
    color: "#000",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
  },
  oneText: {
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderWidth: 0.5,
    borderColor: "rgba(196, 196, 199, 1)",
    alignItems: "center",
    backgroundColor: "white",
  },
  minusContainer: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderColor: "#C4C4C7",
    borderRadius: 8,
    backgroundColor: "white",
  },
  minusContainers: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  plusIcons: {
    width: 1,
    height: 18,
    backgroundColor: "rgba(60, 60, 67, 0.3)",
  },
});
