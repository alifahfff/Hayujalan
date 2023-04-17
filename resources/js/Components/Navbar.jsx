const Navbar = () => {
    return (
        <div class="navbar">
            <div class="flex-1">
                <div class="drawer">
                    <a class="btn btn-ghost normal-case text-xl">Hayujalan</a>
                </div>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                <li><a>Admin Keuangan</a></li>
                </ul>
                <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                    {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar