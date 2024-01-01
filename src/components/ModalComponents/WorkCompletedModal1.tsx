import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { FlatList } from "react-native-gesture-handler";
import WorkCompletedModalProps from "./WorkCompletedModalProps";

const Data = [
  {
    id: "1",
    wallHeight: "Square Feet - Wall Height",
    data: {
      squareFeet: [
        { id: "1", value: "3201 - Frame Int Walls CMP" },
        { id: "2", value: "3208 - Layout INT Walls" },
        { id: "3", value: "3210 - Install Top Track" },
        { id: "4", value: "3255 - Hang Wall/Ceiling/Crn..." },
        { id: "5", value: "3256 - Hang Bottoms" },
        { id: "6", value: "3257 - Hang Top Out" },
        { id: "7", value: "3285 - Insulate in Walls" },
      ],
    },
  },

  {
    id: "2",
    wallHeight: "Square Feet - Area",
    data: {
      squareFeet: [
        { id: "1", value: "3260 - Hang Ceilings & Soffits" },
        { id: "2", value: "3223 - Frame Ceiling & Furr Downs" },
        { id: "3", value: "3260 - Hang Ceilings & Soffits" },
      ],
    },
  },

  {
    id: "3",
    wallHeight: "Linear Feet",
    data: {
      squareFeet: [
        { id: "1", value: "3237 - Inst Wood Backing" },
        { id: "2", value: "3267 - Fire Caulk" },
        { id: "3", value: "3277 - Inst Corner Bead (All)" },
      ],
    },
  },

  {
    id: "4",
    wallHeight: "Each",
    data: {
      squareFeet: [
        { id: "1", value: "3601 - Doors, Frames, and Hdw..." },
        { id: "2", value: "3601 - Doors, Frames" },
      ],
    },
  },
];

const WorkCompletedModal1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [mainId, setMainId] = useState<string>();
  const [squarefeetId, setSquarefeetId] = useState<string>();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.customView}>
          <View style={styles.customInnerView}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.customLine} />
              <Modal isVisible={modalVisible}>
                <View style={{}}>
                  <View style={styles.container1}>
                    <View style={styles.centeredView}>
                      <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <View style={styles.customLine} />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.customline}>
                      <View
                        style={{
                          position: "relative",
                          top: 30,
                        }}
                      >
                        <Text style={styles.clearText}>Clear</Text>
                      </View>
                      <FlatList
                        data={Data}
                        keyExtractor={(item) => item.id}
                        style={{}}
                        renderItem={({ item }) => {
                          let {
                            id,
                            wallHeight,
                            data: { squareFeet },
                          } = item;
                          return (
                            <View style={{}}>
                              <View
                                style={{ marginTop: 20, paddingVertical: 10 }}
                              >
                                <Text style={styles.wallText}>
                                  {wallHeight}
                                </Text>
                              </View>

                              <WorkCompletedModalProps
                                squareFeet={squareFeet}
                                id={id}
                                setIsClicked={setIsClicked}
                                setMainId={setMainId}
                                setSquarefeetId={setSquarefeetId}
                                item={item}
                                mainId={mainId}
                                setCount={setCount}
                                isClicked={isClicked}
                                count={count}
                                squarefeetId={squarefeetId}
                              />
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </TouchableOpacity>
            <View style={styles.customColorRow}>
              <View style={styles.color} />
              <View style={styles.color1} />
              <View style={styles.color2} />
              <View style={styles.color3} />
              <View style={styles.color4} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WorkCompletedModal1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  customView: {
    width: 430,
    height: 60,
    borderTopEndRadius: 14,
    borderTopLeftRadius: 14,
    backgroundColor: "white",
    marginHorizontal: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 5,
    alignItems: "center",
  },
  customInnerView: {
    alignItems: "center",
    gap: 16,
  },
  customLine: {
    width: 35.121,
    height: 5.012,
    borderRadius: 2.506,
    backgroundColor: "#AAA",
    marginVertical: 3,
  },
  customColorRow: {
    flexDirection: "row",
    gap: 20,
  },
  color: {
    width: 20,
    height: 20,
    backgroundColor: "#FF8C21",
  },
  color1: {
    width: 20,
    height: 20,
    backgroundColor: "#FFD43E",
  },
  color2: {
    width: 20,
    height: 20,
    backgroundColor: "#FF2D2D",
  },
  color3: {
    width: 20,
    height: 20,
    backgroundColor: "#34E230",
  },
  color4: {
    width: 20,
    height: 20,
    backgroundColor: "#6B8ED8",
  },
  container1: {
    width: 400,
    height: 800,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 5,
    overflow: "scroll",
  },
  centeredView: {
    alignItems: "center",
  },
  customline: {
    marginHorizontal: 20,
    marginTop: 35,
  },
  wallText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
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
});
