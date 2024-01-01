import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import HrlineSvg from "../../../assets/svg/HrlineSvg";
import GroupSvg4 from "../../../assets/svg/groupSvg4";
import GroupSvg5 from "../../../assets/svg/groupSvg5";
import GroupSvg3 from "../../../assets/svg/groupSvg3";
import { FlatList } from "react-native";
import AddPhaseCodeItem from "./AddPhaseCodeItem";

const ParentItem = ({
  item,
  isClick,
  buttonId,
  setButtonId,
  setIsClick,
  level,
}) => {
  const completion = level?.completion || 0;
  return (
    <View>
      <FlatList
        data={level}
        keyExtractor={(item) => item.labelname}
        renderItem={({ item }) => {
          let { Sheet } = item;
          let first_three_element: any = Sheet.filter(
            (val, index) => index <= 2
          );
          let last_element = Sheet.filter(
            (val) => val.content2 === "Add Phase Code"
          );
          console.log({ first_three_element, last_element });

          console.log({ Sheet });
          Sheet = [...first_three_element, ...last_element];
          return (
            <View>
              <View>
                <View style={styles.container}>
                  <View style={styles.topContainer}>
                    <TouchableOpacity
                      onPress={(e) => {
                        console.log({
                          eimp: e,
                          id: item.labelname,
                        });
                        setButtonId(item.labelname);
                        setIsClick(!isClick);
                      }}
                    >
                      {isClick && buttonId == item.labelname ? (
                        <GroupSvg4 />
                      ) : (
                        <GroupSvg5 />
                      )}
                    </TouchableOpacity>
                  </View>

                  <View style={styles.infoContainer}>
                    <View style={styles.labelContainer}>
                      <Text style={styles.textContainer}>{item.labelname}</Text>
                    </View>
                    <View style={styles.title}>
                      <Text style={styles.codeContainer}>{item.download}</Text>
                    </View>
                  </View>

                  <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{item.labelbuget}</Text>
                  </View>

                  <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{item.lableunit}</Text>
                  </View>

                  <View style={styles.amountContainer}>
                    {/* <Text style={styles.amount}>$3.74</Text> */}
                  </View>

                  <View style={styles.topContainer1}>
                    <Progress.Circle
                      animated
                      style={{ zIndex: 10 }}
                      indeterminateAnimationDuration={2000}
                      size={40}
                      progress={completion}
                      color={
                        completion === 0
                          ? "#FF3227"
                          : completion === 1
                          ? "#2FC75A"
                          : "#F1972C"
                      }
                      showsText
                      unfilledColor={
                        completion === 0
                          ? "#fbc3c0"
                          : completion === 1
                          ? "#E6F4DC"
                          : "#FFCA0D"
                      }
                      thickness={5}
                      borderWidth={0}
                      strokeCap="round"
                      formatText={() => (
                        <Text
                          style={{
                            fontFamily: "InterBold",
                            fontSize: 14,
                            color:
                              completion === 0
                                ? "#FF3227"
                                : completion === 1
                                ? "#2FC75A"
                                : "#F1972C",
                          }}
                        >
                          {Math.floor(completion * 100)}%
                        </Text>
                      )}
                    />
                  </View>

                  <View style={{ width: "5%" }}>
                    <GroupSvg3 />
                  </View>
                </View>
                <View>
                  <View
                    style={styles.hrline}
                  />
                </View>
              </View>
              {isClick && buttonId == item.labelname && (
                <AddPhaseCodeItem
                  Sheet={Sheet}
                  isClick={isClick}
                  buttonId={buttonId}
                />
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default ParentItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },

  topContainer: {
    width: "5%",
    paddingLeft: 15,
  },
  topContainer1: {
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
  },

  textContainer: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  codeContainer: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: "#34E230",
  },
  amount: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  hrLineContainer: {
    width: "100%",
    marginTop: 20,
  },
  infoContainer: {
    width: "30%",
    paddingLeft: 15,
  },
  labelContainer: {
    flexDirection: "row",
  },
  amountContainer: {
    width: "15%",
  },
  hrline:{
    borderBottomColor: "rgba(201, 201, 201, 1)",
    borderBottomWidth: 1,
  }
});
