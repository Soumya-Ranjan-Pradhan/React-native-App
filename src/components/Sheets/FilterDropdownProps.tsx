import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Toggle from "react-native-toggle-input";
const FilterDropdownProps = ({
  item,
  id,
  Details,
  topId,
  setTopId,
  status,
}) => {
  return (
    <FlatList
      data={Details}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const { value } = item;
        console.log({ value }, value.split(" ")[0].toLowerCase());
        return (
          <View style={styles.detailsItemWrapper}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor:
                    status == "Colors" ? value.split(" ")[0].toLowerCase() : "",  
                  borderRadius: 6,
                  marginHorizontal: 5,
                }}
              ></View>
              <Text
                style={{
                  color:
                    status == "#1F2024"
                      ? value.split(" ")[0].toLowerCase()
                      : "",
                  fontSize: 14,
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                {value}
              </Text>
            </View>
            <View>
              <View style={{}}>
                <Toggle
                  color={topId ? "rgba(53, 199, 89, 1)" : "red"}
                  size={20}
                  filled={true}
                  circleColor={"white"}
                  toggle={topId.length && topId.includes(item.id)}
                  setToggle={() => {
                    // setDetailsId(item?.id);
                    if (topId.includes(item.id)) {
                      setTopId(topId.filter((val) => val != item.id));
                    } else {
                      setTopId(Array.from(new Set([...topId, item.id])));
                    }
                    console.log({ topId });
                  }}
                />
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default FilterDropdownProps;

const styles = StyleSheet.create({
  detailsItemWrapper: {
    flexDirection: "row",
    width: "100%",
    height: 56,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
  },
  detailsItemText: {
    color: "#6C727F",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
  },
});
