import { Analytics as Analytics$1 } from '@vercel/analytics/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { forwardRef, Component, useLayoutEffect, useState, useCallback } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRight, Check, Circle, Plus, ArrowRight, CreditCard, ChevronLeft, X, Code2, MoreVertical, HelpCircle, Laptop, Command, Image, Menu, Moon, File, Pizza, FileText, Settings, Loader2, SunMedium, Trash, Twitter, User, AlertTriangle } from 'lucide-react';
import Link4 from 'next/link';
import Balancer2 from 'react-wrap-balancer';
import { useTheme, ThemeProvider as ThemeProvider$1 } from 'next-themes';
import Image2 from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import useTilg from 'tilg';
import { useSelectedLayoutSegment } from 'next/navigation';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function Analytics() {
  return /* @__PURE__ */ jsx(Analytics$1, {});
}
var AspectRatio = AspectRatioPrimitive.Root;
function classnames(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariantsConfiguration = {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
};
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  buttonVariantsConfiguration
);
var Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component2 = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Component2,
      {
        className: classnames(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: classnames(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: classnames(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: classnames(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: classnames(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: classnames(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: classnames(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: classnames(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: classnames("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: classnames(
        "ml-auto text-xs tracking-widest opacity-60",
        className
      ),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// library/strings/index.ts
var Strings = {
  intro: {
    title: "Chris Droukas is a Design Technologist in New York.",
    body: "Designing at Goldman Sachs for Goldman Sachs Developer and Marquee. Previously: Priceline, SocialCode, and Washington Post Labs."
  },
  configuration: {
    name: "drouk.as/",
    description: "Chris Droukas is a Design Technologist in New York.",
    ogImage: "https://drouk.as/images/og-image.png",
    links: {
      url: "https://drouk.as",
      twitter: "https://twitter.com/chrisdroukas",
      github: "https://github.com/chrisdroukas"
    },
    navigation: {
      about: { title: "About", href: "/about" },
      work: { title: "Work", href: "/work" },
      writing: { title: "Writing", href: "/writing" },
      running: { title: "Running", href: "/running" },
      labs: { title: "Labs", href: "/labs" }
    }
  },
  errorBoundary: {
    didCatch: "Uncaught Error:"
  },
  debug: {
    failure: "An instance of the debugger is running in production and must be removed before deploying this application."
  }
};

// components/error-boundary/error-boundary.tsx
var ErrorBoundary = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      hasError: false
    });
  }
  /**
   * `getDerivedStateFromError` is an SSR-compatible render phase lifecycle
   * event and can be used to enable error handling on the server.
   *
   * When an error occurs, this event updates state — in our case, `hasError` —
   * and that state change triggers rerender with `errorChildren` in place
   * of `children`.
   */
  static getDerivedStateFromError(_) {
    return { hasError: true };
  }
  /**
   * Don't use `componentDidCatch` for error recovery, since it forces
   * the `errorChildren` interface to always render synchronously.
   */
  componentDidCatch(error, errorInfo) {
    console.error(Strings.errorBoundary.didCatch, error, errorInfo);
  }
  render() {
    const { children, errorChildren } = this.props;
    if (this.state.hasError) {
      return errorChildren;
    }
    return children;
  }
};
var Icons = {
  add: Plus,
  arrowRight: ArrowRight,
  billing: CreditCard,
  check: Check,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  close: X,
  code: Code2,
  ellipsis: MoreVertical,
  gitHub: ({ ...props }) => /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "github",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 496 512",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        }
      )
    }
  ),
  help: HelpCircle,
  laptop: Laptop,
  logo: Command,
  media: Image,
  menu: Menu,
  moon: Moon,
  page: File,
  pizza: Pizza,
  post: FileText,
  settings: Settings,
  spinner: Loader2,
  sun: SunMedium,
  trash: Trash,
  twitter: Twitter,
  user: User,
  warning: AlertTriangle
};
var ThemeSelector = () => {
  const { setTheme } = useTheme();
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "h-8 w-8 px-0", children: [
      /* @__PURE__ */ jsx(Icons.sun, { className: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsx(Icons.moon, { className: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => setTheme("light"), children: [
        /* @__PURE__ */ jsx(Icons.sun, { className: "mr-2 h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: "Light" })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => setTheme("dark"), children: [
        /* @__PURE__ */ jsx(Icons.moon, { className: "mr-2 h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: "Dark" })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => setTheme("system"), children: [
        /* @__PURE__ */ jsx(Icons.laptop, { className: "mr-2 h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: "System" })
      ] })
    ] })
  ] });
};
var Footer = ({ configuration }) => {
  return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground container flex flex-col items-center justify-between gap-4 py-10 select-none sm:h-20 sm:flex-row sm:py-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 px-8 sm:flex-row sm:gap-2 sm:px-0", children: [
      /* @__PURE__ */ jsx(Icons.code, { className: "hidden sm:block" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-sm leading-normal sm:text-left", children: /* @__PURE__ */ jsxs(Balancer2, { children: [
        "Source code for",
        " ",
        /* @__PURE__ */ jsx(
          Link4,
          {
            href: configuration.links.url,
            target: "_blank",
            rel: "noreferrer",
            className: "font-medium transition-colors hover:text-foreground/80 underline underline-offset-4",
            children: "drouk.as/"
          }
        ),
        " ",
        "is available on",
        " ",
        /* @__PURE__ */ jsx(
          Link4,
          {
            href: configuration.links.github,
            target: "_blank",
            rel: "noreferrer",
            className: "font-medium transition-colors hover:text-foreground/80 underline underline-offset-4",
            children: "GitHub"
          }
        ),
        "."
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(ThemeSelector, {})
  ] }) });
};
var Intro = ({ title, body, buttons }) => {
  return /* @__PURE__ */ jsx("section", { className: "space-y-6 pb-8 pt-24 select-none md:pt-48", children: /* @__PURE__ */ jsxs("div", { className: "container flex max-w-[64rem] flex-col items-center gap-4 text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-heading tracking-tight text-5xl sm:text-6xl md:text-7xl", children: /* @__PURE__ */ jsx(Balancer2, { children: title }) }),
    /* @__PURE__ */ jsx("p", { className: "max-w-[42rem] leading-normal tracking-tight text-muted-foreground sm:text-xl sm:leading-8", children: /* @__PURE__ */ jsx(Balancer2, { children: body }) }),
    buttons ? /* @__PURE__ */ jsx("div", { className: "space-x-4", children: buttons.map((button, index) => /* @__PURE__ */ jsx(
      Link4,
      {
        href: button.href,
        className: classnames(
          buttonVariants({ variant: button.variant, size: button.size })
        ),
        children: button.label
      },
      index
    )) }) : null
  ] }) });
};
var components = {
  h1: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h1",
    {
      className: classnames(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h2: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h2",
    {
      className: classnames(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      ),
      ...props
    }
  ),
  h3: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h3",
    {
      className: classnames(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h4: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h4",
    {
      className: classnames(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h5: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h5",
    {
      className: classnames(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h6: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h6",
    {
      className: classnames(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  a: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "a",
    {
      className: classnames(
        "font-medium underline underline-offset-4",
        className
      ),
      ...props
    }
  ),
  p: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "p",
    {
      className: classnames("leading-7 [&:not(:first-child)]:mt-6", className),
      ...props
    }
  ),
  ul: ({ className, ...props }) => /* @__PURE__ */ jsx("ul", { className: classnames("my-6 ml-6 list-disc", className), ...props }),
  ol: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "ol",
    {
      className: classnames("my-6 ml-6 list-decimal", className),
      ...props
    }
  ),
  li: ({ className, ...props }) => /* @__PURE__ */ jsx("li", { className: classnames("mt-2", className), ...props }),
  blockquote: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "blockquote",
    {
      className: classnames(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      ),
      ...props
    }
  ),
  img: ({
    className,
    alt,
    ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ jsx("img", { className: classnames("border", className), alt, ...props })
  ),
  hr: ({ ...props }) => /* @__PURE__ */ jsx("hr", { className: "my-4 md:my-8", ...props }),
  table: ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: "my-6 w-full overflow-y-auto", children: /* @__PURE__ */ jsx("table", { className: classnames("w-full", className), ...props }) }),
  tr: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "tr",
    {
      className: classnames("m-0 border-t p-0 even:bg-muted", className),
      ...props
    }
  ),
  th: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "th",
    {
      className: classnames(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      ),
      ...props
    }
  ),
  td: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "td",
    {
      className: classnames(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      ),
      ...props
    }
  ),
  pre: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "pre",
    {
      className: classnames(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      ),
      ...props
    }
  ),
  code: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "code",
    {
      className: classnames(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      ),
      ...props
    }
  ),
  Image: Image2
};
function Mdx({ code }) {
  const Component2 = useMDXComponent(code);
  return /* @__PURE__ */ jsx("div", { className: "mdx", children: /* @__PURE__ */ jsx(Component2, { components }) });
}
var useDebug = (enabled, ...args) => {
  if (typeof document !== "undefined" && enabled) {
    const tilg = useTilg(...args);
    if (enabled && process.env.NODE_ENV === "production") {
      throw new Error(Strings.debug.failure);
    }
    return tilg;
  }
};
function useLockBody() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(
      document.body
    ).overflow;
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = originalStyle;
  }, []);
}
var MobileNavigation = ({
  configuration,
  navigationItems,
  children
}) => {
  useLockBody();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classnames(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md", children: [
        /* @__PURE__ */ jsxs(Link4, { href: "/", className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Icons.logo, {}),
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: configuration.name })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "grid grid-flow-row auto-rows-max text-sm", children: navigationItems.map((item, index) => /* @__PURE__ */ jsx(
          Link4,
          {
            href: item.disabled ? "#" : item.href,
            className: classnames(
              "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            ),
            children: item.title
          },
          index
        )) }),
        children
      ] })
    }
  );
};
var NavigationItemComponent = ({
  item,
  isActive
}) => /* @__PURE__ */ jsx(
  Link4,
  {
    href: item.disabled ? "#" : item.href,
    className: classnames(
      "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
      isActive ? "text-foreground" : "text-muted-foreground",
      item.disabled && "cursor-not-allowed opacity-80"
    ),
    children: item.title
  }
);
var Navigation = ({
  configuration,
  navigationItems,
  children
}) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const toggleMobileNavigation = useCallback(() => {
    setShowMobileNavigation((prevState) => !prevState);
  }, []);
  const isItemActive = (item) => item.href.startsWith(`/${segment}`);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 justify-between select-none md:gap-10", children: [
    /* @__PURE__ */ jsx(Link4, { href: "/", className: "hidden items-center space-x-2 sm:flex", children: /* @__PURE__ */ jsx("span", { className: "hidden font-extrabold tracking-tight sm:inline-block", children: configuration.name }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:flex md:gap-10", children: navigationItems?.length ? /* @__PURE__ */ jsx("nav", { className: "hidden gap-6 sm:flex", children: navigationItems.map((item, index) => /* @__PURE__ */ jsx(
      NavigationItemComponent,
      {
        item,
        isActive: isItemActive(item)
      },
      index
    )) }) : null }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex items-center space-x-2 sm:hidden",
        onClick: toggleMobileNavigation,
        children: [
          showMobileNavigation ? /* @__PURE__ */ jsx(Icons.close, {}) : /* @__PURE__ */ jsx(Icons.menu, {}),
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: configuration.name })
        ]
      }
    ),
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx(
      Link4,
      {
        href: "/login",
        className: classnames(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "px-4"
        ),
        children: "Login"
      }
    ) }),
    showMobileNavigation && navigationItems && /* @__PURE__ */ jsx(
      MobileNavigation,
      {
        configuration,
        navigationItems,
        children
      }
    )
  ] });
};
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classnames("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
var TailwindIndicator = () => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }
  const breakpoints = [
    { breakpoint: "block sm:hidden", label: "XS" },
    { breakpoint: "hidden sm:block md:hidden", label: "SM" },
    { breakpoint: "hidden md:block lg:hidden", label: "MD" },
    { breakpoint: "hidden lg:block xl:hidden", label: "LG" },
    { breakpoint: "hidden xl:block 2xl:hidden", label: "XL" },
    { breakpoint: "hidden 2xl:block", label: "2XL" }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed bottom-5 left-5 z-50 flex items-center justify-center rounded-md bg-gray-800 p-3 font-mono text-xs text-white select-none transition ease-in-out delay-100 hover:opacity-0",
      children: breakpoints.map(({ breakpoint, label }) => /* @__PURE__ */ jsxs("div", { className: breakpoint, children: [
        "Viewport: ",
        label
      ] }, label))
    }
  );
};
var ThemeProvider = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(ThemeProvider$1, { ...props, children });
};

