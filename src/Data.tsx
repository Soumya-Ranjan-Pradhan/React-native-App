import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import GroupSvg1 from "../assets/svg/groupSvg1";
import GroupSvg2 from "../assets/svg/groupSvg2";

const Data = () => {
  return (
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
          <View style={{ marginHorizontal: 18 }}>
            <View style={styles.sheetContainers}>
              <Text style={styles.sheetlinkText}>Sheet Link</Text>
            </View>

            <View style={styles.sheetmainContainer}>
              <View style={styles.linkImageContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.linkedImage}>
                    <Image
                      source={require("../assets/Screenshot.png")}
                      style={{ height: 70, width: 87 }}
                    />
                  </View>

                  <View style={styles.linkTextContainer}>
                    <View>
                      <Text style={styles.linkTitle}>12-304N</Text>
                    </View>
                    <View>
                      <Text style={styles.linkSubtitle}>
                        Top of Wall Details
                      </Text>
                    </View>

                    <View style={styles.linkDetailsContainer}>
                      <View style={styles.linkDetailBadge}>
                        <Text style={styles.v10}>V10</Text>
                      </View>
                      <View>
                        <Text style={styles.linkDetailText}>Bulletin 26</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>Architectural</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <View>
                      <GroupSvg1 />
                    </View>

                    <View>
                      <GroupSvg2 />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ marginVertical: 5 }}>
              <Text style={styles.changeText}>Change</Text>
            </View>

            <View style={{}}>
              <Text style={styles.labelText}>Label</Text>

              <View style={styles.labelInput}>
                <View style={{}}>
                  <TextInput
                    placeholder="Description"
                    style={styles.noteText}
                  />
                </View>
              </View>
            </View>

            <View style={{ marginVertical: 15 }}>
              <Text style={styles.noteInput}>Note</Text>

              <View style={styles.noteInputs}>
                <View style={{}}>
                  <TextInput
                    placeholder="Enter notes here"
                    style={styles.textInput}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.textMainContainer}>
            <Text style={styles.createdByText}>Created by William Messer</Text>
            <Text style={styles.creatorEmailText}>
              williammesser@gmitexas.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Data;

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
    height: 602.107,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    overflow: "hidden",
    margin: "auto",
    marginVertical: 48,
    position: "relative",
  },

  rightSvgContainer: {
    borderBottomColor: "rgba(201, 201, 201, 1)",
    borderBottomWidth: 1,
  },
  sheetContainers: {
    height: 75,
    justifyContent: "center",
  },
  sheetlinkText: {
    color: "#383A42",
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "700",
  },
  sheetmainContainer: {
    width: "100%",
    height: 116.318,
    borderWidth: 1,
    borderColor: "#0281FD",
  },
  linkImageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 11,
  },
  linkedImage: {
    width: 88,
    height: 93,
    backgroundColor: "rgba(249, 249, 249, 0.5)",
    marginVertical: 11,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    justifyContent: "center",
    alignItems: "center",
  },
  linkTextContainer: {
    gap: 10,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  linkTitle: {
    color: "#383A42",
    fontSize: 17,
    fontWeight: "600",
  },
  linkSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
  },
  linkDetailsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  linkDetailBadge: {
    borderWidth: 2,
    borderColor: "#0081FF",
    width: 30,
    height: 17,
  },
  v10: {
    color: "#0081FF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  linkDetailText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
  },
  categoryBadge: {
    width: 78,
    height: 19.034,
    borderRadius: 12.282,
    backgroundColor: "rgba(242, 243, 245, 1)",
    justifyContent: "center",
  },
  categoryText: {
    color: "#8E949B",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 34,
  },
  changeText: {
    color: "#0081FF",
    textAlign: "right",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "400",
    fontFamily: "Inter",
  },
  labelText: {
    color: "#555",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    fontFamily: "Inter",
    paddingBottom: 5,
  },
  labelInput: {
    width: "100%",
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 11,
  },
  noteText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
    width: 516,
    fontFamily: "Inter",
    fontStyle: "normal",
  },
  noteInput: {
    color: "#555",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    fontFamily: "Inter",
    paddingBottom: 5,
  },
  noteInputs: {
    width: "100%",
    height: 68.217,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    backgroundColor: "white",
    paddingTop: 11,
    paddingLeft: 11,
  },
  textInput: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
    width: 516,
    fontFamily: "Inter",
    fontStyle: "normal",
  },
  textMainContainer: {
    position: "absolute",
    bottom: 17,
    left: 18,
  },
  createdByText: {
    color: "#555",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "400",
  },
  creatorEmailText: {
    color: "#939393",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "400",
  },
});
