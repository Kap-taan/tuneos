import { LayoutDashboard, LibraryBig, Search } from "lucide-react";

const NavbarTop = () => {

    const menuItems = [
        {
            icon: <LayoutDashboard />,
            name: "Home"
        },
        {
            icon: <Search />,
            name: "Search"
        },
        {
            icon: <LibraryBig />,
            name: "Library"
        }
    ];

    return (
        <div className="mb-20 pl-7">
            {menuItems && menuItems.map(item => (
                <div key={item.name} className="flex items-center gap-5 mb-5 cursor-pointer">
                <div>{item.icon}</div>
                <div className="font-normal text-lg">{item.name}</div>
            </div>
            ))}
            
        </div>
    )
}

export default NavbarTop;