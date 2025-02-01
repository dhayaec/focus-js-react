"use client";
import AlignItemsExample from "./flex/AlignItemsExample";
import FlexBetween from "./flex/FlexBetween";
import FlexCards from "./flex/FlexCards";
import FlexCenter from "./flex/FlexCenter";
import FlexColumn from "./flex/FlexColumn";
import FlexGrowShrink from "./flex/FlexGrowShrink";
import FlexRow from "./flex/FlexRow";
import JustifyExamples from "./flex/JustifyExamples";
import ResponsiveFlex from "./flex/ResponsiveFlex";
import SidebarLayout from "./flex/SideBarLayout";

const Html = () => {
  return (
    <div className="flex flex-col">
      <header>Header</header>
      <main>
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
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Html;
