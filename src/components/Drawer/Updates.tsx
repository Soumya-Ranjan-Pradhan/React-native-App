import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { commonStyles } from "../styles";
  import Screenshort from "../../../assets/Screenshot.png";
  import Screenshor1 from "../../../assets/Screenshot1.png";
  import GroupSvg1 from "../../../assets/svg/groupSvg1";
  import GroupSvg2 from "../../../assets/svg/groupSvg2";
  import DownloadSvg from "../../../assets/svg/downloadSvg";
  import GroupSvg3 from "../../../assets/svg/groupSvg3";
  import DownloadSvg1 from "../../../assets/svg/downloadSvg1";
  import DeleteSvg from "../../../assets/svg/deleteSvg";
  import GroupSvg4 from "../../../assets/svg/groupSvg4";
  import GroupSvg5 from "../../../assets/svg/groupSvg5";
  import { TouchableOpacity } from "react-native";
  
  const Updates = () => {
    const Data1 = [
      {
        id: "1",
        images: <GroupSvg4 />,
        names: "01.19.23 Update",
        downloaded: "3 of 6 sheets downloaded",
        issued: "Issued:",
        date: "7/29/23",
        downloadall: "Download Remaining",
        delete: "Remove All from Device",
        deleteIcon: <DeleteSvg />,
        downloadIcon: <DownloadSvg1 />,
        images1: <GroupSvg4 />,
      },
    ];
  
    const Data = [
      {
        id: "1",
        image: Screenshort,
        number: "12-304N",
        detailds: "Top of Wall Details",
        v: "V10",
        name1: "Bulletin 26",
        name2: "Architectural",
        svg: <GroupSvg1 color="#7A8797" />,
        svg1: <GroupSvg2 color="red" />,
      },
  
      {
        id: "2",
        image: Screenshor1,
        number: "12-509S",
        detailds: "Plan Level 09",
        v: "V3",
        name1: "Bulletin 26",
        name2: "Interior",
        svg: <GroupSvg1 color="#7A8797" />,
        svg1: <GroupSvg2 color="red" />,
      },
  
      {
        id: "3",
        image: Screenshort,
        number: "12-307N",
        v: "V3",
        name1: "Floor Plan",
        name2: "Architectural",
        svg: <GroupSvg1 color="#7A8797" />,
        svg1: <GroupSvg2 color="red" />,
      },
  
      {
        id: "4",
        image: Screenshor1,
        number: "E12-101",
        detailds: "Panel Board",
        v: "V3",
        name1: "Bulletin 26",
        name2: "Electrical",
        svg: <GroupSvg1 color="#7A8797" />,
        svg1: <GroupSvg2 color="red" />,
      },
  
      {
        id: "5",
        image: Screenshor1,
        number: "TD2-309N.TF1",
        detailds: "Communications",
        v: "V3",
        name1: "Bulletin 26",
        name2: "Telecommunications",
        svg: <GroupSvg1 color="#7A8797" />,
        svg1: <GroupSvg2 color="red" />,
      },
  
      {
        id: "6",
        image: Screenshor1,
        number: "12-712N",
        detailds: "Furniture Plans",
        v: "V3",
        name1: "Bulletin 26",
        name2: "Civil",
        svg: <GroupSvg1 color="#7A8797" />,
        svg1: <GroupSvg2 color="red" />,
        svg3: <DownloadSvg />,
      },
    ];
  
    const [isGroupSvg3Visible, setGroupSvg3Visible] = useState(false);
    const toggleGroupSvg3Visibility = () => {
      setGroupSvg3Visible(!isGroupSvg3Visible);
    };
    const [loading, setLoading] = useState(false);
    const [imageVisible, setImageVisible] = useState<string | null>(null);
    const [isClicked, setIsClicked] = useState(false);
    const [isClickedId, setIsClickedId] = useState<string | null>(null);
  
    const handleSvgClick = (id: string) => {
      setIsClickedId(id);
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false);
        setImageVisible(id);
      }, 2000);
    };
  
    return (
      <View style={{gap:20,backgroundColor:'#F1F5F9'}}>
        <View style={commonStyles.boxContainer}>
          <View style={commonStyles.box}>
            <View style={{}}>
              <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
                {isClicked ? <GroupSvg4 /> : <GroupSvg5 />}
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <Text style={commonStyles.text}>12.18.22 Update</Text>
              <View style={commonStyles.textContainer}>
                <View>
                  <Text style={commonStyles.text1}>0 of 10 sheets downloaded</Text>
                </View>
  
                <View style={commonStyles.textContainer1}>
                  <View>
                    <Text style={commonStyles.text1}>Issued:</Text>
                  </View>
                  <View>
                    <Text style={commonStyles.text1}>7/29/23</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
  
          <TouchableOpacity onPress={toggleGroupSvg3Visibility}>
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
  
        {isClicked ? (
          <View>
          <View style={commonStyles.outerView}>
            <FlatList
              data={Data}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={commonStyles.renderItemView}>
                  <View style={commonStyles.imageContainer}>
                    {imageVisible === item.id ? (
                      <Image
                        source={item.image}
                        style={commonStyles.image}
                      />
                    ) : (
                      <TouchableOpacity onPress={() => handleSvgClick(item.id)}>
                        {loading && isClickedId === item.id ? (
                          <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                          item.svg3 || null
                        )}
                      </TouchableOpacity>
                    )}
                  </View>

                  <View style={commonStyles.textContainers}>
                    <View>
                      <Text style={commonStyles.numberText}>{item.number}</Text>
                    </View>
                    <View>
                      <Text style={commonStyles.detailsText}>{item.detailds}</Text>
                    </View>

                    <View style={commonStyles.infoContainer}>
                      <View style={commonStyles.infoBox}>
                        <Text style={commonStyles.infoText}>{item.v}</Text>
                      </View>
                      <View>
                        <Text style={commonStyles.name1Text}>{item.name1}</Text>
                      </View>
                    </View>
                  </View>

                  <View  style={commonStyles.additionalInfoContainer}>
                    <View>
                      <Text  style={commonStyles.name2Text}>{item.name2}</Text>
                    </View>
                    <View style={commonStyles.svgContainer}>
                      <View>{item.svg}</View>

                      <View>{item.svg1}</View>
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
  
  export default Updates;
  
  const styles = StyleSheet.create({});
  