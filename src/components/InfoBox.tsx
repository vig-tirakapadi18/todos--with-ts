import { type ReactNode } from "react";

interface InfoBoxProps {
  mode: "HINT" | "WARNING";
  severity?: "LOW" | "MEDIUM" | "HIGH";
  children: ReactNode;
}

const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode === "HINT") {
    return (
      <aside>
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside>
      <h2 className="text-2xl m-2 text-center text-amber-500">⚠Warning⚠</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
