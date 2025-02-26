import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-fit p-3 pr-4 pl-6 pb-4 pt-6">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-4"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>

          <div className="text-lg font-semibold">{title}</div>
        </div>

        <div className="flex gap-4">{children}</div>
      </div>
      <div>
        <div className="text-xs text-secondary pl-9 pt-1">{subtitle}</div>
      </div>
    </div>
  );
};

export default PageHeader;
