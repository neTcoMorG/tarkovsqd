import { Select } from "@chakra-ui/react";

import useFilterStore, { Server } from "../../../store/useFilterStore";
import SelectorProps from "../../../types/selector";
import { isMobile } from "react-device-detect";

export default function RegionSelector({
  setter,
  isFilter = false,
}: SelectorProps) {
  const { setServer } = useFilterStore();

  if (!isFilter) {
    return (
      <Select
        onChange={setter}
        fontWeight={"bold"}
        bgColor={"#171715"}
        color={"#9a8866"}
        borderColor={"#9a8866"}
        borderRadius={0}
        w={isMobile ? "110px" : "150px"}
        fontSize={isMobile ? '11px' : '14px'}
      >
        <option value={"서버 선택"}>서버 선택</option>
        <option value={"상관없음"}>상관없음</option>
        <option value={"한국"}>한국</option>
        <option value={"북미"}>북미</option>
        <option value={"일본"}>일본</option>
        <option value={"러시아"}>러시아</option>
        <option value={"호주"}>호주</option>
      </Select>
    );
  }

  return (
    <Select
      onChange={(e) => setServer(e.target.value as Server)}
      fontWeight={"bold"}
      bgColor={"#171715"}
      color={"#9a8866"}
      borderColor={"#9a8866"}
      borderRadius={0}
      w={isMobile ? "110px" : "150px"}
      fontSize={isMobile ? '11px' : '14px'}
    >
      <option value={"서버 선택"}>서버 선택</option>
      <option value={"상관없음"}>상관없음</option>
      <option value={"한국"}>한국</option>
      <option value={"북미"}>북미</option>
      <option value={"일본"}>일본</option>
      <option value={"러시아"}>러시아</option>
      <option value={"호주"}>호주</option>
    </Select>
  );
}
