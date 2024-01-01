import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { commonStyles } from "./styles";
import Screenshort from "../../assets/Screenshot.png";
import Screenshor1 from "../../assets/Screenshot1.png";
import GroupSvg1 from "../../assets/svg/groupSvg1";
import GroupSvg2 from "../../assets/svg/groupSvg2";
import DownloadSvg from "../../assets/svg/downloadSvg";
import GroupSvg3 from "../../assets/svg/groupSvg3";
import DownloadSvg1 from "../../assets/svg/downloadSvg1";
import DeleteSvg from "../../assets/svg/deleteSvg";
import GroupSvg4 from "../../assets/svg/groupSvg4";
import GroupSvg5 from "../../assets/svg/groupSvg5";
import { TouchableOpacity } from "react-native";
import RefreshIcon from "../../assets/svg/RefreshIcon";

const Data = [
  {
    id: "67c9aa60-a756-4fe8-b3d8-1969a9af7b28",
    name: "All Current Sheets",
    issuanceDate: "2023-03-11T18:30:00.000Z",
    formattedIssuanceDate: "3/11/2023",
    Sheets: [
      {
        id: "54595a4a-82f3-43f7-adf0-6d382503918f",
        dpi: "150",
        num: " AD.18",
        name: " Demolition Floor Plan - Level 18-22",
        tags: ["civil"],
        width: "6300",
        height: "4500",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/493f755d-2c24-4910-9e2d-51b7bf4c726b_0.pdf",
        pageIndex: 0,
        planSetId: "493f755d-2c24-4910-9e2d-51b7bf4c726b",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f.png",
        VersionSetId: "67c9aa60-a756-4fe8-b3d8-1969a9af7b28",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/f609b8c8-1db3-49c3-8474-64792f451940_AD.18-DEMOLITION-FLOOR-PLAN---LEVEL-18-22-Rev.0.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
        planSetFilename: "AD.18-DEMOLITION-FLOOR-PLAN---LEVEL-18-22-Rev.0.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/54595a4a-82f3-43f7-adf0-6d382503918f/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/54595a4a-82f3-43f7-adf0-6d382503918f/compiled.json",
      },
      {
        id: "c184a132-d715-4c1d-a04c-89c2af1a0068",
        dpi: "150",
        num: " AD.24",
        name: " Demolition Floor Plan - Level 24",
        tags: ["Architectural"],
        width: "6300",
        height: "4500",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/f32369e9-cfd1-4911-90bf-aabf3f6f5500_0.pdf",
        pageIndex: 0,
        planSetId: "f32369e9-cfd1-4911-90bf-aabf3f6f5500",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/c184a132-d715-4c1d-a04c-89c2af1a0068.png",
        VersionSetId: "67c9aa60-a756-4fe8-b3d8-1969a9af7b28",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/cb18dd94-f1e6-4e8d-82ad-6768554ccfb9_AD.24-DEMOLITION-FLOOR-PLAN---LEVEL-24-Rev.0.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/c184a132-d715-4c1d-a04c-89c2af1a0068_thumbnail.png",
        planSetFilename: "AD.24-DEMOLITION-FLOOR-PLAN---LEVEL-24-Rev.0.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/c184a132-d715-4c1d-a04c-89c2af1a0068/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/c184a132-d715-4c1d-a04c-89c2af1a0068/compiled.json",
      },
      {
        id: "7fd28bba-b890-4c88-a51a-5d31d406113f",
        dpi: "150",
        num: " AD.01",
        name: " Demolition Floor Plan - Level 01",
        tags: ["Interior"],
        width: "6300",
        height: "4500",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/cd103a9e-c6ec-4712-9b97-04585834c333_0.pdf",
        pageIndex: 0,
        planSetId: "cd103a9e-c6ec-4712-9b97-04585834c333",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/7fd28bba-b890-4c88-a51a-5d31d406113f.png",
        VersionSetId: "67c9aa60-a756-4fe8-b3d8-1969a9af7b28",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/f6eec8ba-f0ac-473d-95c4-b63498573eab_AD.01-DEMOLITION-FLOOR-PLAN---LEVEL-01-Rev.0.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/7fd28bba-b890-4c88-a51a-5d31d406113f_thumbnail.png",
        planSetFilename: "AD.01-DEMOLITION-FLOOR-PLAN---LEVEL-01-Rev.0.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/7fd28bba-b890-4c88-a51a-5d31d406113f/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/7fd28bba-b890-4c88-a51a-5d31d406113f/compiled.json",
      },
      {
        id: "f71c3320-f37e-4a3a-8b52-0a49c4e076d0",
        dpi: "150",
        num: " AD.07",
        name: " Demolition Floor Plan - Level 07-17",
        tags: ["Electrical"],
        width: "6300",
        height: "4500",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/2795edcd-a1d2-485b-afc2-8a0b041d9dab_0.pdf",
        pageIndex: 0,
        planSetId: "2795edcd-a1d2-485b-afc2-8a0b041d9dab",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/f71c3320-f37e-4a3a-8b52-0a49c4e076d0.png",
        VersionSetId: "67c9aa60-a756-4fe8-b3d8-1969a9af7b28",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/77d7c32d-4085-482a-9bb7-d9b27828f880_AD.07-DEMOLITION-FLOOR-PLAN---LEVEL-07-17-Rev.0.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/f71c3320-f37e-4a3a-8b52-0a49c4e076d0_thumbnail.png",
        planSetFilename: "AD.07-DEMOLITION-FLOOR-PLAN---LEVEL-07-17-Rev.0.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/f71c3320-f37e-4a3a-8b52-0a49c4e076d0/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/f71c3320-f37e-4a3a-8b52-0a49c4e076d0/compiled.json",
      },
      {
        id: "48182996-a037-4685-aca8-280e61c4cfcb",
        dpi: "150",
        num: " AD.36",
        name: " Demolition Floor Plan - Level 36-37",
        tags: [],
        width: "6300",
        height: "4500",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/99dcbbd8-8123-42d7-9b67-cf1f7dde5161_0.pdf",
        pageIndex: 0,
        planSetId: "99dcbbd8-8123-42d7-9b67-cf1f7dde5161",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/48182996-a037-4685-aca8-280e61c4cfcb.png",
        VersionSetId: "67c9aa60-a756-4fe8-b3d8-1969a9af7b28",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/e4b75cd9-9eb3-4ad1-a3aa-6ad7a84d05fc_AD.36-DEMOLITION-FLOOR-PLAN---LEVEL-36-37-Rev.0.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/48182996-a037-4685-aca8-280e61c4cfcb_thumbnail.png",
        planSetFilename: "AD.36-DEMOLITION-FLOOR-PLAN---LEVEL-36-37-Rev.0.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/48182996-a037-4685-aca8-280e61c4cfcb/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/48182996-a037-4685-aca8-280e61c4cfcb/compiled.json",
      },
      {
        id: "94bd9bc3-9757-4465-921a-18768523b971",
        dpi: "150",
        num: " AD.34",
        name: " Demolition Floor Plan - Level 34-35",
        tags: [],
        width: "6300",
        height: "4500",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/7e8c3b97-4c3a-497b-8dcb-5841062df14b_0.pdf",
        pageIndex: 0,
        planSetId: "7e8c3b97-4c3a-497b-8dcb-5841062df14b",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/94bd9bc3-9757-4465-921a-18768523b971.png",
        VersionSetId: "67c9aa60-a756-4fe8-b3d8-1969a9af7b28",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/11ea50d2-e1fa-404f-824c-fb6ceae2e21e_AD.34-DEMOLITION-FLOOR-PLAN---LEVEL-34-35-Rev.0.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/94bd9bc3-9757-4465-921a-18768523b971_thumbnail.png",
        planSetFilename: "AD.34-DEMOLITION-FLOOR-PLAN---LEVEL-34-35-Rev.0.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/94bd9bc3-9757-4465-921a-18768523b971/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/94bd9bc3-9757-4465-921a-18768523b971/compiled.json",
      },
    ],
  },

  {
    id: "fd905028-1821-46cd-870c-b140eab1a9d9",
    name: "Bulletin 26",
    issuanceDate: "2023-03-23T18:30:00.000Z",
    formattedIssuanceDate: "3/23/2023",
    Sheets: [
      {
        id: "272996fa-5cdf-4983-b7af-1fc4b7c90087",
        dpi: "150",
        num: " None",
        name: " Native App Flow Diagram",
        tags: ["Telecommunications"],
        width: "2409",
        height: "1979",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/6f7b435f-b4c9-46e7-898c-06b6a8e015a2_0.pdf",
        pageIndex: 0,
        planSetId: "6f7b435f-b4c9-46e7-898c-06b6a8e015a2",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/272996fa-5cdf-4983-b7af-1fc4b7c90087.png",
        VersionSetId: "fd905028-1821-46cd-870c-b140eab1a9d9",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/2fba4b3f-ad2f-4ad0-8328-16988b8b8e2f_ReactNativeGMI_Texas.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/272996fa-5cdf-4983-b7af-1fc4b7c90087_thumbnail.png",
        planSetFilename: "ReactNativeGMI_Texas.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/272996fa-5cdf-4983-b7af-1fc4b7c90087/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/272996fa-5cdf-4983-b7af-1fc4b7c90087/compiled.json",
      },
      {
        id: "83b7b8aa-1b57-4f7c-8a4a-0e9e4e537db8",
        dpi: "150",
        num: " None",
        name: " Native App Backend Flow Diagram",
        tags: [],
        width: "2779",
        height: "1863",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/48ae6c3d-5f8b-46c8-b80d-e2ed9e5995f4_0.pdf",
        pageIndex: 0,
        planSetId: "48ae6c3d-5f8b-46c8-b80d-e2ed9e5995f4",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/83b7b8aa-1b57-4f7c-8a4a-0e9e4e537db8.png",
        VersionSetId: "fd905028-1821-46cd-870c-b140eab1a9d9",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/dc4bbb7a-9c29-4d29-b320-52fe28811679_ReactnativeBackend.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/83b7b8aa-1b57-4f7c-8a4a-0e9e4e537db8_thumbnail.png",
        planSetFilename: "ReactnativeBackend.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/83b7b8aa-1b57-4f7c-8a4a-0e9e4e537db8/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/83b7b8aa-1b57-4f7c-8a4a-0e9e4e537db8/compiled.json",
      },
      {
        id: "b9715d1d-dd15-43ab-a88a-5aee77be09c9",
        dpi: "150",
        num: " AD.02",
        name: " Demolition Floor Plan - Level 02 & 03",
        tags: [],
        width: "6300",
        height: "4500",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/45ac2feb-662c-432b-8e78-e62edfe81ba4_0.pdf",
        pageIndex: 0,
        planSetId: "45ac2feb-662c-432b-8e78-e62edfe81ba4",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/b9715d1d-dd15-43ab-a88a-5aee77be09c9.png",
        VersionSetId: "fd905028-1821-46cd-870c-b140eab1a9d9",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/413115d9-0596-47ed-8e28-d0f224b50182_AD.02-DEMOLITION-FLOOR-PLAN---LEVEL-02-%26-03-Rev.0.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/b9715d1d-dd15-43ab-a88a-5aee77be09c9_thumbnail.png",
        planSetFilename:
          "AD.02-DEMOLITION-FLOOR-PLAN---LEVEL-02-&-03-Rev.0.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/b9715d1d-dd15-43ab-a88a-5aee77be09c9/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/b9715d1d-dd15-43ab-a88a-5aee77be09c9/compiled.json",
      },
      {
        id: "79b5a53b-0227-47ca-b110-d9740b252732",
        dpi: "150",
        num: "1",
        name: "Q",
        tags: [],
        width: "1240",
        height: "1754",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/61d962ab-a3b6-4fb6-ac14-a44aa7312a75_0.pdf",
        pageIndex: 0,
        planSetId: "61d962ab-a3b6-4fb6-ac14-a44aa7312a75",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/79b5a53b-0227-47ca-b110-d9740b252732.png",
        VersionSetId: "fd905028-1821-46cd-870c-b140eab1a9d9",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/d80875e7-47b4-4b50-8084-1e0e9c679d94_4%20-%20Daily%20Jobsite%20Inspection%20Form.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/79b5a53b-0227-47ca-b110-d9740b252732_thumbnail.png",
        planSetFilename: "4 - Daily Jobsite Inspection Form.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/79b5a53b-0227-47ca-b110-d9740b252732/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/79b5a53b-0227-47ca-b110-d9740b252732/compiled.json",
      },
      {
        id: "f0534c66-9d7a-4672-b69d-739d0cf63290",
        dpi: "150",
        num: "2",
        name: "w",
        tags: [],
        width: "1240",
        height: "1754",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/61d962ab-a3b6-4fb6-ac14-a44aa7312a75_1.pdf",
        pageIndex: 1,
        planSetId: "61d962ab-a3b6-4fb6-ac14-a44aa7312a75",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/f0534c66-9d7a-4672-b69d-739d0cf63290.png",
        VersionSetId: "fd905028-1821-46cd-870c-b140eab1a9d9",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/d80875e7-47b4-4b50-8084-1e0e9c679d94_4%20-%20Daily%20Jobsite%20Inspection%20Form.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/f0534c66-9d7a-4672-b69d-739d0cf63290_thumbnail.png",
        planSetFilename: "4 - Daily Jobsite Inspection Form.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/f0534c66-9d7a-4672-b69d-739d0cf63290/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/f0534c66-9d7a-4672-b69d-739d0cf63290/compiled.json",
      },
    ],
  },

  {
    id: "bf4a12c2-939c-427e-b8a4-09d8fa9dc88d",
    name: "Architectural",
    issuanceDate: "2023-07-20T18:30:00.000Z",
    formattedIssuanceDate: "7/20/2023",
    Sheets: [
      {
        id: "51217709-02e2-46dc-a459-accc89e63505",
        dpi: "150",
        num: "12",
        name: "test",
        tags: ["Architecturals"],
        width: "1240",
        height: "1754",
        pdfUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/fbfd1236-dde0-4dfa-8852-fbd1ce8f5b0d_0.pdf",
        pageIndex: 0,
        planSetId: "fbfd1236-dde0-4dfa-8852-fbd1ce8f5b0d",
        fullImgUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/51217709-02e2-46dc-a459-accc89e63505.png",
        VersionSetId: "bf4a12c2-939c-427e-b8a4-09d8fa9dc88d",
        planSetS3Url:
          "https://gmi-central-n.s3.amazonaws.com/documents/efd1ebef-d3ab-4deb-ae0b-dc16f49f9bf3_4%20-%20Foreman%20Daily%20Report.pdf",
        thumbnailUrl:
          "https://gmi-central-n.s3.amazonaws.com/documents/51217709-02e2-46dc-a459-accc89e63505_thumbnail.png",
        planSetFilename: "4 - Foreman Daily Report.pdf",
        textExtractDataUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-extract/51217709-02e2-46dc-a459-accc89e63505/compiled.json",
        textDetectFullPageUrl:
          "https://gmi-central-n.s3.amazonaws.com/text-detection-full-page/51217709-02e2-46dc-a459-accc89e63505/compiled.json",
      },
    ],
  },
];

