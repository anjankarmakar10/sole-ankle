import ShoePageHeader from "@/components/shoe-page-header";
import Sidebar from "@/components/shoe-sidebar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 md:mt-8 px-8 pb-8 flex flex-col gap-8">
      <header>
        <ShoePageHeader />
      </header>

      <div className="flex gap-8 ">
        <div className="hidden md:flex md:basis-[120px] lg:basis-[248px] ">
          <Sidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
