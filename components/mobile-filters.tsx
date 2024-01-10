import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import FilterSort from "./filter-sort";
import Sidebar from "./shoe-sidebar";

const MobileFilters = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">
          Apply Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="mb-4">Filters</DrawerTitle>
          <DrawerDescription className="flex flex-col gap-8">
            <FilterSort />
            <Sidebar />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default MobileFilters;