const CurrentTab = () => {
  const [isGroupSvg3Visible, setGroupSvg3Visible] = useState(false);
  const [currentSelected, setCurrentSelected] = useState(true);
  const [versionSelected, setVersionSelected] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [tagSelected, setTagSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isClickedId, setIsClickedId] = useState<string | null>(null);
  const [imageItemId, setImageItemId] = useState<any>([])

  const handleCurrentPress = () => {
    setCurrentSelected(true);
    setVersionSelected(false);
    setTagSelected(false);
  };

  const handleVersionPress = () => {
    setCurrentSelected(false);
    setVersionSelected(true);
    setTagSelected(false);
  };

  const handleTagPress = () => {
    setCurrentSelected(false);
    setVersionSelected(false);
    setTagSelected(true);
  };

  const filteredData = () => {
    if (currentSelected) {
      return Data.filter((group) => group.name === "All Current Sheets");
    } else if (versionSelected) {
      return Data.filter((group) => group.name === "Bulletin 26");
    } else if (tagSelected) {
      return Data.filter((group) => group.name === "Architectural");
    }
    return [];
  };

  const handleSvgClick = (id: string) => {
    setIsClickedId(id);
    
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setImageItemId([...imageItemId,id])
      // setImageVisible(id);
    }, 2000);
  };


  return (
    <View style={commonStyles.container}>
      <View style={{}}>
        <View
          style={{
            width: "100%",
            height: 70,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 300,
              height: 56,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginHorizontal: 10,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity onPress={handleCurrentPress}>
              <View
                style={{
                  width: 84,
                  height: 47,
                  borderWidth: 1,
                  borderColor: currentSelected ? "#0081FF" : "white",
                  justifyContent: "center",
                  borderRadius: 4,
                  backgroundColor: currentSelected ? "white" : "white",
                }}
              >
                <Text
                  style={{
                    color: currentSelected ? "#0081FF" : "#383A42",
                    fontSize: 14,
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                >
                  Current
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleVersionPress}>
              <View
                style={{
                  width: 84,
                  height: 47,
                  borderWidth: 1,
                  borderColor: versionSelected ? "#0081FF" : "white",
                  justifyContent: "center",
                  borderRadius: 4,
                  backgroundColor: versionSelected ? "white" : "white",
                }}
              >
                <Text
                  style={{
                    color: versionSelected ? "#0081FF" : "#383A42",
                    fontSize: 14,
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                >
                  Version
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTagPress}>
              <View
                style={{
                  width: 84,
                  height: 47,
                  borderWidth: 1,
                  borderColor: tagSelected ? "#0081FF" : "white",
                  justifyContent: "center",
                  borderRadius: 4,
                  backgroundColor: tagSelected ? "white" : "white",
                }}
              >
                <Text
                  style={{
                    color: tagSelected ? "#0081FF" : "#383A42",
                    fontSize: 14,
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                >
                  Tag
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: 300,
              height: 56,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginHorizontal: 10,
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <View>
              <View>
                <Text
                  style={{ color: "#383A42", fontSize: 14, fontWeight: "600" }}
                >
                  Check for updates
                </Text>
              </View>

              <View>
                <Text
                  style={{ color: "#8E949B", fontSize: 12, fontWeight: "600" }}
                >
                  Last updated 1 hour ago
                </Text>
              </View>
            </View>

            <View>
              <RefreshIcon />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "rgba(201, 201, 201, 1)",
          borderBottomWidth: 1,
          marginVertical: 10,
        }}
      />
      <View>
        <View style={commonStyles.boxContainer}>
          <View style={commonStyles.box}>
            <View style={{}}>
              <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
                {["Bulletin 26", "Architectural"].includes(
                  filteredData()[0].name
                ) && (isClicked ? <GroupSvg4 /> : <GroupSvg5 />)}
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <Text style={commonStyles.text}>{filteredData()[0]?.name}</Text>
              <View style={commonStyles.textContainer}>
                <View>
                  <Text style={commonStyles.text1}>
                    5 of 8 sheets downloaded
                  </Text>
                </View>

                <View style={commonStyles.textContainer1}>
                  <View>
                    <Text style={commonStyles.text1}>Issued:</Text>
                  </View>
                  <View>
                    <Text style={commonStyles.text1}>
                      {filteredData()[0]?.formattedIssuanceDate}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setGroupSvg3Visible(!isGroupSvg3Visible)}
          >
            <View style={commonStyles.boxContainer1}>
              <View>
                <GroupSvg3 />
              </View>
            </View>

            {isGroupSvg3Visible && (
              <View style={commonStyles.sideBox}>
                <View style={commonStyles.sideBoxContainer}>
                  <View style={commonStyles.sideSvg}>
                    <View>
                      <DownloadSvg />
                    </View>
                    <View>
                      <Text style={commonStyles.text1}>Download Remaining</Text>
                    </View>
                  </View>

                  <View style={commonStyles.sideSvg}>
                    <View>
                      <DeleteSvg />
                    </View>
                    <View>
                      <Text style={commonStyles.text1}>
                        Remove All from Device
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {isClicked &&
      (filteredData()[0].name == "Bulletin 26" ||
        filteredData()[0].name == "Architectural") ? (
        <View>
          <View style={commonStyles.outerView}>
            <FlatList
              data={filteredData()[0]?.Sheets}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={commonStyles.renderItemView}>
                  <View style={commonStyles.imageContainer}>
                  {imageItemId.length && imageItemId.includes(item.id) ? (
                      <Image
                        source={{uri:item.thumbnailUrl}}
                        style={commonStyles.image}
                      />
                    ) : (
                      <TouchableOpacity onPress={() => handleSvgClick(item.id)}>
                        {loading && isClickedId === item.id ? (
                          <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                          <DownloadSvg /> || null
                        )}
                      </TouchableOpacity>
                    )}
                  </View>

                  <View style={commonStyles.textContainers}>
                    <View>
                      <Text style={commonStyles.numberText}>{item.num}</Text>
                    </View>
                    <View>
                      <Text style={commonStyles.detailsText}>
                        Top of Wall Details
                      </Text>
                    </View>

                    <View style={commonStyles.infoContainer}>
                      <View style={commonStyles.infoBox}>
                        <Text style={commonStyles.infoText}></Text>
                      </View>
                      <View>
                        <Text style={commonStyles.name1Text}>Bulletin 26</Text>
                      </View>
                    </View>
                  </View>

                  <View style={commonStyles.additionalInfoContainer}>
                    <View>
                      <Text style={commonStyles.name2Text}>{item.tags}</Text>
                    </View>
                    <View style={commonStyles.svgContainer}>
                      <View>
                        <GroupSvg1 />
                      </View>

                      <View>
                        <GroupSvg2 />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      ) : filteredData()[0].name !== "Bulletin 26" &&
        filteredData()[0].name !== "Architectural" ? (
        <View>
          <View style={commonStyles.outerView}>
            <FlatList
              data={filteredData()[0]?.Sheets}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={commonStyles.renderItemView}>
                  <View style={commonStyles.imageContainer}>
                    <Image
                      source={{ uri: item.thumbnailUrl }}
                      style={commonStyles.image}
                    />
                  </View>

                  <View style={commonStyles.textContainers}>
                    <View>
                      <Text style={commonStyles.numberText}>{item.num}</Text>
                    </View>
                    <View>
                      <Text style={commonStyles.detailsText}>
                        Top of Wall Details
                      </Text>
                    </View>

                    <View style={commonStyles.infoContainer}>
                      <View style={commonStyles.infoBox}>
                        <Text style={commonStyles.infoText}></Text>
                      </View>
                      <View>
                        <Text style={commonStyles.name1Text}>Bulletin 26</Text>
                      </View>
                    </View>
                  </View>

                  <View style={commonStyles.additionalInfoContainer}>
                    <View>
                      <Text style={commonStyles.name2Text}>{item.tags}</Text>
                    </View>
                    <View style={commonStyles.svgContainer}>
                      <View>
                        <GroupSvg1 />
                      </View>

                      <View>
                        <GroupSvg2 />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default CurrentTab;

const styles = StyleSheet.create({});
