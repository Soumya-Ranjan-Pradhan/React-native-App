import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import RightSvg from "../../../assets/svg/RightSvg";
import Modal from "react-native-modal";
const SCALES = [
  {
    display: "1/2",
    val: 1 / 2,
  },
  {
    display: "1/4",
    val: 1 / 4,
  },
  {
    display: "1/8",
    val: 1 / 8,
  },
  {
    display: "1/16",
    val: 1 / 16,
  },
  {
    display: "1/32",
    val: 1 / 32,
  },
  {
    display: "1/64",
    val: 1 / 64,
  },
];
const WorkCompletedModal2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<string>();
  return (
    <View style={styles.container}>
      <View style={styles.scaleContainer}>
        <View
          style={{
            width: "100%",
          }}
        >
          <FlatList
            data={SCALES}
            keyExtractor={(item) => String(item.val)}
            renderItem={({ item }) => (
              <View>
                <View style={styles.scaleItem}>
                  <View style={{ position: "absolute" }}>
                    {selected == item.display && <RightSvg />}
                  </View>
                  <TouchableOpacity onPress={() => setSelected(item.display)}>
                    <Text style={styles.customText}>{`${item.display}`}</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <View style={styles.customButton} />
                </View>
              </View>
            )}
          />
          <Pressable onPress={() => setModalVisible(true)}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeaderText}>Custom</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <Modal isVisible={modalVisible}>
        <View style={styles.modalDescriptionText}>
          <View style={{ rowGap: 8 }}>
            <View style={{ paddingTop: 10 }}>
              <Text style={styles.scaleText}>Set Custom Scale</Text>
              <View style={{ marginHorizontal: 6 }}>
                <Text style={styles.customscale}>
                  Set a custom scale to be applied to the entire polyline.
                </Text>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View>
                <TextInput
                  style={styles.numericInput}
                  placeholder=""
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.separatorContainer}>
                <Text style={styles.separatorText}>/</Text>
              </View>

              <View style={styles.unitInputContainer}>
                <TextInput
                  style={styles.unitInput}
                  placeholder=""
                  keyboardType="numeric"
                />
                <View>
                  <Text style={styles.equalSign}>“</Text>
                </View>
              </View>

              <View style={styles.unitTextContainer}>
                <Text style={styles.unitText}>=</Text>
              </View>

              <View style={styles.unitInputContainer}>
                <TextInput style={styles.unitInput} placeholder="" />
                <View style={styles.separatorContainer}>
                  <Text style={styles.ftText}>ft</Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.customButton} />

              <View style={styles.modalButtonsContainer}>
                <View style={{}}>
                  <Text style={styles.cancelButton}>Cancel</Text>
                </View>

                <View style={styles.saveButtonContainer} />
                <View>
                  <Text style={styles.saveButton}>Save</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WorkCompletedModal2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scaleContainer: {
    width: 220,
    height: 300,
    backgroundColor: "white",
    flexDirection: "row",
    position: "absolute",
    top: 10,
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
    height: 42,
    paddingHorizontal: 7,
  },
  customText: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 17,
    color: "black",
    marginHorizontal: 30,
  },
  customButton: {
    borderBottomColor: "rgba(17, 17, 17, 0.25)",
    borderBottomWidth: 1,
  },
  modalContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 42,
  },
  modalHeaderText: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 17,
    color: "black",
    paddingHorizontal: 32,
  },
  modalDescriptionText: {
    height: 150,
    width: 250,
    backgroundColor: "white",
    margin: "auto",
    borderRadius: 10,
  },
  scaleText: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
    fontStyle: "normal",
    letterSpacing: -0.4,
    textAlign: "center",
  },
  customscale: {
    fontSize: 13,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontWeight: "400",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
  },
  numericInput: {
    width: 26,
    height: 26,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#0081FF",
    backgroundColor: "white",
    justifyContent: "center",
    textAlign: "center",
  },
  separatorContainer: {
    justifyContent: "center",
  },
  separatorText: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "#555",
    textAlign: "center",
  },
  unitInputContainer: {
    flexDirection: "row",
  },
  unitInput: {
    width: 26,
    height: 26,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#0081FF",
    backgroundColor: "white",
    justifyContent: "center",
    textAlign: "center",
  },
  equalSign: {
    fontSize: 17,
    lineHeight: 22,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.4,
    color: "rgba(85, 85, 85, 1)",
    paddingHorizontal: 2,
  },
  unitTextContainer: {
    justifyContent: "center",
  },
  unitText: {
    fontSize: 17,
    lineHeight: 22,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.4,
    color: "rgba(85, 85, 85, 1)",
    textAlign: "center",
  },
  ftText: {
    fontSize: 17,
    lineHeight: 22,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: -0.4,
    color: "rgba(85, 85, 85, 1)",
    textAlign: "center",
    paddingHorizontal: 3,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cancelButton: {
    fontSize: 17,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "#007AFF",
  },
  saveButtonContainer: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(17, 17, 17, 0.25)",
  },
  saveButton: {
    fontSize: 17,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "#007AFF",
    textAlign: "center",
  },
});
