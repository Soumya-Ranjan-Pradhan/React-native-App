import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import CrossIcon from "../../../assets/svg/CrossIcon";
import SearchIcon from "../../../assets/svg/SearchIcon";
import { TextInput } from "react-native";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native";

const Data = [
  {
    id: "1",
    names: "Bulletin 2 Complete Set",
    dates: "Issued: 8/14/2023",
  },
  {
    id: "2",
    names: "04.10.22 Drawing Updates",
    dates: "Issued: 8/5/2023",
  },
  {
    id: "3",
    names: "Current Drawings 03.23.22",
    dates: "Issued: 8/1/2023",
  },
  {
    id: "4",
    names: "JE DUNN TEMP OFFICE",
    dates: "Issued:7/29/2023",
  },
  {
    id: "5",
    names: "ASI #04",
    dates: "Issued: 7/20/2023",
  },
  {
    id: "6",
    names: "ASI #03",
    dates: "Issued: 7/10/2023",
  },
  {
    id: "7",
    names: "ASI #02",
    dates: "Issued: 6/30/2023",
  },
  {
    id: "8",
    names: "ASI #01",
    dates: "Issued: 6/22/2023",
  },
  {
    id: "9",
    names: "Interior Design",
    dates: "Issued: 6/12/2023",
  },
  {
    id: "10",
    names: "Current Drawings 01.23.22",
    dates: "Issued: 5/30/2023",
  },
];

const VersionModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<string>();
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
          <View style={styles.modalContainer}>
            <View>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <CrossIcon />
              </Pressable>
              <View style={{}}>
                <Text style={styles.headerText}>
                  Select a version to compare
                </Text>
              </View>
            </View>

            <View style={{}}>
              <View style={{ marginHorizontal: 13 }}>
                <View style={styles.searchInputContainer}>
                  <View style={styles.searchInputWrapper}>
                    <View style={styles.searchIcon}>
                      <SearchIcon />
                    </View>
                    <View>
                      <TextInput
                        placeholder="Search sheet versions"
                        style={styles.searchInput}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.sheetVersionContainer}>
                <View style={{ marginHorizontal: 13 }}>
                  <Text style={styles.sheetVersionText}>
                    AA424 Demolition Floor Plan
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    borderBottomColor: "rgba(201, 201, 201, 1)",
                    borderBottomWidth: 1,
                  }}
                />
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
                        height: 50,
                        justifyContent: "center",
                      }}
                    >
                      <Pressable onPress={() => setSelected(item.names)}>
                        <View style={styles.flatListItem}>
                          <View>
                            <Text style={styles.flatListItemText}>
                              {item.names}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.Dates}>{item.dates}</Text>
                          </View>
                        </View>
                      </Pressable>
                    </View>

                    <View>
                      <View style={styles.borderBottom} />
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VersionModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    width: 586,
    height: 695,
    margin: "auto",
    gap: 20,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.10)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  closeButton: {
    marginHorizontal: 13,
    marginVertical: 13,
  },
  headerText: {
    color: "#383A42",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Inter",
  },
  searchInputContainer: {
    backgroundColor: "#F1F5F9",
    width: "100%",
    height: 45,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C9C9C9",
    borderStyle: "solid",
  },
  searchInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchIcon: {
    paddingHorizontal: 9,
  },
  searchInput: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
    fontFamily: "Inter",
  },
  sheetVersionContainer: {
    backgroundColor: "#F1F5F9",
    width: "100%",
    height: 42,
    justifyContent: "center",
    marginTop: 13,
  },
  sheetVersionText: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter",
  },
  flatListItem: {
    marginHorizontal: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatListItemText: {
    color: "#383A42",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter",
  },
  Dates: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter",
  },
  borderBottom: {
    borderBottomColor: "rgba(201, 201, 201, 1)",
    borderBottomWidth: 1,
  },
});
