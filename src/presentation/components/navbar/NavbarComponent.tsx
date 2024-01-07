import Actions from "./Actions";
import Links from "./Links";
import Logo from "./Logo";

const navItems = [{ path: "/home", label: "Home" }];

export function NavbarComponent() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Links />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Actions />
          </div>
        </div>
      </div>
    </nav>
  );
}
