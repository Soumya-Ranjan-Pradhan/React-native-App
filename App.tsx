import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CurrentTab from "./src/components/CurrentTab";
import ModalScreen from "./src/screens/ModalScreen";
import WorkCompleted from "./src/screens/WorkCompleted";
import WorkCompletedModal from "./src/components/ModalComponents/WorkCompletedModal";
import WorkCompletedModal1 from "./src/components/ModalComponents/WorkCompletedModal1";
import WorkCompletedModal2 from "./src/components/ModalComponents/WorkCompletedModal2";
import ShareDropdownModal from "./src/components/Sheets/ShareDropdownModal";
import FilterDropdown from "./src/components/Sheets/FilterDropdown";
import VersionModal from "./src/components/Version/VersionModal";
import SelectToolsWorkCompleted from "./src/components/ModalComponents/SelectToolsWorkCompleted";
import PropertiesWorkCompleted from "./src/components/WorkCompleted/PropertiesWorkCompleted";
import Data from "./src/Data";
import AddMarkupLink from "./src/components/Sheets/AddMarkupLink";

const App = () => {
  return (
    <>
      <AddMarkupLink  />
    </>
  );
};
export default App;

const styles = StyleSheet.create({});
