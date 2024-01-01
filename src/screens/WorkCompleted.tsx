import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import HrlineSvg from "../../assets/svg/HrlineSvg";
import GroupSvg4 from "../../assets/svg/groupSvg4";
import GroupSvg5 from "../../assets/svg/groupSvg5";
import GroupSvg3 from "../../assets/svg/groupSvg3";
import ParentItem from "../components/WorkCompleted/ParentItem";

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
    level: [
      {
        labelname: "LVL 1",
        download: "3 of 3 downloaded",
        labelbuget: "$11,400",
        lableunit: "0 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
      {
        labelname: "LVL 2",
        download: "No Sheets Added",
        labelbuget: "$11,400",
        lableunit: "0 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
      {
        labelname: "LVL 3",
        download: "2 of 4 downloaded",
        labelbuget: "$11,400",
        lableunit: "2,272 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
    ],
  },

  {
    id: "2",
    name: "Frame Int Walls CMP",
    code: "Code: 3026",
    budget: "$33,600",
    unitcompleted: "8,531 / 26,300",
    unitcost: "$14.64",
    level: [
      {
        labelname: "LVL 1",
        download: "3 of 3 downloaded",
        labelbuget: "$11,400",
        lableunit: "0 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
      {
        labelname: "LVL 2",
        download: "No Sheets Added",
        labelbuget: "$11,400",
        lableunit: "0 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
      {
        labelname: "LVL 3",
        download: "2 of 4 downloaded",
        labelbuget: "$11,400",
        lableunit: "2,272 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
    ],
  },

  {
    id: "3",
    name: "Frame Demising Wall - Be...",
    code: "Code: 3026",
    budget: "$500,600",
    unitcompleted: "0 / 48,000",
    unitcost: "-",
    level: [
      {
        labelname: "LVL 1",
        download: "3 of 3 downloaded",
        labelbuget: "$11,400",
        lableunit: "0 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
      {
        labelname: "LVL 2",
        download: "No Sheets Added",
        labelbuget: "$11,400",
        lableunit: "0 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
      {
        labelname: "LVL 3",
        download: "2 of 4 downloaded",
        labelbuget: "$11,400",
        lableunit: "2,272 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
    ],
  },

  {
    id: "4",
    name: "Frame Demising Wall - Be...",
    code: "Code: 3026",
    budget: "$500,600",
    unitcompleted: "0 / 48,000",
    unitcost: "-",
    level: [
      {
        labelname: "LVL 1",
        download: "3 of 3 downloaded",
        labelbuget: "$11,400",
        lableunit: "0 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
      {
        labelname: "LVL 2",
        download: "No Sheets Added",
        labelbuget: "$11,400",
        lableunit: "0 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
      {
        labelname: "LVL 3",
        download: "2 of 4 downloaded",
        labelbuget: "$11,400",
        lableunit: "2,272 / 3,500",
        Sheet: [
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-304N",
            content1: "3026",
            content2: "1,235 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-509S",
            content1: "3206",
            content2: "1,037 sq ft ",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },

          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408N",
            content1: "3206",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3231"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SD",
            content1: "320&",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            thumbnailUrl:
              "https://gmi-central-n.s3.amazonaws.com/documents/54595a4a-82f3-43f7-adf0-6d382503918f_thumbnail.png",
            num: "12-408SH",
            content1: "3208",
            content2: "30 sq ft",
            phaseCodes: ["3203", "3206", "3213", "3235"],
          },
          {
            num: "12-408SH",
            content2: "Add Phase Code",
          },
        ],
      },
    ],
  },
];

const ModalScreen: React.FC<ModalScreenProps> = ({ level }) => {
  const completion = level?.completion || 0;
  // const [isClicked, setIsClicked] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [topId, setTopId] = useState<any>([]);
  const [buttonId, setButtonId] = useState<string>();

  return (
    <View style={styles.container}>
      <View style={styles.tdContainer}>
        <View style={styles.topContainer}>
          <View style={{ width: "5%" }}>{/* <GroupSvg4 /> */}</View>

          <View style={{ width: "30%" }}>
            <View style={{}}>
              <Text style={styles.topText}>Phase Code Name</Text>
            </View>
          </View>

          <View style={styles.amountContainer}>
            <Text style={styles.parentText}>Budget</Text>
          </View>

          <View style={styles.amountContainer}>
            <Text style={styles.parentText}>Units Complete</Text>
          </View>

          <View style={styles.amountContainer}>
            <Text style={styles.parentText}>Unit Cost</Text>
          </View>
        </View>
      </View>

      {/* MainBox Start */}
      <View>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const { level } = item;
            console.log({ level });
            return (
              <View>
                <View style={styles.mainBox}>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity
                      onPress={(e) => {
                        console.log({ eimp: e, id: item.id });
                        if (topId.includes(item.id)) {
                          setTopId(topId.filter((val) => val != item.id));
                        } else {
                          setTopId(Array.from(new Set([...topId, item.id])));
                        }
                        console.log({ topId });
                      }}
                    >
                      {topId.length && topId.includes(item.id) ? (
                        <GroupSvg4 />
                      ) : (
                        <GroupSvg5 />
                      )}
                    </TouchableOpacity>
                  </View>

                  <View style={styles.labelContainer}>
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

                  <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{item.budget}</Text>
                  </View>

                  <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{item.unitcompleted}</Text>
                  </View>

                  <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{item.unitcost}</Text>
                  </View>
                  <View style={styles.progressContainer}>
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

                  <View style={{ width: "5%" }}>
                    <GroupSvg3 />
                  </View>
                </View>
                <View>
                  <View
                    style={styles.hrLine}
                  />
                </View>

                {/* ParentText Start */}
                {topId.length && topId.includes(item.id) ? (
                  <View>
                    <View style={styles.parentTextContainer}>
                      <View style={styles.topContainer}>
                        <View style={{ width: "5%" }}>
                          {/* <GroupSvg4 /> */}
                        </View>

                        <View style={{ width: "30%" }}>
                          <View style={{}}>
                            <Text style={styles.topText}>Building Area</Text>
                          </View>
                        </View>

                        <View style={styles.amountContainer}>
                          <Text style={styles.parentText}>Budget</Text>
                        </View>

                        <View style={styles.amountContainer}>
                          <Text style={styles.parentText}>Units Complete</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View
                        style={styles.hrLine}
                      />
                    </View>

                    <View>
                      <ParentItem
                        item={item}
                        isClick={isClick}
                        buttonId={buttonId}
                        setButtonId={setButtonId}
                        setIsClick={setIsClick}
                        level={level}
                      />
                    </View>
                  </View>
                ) : null}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topContainer: {
    width: "100%",
    height: 90,
    backgroundColor: "",
    flexDirection: "row",
    alignItems: "center",
  },

  topText: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
  },
  parentText: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
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

  hrLine: {
    borderBottomColor: "rgba(201, 201, 201, 1)",
    borderBottomWidth: 1,
  },
  mainBox: {
    width: "100%",
    height: 90,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: "5%",
    paddingLeft: 8,
  },
  labelContainer: {
    width: "30%",
  },
  amountContainer: {
    width: "15%",
  },
  progressContainer: {
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  parentTextContainer: {
    backgroundColor: "#F1F5F9",
    width: "100%",
    height: 42,
    justifyContent: "center",
  },
});
