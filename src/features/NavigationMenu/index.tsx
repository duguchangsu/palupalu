import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Account from "../Account";

import { Link } from "@tanstack/react-router";

const menuItems: { title: string; href: string }[] = [
  {
    title: "登录幻兽帕鲁",
    href: "/",
  },
  // {
  //   title: "About",
  //   href: "/about",
  // },
];

export function NavigationMenuTop() {
  return (
    <div className="border-b h-16 flex items-center p-4 justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map(({ title, href }) => {
            return (
              <NavigationMenuItem key={href}>
                <Link to={href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <Account></Account>
    </div>
  );
}

export default NavigationMenuTop;
