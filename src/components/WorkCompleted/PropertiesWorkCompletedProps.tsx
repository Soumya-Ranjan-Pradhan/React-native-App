import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import DropIcons from "../../../assets/svg/DropIcons";
import { FlatList } from "react-native-gesture-handler";
import SideSvg from "../../../assets/svg/SideSvg";
import { TouchableOpacity } from "react-native";

const PropertiesWorkCompletedProps = ({ colors, selected, setSelected }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.coloredBoxesContainer}>
          <FlatList
            data={colors}
            keyExtractor={(item) => item.id}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={{ marginRight: 12 }}>
                <View
                  style={{
                    width: 12.949,
                    height: 12.949,
                    backgroundColor: item.color,
                  }}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.textContainer}>
          <View>
            <Text style={styles.labelText}>View Markup Properties for </Text>
          </View>
          <View>
            <Text style={styles.linkText}>3 Phase Codes </Text>
          </View>
        </View>
        <View style={styles.dropIconsContainer}>
          <TouchableOpacity onPress={() => setSelected(!selected)}>
            {selected ? <DropIcons /> : <SideSvg />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PropertiesWorkCompletedProps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: 64.643,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C9C9C9",
    borderStyle: "solid",
    // marginVertical: 10,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
  },
  coloredBoxesContainer: {
    flexDirection: "row",
    gap: 16,
    paddingLeft: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelText: {
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "400",
  },
  linkText: {
    fontFamily: "Inter",
    fontSize: 17,
    fontStyle: "normal",
    color: "#0081FF",
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  dropIconsContainer: {
    marginLeft: "auto",
    width: 40,
    height: 40,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
});
