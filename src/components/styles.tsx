// styles.js or styles.ts

import { StyleSheet } from "react-native";
// tab screen css start
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap:20,
    backgroundColor: "#F1F5F9",
    // marginHorizontal:10
  },
  boxContainer: {
    backgroundColor: "#FFF",
    height: 108,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#C9C9C9",
    borderBottomWidth: 1,
  },
  box: {
    height: 80,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#383A42",
    fontSize: 22,
    fontWeight: "700",
  },
  textContainer: {
    flexDirection: "row",
    gap: 10,
  },
  text1: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
  },
  textContainer1: {
    flexDirection: "row",
  },
  boxContainer1: {
    height: 80,
    width: 350,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  sideBox: {
    width: 201,
    height: 60,
    alignSelf: "flex-end",
    marginTop: 50,
    position: "absolute",
    justifyContent: "center",
    gap: 10,
    backgroundColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    alignItems:'center',
    marginRight:5
  },
  sideBoxContainer: {
    gap: 10,
  },
  sideSvg: {
    flexDirection: "row",
    gap: 10,
  },

  outerView: {
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "#F1F5F9",
    justifyContent: "space-between",
  },
  renderItemView: {
    flex: 1,
    backgroundColor: "#FFF",
    marginBottom: 17,
    marginHorizontal: 10,
    width: 390,
    flexDirection: "row",
  },
  imageContainer: {
    width: 88,
    height: 93,
    backgroundColor: "rgba(249, 249, 249, 0.5)",
    marginVertical: 11,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 87,
    borderRadius: 10,
  },
  textContainers: {
    gap: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  numberText: {
    color: "#383A42",
    fontSize: 17,
    fontWeight: "600",
  },
  detailsText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 5,
  },
  infoBox: {
    borderWidth: 2,
    borderColor: "#0081FF",
    width: 30,
    height: 17,
  },
  infoText: {
    color: "#0081FF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  name1Text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
  },
  additionalInfoContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  mainText:{
    width: 78,
    height: 19,
    borderRadius: 12,
    backgroundColor: "#F2F3F5",
    alignItems:'center',
    justifyContent:"center"
  },
  name2Text:{
    color: "#8E949B",
    fontSize: 10,
    fontWeight: "500",
    textAlign:"center"
  },
  svgContainer:{
    flexDirection: "row",
    gap: 10,
  }
  //Main Tab css start

  //Main Tab css end
});
