import { Link } from "@inertiajs/inertia-react";
import Avatar from "avataaars";

const Navbar = ({ auth }) => {
  // const roles = auth.user.idRoles;
  return (
    <div className="navbar bg-white mb-5 flex justify-end px-5">
      <div className="flex gap-2">
        <ul className="menu menu-horizontal px-1">
        <li>
          {auth && (
            <>
              {auth.user.idRoles === 1 && (
                <Link as="button">Admin - {auth.user.namaUser}</Link>
              )}
              {auth.user.idRoles === 2 && (
                <Link as="button">Program - {auth.user.namaUser}</Link>
              )}
              {auth.user.idRoles === 3 && (
                <Link as="button">Keuangan - {auth.user.namaUser}</Link>
              )}
              {auth.user.idRoles === 4 && (
                <Link as="button">Sales - {auth.user.namaUser}</Link>
              )}
            </>
          )}
          {!auth && <Link as="button">Admin</Link>}
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
            {!auth ? (
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
                    {/* <span className="badge">New</span> */}
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
