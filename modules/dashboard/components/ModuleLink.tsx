import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  title: string;
  href: string;
};

export default function ModuleLink({ icon, title, href }: Props) {
  return (
    <Link href={href}>
      <Card className="bg-gray-600 border-0 rounded-none">
        <CardContent className=" flex gap-3 items-center">
          <div className=" text-orange-500">{icon}</div>
          <p >{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
}