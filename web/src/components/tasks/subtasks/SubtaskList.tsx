"use client";

import { Task } from "@/types/core/task";
import React from "react";
import { SubtaskListControlled } from "./SubtaskListControlled";

interface SubtaskListProps {
  subtasks: Task[];
  depth: number;
  maxDepth: number;
}

export const SubtaskList: React.FC<SubtaskListProps> = ({ 
    subtasks,
    depth,
    maxDepth
}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
        <SubtaskListControlled
            subtasks={subtasks}
            depth={depth}
            maxDepth={maxDepth}
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
        />
    );
}