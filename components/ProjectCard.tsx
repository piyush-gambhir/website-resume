import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  description: string;
  disabled?: boolean;
  badgeList?: badge[];
  githubLink: string;
  deployLink: string;
};

type badge = {
  key: string;
  label: string;
};

export default function ProjectCard({
  title,
  description,
  disabled,
  badgeList,
  githubLink,
  deployLink,
}: Props) {
  return (
    <div
      className={cn(
        "grid md:grid-cols-3 gap-3 md:gap-6",
        disabled && "opacity-50",
        false && "rounded-xl p-5 cursor-pointer bg-slate-900"
      )}
    >
      <div className="flex flex-row gap-2">
        <h3 className="text-base font-medium text-black/50 md:col-span-1">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-4 md:col-span-2">
        <h3 className="text-black/70 text-base">{description}</h3>
        <div className="w-full flex flex-row items-start gap-2 flex-wrap">
          {badgeList?.map((badge) => (
            <Badge
              key={badge?.key}
              className="text-black bg-gray-300 cursor-default hover:bg-gray-500"
              variant="default"
            >
              {badge?.label}
            </Badge>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <Link href={githubLink}>
            <Badge
              className="text-black bg-gray-300 hover:bg-gray-500"
              variant="default"
            >
              {"GitHub"}
            </Badge>
          </Link>
          <Link href={deployLink}>
            <Badge
              className="text-black bg-gray-300 hover:bg-gray-500"
              variant="default"
            >
              {"Deployed"}
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}
