"use client";

import Link from "next/link";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WorkCardProps {
  name?: string;
  description?: string;
  position?: string;
  url?: URL;
}

export const WorkCard: FC<WorkCardProps> = ({
  name,
  description,
  position,
  url,
}) => {
  return (
    <Link href={url ?? "#"}>
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {/* <CardContent>
          <p>{position}</p>
        </CardContent> */}
      </Card>
    </Link>
  );
};
