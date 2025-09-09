"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  fullDescription?: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
  projectType?: string;
  duration?: string;
  role?: string;
}

export function ProjectCard({ 
  img, 
  title, 
  desc, 
  fullDescription,
  technologies = [],
  githubLink,
  liveLink,
  projectType,
  duration,
  role
}: ProjectCardProps) {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Card color="transparent" shadow={false}>
        <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover rounded-lg"
          />
        </CardHeader>
        <CardBody className="p-0">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
          <Typography className="mb-6 font-normal !text-gray-500">
            {desc}
          </Typography>
          <Button color="gray" size="sm" onClick={handleOpen}>
            see details
          </Button>
        </CardBody>
      </Card>

      <Dialog 
        open={open} 
        handler={handleOpen}
        size="xl"
        className="overflow-y-auto max-h-[90vh]"
      >
        <DialogHeader className="justify-between items-start">
          <div className="w-full">
            <Typography variant="h4" color="blue-gray">
              {title}
            </Typography>
            <div className="flex flex-wrap gap-2 mt-2">
              {projectType && (
                <Chip
                  value={projectType}
                  color="blue"
                  size="sm"
                  className="rounded-full"
                />
              )}
              {duration && (
                <Chip
                  value={duration}
                  color="green"
                  size="sm"
                  className="rounded-full"
                />
              )}
              {role && (
                <Chip
                  value={role}
                  color="amber"
                  size="sm"
                  className="rounded-full"
                />
              )}
            </div>
          </div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
            className="!absolute right-3 top-3"
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </DialogHeader>
        <DialogBody divider className="grid gap-4">
          <Image
            src={img}
            alt={title}
            width={768}
            height={400}
            className="w-full rounded-lg object-cover"
          />
          
          <div className="prose max-w-none">
            <div 
              className="text-gray-600 whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: fullDescription || desc }}
            />
          </div>

          {technologies.length > 0 && (
            <div className="mt-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Technologies Used
              </Typography>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-50 rounded-full text-blue-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(githubLink || liveLink) && (
            <div className="flex gap-3 mt-4">
              {githubLink && (
                <Button
                  color="gray"
                  size="sm"
                  variant="outlined"
                  onClick={() => window.open(githubLink, "_blank")}
                >
                  View Code
                </Button>
              )}
              {liveLink && (
                <Button
                  color="gray"
                  size="sm"
                  onClick={() => window.open(liveLink, "_blank")}
                >
                  Live Demo
                </Button>
              )}
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="gray" onClick={handleOpen}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default ProjectCard;