import * as React from "react";
import { Task } from "@/types/core/task";
import { TaskComponent } from "../core/TaskComponent";
import { ExpandToggle } from "@/components/ui/expandToggle";

interface BaseSubtaskListProps {
    subtasks: Task[];
    depth: number;
    maxDepth: number;
}

interface SubtaskListControlledProps extends BaseSubtaskListProps {
    isExpanded: boolean;
    onToggle: () => void;
}

export const SubtaskListControlled: React.FC<SubtaskListControlledProps> = ({
    subtasks,
    depth,
    maxDepth,
    isExpanded,
    onToggle,
}) => {
    if (depth >= maxDepth) return null;

    return (
        <div className="mt-3">
            <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-primary-medium">Subtasks</div>
                <ExpandToggle isExpanded={isExpanded} onToggle={onToggle} />
            </div>

            {isExpanded && (
                <div className="space-y-2">
                    {subtasks.map((subtask) => (
                        <TaskComponent 
                            key={subtask.id} 
                            task={subtask} 
                            isSubtask={true} 
                            depth={depth + 1}
                            maxDepth={maxDepth}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}