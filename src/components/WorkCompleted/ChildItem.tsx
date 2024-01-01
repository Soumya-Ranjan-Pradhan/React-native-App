import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { FlatList } from "react-native";

const ChildItem = ({ item, numColumns }) => {
  const { phaseCodes, num, content1, content2 } = item;
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.thumbnailContainer}
      >
        <View
          style={styles.thumbnail}
        >
          <View>
            <Image
              source={{
                uri: item.thumbnailUrl,
              }}
              style={styles.thumbnailImage}
            />
          </View>
        </View>

        <View
          style={styles.infoContainer}
        >
          <View style={styles.infoRow}>
            <View>
              <Text
                style={styles.numText}
              >
                {item.num}
              </Text>
            </View>
            <View>
              <FlatList
                data={phaseCodes}
                keyExtractor={(item) => item.toString()}
                // numColumns={4}
                style={styles.phaseCodesContainer}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={styles.phaseCodeItem}
                    >
                      <View style={styles.statusDot} />
                      <View>
                        <Text style={{ gap: 5 }}>{item}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.statusContainer}>
            <View style={styles.statusDot} />
            <View>
              <Text style={styles.statusCountText}>{item.content1}</Text>
            </View>
            <View style={styles.separator} />
            <View>
              <Text style={styles.sqFtText}>{item.content2}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChildItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 5, infoContainer: {
      flexDirection: "row",
    },
  },
  thumbnailContainer: {
    width: "100%",
    height: 116,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  thumbnail: {
    width: 88,
    height: 93,
    backgroundColor: "rgba(249, 249, 249, 0.5)",
    marginVertical: 11,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  thumbnailImage: {
    height: 65,
    width: 86,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: "row",
  },
  infoRow: {
    gap: 50,
  },
  numText: {
    color: "#383A42",
    fontSize: 17,
    fontWeight: "600",
  },
  phaseCodesContainer: {
    flexDirection: "row",
    gap: 5,
  },
  phaseCodeItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  statusContainer: {
    backgroundColor: "#F1F5F9",
    borderRadius: 10.856,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    width: 142.281,
    height: 21.712,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    marginLeft: 105,
  },
  statusDot: {
    width: 11,
    height: 11,
    backgroundColor: "#34E230",
  },
  statusCountText: {
    color: "#878787",
    fontSize: 12,
    fontWeight: "400",
  },
  separator: {
    width: 1,
    height: 21.712,
    backgroundColor: "#C9C9C9",
  },
  sqFtText: {
    color: "#878787",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
});
