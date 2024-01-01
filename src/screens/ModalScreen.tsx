import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React from "react";
import CrossIcon from "../../assets/svg/CrossIcon";
import SearchIcon from "../../assets/svg/SearchIcon";
import * as Progress from "react-native-progress";
import HrlineSvg from "../../assets/svg/HrlineSvg";

interface ModalScreenProps {
  level: { completion: number };
}
const Data = [
  {
    id: "1",
    name: "Inst Densglass Sheathing",
    code: "Code: 3026",
    budget: "$45,600",
    unitcompleted: "0 / 14,000",
    unitcost: "$3.74",
  },
  {
    id: "2",
    name: "Inst Shaft Wall Stystem...",
    code: "Code: 3216",
    budget: "$120,797",
    unitcompleted: "9,344 / 9,344",
    unitcost: "$22.87",
  },
  {
    id: "3",
    name: "Frame Int Walls CMP",
    code: "Code: 3201",
    budget: "$7,400",
    unitcompleted: "600 / 1,200",
    unitcost: "$9.24",
  },
  {
    id: "4",
    name: "Frame Demising Wall - Be...",
    code: "Code: 3202",
    budget: "$17,900",
    unitcompleted: "1,820 / 343,000",
    unitcost: "$6.50",
  },
  {
    id: "5",
    name: "Frame Low Walls",
    code: "Code: 3204",
    budget: "$14,899",
    unitcompleted: "12,374 / 14,000",
    unitcost: "$7.24",
  },
  {
    id: "6",
    name: "Install Top Track",
    code: "Code: 3210",
    budget: "$33,300",
    unitcompleted: "600 / 600",
    unitcost: "$5.33",
  },
  {
    id: "7",
    name: "Inst Shaft Wall Stystem...",
    code: "Code: 3216",
    budget: "$45,000",
    unitcompleted: "6,500 / 10,000",
    unitcost: "$100.01",
  },
  {
    id: "8",
    name: "Frame Demising Wall - Be...",
    code: "Code: 3202",
    budget: "$30,900",
    unitcompleted: "1,400 / 11,243",
    unitcost: "$27.24",
  },
];
const ModalScreen: React.FC<ModalScreenProps> = ({ level }) => {
  const completion = level?.completion || 0;
  return (
    <View style={styles.container}>
      <View style={styles.parentContainer}>
        <View style={styles.childContainer}>
          <View style={styles.rowContainer}>
            <View>
              <CrossIcon />
            </View>
            <View style={styles.textContainer1}>
              <Text style={styles.text}>Phase code Breakdown</Text>
            </View>
          </View>
        </View>

        <View style={styles.textContainer2}>
          {/* Text1 */}
          <View>
            <Text style={styles.test1}>Lvl 2</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.iconContainer}>
                <SearchIcon />
              </View>
              <View>
                <TextInput
                  placeholder="Search by Phase Code"
                  style={styles.input}
                />
              </View>
            </View>
          </View>

          <View style={styles.tdContainer}>
            <View style={styles.rowContainer1}>
              <View style={styles.columnContainer}>
                <View style={{}}>
                  <Text style={styles.columnHeader}>Name</Text>
                </View>
              </View>

              <View style={styles.dataColumn}>
                <Text style={styles.dataText}>Budget</Text>
              </View>

              <View style={styles.dataColumn}>
                <Text style={styles.dataText}>Units Complete</Text>
              </View>

              <View style={styles.dataColumn}>
                <Text style={styles.dataText}>Unit Cost</Text>
              </View>
              <View style={styles.emptyColumn}></View>
            </View>
          </View>

          <View>
            <FlatList
              data={Data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ marginBottom: 10 }}>
                  <View style={styles.dataContainer}>
                    <View
                      style={{
                        width: "30%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <View style={{ marginBottom: 10 }}>
                        <Text style={styles.textContainer}>{item.name}</Text>
                      </View>
                      <View style={styles.title}>
                        <View style={styles.dot} />
                        <View style={{ display: "flex" }}>
                          <Text style={styles.codeContainer}>{item.code}</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.dataColumn}>
                      <Text style={styles.amount}>{item.budget}</Text>
                    </View>

                    <View style={styles.dataColumn}>
                      <Text style={styles.amount}>{item.unitcompleted}</Text>
                    </View>

                    <View style={styles.dataColumn}>
                      <Text style={styles.amount}>{item.unitcost}</Text>
                    </View>
                    <View style={styles.emptyColumn}>
                      <Progress.Circle
                        animated
                        style={{ zIndex: 10 }}
                        indeterminateAnimationDuration={2000}
                        size={40}
                        progress={completion}
                        color={
                          completion === 0
                            ? "#FF3227"
                            : completion === 1
                            ? "#2FC75A"
                            : "#F1972C"
                        }
                        showsText
                        unfilledColor={
                          completion === 0
                            ? "#fbc3c0"
                            : completion === 1
                            ? "#E6F4DC"
                            : "#FFCA0D"
                        }
                        thickness={5}
                        borderWidth={0}
                        strokeCap="round"
                        formatText={() => (
                          <Text
                            style={{
                              fontFamily: "InterBold",
                              fontSize: 14,
                              color:
                                completion === 0
                                  ? "#FF3227"
                                  : completion === 1
                                  ? "#2FC75A"
                                  : "#F1972C",
                            }}
                          >
                            {Math.floor(completion * 100)}%
                          </Text>
                        )}
                      />
                    </View>
                  </View>
                  <View style={styles.hrLineContainer}>
                    <HrlineSvg style={styles.hrLine} />
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    gap: 10,
  },
  parentContainer: {
    width: 723,
    height: 878,
    margin: "auto",
    gap: 20,
    backgroundColor: "white",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 23,
    marginRight: 23,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    alignItems: "center",
  },
  textContainer1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#383A42",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
  },

  textContainer2: {
    flex: 1,
    // backgroundColor: "green",
    marginLeft: 38,
    marginRight: 38,
    gap: 10,
  },
  test1: {
    fontSize: 22,
    fontWeight: "600",
    color: "#383A42",
  },

  inputContainer: {
    backgroundColor: "#F1F5F9",
    width: "100%",
    height: 42,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C9C9C9",
    borderStyle: "solid",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
  input: {
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
  },

  tdContainer: {
    backgroundColor: "#F1F5F9",
    width: "100%",
    height: 42,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C9C9C9",
    borderStyle: "solid",
  },

  rowContainer1: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginHorizontal: 10,
  },

  columnContainer: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
  },

  columnHeader: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
  },

  dataColumn: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dataText: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
  },

  emptyColumn: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  dataContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginHorizontal: 10,
  },

  textContainer: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  codeContainer: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: "#34E230",
  },
  amount: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  hrLineContainer: {
    width: "100%",
    marginTop: 20,
  },
  hrLine: {
    flex: 1,
    width: "100%",
  },
});
