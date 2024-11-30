"use client";

import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  UserIcon,
  AcademicCapIcon,
  BanknotesIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type IconProps = {
  className: string;
};

const NAV_ITEMS = [
  {
    name: "Home",
    Icon: ({ className }: IconProps) => <HomeIcon className={className} />,
    path: "/home",
  },
  {
    name: "Kids",
    Icon: ({ className }: IconProps) => <UsersIcon className={className} />,
    path: "/kids",
  },
  {
    name: "Fundraisers",
    Icon: ({ className }: IconProps) => <BanknotesIcon className={className} />,
    path: "/fundraisers",
  },
  {
    name: "Balances",
    Icon: ({ className }: IconProps) => (
      <AcademicCapIcon className={className} />
    ),
    path: "/balances",
  },
  {
    name: "History",
    Icon: ({ className }: IconProps) => <ClockIcon className={className} />,
    path: "/history",
  },
  {
    name: "Classes",
    Icon: ({ className }: IconProps) => (
      <AcademicCapIcon className={className} />
    ),
    path: "/classes",
  },
] as const;

const BUTTON_STYLE =
  "w-full h-[60px] text-[18px] font-medium flex items-center justify-start gap-4";

export const Sidebar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-col justify-between w-full h-full bg-grayLight">
      <div className="flex flex-col space-y-2 w-full">
        {NAV_ITEMS.map(({ name, path, Icon }) => (
          <Button
            key={name}
            variant="ghost"
            className={BUTTON_STYLE}
            onClick={() => router.push(path)}
          >
            <div className="flex justify-center items-center h-1/2">
              <Icon className="w-full h-full" />
            </div>
            {name}
          </Button>
        ))}
      </div>

      <div className="w-full">
        <Button variant="ghost" className={BUTTON_STYLE}>
          <div className="flex justify-center items-center h-1/2">
            <UserIcon className="w-full h-full" />
          </div>
          Profile
        </Button>
      </div>
    </nav>
  );
};
