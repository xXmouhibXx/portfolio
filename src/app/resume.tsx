"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
  UserGroupIcon,
  AcademicCapIcon,
  LightBulbIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: UserGroupIcon,
    children: "Leadership & Project Management Trainer - USAID YLN Project",
  },
  {
    icon: CheckBadgeIcon,
    children: "Scrum Fundamentals Certified (SFC) - SCRUMstudy 2024",
  },
  {
    icon: AcademicCapIcon,
    children: "Six Sigma Yellow Belt - 6sigmastudy 2024",
  },
  {
    icon: LightBulbIcon,
    children: "Facilitation & Moderation - Idebat/Drabzine Academy 2024",
  },
  {
    icon: UserGroupIcon,
    children: "Civil Society Activism & Leadership - Amel Institute 2024",
  },
];

export function Resume() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <div className="mb-4 mt-3 w-full lg:w-11/12">
            <Typography className="font-normal !text-gray-500 inline">
              I am a <strong>software engineering student</strong> with a strong drive to <strong>learn new things continuously</strong>.
            </Typography>
            
            {isExpanded && (
              <Typography className="font-normal !text-gray-500 inline">
                {" "}I have skills in <strong>multiple domains</strong> and am an <strong>active member of civil society</strong>. 
                I am also a <strong>trainer in communication skills and project management</strong> through USAID and a <strong>facilitator at Drabzin Academy</strong>.
                <br /><br />
                I aspire to <strong>create positive change in the world</strong> by leveraging technology and my skills to make life better for many people. 
                <strong> Being human first</strong> is my guiding principle. I hope you enjoy exploring my portfolio.
              </Typography>
            )}
          </div>
          
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
            onClick={toggleExpanded}
          >
            {isExpanded ? "show less" : "view more"}
            {isExpanded ? (
              <ChevronUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-gray-900" />
            ) : (
              <ChevronDownIcon strokeWidth={3} className="h-3.5 w-3.5 text-gray-900" />
            )}
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;