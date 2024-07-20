import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "@/data/navigation";
import { getCurrentUser } from "@/actions/getUser";

const navigation = [
  { name: "Home", id: "Home", href: "/" },

  { name: "Write", id: "Write", href: "/write" },
];

async function Navigation() {
  return (
    <ul className="nc-Navigation flex items-center">
      {/* {NAVIGATION_DEMO_2.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))} */}

      {navigation.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
