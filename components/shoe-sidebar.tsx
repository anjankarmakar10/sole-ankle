import Link from "next/link";

const Sidebar = () => {
  return (
    <div className=" flex-col gap-2 basis-[248px] hidden md:flex">
      <Link href="/lifestyle">Lifestyle</Link>
      <Link href="/jordan">Jordan</Link>
      <Link href="/running">Running</Link>
      <Link href="/basketball">Basketball</Link>
      <Link href="/training">Training &amp; Gym</Link>
      <Link href="/football">Football</Link>
      <Link href="/skateboarding">Skateboarding</Link>
      <Link href="/us-football">American Football</Link>
      <Link href="/baseball">Baseball</Link>
      <Link href="/golf">Golf</Link>
      <Link href="/tennis">Tennis</Link>
      <Link href="/athletics">Athletics</Link>
      <Link href="/walking">Walking</Link>
    </div>
  );
};

export default Sidebar;
