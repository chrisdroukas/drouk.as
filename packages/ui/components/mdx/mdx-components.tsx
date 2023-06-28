import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import { classnames } from "@/library/utilities/classnames";
// import { Callout } from "@/components/callout";
// import { MdxCard } from "@/components/mdx-card";

/**
 * We're typically running in strict mode, so
 * `className` requires a formal type.
 */
interface MDXComponentProps {
  className?: string;
  [key: string]: any;
}

const components = {
  h1: ({ className, ...props }: MDXComponentProps) => (
    <h1
      className={classnames(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: MDXComponentProps) => (
    <h2
      className={classnames(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: MDXComponentProps) => (
    <h3
      className={classnames(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: MDXComponentProps) => (
    <h4
      className={classnames(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: MDXComponentProps) => (
    <h5
      className={classnames(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: MDXComponentProps) => (
    <h6
      className={classnames(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: MDXComponentProps) => (
    <a
      className={classnames(
        "font-medium underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: MDXComponentProps) => (
    <p
      className={classnames("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: MDXComponentProps) => (
    <ul className={classnames("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: MDXComponentProps) => (
    <ol
      className={classnames("my-6 ml-6 list-decimal", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: MDXComponentProps) => (
    <li className={classnames("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: MDXComponentProps) => (
    <blockquote
      className={classnames(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={classnames("border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={classnames("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={classnames("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: MDXComponentProps) => (
    <th
      className={classnames(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: MDXComponentProps) => (
    <td
      className={classnames(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: MDXComponentProps) => (
    <pre
      className={classnames(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: MDXComponentProps) => (
    <code
      className={classnames(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components as any} />
    </div>
  );
}
