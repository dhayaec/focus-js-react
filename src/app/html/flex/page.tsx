import AlignItemsExample from "./AlignItemsExample";
import FlexBetween from "./FlexBetween";
import FlexCards from "./FlexCards";
import FlexCenter from "./FlexCenter";
import FlexColumn from "./FlexColumn";
import FlexGrowShrink from "./FlexGrowShrink";
import FlexRow from "./FlexRow";
import JustifyExamples from "./JustifyExamples";
import ResponsiveFlex from "./ResponsiveFlex";
import SidebarLayout from "./SideBarLayout";

const Flex = () => {
  return (
    <div>
      <AlignItemsExample />
      <FlexBetween />
      <FlexCards />
      <FlexCenter />
      <FlexColumn />
      <FlexGrowShrink />
      <FlexRow />
      <JustifyExamples />
      <ResponsiveFlex />
      <SidebarLayout />
    </div>
  );
};

export default Flex;
