import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

type SectionProps = {
  id?: string;
  className?: string;
  /** row count on mobile / desktop, as in the original layout */
  rows: [number, number];
  /** vertical padding: mobile in px, desktop in vw */
  pad?: [number, number];
  gap?: number;
  background?: ReactNode;
  children: ReactNode;
};

export function Section({ id, className = "", rows, pad = [0, 0], gap = 11, background, children }: SectionProps) {
  const style: Vars = {
    "--rows-m": rows[0],
    "--rows-d": rows[1],
    "--pad-m": `${pad[0]}px`,
    "--pad-d": `${pad[1]}vw`,
    "--gap": `${gap}px`,
  };
  return (
    <section id={id} className={`section-pad relative isolate overflow-hidden ${className}`} style={style}>
      {background}
      <div className="fe">{children}</div>
    </section>
  );
}

type CellProps = {
  /** grid-area on mobile, e.g. "2/2/5/10" */
  m: string;
  /** grid-area on desktop, e.g. "2/12/4/20" */
  d: string;
  className?: string;
  children: ReactNode;
};

export function Cell({ m, d, className = "", children }: CellProps) {
  const style: Vars = { "--m": m, "--d": d };
  return (
    <div className={`cell ${className}`} style={style}>
      {children}
    </div>
  );
}

type PhotoProps = {
  m: string;
  d: string;
  src: string;
  alt: string;
  sizes: string;
  position?: string;
  priority?: boolean;
};

export function Photo({ m, d, src, alt, sizes, position, priority }: PhotoProps) {
  return (
    <Cell m={m} d={d} className="overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
    </Cell>
  );
}
