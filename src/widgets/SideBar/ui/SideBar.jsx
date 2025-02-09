import { Home, Users, Bookmark } from "lucide-react";
import { Link } from "react-router";

const navigationItems = [
  {
    title: "Home",
    icon: <Home />,
    path: "/",
  },
  {
    title: "Friend treads",
    icon: <Users />, // Replace with actual icon component
    path: "/friends",
  },
  {
    title: "Saved",
    icon: <Bookmark />, // Replace with actual icon component
    path: "/saved",
  },
];

export function SideBar() {
  return (
    <nav className="fixed left-0 top-[70px] w-[350px] pl-24 py-12">
      {navigationItems.map((item, index) => (
        <Link key={index} to={item.path}>
          <div className="flex items-center gap-4 p-3 mb-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <span className="text-gray-600">
              {item.icon}
              {/* Place for actual icon */}
              {/* Example with lucide-react: <Home size={20} /> */}
            </span>
            <span>{item.title}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}
