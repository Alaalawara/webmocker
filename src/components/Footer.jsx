import { Link } from "react-router-dom";

export default function Footer() {

  return (
          <div className="flex justify-center items-center p-2 gap-20">
            <Link target="blank" rel="noopener noreferrer" className="no-underline text-white text-xl font-bold" style={{ color: "var(--white)", fontWeight: "600" }} to="https://github.com/Alaalawara/">
              GITHUB
            </Link>
            <Link target="blank" rel="noopener noreferrer" className="no-underline text-xl font-bold" to="https://x.com/loops_infinity">
              X
            </Link>
          </div>
  );
}
