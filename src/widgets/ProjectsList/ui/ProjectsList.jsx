"use client";
import { Plus } from "lucide-react";

import { useState } from "react";

export function ProjectsList() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, name: "Project Name", date: "29 Mar", status: "in-progress" },
    { id: 2, name: "Project Name", date: "29 Mar", status: "done" },
    { id: 3, name: "Project Name", date: "29 Mar", status: "done" },
    { id: 4, name: "Project Name", date: "29 Mar", status: "done" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-lg ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              filter === "complete" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => setFilter("complete")}
          >
            Complete
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              filter === "in-progress"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setFilter("in-progress")}
          >
            In Progress
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-3xl">
          <Plus />
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between py-4 border-b border-[#b4c2dc]"
          >
            <div className="flex items-center gap-6">
              <div className="">
                <div className="text-3xl">{project.date.split(" ")[0]}</div>
                <div className="text-gray text-center text-xs">
                  {project.date.split(" ")[1]}
                </div>
              </div>
              <div className="font-bold text-slate-700 text-lg">
                {project.name}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  project.status === "done"
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {project.status === "done" ? "Done" : "In progress"}
              </span>
              <button className="text-[#2b3b5995] bg-[#EBF5FD] py-1 px-4 text-sm rounded-3xl">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
