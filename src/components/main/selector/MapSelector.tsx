import { Select } from "@chakra-ui/react";
import useFilterStore, { Map } from "../../../store/useFilterStore";
import SelectorProps from "../../../types/selector";
import { isMobile } from "react-device-detect";

export default function MapSelector({
  setter,
  isFilter = false,
}: SelectorProps) {
  const { setMap } = useFilterStore();

  const onChange = isFilter
    ? (e: any) => setMap(e.target.value as Map)
    : setter;

  return (
    <Select
      onChange={onChange}
      fontWeight={"bold"}
      bgColor={"#171715"}
      color={"#9a8866"}
      borderColor={"#9a8866"}
      borderRadius={0}
      w={isMobile ? "130px" : "150px"}
      fontSize={isMobile ? '11px' : '14px'}
    >
      <Option />
    </Select>
  );
}

const Option = () => {
  const maps = [
    "맵 선택",
    "전체",
    "커스텀",
    "리저브",
    "인터체인지",
    "등대",
    "팩토리",
    "우드",
    "스트리트",
    "쇼어라인",
    "연구실",
  ];

  return (
    <>
      {maps.map((map) => (
        <option value={map}>{map}</option>
      ))}
    </>
  );
};
