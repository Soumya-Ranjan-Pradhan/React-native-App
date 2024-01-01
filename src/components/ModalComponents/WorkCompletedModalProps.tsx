import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CheckedBox from "../../../assets/svg/CheckedBox";
import CheckBox from "../../../assets/svg/CheckBox";
import { FlatList } from "react-native";
import MinusSvg from "../../../assets/svg/MinusSvg";
import PlusIcon from "../../../assets/svg/PlusIcon";

const WorkCompletedModalProps = ({
  squareFeet,
  id,
  setIsClicked,
  setMainId,
  setSquarefeetId,
  item,
  mainId,
  setCount,
  isClicked,
  count,
  squarefeetId,
}) => {
  return (
    <FlatList
      data={squareFeet}
      keyExtractor={(item) => item.id}
      style={{}}
      renderItem={({ item }) => {
        const { value } = item;
        return (
          <View style={styles.flatlistItem}>
            <View style={styles.wallHheightText}>
              <TouchableOpacity
                onPress={() => {
                  setIsClicked(!isClicked);
                  setMainId(id);
                  setSquarefeetId(item?.id);
                  setCount(0);
                }}
              >
                {isClicked && mainId == id && squarefeetId == item.id ? (
                  <View>
                    <CheckedBox />
                  </View>
                ) : (
                  <View>
                    <CheckBox />
                  </View>
                )}
              </TouchableOpacity>

              <View style={styles.checkboxContainer} />

              <View>
                <Text style={styles.checkBoxText}>{value}</Text>
              </View>
            </View>

            {isClicked && mainId == id && squarefeetId == item.id && (
              <View style={styles.checkBoxGap}>
                <View style={styles.checkBoxContainers}>
                  <View style={styles.PlusContainer}>
                    <View style={styles.PlayTextMain}>
                      <View>
                        <Text>Ply</Text>
                      </View>

                      <View style={styles.quantityContainer}>
                        <View style={styles.quantityInputContainer}>
                          <Text style={styles.zeroText}>
                            {mainId == id && squarefeetId == item.id
                              ? count
                              : 0}
                          </Text>
                        </View>

                        <View style={styles.PlusMinusContainer}>
                          <View style={styles.PlusText}>
                            <TouchableOpacity
                              onPress={() =>
                                setCount(count > 0 ? count - 1 : 0)
                              }
                            >
                              <MinusSvg />
                            </TouchableOpacity>
                            <View style={styles.MinusText} />
                            <TouchableOpacity
                              onPress={() => setCount(count + 1)}
                            >
                              <PlusIcon />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                {/* <View style={styles.wallContainer}>
                <View
                  style={
                    styles.wallheightcontianer
                  }
                >
                  <View>
                    <Text
                      style={styles.wallTexts}
                    >
                      Wall Height
                    </Text>
                  </View>
                  <View
                    style={styles.boxContainer}
                  >
                    <View
                      style={styles.zeroContainer}
                    >
                      <Text
                        style={styles.boxText}
                      >
                        0’
                      </Text>
                      <Text
                        style={styles.boxText}
                      >
                        0”
                      </Text>
                    </View>
                  </View>
                </View>
              </View> */}
              </View>
            )}

            <View style={styles.hrContainer}>
              <View style={styles.hrLine} />
            </View>
          </View>
        );
      }}
    />
  );
};

export default WorkCompletedModalProps;

const styles = StyleSheet.create({
  flatlistItem: {
    width: "100%",
    marginBottom: 8,
    justifyContent: "center",
  },
  wallHheightText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 2,
    paddingBottom: 8,
  },
  checkboxContainer: {
    width: 13,
    height: 13,
    backgroundColor: "#FF8C21",
  },
  checkBoxText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "400",
  },
  checkBoxContainers: {
    justifyContent: "center",
    alignItems: "center",
  },
  PlusContainer: {
    width: "83%",
    height: 44.148,
    borderWidth: 1,
    borderColor: "#DA6B2C",
    backgroundColor: "#F9F1F1",
    justifyContent: "center",
  },
  PlayTextMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    gap: 16,
  },
  quantityInputContainer: {
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderRadius: 6,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#DA6B2C",
    borderStyle: "solid",
    justifyContent: "center",
  },
  zeroText: {
    color: "#DA6B2C",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "400",
    fontStyle: "normal",
  },
  PlusMinusContainer: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "#C4C4C7",
  },
  PlusText: {
    flexDirection: "row",
    gap: 20,
  },
  MinusText: {
    width: 1,
    height: 18,
    backgroundColor: "rgba(60, 60, 67, 0.3)",
  },
  hrContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hrLine: {
    width: "83%",
    borderBottomColor: "rgba(60, 60, 67, 0.36)",
    borderBottomWidth: 1,
  },
  checkBoxGap: {
    gap: 10,
    paddingBottom: 10,
  },
  clearText: {
    color: "#0081FF",
    textAlign: "right",
    fontWeight: "400",
    fontSize: 17,
    fontStyle: "normal",
  },
  wallContainer: {
    width: "100%",
    height: 44.148,
    borderWidth: 1,
    borderColor: "#DA6B2C",
    backgroundColor: "#F9F1F1",
    justifyContent: "center",
  },
  wallheightcontianer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  wallTexts: {
    color: "#000",
    fontSize: 17,
    fontWeight: "400",
    fontStyle: "normal",
  },
  boxContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 6,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#DA6B2C",
    borderStyle: "solid",
    justifyContent: "center",
  },
  zeroContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    textAlign: "center",
    color: "#DA6B2C",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
    fontStyle: "normal",
  },
});
