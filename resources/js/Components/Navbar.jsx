import { Link } from "@inertiajs/inertia-react";
import Avatar from "avataaars";

const Navbar = ({ user }) => {
  return (
    <div className="navbar bg-abu float-right">
      <div className="flex-1"></div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={route("crew")} as="button">
              Admin Keuangan
            </Link>
          </li>
          {/* <li><Link href={route('Crew')} as="button">Admin Keuangan</Link></li> */}
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Avatar
                style={{ width: "100%", height: "100%" }}
                avatarStyle="Transparent"
                topType="ShortHairDreads01"
                accessoriesType="Sunglasses"
                hairColor="Red"
                facialHairType="MoustacheFancy"
                facialHairColor="Red"
                clotheType="Hoodie"
                clotheColor="Red"
                eyeType="Squint"
                eyebrowType="RaisedExcited"
                mouthType="Smile"
                skinColor="Light"
              />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {!user ? (
              <>
                <li>
                  <Link href={route("login")} as="button">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href={route("register")} as="button">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href={route("Homepage")} as="button">
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link href={route("areawisata")} as="button">
                    Area Wisata
                  </Link>
                </li>
                <li>
                  <Link href={route("destinasiwisata")} as="button">
                    Destinasi Wisata
                  </Link>
                </li>
                <li>
                  <Link href={route("transportasi")} as="button">
                    Transportasi
                  </Link>
                </li>
                <li>
                  <Link href={route("hotel")} as="button">
                    Hotel
                  </Link>
                </li>
                <li>
                  <Link href={route("rumahmakan")} as="button">
                    Rumah Makan
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href={route("dashboard")}
                    as="button"
                    className="justify-between"
                  >
                    Dashboard
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link href={route("logout")} method="post" as="button">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
