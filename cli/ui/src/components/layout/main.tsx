import type { ReactNode } from "react";
import { Logo } from "../logo";

export function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-screen min-w-screen bg-slate-100">
      <div className="flex flex-col items-center gap-4">
        <Logo className="size-10" />
        <div className="text-2xl">Secretpass Local</div>
      </div>

      <div className="border-b-black w-full mx-4 border-b" />

      {children}
    </div>
  );
}
