import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
const DATA = [
  {
    id: "1",
    name: "Download PDF",
  },
  {
    id: "2",
    name: "Open in...",
  },
  {
    id: "3",
    name: "Email Snapshot",
  },
  {
    id: "4",
    name: "Export Photos (43)",
  },
  {
    id: "5",
    name: "Export tasks (4)",
  },
  {
    id: "6",
    name: "Remove sheet from Device",
  },
];
const ShareDropdownModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Modal isVisible={modalVisible}> */}
      <View style={styles.scaleContainer}>
        <View
          style={{
            width: "100%",
          }}
        >
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <View style={styles.scaleItem}>
                  <Text style={styles.customText}>{item.name}</Text>
                </View>
                <View>
                  <View style={styles.customButton} />
                </View>
              </View>
            )}
          />
        </View>
      </View>
      {/* </Modal> */}
    </View>
  );
};

export default ShareDropdownModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scaleContainer: {
    width: 304,
    height: 357,
    backgroundColor: "white",
    flexDirection: "row",
    position: "absolute",
    top: 20,
    right: 10,
    marginRight: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderRadius: 10,
  },
  scaleItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 59,
    paddingHorizontal: 7,
    justifyContent: "center",
  },
  customText: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 17,
    color: "black",
    textAlign: "center",
  },
  customButton: {
    borderBottomColor: "rgba(17, 17, 17, 0.25)",
    borderBottomWidth: 1,
  },
});
