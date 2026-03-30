import {
  ShoppingCart,
  UserCircle,
  Utensils,
  ChartBarStacked,
  Users,
} from "lucide-react";
import ModuleLink from "./ModuleLink";


export default function ModuleLinkList() {
  const moduleLinks = [
    {
      groupTitle: "Sale Module",
      modules: [
        {
          icon: <ShoppingCart />,
          title: "Sale",
          href: "/dashboard/sale?limit=100",
        },
      ],
    },
    {
      groupTitle: "Management",
      modules: [
        {
          icon: <ChartBarStacked />,
          title: "Category",
          href: "/dashboard/categories",
        },
        {
          icon: <Utensils />,
          title: "Menu",
          href: "/dashboard/menu",
        },
        {
          icon: <Users />,
          title: "Customers",
          href: "/dashboard/customers",
        },
      ],
    },
    {
      groupTitle: "User Information",
      modules: [
        {
          icon: <UserCircle />,
          title: "Profile  Information",
          href: "/dashboard/profile-information",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-8 w-full px-5 bg-gray-700 min-h-screen py-10">
      {moduleLinks.map(({ groupTitle, modules }, index) => (
        <div key={`module-group-${index}`}>
          <h4 className="text-white text-2xl text-bold mb-3">{groupTitle}</h4>
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modules.map(({ icon, title, href }, index) => (
              <ModuleLink
                key={`module-link-${index}`}
                icon={icon}
                title={title}
                href={href}
              />
            ))}
          </div>          
        </div>
      ))}
    </section>
  );
}

