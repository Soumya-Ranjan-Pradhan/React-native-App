import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchIcon from "../../../assets/svg/SearchIcon";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal"; 
import { FlatList } from "react-native";
import AddMarkupLinkProps from "./AddMarkupLinkProps";

const Data = [
  {
    id: "1",
    name: "A001 - Floor Plan 1",
  },
  {
    id: "2",
    name: "A002 - Floor Plan 4",
  },
  {
    id: "3",
    name: "A102 - Floor Plan 5",
  },
  {
    id: "4",
    name: "A122 - Floor Plan 6",
  },
  {
    id: "5",
    name: "A134 - Floor Plan 7",
  },
  {
    id: "6",
    name: "A135 - Floor Plan 8",
  },
  {
    id: "7",
    name: "A136 - Floor Plan 9",
  },
  {
    id: "8",
    name: "A002 - Floor Plan 10",
  },
  {
    id: "9",
    name: "A137 - Floor Plan 11",
  },
];

const AddMarkupLink = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string>();
  const [sheetModal, setSheetModal] = useState(false);
  const [selectedSheet, setSelectedSheet] = useState(null);
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
      <Modal
        isVisible={isModalVisible}
        // backdropColor="transparent"
        // onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.container}>
          <View style={styles.sheetContainer}>
            <View style={styles.header}>
              <View>
                <Text style={styles.cancelButton}>Cancel</Text>
              </View>

              <View>
                <Text style={styles.addSheetTitle}>Markup Link</Text>
              </View>

              <View>
                <Text style={styles.doneButton}>Done</Text>
              </View>
            </View>

            <View>
              <View style={styles.rightSvgContainer} />
            </View>

            <View style={styles.sheetContentContainer}>
              <View style={styles.sheetContent}>
                <View>
                  <Text style={styles.sheetTitle}>Select a sheet to link</Text>
                </View>

                <View style={styles.searchInputContainer}>
                  <View style={styles.searchInputRow}>
                    <View style={styles.searchIconContainer}>
                      <SearchIcon />
                    </View>
                    <View>
                      <TextInput
                        placeholder="Search by Sheets by Name or Number"
                        style={styles.searchInput}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.filterButtonContainer}>
                  <View style={styles.filterButtonsRow}>
                    <TouchableOpacity
                      onPress={() => setSelectedButton("Floor Plans")}
                    >
                      <View
                        style={
                          selectedButton == "Floor Plans"
                            ? styles.floorPlansButton
                            : styles.allSheetsButton
                        }
                      >
                        <Text
                          style={
                            selectedButton == "Floor Plans"
                              ? styles.allSheetsButtonText1
                              : styles.allSheetsButtonText
                          }
                        >
                          Sheet
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setSelectedButton("All Sheets")}
                    >
                      <View
                        style={
                          selectedButton == "All Sheets"
                            ? styles.floorPlansButton
                            : styles.allSheetsButton
                        }
                      >
                        <Text
                          style={
                            selectedButton == "All Sheets"
                              ? styles.allSheetsButtonText1
                              : styles.allSheetsButtonText
                          }
                        >
                          Document
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.rightSvgContainer} />
              </View>

              <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSheetModal(!sheetModal);
                      setSelectedSheet(item);
                      console.log({ item });
                    }}
                  >
                    <View style={styles.sheetItemContainer}>
                      <View>
                        <Text style={styles.sheetItemText}>{item.name}</Text>
                      </View>
                    </View>
                    <View>
                      <View style={styles.rightSvgContainer} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
        <AddMarkupLinkProps
          sheetModal={sheetModal}
          setSheetModal={setSheetModal}
          selectedSheet={selectedSheet}
        />
      </Modal>
    </View>
  );
};

export default AddMarkupLink;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetContainer: {
    width: 712,
    height: 746,
    backgroundColor: "white",
    margin: "auto",
    overflow: "hidden",
    borderRadius: 13,
  },
  header: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  cancelButton: {
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
    fontStyle: "normal",
    color: "#007AFF",
  },
  addSheetTitle: {
    fontSize: 17,
    fontStyle: "normal",
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "SF Pro",
  },
  doneButton: {
    fontSize: 17,
    fontStyle: "normal",
    lineHeight: 22,
    fontWeight: "600",
    color: "#007AFF",
  },
  sheetContentContainer: {
    width: 614.34,
    height: 676.646,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    overflow: "hidden",
    margin: "auto",
    marginVertical: 48,
  },
  sheetContent: {
    paddingHorizontal: 18,
    marginVertical: 15,
  },
  sheetTitle: {
    color: "#383A42",
    fontSize: 17,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Inter",
  },
  buildingArea: {
    color: "#383A42",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
  },
  searchInputContainer: {
    width: 574.801,
    height: 42,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    overflow: "hidden",
    marginVertical: 18,
    justifyContent: "center",
  },

  searchInputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIconContainer: {
    paddingHorizontal: 13,
  },
  searchInput: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
    width: 516,
    fontFamily: "Inter",
    fontStyle: "normal",
  },
  filterButtonContainer: {
    width: 225.469,
    height: 39.275,
    borderRadius: 5,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
  filterButtonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  floorPlansButton: {
    width: 106,
    height: 31,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#0081FF",
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  allSheetsButton: {
    width: 106,
    height: 31,
    justifyContent: "center",
  },
  floorPlansButtonText: {
    color: "#0081FF",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  allSheetsButtonText: {
    color: "#383A42",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Inter",
  },
  allSheetsButtonText1: {
    color: "#0081FF",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Inter",
  },
  horizontalLine: {
    width: "100%",
  },
  sheetItemContainer: {
    paddingHorizontal: 18,
    marginVertical: 18,
  },
  sheetItemText: {
    color: "#383A42",
    fontSize: 14,
    fontWeight: "500",
  },
  rightSvgContainer: {
    borderBottomColor: "rgba(201, 201, 201, 1)",
    borderBottomWidth: 1,
  },
});
