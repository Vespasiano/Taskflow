"use client"

import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

interface ExpandToggleProps {
    isExpanded: boolean;
    onToggle: () => void;
    label?: string;
}

export const ExpandToggle: React.FC<ExpandToggleProps> = ({
    isExpanded,
    onToggle,
    label
}) => {
    return (
        <Toggle
        pressed={isExpanded}
        onPressedChange={onToggle}
        variant="expand"
        size="sm"
        aria-label={isExpanded ? "Collapse" : "Expand"}
        >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {label ?? (isExpanded ? "Collapse" : "Expand")}
        </Toggle>
    );
}