export { Analytics, AspectRatio, Button, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, ErrorBoundary, Footer, Icons, Intro, Mdx, MobileNavigation, Navigation, Skeleton, Strings, TailwindIndicator, ThemeProvider, ThemeSelector, buttonVariants, classnames, useDebug, useLockBody };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYW5hbHl0aWNzL2FuYWx5dGljcy50c3giLCIuLi9jb21wb25lbnRzL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8udHN4IiwiLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzeCIsIi4uL2xpYnJhcnkvdXRpbGl0aWVzL2NsYXNzbmFtZXMudHMiLCIuLi9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS50c3giLCIuLi9jb21wb25lbnRzL2Vycm9yLWJvdW5kYXJ5L2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi4uL2xpYnJhcnkvc3RyaW5ncy9pbmRleC50cyIsIi4uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50c3giLCIuLi9jb21wb25lbnRzL2ljb25zL2ljb25zLnRzeCIsIi4uL2NvbXBvbmVudHMvdGhlbWUtc2VsZWN0b3IvdGhlbWUtc2VsZWN0b3IudHN4IiwiLi4vY29tcG9uZW50cy9pbnRyby9pbnRyby50c3giLCIuLi9jb21wb25lbnRzL21keC9tZHgtY29tcG9uZW50cy50c3giLCIuLi9jb21wb25lbnRzL25hdmlnYXRpb24vbW9iaWxlLW5hdmlnYXRpb24udHN4IiwiLi4vbGlicmFyeS9ob29rcy91c2UtZGVidWcudHMiLCIuLi9saWJyYXJ5L2hvb2tzL3VzZS1sb2NrLWJvZHkudHMiLCIuLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3giLCIuLi9jb21wb25lbnRzL3NrZWxldG9uL3NrZWxldG9uLnRzeCIsIi4uL2NvbXBvbmVudHMvdGFpbHdpbmQtaW5kaWNhdG9yL3RhaWx3aW5kLWluZGljYXRvci50c3giLCIuLi9jb21wb25lbnRzL3RoZW1lLXByb3ZpZGVyL3RoZW1lLXByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6WyJqc3giLCJDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwiQ2hlY2siLCJDaGV2cm9uUmlnaHQiLCJqc3hzIiwiTGluayIsIkJhbGFuY2VyIiwiSW1hZ2UiXSwi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QUFTLGlCQUFpQix5QkFBeUI7QUFPMUMsZ0JBQUFMLGFBQUE7QUFKRixJQUFNLGdCQUF3QyxDQUFDO0FBQUEsRUFDcEQ7QUFBQSxFQUNBLEdBQUc7QUFDTCxNQUFNO0FBQ0osU0FBTyxnQkFBQUEsTUFBQyxxQkFBbUIsR0FBRyxPQUFRLFVBQVM7QUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQW5hbHl0aWNzIGFzIFZlcmNlbEFuYWx5dGljcyB9IGZyb20gXCJAdmVyY2VsL2FuYWx5dGljcy9yZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQW5hbHl0aWNzKCkge1xuICByZXR1cm4gPFZlcmNlbEFuYWx5dGljcyAvPjtcbn1cbiIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBBc3BlY3RSYXRpb1ByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWFzcGVjdC1yYXRpb1wiO1xuXG5jb25zdCBBc3BlY3RSYXRpbyA9IEFzcGVjdFJhdGlvUHJpbWl0aXZlLlJvb3Q7XG5cbmV4cG9ydCB7IEFzcGVjdFJhdGlvIH07XG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmLCBCdXR0b25IVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAL2xpYnJhcnkvdXRpbGl0aWVzL2NsYXNzbmFtZXNcIjtcblxuY29uc3QgYnV0dG9uVmFyaWFudHNDb25maWd1cmF0aW9uID0ge1xuICB2YXJpYW50czoge1xuICAgIHZhcmlhbnQ6IHtcbiAgICAgIGRlZmF1bHQ6IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBzaGFkb3cgaG92ZXI6YmctcHJpbWFyeS85MFwiLFxuICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUgdGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kIHNoYWRvdy1zbSBob3ZlcjpiZy1kZXN0cnVjdGl2ZS85MFwiLFxuICAgICAgb3V0bGluZTpcbiAgICAgICAgXCJib3JkZXIgYm9yZGVyLWlucHV0IGJnLWJhY2tncm91bmQgc2hhZG93LXNtIGhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICBzZWNvbmRhcnk6XG4gICAgICAgIFwiYmctc2Vjb25kYXJ5IHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgc2hhZG93LXNtIGhvdmVyOmJnLXNlY29uZGFyeS84MFwiLFxuICAgICAgZ2hvc3Q6IFwiaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGxpbms6IFwidGV4dC1wcmltYXJ5IHVuZGVybGluZS1vZmZzZXQtNCBob3Zlcjp1bmRlcmxpbmVcIixcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIGRlZmF1bHQ6IFwiaC05IHB4LTQgcHktMlwiLFxuICAgICAgc206IFwiaC04IHJvdW5kZWQtbWQgcHgtMyB0ZXh0LXhzXCIsXG4gICAgICBsZzogXCJoLTEwIHJvdW5kZWQtbWQgcHgtOFwiLFxuICAgICAgaWNvbjogXCJoLTkgdy05XCIsXG4gICAgfSxcbiAgfSxcbiAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gIH0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBCdXR0b25WYXJpYW50ID1cbiAga2V5b2YgdHlwZW9mIGJ1dHRvblZhcmlhbnRzQ29uZmlndXJhdGlvbi52YXJpYW50cy52YXJpYW50O1xuZXhwb3J0IHR5cGUgQnV0dG9uU2l6ZSA9IGtleW9mIHR5cGVvZiBidXR0b25WYXJpYW50c0NvbmZpZ3VyYXRpb24udmFyaWFudHMuc2l6ZTtcblxuY29uc3QgYnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIHJpbmctb2Zmc2V0LWJhY2tncm91bmRcIixcbiAgYnV0dG9uVmFyaWFudHNDb25maWd1cmF0aW9uXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzXG4gIGV4dGVuZHMgQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxuICAgIFZhcmlhbnRQcm9wczx0eXBlb2YgYnV0dG9uVmFyaWFudHM+IHtcbiAgYXNDaGlsZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IEJ1dHRvbiA9IGZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIEJ1dHRvblByb3BzPihcbiAgKHsgY2xhc3NOYW1lLCB2YXJpYW50LCBzaXplLCBhc0NoaWxkID0gZmFsc2UsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IENvbXBvbmVudCA9IGFzQ2hpbGQgPyBTbG90IDogXCJidXR0b25cIjtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG4pO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gXCJCdXR0b25cIjtcblxuZXhwb3J0IHsgQnV0dG9uLCBidXR0b25WYXJpYW50cyB9O1xuIiwiaW1wb3J0IHsgdHlwZSBDbGFzc1ZhbHVlLCBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzbmFtZXMoLi4uaW5wdXRzOiBDbGFzc1ZhbHVlW10pIHtcbiAgcmV0dXJuIHR3TWVyZ2UoY2xzeChpbnB1dHMpKTtcbn1cbiIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYsXG4gIEhUTUxBdHRyaWJ1dGVzLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIERyb3Bkb3duTWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IENoZWNrLCBDaGV2cm9uUmlnaHQsIENpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAL2xpYnJhcnkvdXRpbGl0aWVzL2NsYXNzbmFtZXNcIjtcblxuY29uc3QgRHJvcGRvd25NZW51ID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlJvb3Q7XG5cbmNvbnN0IERyb3Bkb3duTWVudVRyaWdnZXIgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuVHJpZ2dlcjtcblxuY29uc3QgRHJvcGRvd25NZW51R3JvdXAgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuR3JvdXA7XG5cbmNvbnN0IERyb3Bkb3duTWVudVBvcnRhbCA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw7XG5cbmNvbnN0IERyb3Bkb3duTWVudVN1YiA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWI7XG5cbmNvbnN0IERyb3Bkb3duTWVudVJhZGlvR3JvdXAgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9Hcm91cDtcblxuY29uc3QgRHJvcGRvd25NZW51U3ViVHJpZ2dlciA9IGZvcndhcmRSZWY8XG4gIEVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPixcbiAgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuO1xuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudCBkYXRhLVtzdGF0ZT1vcGVuXTpiZy1hY2NlbnRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJtbC1hdXRvIGgtNCB3LTRcIiAvPlxuICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPlxuKSk7XG5Ecm9wZG93bk1lbnVTdWJUcmlnZ2VyLmRpc3BsYXlOYW1lID1cbiAgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXIuZGlzcGxheU5hbWU7XG5cbmNvbnN0IERyb3Bkb3duTWVudVN1YkNvbnRlbnQgPSBmb3J3YXJkUmVmPFxuICBFbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudD4sXG4gIENvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgIFwiei01MCBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTJcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5Ecm9wZG93bk1lbnVTdWJDb250ZW50LmRpc3BsYXlOYW1lID1cbiAgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IERyb3Bkb3duTWVudUNvbnRlbnQgPSBmb3J3YXJkUmVmPFxuICBFbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudD4sXG4gIENvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgc2lkZU9mZnNldCA9IDQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD5cbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJ6LTUwIG1pbi13LVs4cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctcG9wb3ZlciBwLTEgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93LW1kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuUG9ydGFsPlxuKSk7XG5Ecm9wZG93bk1lbnVDb250ZW50LmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IERyb3Bkb3duTWVudUl0ZW0gPSBmb3J3YXJkUmVmPFxuICBFbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbT4sXG4gIENvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW0+ICYge1xuICAgIGluc2V0PzogYm9vbGVhbjtcbiAgfVxuPigoeyBjbGFzc05hbWUsIGluc2V0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXG4gICAgICBpbnNldCAmJiBcInBsLThcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5Ecm9wZG93bk1lbnVJdGVtLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW0uZGlzcGxheU5hbWU7XG5cbmNvbnN0IERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSA9IGZvcndhcmRSZWY8XG4gIEVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+LFxuICBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGNoZWNrZWQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweS0xLjUgcGwtOCBwci0yIHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGZsZXggaC0zLjUgdy0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgPC9zcGFuPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxuKSk7XG5Ecm9wZG93bk1lbnVDaGVja2JveEl0ZW0uZGlzcGxheU5hbWUgPVxuICBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBEcm9wZG93bk1lbnVSYWRpb0l0ZW0gPSBmb3J3YXJkUmVmPFxuICBFbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPixcbiAgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgICAgPENpcmNsZSBjbGFzc05hbWU9XCJoLTIgdy0yIGZpbGwtY3VycmVudFwiIC8+XG4gICAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgIDwvc3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbT5cbikpO1xuRHJvcGRvd25NZW51UmFkaW9JdGVtLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbS5kaXNwbGF5TmFtZTtcblxuY29uc3QgRHJvcGRvd25NZW51TGFiZWwgPSBmb3J3YXJkUmVmPFxuICBFbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWw+LFxuICBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5MYWJlbD4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuO1xuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgXCJweC0yIHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkRyb3Bkb3duTWVudUxhYmVsLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBEcm9wZG93bk1lbnVTZXBhcmF0b3IgPSBmb3J3YXJkUmVmPFxuICBFbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yPixcbiAgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcIi1teC0xIG15LTEgaC1weCBiZy1tdXRlZFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuRHJvcGRvd25NZW51U2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvci5kaXNwbGF5TmFtZTtcblxuY29uc3QgRHJvcGRvd25NZW51U2hvcnRjdXQgPSAoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBIVE1MQXR0cmlidXRlczxIVE1MU3BhbkVsZW1lbnQ+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJtbC1hdXRvIHRleHQteHMgdHJhY2tpbmctd2lkZXN0IG9wYWNpdHktNjBcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuRHJvcGRvd25NZW51U2hvcnRjdXQuZGlzcGxheU5hbWUgPSBcIkRyb3Bkb3duTWVudVNob3J0Y3V0XCI7XG5cbmV4cG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtLFxuICBEcm9wZG93bk1lbnVSYWRpb0l0ZW0sXG4gIERyb3Bkb3duTWVudUxhYmVsLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudVNob3J0Y3V0LFxuICBEcm9wZG93bk1lbnVHcm91cCxcbiAgRHJvcGRvd25NZW51UG9ydGFsLFxuICBEcm9wZG93bk1lbnVTdWIsXG4gIERyb3Bkb3duTWVudVN1YkNvbnRlbnQsXG4gIERyb3Bkb3duTWVudVN1YlRyaWdnZXIsXG4gIERyb3Bkb3duTWVudVJhZGlvR3JvdXAsXG59O1xuIiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXJyb3JJbmZvLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9zdHJpbmdzXCI7XG5cbmludGVyZmFjZSBFcnJvckJvdW5kYXJ5UHJvcHMge1xuICAvKipcbiAgICogVGhlIGRlZmF1bHQgaW50ZXJmYWNlLlxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG5cbiAgLyoqXG4gICAqIEEgZmFsbGJhY2sgaW50ZXJmYWNlIGluIHRoZSBldmVudCBhbiBlcnJvciBvY2N1cnMuXG4gICAqL1xuICBlcnJvckNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmludGVyZmFjZSBFcnJvckJvdW5kYXJ5U3RhdGUge1xuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgbmV4dCByZW5kZXIgc2hvd3MgdGhlIGBlcnJvckNoaWxkcmVuYCBpbnRlcmZhY2UuXG4gICAqL1xuICBoYXNFcnJvcjogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBFcnJvciBCb3VuZGFyeSBpcyBhIHdyYXBwZXIgY29tcG9uZW50IGZvclxuICogaGFuZGxpbmcgZXJyb3JzIHRoYXQgbWF5IG9jY3VyIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1ib3VuZGFyaWVzLmh0bWxcbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIEVycm9yQm91bmRhcnlQcm9wcyxcbiAgRXJyb3JCb3VuZGFyeVN0YXRlXG4+IHtcbiAgcHVibGljIHN0YXRlOiBFcnJvckJvdW5kYXJ5U3RhdGUgPSB7XG4gICAgaGFzRXJyb3I6IGZhbHNlLFxuICB9O1xuXG4gIC8qKlxuICAgKiBgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yYCBpcyBhbiBTU1ItY29tcGF0aWJsZSByZW5kZXIgcGhhc2UgbGlmZWN5Y2xlXG4gICAqIGV2ZW50IGFuZCBjYW4gYmUgdXNlZCB0byBlbmFibGUgZXJyb3IgaGFuZGxpbmcgb24gdGhlIHNlcnZlci5cbiAgICpcbiAgICogV2hlbiBhbiBlcnJvciBvY2N1cnMsIHRoaXMgZXZlbnQgdXBkYXRlcyBzdGF0ZSDigJTCoGluIG91ciBjYXNlLCBgaGFzRXJyb3JgIOKAlFxuICAgKiBhbmQgdGhhdCBzdGF0ZSBjaGFuZ2UgdHJpZ2dlcnMgcmVyZW5kZXIgd2l0aCBgZXJyb3JDaGlsZHJlbmAgaW4gcGxhY2VcbiAgICogb2YgYGNoaWxkcmVuYC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKF86IEVycm9yKTogRXJyb3JCb3VuZGFyeVN0YXRlIHtcbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERvbid0IHVzZSBgY29tcG9uZW50RGlkQ2F0Y2hgIGZvciBlcnJvciByZWNvdmVyeSwgc2luY2UgaXQgZm9yY2VzXG4gICAqIHRoZSBgZXJyb3JDaGlsZHJlbmAgaW50ZXJmYWNlIHRvIGFsd2F5cyByZW5kZXIgc3luY2hyb25vdXNseS5cbiAgICovXG4gIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcihTdHJpbmdzLmVycm9yQm91bmRhcnkuZGlkQ2F0Y2gsIGVycm9yLCBlcnJvckluZm8pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBlcnJvckNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvckNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xuIiwiZXhwb3J0IGNvbnN0IFN0cmluZ3MgPSB7XG4gIGludHJvOiB7XG4gICAgdGl0bGU6IFwiQ2hyaXMgRHJvdWthcyBpcyBhIERlc2lnbiBUZWNobm9sb2dpc3QgaW4gTmV3IFlvcmsuXCIsXG4gICAgYm9keTogXCJEZXNpZ25pbmcgYXQgR29sZG1hbiBTYWNocyBmb3IgR29sZG1hbiBTYWNocyBEZXZlbG9wZXIgYW5kIE1hcnF1ZWUuIFByZXZpb3VzbHk6IFByaWNlbGluZSwgU29jaWFsQ29kZSwgYW5kIFdhc2hpbmd0b24gUG9zdCBMYWJzLlwiLFxuICB9LFxuICBjb25maWd1cmF0aW9uOiB7XG4gICAgbmFtZTogXCJkcm91ay5hcy9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaHJpcyBEcm91a2FzIGlzIGEgRGVzaWduIFRlY2hub2xvZ2lzdCBpbiBOZXcgWW9yay5cIixcbiAgICBvZ0ltYWdlOiBcImh0dHBzOi8vZHJvdWsuYXMvaW1hZ2VzL29nLWltYWdlLnBuZ1wiLFxuICAgIGxpbmtzOiB7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9kcm91ay5hc1wiLFxuICAgICAgdHdpdHRlcjogXCJodHRwczovL3R3aXR0ZXIuY29tL2NocmlzZHJvdWthc1wiLFxuICAgICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc2Ryb3VrYXNcIixcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIGFib3V0OiB7IHRpdGxlOiBcIkFib3V0XCIsIGhyZWY6IFwiL2Fib3V0XCIgfSxcbiAgICAgIHdvcms6IHsgdGl0bGU6IFwiV29ya1wiLCBocmVmOiBcIi93b3JrXCIgfSxcbiAgICAgIHdyaXRpbmc6IHsgdGl0bGU6IFwiV3JpdGluZ1wiLCBocmVmOiBcIi93cml0aW5nXCIgfSxcbiAgICAgIHJ1bm5pbmc6IHsgdGl0bGU6IFwiUnVubmluZ1wiLCBocmVmOiBcIi9ydW5uaW5nXCIgfSxcbiAgICAgIGxhYnM6IHsgdGl0bGU6IFwiTGFic1wiLCBocmVmOiBcIi9sYWJzXCIgfSxcbiAgICB9LFxuICB9LFxuICBlcnJvckJvdW5kYXJ5OiB7XG4gICAgZGlkQ2F0Y2g6IFwiVW5jYXVnaHQgRXJyb3I6XCIsXG4gIH0sXG4gIGRlYnVnOiB7XG4gICAgZmFpbHVyZTpcbiAgICAgIFwiQW4gaW5zdGFuY2Ugb2YgdGhlIGRlYnVnZ2VyIGlzIHJ1bm5pbmcgaW4gcHJvZHVjdGlvbiBhbmQgbXVzdCBiZSByZW1vdmVkIGJlZm9yZSBkZXBsb3lpbmcgdGhpcyBhcHBsaWNhdGlvbi5cIixcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEJhbGFuY2VyIGZyb20gXCJyZWFjdC13cmFwLWJhbGFuY2VyXCI7XG5cbmltcG9ydCB7IFNpdGVDb25maWd1cmF0aW9uIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIkAvY29tcG9uZW50cy9pY29uc1wiO1xuaW1wb3J0IHsgVGhlbWVTZWxlY3RvciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdGhlbWUtc2VsZWN0b3JcIjtcblxuaW50ZXJmYWNlIEZvb3RlclByb3BzIHtcbiAgY29uZmlndXJhdGlvbjogU2l0ZUNvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXI6IEZDPEZvb3RlclByb3BzPiA9ICh7IGNvbmZpZ3VyYXRpb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBjb250YWluZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IHB5LTEwIHNlbGVjdC1ub25lIHNtOmgtMjAgc206ZmxleC1yb3cgc206cHktMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IHB4LTggc206ZmxleC1yb3cgc206Z2FwLTIgc206cHgtMFwiPlxuICAgICAgICAgIDxJY29ucy5jb2RlIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9ja1wiIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSBsZWFkaW5nLW5vcm1hbCBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxCYWxhbmNlcj5cbiAgICAgICAgICAgICAgU291cmNlIGNvZGUgZm9ye1wiIFwifVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e2NvbmZpZ3VyYXRpb24ubGlua3MudXJsfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kLzgwIHVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgZHJvdWsuYXMvXG4gICAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgICAgIGlzIGF2YWlsYWJsZSBvbntcIiBcIn1cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtjb25maWd1cmF0aW9uLmxpbmtzLmdpdGh1Yn1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZC84MCB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvQmFsYW5jZXI+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRoZW1lU2VsZWN0b3IgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcbiIsImltcG9ydCB7XG4gIEFsZXJ0VHJpYW5nbGUsXG4gIEFycm93UmlnaHQsXG4gIENoZWNrLFxuICBDaGV2cm9uTGVmdCxcbiAgQ2hldnJvblJpZ2h0LFxuICBDb2RlMixcbiAgQ29tbWFuZCxcbiAgQ3JlZGl0Q2FyZCxcbiAgRmlsZSxcbiAgRmlsZVRleHQsXG4gIEhlbHBDaXJjbGUsXG4gIEltYWdlLFxuICBMYXB0b3AsXG4gIExvYWRlcjIsXG4gIEx1Y2lkZVByb3BzLFxuICBNZW51LFxuICBNb29uLFxuICBNb3JlVmVydGljYWwsXG4gIFBpenphLFxuICBQbHVzLFxuICBTZXR0aW5ncyxcbiAgU3VuTWVkaXVtLFxuICBUcmFzaCxcbiAgVHdpdHRlcixcbiAgVXNlcixcbiAgWCxcbiAgdHlwZSBJY29uIGFzIEx1Y2lkZUljb24sXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuZXhwb3J0IHR5cGUgSWNvbiA9IEx1Y2lkZUljb247XG5cbmV4cG9ydCBjb25zdCBJY29ucyA9IHtcbiAgYWRkOiBQbHVzLFxuICBhcnJvd1JpZ2h0OiBBcnJvd1JpZ2h0LFxuICBiaWxsaW5nOiBDcmVkaXRDYXJkLFxuICBjaGVjazogQ2hlY2ssXG4gIGNoZXZyb25MZWZ0OiBDaGV2cm9uTGVmdCxcbiAgY2hldnJvblJpZ2h0OiBDaGV2cm9uUmlnaHQsXG4gIGNsb3NlOiBYLFxuICBjb2RlOiBDb2RlMixcbiAgZWxsaXBzaXM6IE1vcmVWZXJ0aWNhbCxcbiAgZ2l0SHViOiAoeyAuLi5wcm9wcyB9OiBMdWNpZGVQcm9wcykgPT4gKFxuICAgIDxzdmdcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICBkYXRhLXByZWZpeD1cImZhYlwiXG4gICAgICBkYXRhLWljb249XCJnaXRodWJcIlxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNDk2IDUxMlwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGQ9XCJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMgLjMtNS42LTEuMy01LjYtMy42IDAtMiAyLjMtMy42IDUuMi0zLjYgMy0uMyA1LjYgMS4zIDUuNiAzLjZ6bS0zMS4xLTQuNWMtLjcgMiAxLjMgNC4zIDQuMyA0LjkgMi42IDEgNS42IDAgNi4yLTJzLTEuMy00LjMtNC4zLTUuMmMtMi42LS43LTUuNSAuMy02LjIgMi4zem00NC4yLTEuN2MtMi45IC43LTQuOSAyLjYtNC42IDQuOSAuMyAyIDIuOSAzLjMgNS45IDIuNiAyLjktLjcgNC45LTIuNiA0LjYtNC42LS4zLTEuOS0zLTMuMi01LjktMi45ek0yNDQuOCA4QzEwNi4xIDggMCAxMTMuMyAwIDI1MmMwIDExMC45IDY5LjggMjA1LjggMTY5LjUgMjM5LjIgMTIuOCAyLjMgMTcuMy01LjYgMTcuMy0xMi4xIDAtNi4yLS4zLTQwLjQtLjMtNjEuNCAwIDAtNzAgMTUtODQuNy0yOS44IDAgMC0xMS40LTI5LjEtMjcuOC0zNi42IDAgMC0yMi45LTE1LjcgMS42LTE1LjQgMCAwIDI0LjkgMiAzOC42IDI1LjggMjEuOSAzOC42IDU4LjYgMjcuNSA3Mi45IDIwLjkgMi4zLTE2IDguOC0yNy4xIDE2LTMzLjctNTUuOS02LjItMTEyLjMtMTQuMy0xMTIuMy0xMTAuNSAwLTI3LjUgNy42LTQxLjMgMjMuNi01OC45LTIuNi02LjUtMTEuMS0zMy4zIDIuNi02Ny45IDIwLjktNi41IDY5IDI3IDY5IDI3IDIwLTUuNiA0MS41LTguNSA2Mi44LTguNXM0Mi44IDIuOSA2Mi44IDguNWMwIDAgNDguMS0zMy42IDY5LTI3IDEzLjcgMzQuNyA1LjIgNjEuNCAyLjYgNjcuOSAxNiAxNy43IDI1LjggMzEuNSAyNS44IDU4LjkgMCA5Ni41LTU4LjkgMTA0LjItMTE0LjggMTEwLjUgOS4yIDcuOSAxNyAyMi45IDE3IDQ2LjQgMCAzMy43LS4zIDc1LjQtLjMgODMuNiAwIDYuNSA0LjYgMTQuNCAxNy4zIDEyLjFDNDI4LjIgNDU3LjggNDk2IDM2Mi45IDQ5NiAyNTIgNDk2IDExMy4zIDM4My41IDggMjQ0LjggOHpNOTcuMiAzNTIuOWMtMS4zIDEtMSAzLjMgLjcgNS4yIDEuNiAxLjYgMy45IDIuMyA1LjIgMSAxLjMtMSAxLTMuMy0uNy01LjItMS42LTEuNi0zLjktMi4zLTUuMi0xem0tMTAuOC04LjFjLS43IDEuMyAuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYgLjcgNC4zLS43IC43LTEuMy0uMy0yLjktMi4zLTMuOS0yLS42LTMuNi0uMy00LjMgLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zIC43LTQuMy0xLjMtNi4yLTIuMi0yLjMtNS4yLTIuNi02LjUtMXptLTExLjQtMTQuN2MtMS42IDEtMS42IDMuNiAwIDUuOSAxLjYgMi4zIDQuMyAzLjMgNS42IDIuMyAxLjYtMS4zIDEuNi0zLjkgMC02LjItMS40LTIuMy00LTMuMy01LjYtMnpcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgaGVscDogSGVscENpcmNsZSxcbiAgbGFwdG9wOiBMYXB0b3AsXG4gIGxvZ286IENvbW1hbmQsXG4gIG1lZGlhOiBJbWFnZSxcbiAgbWVudTogTWVudSxcbiAgbW9vbjogTW9vbixcbiAgcGFnZTogRmlsZSxcbiAgcGl6emE6IFBpenphLFxuICBwb3N0OiBGaWxlVGV4dCxcbiAgc2V0dGluZ3M6IFNldHRpbmdzLFxuICBzcGlubmVyOiBMb2FkZXIyLFxuICBzdW46IFN1bk1lZGl1bSxcbiAgdHJhc2g6IFRyYXNoLFxuICB0d2l0dGVyOiBUd2l0dGVyLFxuICB1c2VyOiBVc2VyLFxuICB3YXJuaW5nOiBBbGVydFRyaWFuZ2xlLFxufTtcbiIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbnNcIjtcblxuZXhwb3J0IGNvbnN0IFRoZW1lU2VsZWN0b3I6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duTWVudT5cbiAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJoLTggdy04IHB4LTBcIj5cbiAgICAgICAgICA8SWNvbnMuc3VuIGNsYXNzTmFtZT1cInJvdGF0ZS0wIHNjYWxlLTEwMCB0cmFuc2l0aW9uLWFsbCBkYXJrOi1yb3RhdGUtOTAgZGFyazpzY2FsZS0wXCIgLz5cbiAgICAgICAgICA8SWNvbnMubW9vbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3RhdGUtOTAgc2NhbGUtMCB0cmFuc2l0aW9uLWFsbCBkYXJrOnJvdGF0ZS0wIGRhcms6c2NhbGUtMTAwXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIHRoZW1lPC9zcGFuPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cbiAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50IGFsaWduPVwiZW5kXCI+XG4gICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKFwibGlnaHRcIil9PlxuICAgICAgICAgIDxJY29ucy5zdW4gY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgICA8c3Bhbj5MaWdodDwvc3Bhbj5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShcImRhcmtcIil9PlxuICAgICAgICAgIDxJY29ucy5tb29uIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XG4gICAgICAgICAgPHNwYW4+RGFyazwvc3Bhbj5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShcInN5c3RlbVwiKX0+XG4gICAgICAgICAgPEljb25zLmxhcHRvcCBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxuICAgICAgICAgIDxzcGFuPlN5c3RlbTwvc3Bhbj5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgIDwvRHJvcGRvd25NZW51PlxuICApO1xufTtcbiIsImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQmFsYW5jZXIgZnJvbSBcInJlYWN0LXdyYXAtYmFsYW5jZXJcIjtcblxuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAL2xpYnJhcnkvdXRpbGl0aWVzL2NsYXNzbmFtZXNcIjtcbmltcG9ydCB7IEJ1dHRvblNpemUsIEJ1dHRvblZhcmlhbnQsIGJ1dHRvblZhcmlhbnRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25cIjtcblxuaW50ZXJmYWNlIEludHJvQnV0dG9uIHtcbiAgaHJlZjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICB2YXJpYW50PzogQnV0dG9uVmFyaWFudDtcbiAgc2l6ZT86IEJ1dHRvblNpemU7XG59XG5cbmludGVyZmFjZSBJbnRyb1Byb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBidXR0b25zPzogSW50cm9CdXR0b25bXTtcbn1cblxuZXhwb3J0IGNvbnN0IEludHJvOiBGQzxJbnRyb1Byb3BzPiA9ICh7IHRpdGxlLCBib2R5LCBidXR0b25zIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzcGFjZS15LTYgcGItOCBwdC0yNCBzZWxlY3Qtbm9uZSBtZDpwdC00OFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBtYXgtdy1bNjRyZW1dIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRyYWNraW5nLXRpZ2h0IHRleHQtNXhsIHNtOnRleHQtNnhsIG1kOnRleHQtN3hsXCI+XG4gICAgICAgICAgPEJhbGFuY2VyPnt0aXRsZX08L0JhbGFuY2VyPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1bNDJyZW1dIGxlYWRpbmctbm9ybWFsIHRyYWNraW5nLXRpZ2h0IHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBzbTp0ZXh0LXhsIHNtOmxlYWRpbmctOFwiPlxuICAgICAgICAgIDxCYWxhbmNlcj57Ym9keX08L0JhbGFuY2VyPlxuICAgICAgICA8L3A+XG4gICAgICAgIHtidXR0b25zID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00XCI+XG4gICAgICAgICAgICB7YnV0dG9ucy5tYXAoKGJ1dHRvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGhyZWY9e2J1dHRvbi5ocmVmfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudDogYnV0dG9uLnZhcmlhbnQsIHNpemU6IGJ1dHRvbi5zaXplIH0pXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtidXR0b24ubGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZU1EWENvbXBvbmVudCB9IGZyb20gXCJuZXh0LWNvbnRlbnRsYXllci9ob29rc1wiO1xuXG5pbXBvcnQgeyBjbGFzc25hbWVzIH0gZnJvbSBcIkAvbGlicmFyeS91dGlsaXRpZXMvY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHsgQ2FsbG91dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvY2FsbG91dFwiO1xuLy8gaW1wb3J0IHsgTWR4Q2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbWR4LWNhcmRcIjtcblxuLyoqXG4gKiBXZSdyZSB0eXBpY2FsbHkgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc29cbiAqIGBjbGFzc05hbWVgIHJlcXVpcmVzIGEgZm9ybWFsIHR5cGUuXG4gKi9cbmludGVyZmFjZSBNRFhDb21wb25lbnRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBoMTogKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBNRFhDb21wb25lbnRQcm9wcykgPT4gKFxuICAgIDxoMVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICBcIm10LTIgc2Nyb2xsLW0tMjAgdGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuICBoMjogKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBNRFhDb21wb25lbnRQcm9wcykgPT4gKFxuICAgIDxoMlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICBcIm10LTEwIHNjcm9sbC1tLTIwIGJvcmRlci1iIHBiLTEgdGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCBmaXJzdDptdC0wXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuICBoMzogKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBNRFhDb21wb25lbnRQcm9wcykgPT4gKFxuICAgIDxoM1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICBcIm10LTggc2Nyb2xsLW0tMjAgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbiAgaDQ6ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogTURYQ29tcG9uZW50UHJvcHMpID0+IChcbiAgICA8aDRcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJtdC04IHNjcm9sbC1tLTIwIHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbiAgaDU6ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogTURYQ29tcG9uZW50UHJvcHMpID0+IChcbiAgICA8aDVcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJtdC04IHNjcm9sbC1tLTIwIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbiAgaDY6ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogTURYQ29tcG9uZW50UHJvcHMpID0+IChcbiAgICA8aDZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJtdC04IHNjcm9sbC1tLTIwIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0XCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuICBhOiAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IE1EWENvbXBvbmVudFByb3BzKSA9PiAoXG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJmb250LW1lZGl1bSB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00XCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuICBwOiAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IE1EWENvbXBvbmVudFByb3BzKSA9PiAoXG4gICAgPHBcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImxlYWRpbmctNyBbJjpub3QoOmZpcnN0LWNoaWxkKV06bXQtNlwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4gIHVsOiAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IE1EWENvbXBvbmVudFByb3BzKSA9PiAoXG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcIm15LTYgbWwtNiBsaXN0LWRpc2NcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuICApLFxuICBvbDogKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBNRFhDb21wb25lbnRQcm9wcykgPT4gKFxuICAgIDxvbFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwibXktNiBtbC02IGxpc3QtZGVjaW1hbFwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4gIGxpOiAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IE1EWENvbXBvbmVudFByb3BzKSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcIm10LTJcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuICApLFxuICBibG9ja3F1b3RlOiAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IE1EWENvbXBvbmVudFByb3BzKSA9PiAoXG4gICAgPGJsb2NrcXVvdGVcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJtdC02IGJvcmRlci1sLTIgcGwtNiBpdGFsaWMgWyY+Kl06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuICBpbWc6ICh7XG4gICAgY2xhc3NOYW1lLFxuICAgIGFsdCxcbiAgICAuLi5wcm9wc1xuICB9OiBSZWFjdC5JbWdIVE1MQXR0cmlidXRlczxIVE1MSW1hZ2VFbGVtZW50PikgPT4gKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50XG4gICAgPGltZyBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJib3JkZXJcIiwgY2xhc3NOYW1lKX0gYWx0PXthbHR9IHsuLi5wcm9wc30gLz5cbiAgKSxcbiAgaHI6ICh7IC4uLnByb3BzIH0pID0+IDxociBjbGFzc05hbWU9XCJteS00IG1kOm15LThcIiB7Li4ucHJvcHN9IC8+LFxuICB0YWJsZTogKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVFbGVtZW50PikgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiB3LWZ1bGwgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwidy1mdWxsXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgdHI6ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlUm93RWxlbWVudD4pID0+IChcbiAgICA8dHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcIm0tMCBib3JkZXItdCBwLTAgZXZlbjpiZy1tdXRlZFwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4gIHRoOiAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IE1EWENvbXBvbmVudFByb3BzKSA9PiAoXG4gICAgPHRoXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgIFwiYm9yZGVyIHB4LTQgcHktMiB0ZXh0LWxlZnQgZm9udC1ib2xkIFsmW2FsaWduPWNlbnRlcl1dOnRleHQtY2VudGVyIFsmW2FsaWduPXJpZ2h0XV06dGV4dC1yaWdodFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbiAgdGQ6ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogTURYQ29tcG9uZW50UHJvcHMpID0+IChcbiAgICA8dGRcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJib3JkZXIgcHgtNCBweS0yIHRleHQtbGVmdCBbJlthbGlnbj1jZW50ZXJdXTp0ZXh0LWNlbnRlciBbJlthbGlnbj1yaWdodF1dOnRleHQtcmlnaHRcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4gIHByZTogKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBNRFhDb21wb25lbnRQcm9wcykgPT4gKFxuICAgIDxwcmVcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJtYi00IG10LTYgb3ZlcmZsb3cteC1hdXRvIHJvdW5kZWQtbGcgYm9yZGVyIGJnLWJsYWNrIHB5LTRcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4gIGNvZGU6ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogTURYQ29tcG9uZW50UHJvcHMpID0+IChcbiAgICA8Y29kZVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICBcInJlbGF0aXZlIHJvdW5kZWQgYm9yZGVyIHB4LVswLjNyZW1dIHB5LVswLjJyZW1dIGZvbnQtbW9ubyB0ZXh0LXNtXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuICBJbWFnZSxcbn07XG5cbmludGVyZmFjZSBNZHhQcm9wcyB7XG4gIGNvZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1keCh7IGNvZGUgfTogTWR4UHJvcHMpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gdXNlTURYQ29tcG9uZW50KGNvZGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZHhcIj5cbiAgICAgIDxDb21wb25lbnQgY29tcG9uZW50cz17Y29tcG9uZW50cyBhcyBhbnl9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBGQywgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IFNpdGVDb25maWd1cmF0aW9uLCBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBjbGFzc25hbWVzIH0gZnJvbSBcIkAvbGlicmFyeS91dGlsaXRpZXMvY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlTG9ja0JvZHkgfSBmcm9tIFwiQC9saWJyYXJ5L2hvb2tzXCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbnNcIjtcblxuaW50ZXJmYWNlIE1vYmlsZU5hdmlnYXRpb25Qcm9wcyB7XG4gIGNvbmZpZ3VyYXRpb246IFNpdGVDb25maWd1cmF0aW9uO1xuICBuYXZpZ2F0aW9uSXRlbXM6IE5hdmlnYXRpb25JdGVtW107XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgTW9iaWxlTmF2aWdhdGlvbjogRkM8TW9iaWxlTmF2aWdhdGlvblByb3BzPiA9ICh7XG4gIGNvbmZpZ3VyYXRpb24sXG4gIG5hdmlnYXRpb25JdGVtcyxcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIHVzZUxvY2tCb2R5KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgIFwiZml4ZWQgaW5zZXQtMCB0b3AtMTYgei01MCBncmlkIGgtW2NhbGMoMTAwdmgtNHJlbSldIGdyaWQtZmxvdy1yb3cgYXV0by1yb3dzLW1heCBvdmVyZmxvdy1hdXRvIHAtNiBwYi0zMiBzaGFkb3ctbWQgYW5pbWF0ZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS04MCBtZDpoaWRkZW5cIlxuICAgICAgKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjAgZ3JpZCBnYXAtNiByb3VuZGVkLW1kIGJnLXBvcG92ZXIgcC00IHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1tZFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxJY29ucy5sb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2NvbmZpZ3VyYXRpb24ubmFtZX08L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3cgYXV0by1yb3dzLW1heCB0ZXh0LXNtXCI+XG4gICAgICAgICAge25hdmlnYXRpb25JdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBocmVmPXtpdGVtLmRpc2FibGVkID8gXCIjXCIgOiBpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICBcImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIHAtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOnVuZGVybGluZVwiLFxuICAgICAgICAgICAgICAgIGl0ZW0uZGlzYWJsZWQgJiYgXCJjdXJzb3Itbm90LWFsbG93ZWQgb3BhY2l0eS02MFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L25hdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHVzZVRpbGcgZnJvbSBcInRpbGdcIjtcbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tIFwiLi4vc3RyaW5nc1wiO1xuXG4vKipcbiAqIExvZ3MgbGlmZWN5Y2xlIGV2ZW50cyBhbmQgZGVidWcgbWVzc2FnZXMgdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogVGhvdWdoIHRoZSB1bmRlcmx5aW5nIGhvb2sgaXMgZGlzYWJsZWQgYnkgZGVmYXVsdCBpbiBwcm9kdWN0aW9uLFxuICogdGhpcyB3cmFwcGVyIHdpbGwgdGhyb3cgYW4gZXJyb3IgYW5kIGZvcmNlIG1hbnVhbCByZW1vdmFsLlxuICpcbiAqIFBhc3MgYWRkaXRpb25hbCB2YWx1ZXMgdG8gYHVzZURlYnVnYCB0byBsb2cgdGhlbSB0byB0aGUgY29uc29sZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogdXNlRGVidWcoXCJmb29cIiwgYmFyLCBbYmF6LCBxdXhdKVxuICovXG5leHBvcnQgY29uc3QgdXNlRGVidWcgPSAoZW5hYmxlZD86IGJvb2xlYW4sIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIC8qKlxuICAgKiBDaGVjayBhZGRpdGlvbmFsbHkgZm9yIGBkb2N1bWVudGAgdG8gcHJldmVudCBTU1Igd2FybmluZ3MuXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBub3QgYmUgY2FsbGVkIGluIGEgc2VydmVyIGVudmlyb25tZW50LCBidXRcbiAgICogUmVhY3Qgb3RoZXJ3aXNlIGNvbXBsYWlucyBsb2NhbGx5IGFib3V0IGB1c2VMYXlvdXRFZmZlY3RgIGRvaW5nXG4gICAqIG5vdGhpbmcgb24gdGhlIHNlcnZlci5cbiAgICovXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZW5hYmxlZCkge1xuICAgIGNvbnN0IHRpbGcgPSB1c2VUaWxnKC4uLmFyZ3MpO1xuXG4gICAgaWYgKGVuYWJsZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5ncy5kZWJ1Zy5mYWlsdXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGlsZztcbiAgfVxufTtcbiIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2tCb2R5KCkge1xuICB1c2VMYXlvdXRFZmZlY3QoKCk6ICgoKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxTdHlsZTogc3RyaW5nID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoXG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgKS5vdmVyZmxvdztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICByZXR1cm4gKCkgPT4gKGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBvcmlnaW5hbFN0eWxlKTtcbiAgfSwgW10pO1xufVxuIiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEZDLCBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5pbXBvcnQgeyBTaXRlQ29uZmlndXJhdGlvbiwgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAL2xpYnJhcnkvdXRpbGl0aWVzL2NsYXNzbmFtZXNcIjtcbmltcG9ydCB7IGJ1dHRvblZhcmlhbnRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIkAvY29tcG9uZW50cy9pY29uc1wiO1xuaW1wb3J0IHsgTW9iaWxlTmF2aWdhdGlvbiB9IGZyb20gXCIuL21vYmlsZS1uYXZpZ2F0aW9uXCI7XG5cbmludGVyZmFjZSBOYXZpZ2F0aW9uUHJvcHMge1xuICBjb25maWd1cmF0aW9uOiBTaXRlQ29uZmlndXJhdGlvbjtcbiAgbmF2aWdhdGlvbkl0ZW1zPzogTmF2aWdhdGlvbkl0ZW1bXTtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG59XG5cbmludGVyZmFjZSBOYXZpZ2F0aW9uSXRlbVByb3BzIHtcbiAgaXRlbTogTmF2aWdhdGlvbkl0ZW07XG4gIGlzQWN0aXZlOiBib29sZWFuO1xufVxuXG5jb25zdCBOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudDogRkM8TmF2aWdhdGlvbkl0ZW1Qcm9wcz4gPSAoe1xuICBpdGVtLFxuICBpc0FjdGl2ZSxcbn0pID0+IChcbiAgPExpbmtcbiAgICBocmVmPXtpdGVtLmRpc2FibGVkID8gXCIjXCIgOiBpdGVtLmhyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZC84MCBzbTp0ZXh0LXNtXCIsXG4gICAgICBpc0FjdGl2ZSA/IFwidGV4dC1mb3JlZ3JvdW5kXCIgOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgaXRlbS5kaXNhYmxlZCAmJiBcImN1cnNvci1ub3QtYWxsb3dlZCBvcGFjaXR5LTgwXCJcbiAgICApfVxuICA+XG4gICAge2l0ZW0udGl0bGV9XG4gIDwvTGluaz5cbik7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uOiBGQzxOYXZpZ2F0aW9uUHJvcHM+ID0gKHtcbiAgY29uZmlndXJhdGlvbixcbiAgbmF2aWdhdGlvbkl0ZW1zLFxuICBjaGlsZHJlbixcbn06IE5hdmlnYXRpb25Qcm9wcykgPT4ge1xuICBjb25zdCBzZWdtZW50ID0gdXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50KCk7XG4gIGNvbnN0IFtzaG93TW9iaWxlTmF2aWdhdGlvbiwgc2V0U2hvd01vYmlsZU5hdmlnYXRpb25dID1cbiAgICB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlTW9iaWxlTmF2aWdhdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93TW9iaWxlTmF2aWdhdGlvbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGlzSXRlbUFjdGl2ZSA9IChpdGVtOiBOYXZpZ2F0aW9uSXRlbSkgPT5cbiAgICBpdGVtLmhyZWYuc3RhcnRzV2l0aChgLyR7c2VnbWVudH1gKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEganVzdGlmeS1iZXR3ZWVuIHNlbGVjdC1ub25lIG1kOmdhcC0xMFwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJoaWRkZW4gaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBzbTpmbGV4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCBzbTppbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICB7Y29uZmlndXJhdGlvbi5uYW1lfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggbWQ6Z2FwLTEwXCI+XG4gICAgICAgIHtuYXZpZ2F0aW9uSXRlbXM/Lmxlbmd0aCA/IChcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBnYXAtNiBzbTpmbGV4XCI+XG4gICAgICAgICAgICB7bmF2aWdhdGlvbkl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPE5hdmlnYXRpb25JdGVtQ29tcG9uZW50XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtpc0l0ZW1BY3RpdmUoaXRlbSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgc206aGlkZGVuXCJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlTW9iaWxlTmF2aWdhdGlvbn1cbiAgICAgID5cbiAgICAgICAge3Nob3dNb2JpbGVOYXZpZ2F0aW9uID8gPEljb25zLmNsb3NlIC8+IDogPEljb25zLm1lbnUgLz59XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntjb25maWd1cmF0aW9uLm5hbWV9PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi9sb2dpblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50OiBcInNlY29uZGFyeVwiLCBzaXplOiBcInNtXCIgfSksXG4gICAgICAgICAgICBcInB4LTRcIlxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICBMb2dpblxuICAgICAgICA8L0xpbms+XG4gICAgICA8L25hdj5cblxuICAgICAge3Nob3dNb2JpbGVOYXZpZ2F0aW9uICYmIG5hdmlnYXRpb25JdGVtcyAmJiAoXG4gICAgICAgIDxNb2JpbGVOYXZpZ2F0aW9uXG4gICAgICAgICAgY29uZmlndXJhdGlvbj17Y29uZmlndXJhdGlvbn1cbiAgICAgICAgICBuYXZpZ2F0aW9uSXRlbXM9e25hdmlnYXRpb25JdGVtc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Nb2JpbGVOYXZpZ2F0aW9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAL2xpYnJhcnkvdXRpbGl0aWVzL2NsYXNzbmFtZXNcIjtcblxuZnVuY3Rpb24gU2tlbGV0b24oeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZCBiZy1tdXRlZFwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IFNrZWxldG9uIH07XG4iLCJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBjdXJyZW50IHZpZXdwb3J0IHNpemUgaW4gYWNjb3JkYW5jZSB3aXRoIFRhaWx3aW5kLlxuICogQG5vdGUgVGhpcyBjb21wb25lbnQgd2lsbCBvbmx5IHJlbmRlciBpbiBub24tcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCBUYWlsd2luZEluZGljYXRvcjogRkMgPSAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXR1cm4gbnVsbCBpbiBwcm9kdWN0aW9uIGVudmlyb25tZW50cy5cbiAgICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9ucyBmb3IgZWFjaCB2aWV3cG9ydCBzaXplLlxuICAgKi9cbiAgY29uc3QgYnJlYWtwb2ludHMgPSBbXG4gICAgeyBicmVha3BvaW50OiBcImJsb2NrIHNtOmhpZGRlblwiLCBsYWJlbDogXCJYU1wiIH0sXG4gICAgeyBicmVha3BvaW50OiBcImhpZGRlbiBzbTpibG9jayBtZDpoaWRkZW5cIiwgbGFiZWw6IFwiU01cIiB9LFxuICAgIHsgYnJlYWtwb2ludDogXCJoaWRkZW4gbWQ6YmxvY2sgbGc6aGlkZGVuXCIsIGxhYmVsOiBcIk1EXCIgfSxcbiAgICB7IGJyZWFrcG9pbnQ6IFwiaGlkZGVuIGxnOmJsb2NrIHhsOmhpZGRlblwiLCBsYWJlbDogXCJMR1wiIH0sXG4gICAgeyBicmVha3BvaW50OiBcImhpZGRlbiB4bDpibG9jayAyeGw6aGlkZGVuXCIsIGxhYmVsOiBcIlhMXCIgfSxcbiAgICB7IGJyZWFrcG9pbnQ6IFwiaGlkZGVuIDJ4bDpibG9ja1wiLCBsYWJlbDogXCIyWExcIiB9LFxuICBdO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSB2aWV3cG9ydCBzaXplIGluZGljYXRvci5cbiAgICogQG5vdGUgSG92ZXJpbmcgdGhlIHZpZXdwb3J0IHNpemUgaW5kaWNhdG9yIHdpbGwgaGlkZSBpdCB0b1xuICAgKiByZXZlYWwgY29udGVudCBiZW5lYXRoLlxuICAgKi9cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICBcImZpeGVkIGJvdHRvbS01IGxlZnQtNSB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctZ3JheS04MDAgcC0zIGZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtd2hpdGUgc2VsZWN0LW5vbmUgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkZWxheS0xMDAgaG92ZXI6b3BhY2l0eS0wXCJcbiAgICAgIH1cbiAgICA+XG4gICAgICB7YnJlYWtwb2ludHMubWFwKCh7IGJyZWFrcG9pbnQsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2xhYmVsfSBjbGFzc05hbWU9e2JyZWFrcG9pbnR9PlxuICAgICAgICAgIFZpZXdwb3J0OiB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIGFzIE5leHRUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyUHJvcHMgfSBmcm9tIFwibmV4dC10aGVtZXMvZGlzdC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlcjogRkM8VGhlbWVQcm92aWRlclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gPE5leHRUaGVtZVByb3ZpZGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvTmV4dFRoZW1lUHJvdmlkZXI+O1xufTtcbiJdfQ==