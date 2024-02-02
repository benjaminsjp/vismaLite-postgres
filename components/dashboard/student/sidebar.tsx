import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex w-52 h-screen border-r border-muted p-5">
      <ul className=" text-lg">
        <Link href={"/student/"}>
          <li>Timeplan</li>
        </Link>
        <Link href={"/student/karakter"}>
          <li>Karakterer</li>
        </Link>
        <li>Fravær</li>
        <li>Anmerkninger</li>
      </ul>
    </div>
  );
}
