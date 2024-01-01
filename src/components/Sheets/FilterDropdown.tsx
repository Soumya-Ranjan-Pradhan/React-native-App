import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import Modal from "react-native-modal";
import Toggle from "react-native-toggle-input";
import FilterDropdownProps from "./FilterDropdownProps";

const DATA = [
  {
    id: "1",
    status: "Share Status",
    data: {
      Details: [
        {
          id: "3",
          value: "Published Layer  (4)",
        },
        {
          id: "4",
          value: "Personal Layer (3)",
        },
      ],
    },
  },
  {
    id: "2",
    status: "Shapes",
    data: {
      Details: [
        {
          id: "5",
          value: "Arrow  (2)",
        },
        {
          id: "6",
          value: "Square  (2)",
        },
        {
          id: "7",
          value: "Circle  (2)",
        },
      ],
    },
  },
  {
    id: "3",
    status: "Colors",
    data: {
      Details: [
        {
          id: "8",
          value: "Red  (4)",
        },
        {
          id: "9",
          value: "Blue  (2)",
        },
        {
          id: "10",
          value: "Green  (1)",
        },
      ],
    },
  },
  {
    id: "4",
    status: "Photos",
    data: {
      Details: [
        // {
        //   id: "1",
        //   value: "Arrow  (2)",
        // },
        // {
        //   id: "2",
        //   value: "Square  (2)",
        // },
        // {
        //   id: "3",
        //   value: "Circle  (2)",
        // },
      ],
    },
  },
  {
    id: "5",
    status: "Tasks",
    data: {
      Details: [
        // {
        //   id: "1",
        //   value: "Arrow  (2)",
        // },
        // {
        //   id: "2",
        //   value: "Square  (2)",
        // },
        // {
        //   id: "3",
        //   value: "Circle  (2)",
        // },
      ],
    },
  },
];

const FilterDropdown = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mainClicked, setMainClicked] = useState<any>([]);
  const [topId, setTopId] = useState<any>([]);

  return (
    <View style={styles.container}>
      {/* <Modal isVisible={modalVisible}> */}
      <View style={styles.scaleContainer}>
        <View style={styles.containers}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              let {
                id,
                status,
                data: { Details },
              } = item;
              return (
                <View style={styles.mainListItem}>
                  <View style={styles.mainItemWrapper}>
                    <View>
                      <Text style={styles.mainItemText}>{status}</Text>
                    </View>
                    <View>
                      <View style={{}}>
                        <Toggle
                          color={mainClicked ? "rgba(53, 199, 89, 1)" : "red"}
                          size={20}
                          filled={true}
                          circleColor={"white"}
                          toggle={
                            mainClicked.length && mainClicked.includes(item.id)
                          }
                          setToggle={() => {
                            // setMainClicked(!mainClicked);
                            if (mainClicked.includes(item.id)) {
                              setMainClicked(
                                mainClicked.filter((val) => val != item.id)
                              );
                            } else {
                              setMainClicked(
                                Array.from(new Set([...mainClicked, item.id]))
                              );
                            }
                            console.log({ mainClicked });
                          }}
                        />
                      </View>
                    </View>
                  </View>

                  <FilterDropdownProps
                    item={item}
                    id={id}
                    Details={Details}
                    topId={topId}
                    setTopId={setTopId}
                    status={status}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
      {/* </Modal> */}
    </View>
  );
};

const FilterDropdown1 = () => {};

export default FilterDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scaleContainer: {
    width: 304,
    height: 732.58,
    backgroundColor: "white",
    flexDirection: "row",
    position: "absolute",
    top: 20,
    right: 5,
    marginRight: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderRadius: 10,
  },
  containers: {
    width: "100%",
  },
  mainListItem: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  mainItemWrapper: {
    flexDirection: "row",
    width: "100%",
    height: 56,
    backgroundColor: "#F1F5F9",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
  },
  mainItemText: {
    color: "#1F2024",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
  },
});
