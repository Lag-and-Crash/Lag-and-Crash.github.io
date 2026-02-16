import React from 'react';

interface TerminalLine {
    type: 'command' | 'output' | 'empty';
    content: string;
}

interface TerminalBlockProps {
    lines: TerminalLine[];
    showCursor?: boolean;
    className?: string;
    variant?: 'blue' | 'red' | 'neutral';
}

const TerminalBlock = React.memo(function TerminalBlock({ 
    lines, 
    showCursor = false, 
    className = '',
    variant = 'blue'
}: TerminalBlockProps) {
    
    const borderColorClass = {
        blue: 'border-cosmic-blue-light/25',
        red: 'border-cosmic-red-light/25',
        neutral: 'border-cosmic-text-muted/20'
    }[variant];

    const gutterColorClass = {
        blue: 'bg-cosmic-blue-mid/20',
        red: 'bg-cosmic-red-mid/20',
        neutral: 'bg-cosmic-text-muted/10'
    }[variant];

    return (
        <div 
            className={`
                relative overflow-hidden rounded-lg
                bg-cosmic-panel/50
                border ${borderColorClass}
                ${className}
            `}
            style={{
                boxShadow: variant === 'blue'
                    ? '0 0 15px rgba(96, 165, 250, 0.12), inset 0 0 18px rgba(96, 165, 250, 0.04)'
                    : variant === 'red'
                    ? '0 0 15px rgba(248, 113, 113, 0.12), inset 0 0 18px rgba(248, 113, 113, 0.04)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                contain: 'paint',
            }}
        >
            {/* Gutter line (like code editor) */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${gutterColorClass}`} />
            
            {/* Terminal content */}
            <div className="p-5 pl-7 text-base md:text-lg" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}>
                {lines.map((line, index) => (
                    <div key={index} className="leading-loose">
                        {line.type === 'command' && (
                            <div className="text-cosmic-text-muted">
                                <span className="text-cosmic-blue-light mr-2">$</span>
                                {line.content}
                            </div>
                        )}
                        {line.type === 'output' && (
                            <div className="text-cosmic-text-primary">
                                {line.content}
                            </div>
                        )}
                        {line.type === 'empty' && (
                            <div className="h-4" />
                        )}
                    </div>
                ))}
                {showCursor && (
                    <span className="terminal-cursor inline-block" />
                )}
            </div>

            {/* Subtle inner glow */}
            <div className="absolute inset-0 pointer-events-none rounded-lg"
                style={{
                    background: variant === 'blue' 
                        ? 'radial-gradient(circle at top left, rgba(96, 165, 250, 0.05) 0%, transparent 60%)'
                        : variant === 'red'
                        ? 'radial-gradient(circle at top left, rgba(248, 113, 113, 0.05) 0%, transparent 60%)'
                        : 'radial-gradient(circle at top left, rgba(100, 116, 139, 0.03) 0%, transparent 60%)'
                }}
            />
        </div>
    );
});

export default TerminalBlock;

// Helper function to create terminal lines more easily
export function createTerminalLines(
    lines: Array<{ type: 'command' | 'output' | 'empty'; content?: string }>
): TerminalLine[] {
    return lines.map(line => ({
        type: line.type,
        content: line.content || ''
    }));
}
