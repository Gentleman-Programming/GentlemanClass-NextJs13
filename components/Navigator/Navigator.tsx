import Link from "next/link";
import { Route } from "../../models";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <div style={{ display: "flex", gap: "15px", flexDirection: "row" }}>
      {pathNames.map((pathName) => (
        <Link
          className="bg-fuchsia-500 hover:bg-sky-700"
          key={pathName.path}
          href={pathName.path}
        >
          {pathName.name}
        </Link>
      ))}
    </div>
  );
}
export default Navigator;
