import AutoFitGrid from "./AutoFitGrid";
import AutoFixedGrid from "./AutoFixedGrid";
import BasicGrid from "./BasicGrid";
import CardGrid from "./CardGrid";
import CenteredGrid from "./CenteredGrid";
import MasonryGrid from "./MasonryGrid";
import ProductGrid from "./ProductGrid";
import ResponsiveGrid from "./ResponsiveGrid";
import SidebarGrid from "./SidebarGrid";

const Grid = () => {
  return (
    <div>
      <AutoFitGrid />
      <AutoFixedGrid />
      <BasicGrid />
      <CardGrid />
      <CenteredGrid />
      <MasonryGrid />
      <ProductGrid />
      <ResponsiveGrid />
      <SidebarGrid />
    </div>
  );
};

export default Grid;
