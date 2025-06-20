import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border bg-white/5 backdrop-blur-sm border-white/10 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-xl font-semibold text-white ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`text-gray-300 ${className}`}>{children}</div>;
}