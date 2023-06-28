import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ButtonHTMLAttributes, HTMLAttributes, Component, ErrorInfo, ReactNode, FC } from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as lucide_react from 'lucide-react';
import { Icon as Icon$1, LucideProps } from 'lucide-react';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { ClassValue } from 'clsx';

declare function Analytics(): react_jsx_runtime.JSX.Element;

declare const AspectRatio: react.ForwardRefExoticComponent<AspectRatioPrimitive.AspectRatioProps & react.RefAttributes<HTMLDivElement>>;

interface BaseComponentProps {
    /**
     * Optionally enables logging lifecycle events
     * and debug messages to the console.
     *
     * Debug must be `false` for production builds.
     */
    debug?: boolean;
}

declare const buttonVariantsConfiguration: {
    readonly variants: {
        readonly variant: {
            readonly default: "bg-primary text-primary-foreground shadow hover:bg-primary/90";
            readonly destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90";
            readonly outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground";
            readonly secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80";
            readonly ghost: "hover:bg-accent hover:text-accent-foreground";
            readonly link: "text-primary underline-offset-4 hover:underline";
        };
        readonly size: {
            readonly default: "h-9 px-4 py-2";
            readonly sm: "h-8 rounded-md px-3 text-xs";
            readonly lg: "h-10 rounded-md px-8";
            readonly icon: "h-9 w-9";
        };
    };
    readonly defaultVariants: {
        readonly variant: "default";
        readonly size: "default";
    };
};
type ButtonVariant = keyof typeof buttonVariantsConfiguration.variants.variant;
type ButtonSize = keyof typeof buttonVariantsConfiguration.variants.size;
declare const buttonVariants: (props?: ({
    readonly variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    readonly size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const DropdownMenu: react.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: react.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: react.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface ErrorBoundaryProps {
    /**
     * The default interface.
     */
    children?: ReactNode;
    /**
     * A fallback interface in the event an error occurs.
     */
    errorChildren: ReactNode;
}
interface ErrorBoundaryState {
    /**
     * When true, the next render shows the `errorChildren` interface.
     */
    hasError: boolean;
}
/**
 * Error Boundary is a wrapper component for
 * handling errors that may occur in the application.
 *
 * @see https://reactjs.org/docs/error-boundaries.html
 */
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    /**
     * `getDerivedStateFromError` is an SSR-compatible render phase lifecycle
     * event and can be used to enable error handling on the server.
     *
     * When an error occurs, this event updates state — in our case, `hasError` —
     * and that state change triggers rerender with `errorChildren` in place
     * of `children`.
     */
    static getDerivedStateFromError(_: Error): ErrorBoundaryState;
    /**
     * Don't use `componentDidCatch` for error recovery, since it forces
     * the `errorChildren` interface to always render synchronously.
     */
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): ReactNode;
}

type NavigationItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

type SiteConfiguration = {
  name: string;
  description: string;
  ogImage: string;
  links: {
    url: string;
    twitter: string;
    github: string;
  };
};

interface FooterProps {
    configuration: SiteConfiguration;
}
declare const Footer: FC<FooterProps>;

declare const ThemeSelector: FC;

type Icon = Icon$1;
declare const Icons: {
    add: lucide_react.LucideIcon;
    arrowRight: lucide_react.LucideIcon;
    billing: lucide_react.LucideIcon;
    check: lucide_react.LucideIcon;
    chevronLeft: lucide_react.LucideIcon;
    chevronRight: lucide_react.LucideIcon;
    close: lucide_react.LucideIcon;
    code: lucide_react.LucideIcon;
    ellipsis: lucide_react.LucideIcon;
    gitHub: ({ ...props }: LucideProps) => react_jsx_runtime.JSX.Element;
    help: lucide_react.LucideIcon;
    laptop: lucide_react.LucideIcon;
    logo: lucide_react.LucideIcon;
    media: lucide_react.LucideIcon;
    menu: lucide_react.LucideIcon;
    moon: lucide_react.LucideIcon;
    page: lucide_react.LucideIcon;
    pizza: lucide_react.LucideIcon;
    post: lucide_react.LucideIcon;
    settings: lucide_react.LucideIcon;
    spinner: lucide_react.LucideIcon;
    sun: lucide_react.LucideIcon;
    trash: lucide_react.LucideIcon;
    twitter: lucide_react.LucideIcon;
    user: lucide_react.LucideIcon;
    warning: lucide_react.LucideIcon;
};

interface IntroButton {
    href: string;
    label: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
}
interface IntroProps {
    title: string;
    body: string;
    buttons?: IntroButton[];
}
declare const Intro: FC<IntroProps>;

interface MdxProps {
    code: string;
}
declare function Mdx({ code }: MdxProps): react_jsx_runtime.JSX.Element;

interface MobileNavigationProps {
    configuration: SiteConfiguration;
    navigationItems: NavigationItem[];
    children?: ReactNode;
}
declare const MobileNavigation: FC<MobileNavigationProps>;

interface NavigationProps {
    configuration: SiteConfiguration;
    navigationItems?: NavigationItem[];
    children?: ReactNode;
}
declare const Navigation: FC<NavigationProps>;

declare function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

/**
 * Displays the current viewport size in accordance with Tailwind.
 * @note This component will only render in non-production environments.
 */
declare const TailwindIndicator: FC;

declare const ThemeProvider: FC<ThemeProviderProps>;

/**
 * Logs lifecycle events and debug messages to the console.
 *
 * Though the underlying hook is disabled by default in production,
 * this wrapper will throw an error and force manual removal.
 *
 * Pass additional values to `useDebug` to log them to the console.
 *
 * @example
 * useDebug("foo", bar, [baz, qux])
 */
declare const useDebug: (enabled?: boolean, ...args: any[]) => any;

declare function useLockBody(): void;

declare const Strings: {
    intro: {
        title: string;
        body: string;
    };
    configuration: {
        name: string;
        description: string;
        ogImage: string;
        links: {
            url: string;
            twitter: string;
            github: string;
        };
        navigation: {
            about: {
                title: string;
                href: string;
            };
            work: {
                title: string;
                href: string;
            };
            writing: {
                title: string;
                href: string;
            };
            running: {
                title: string;
                href: string;
            };
            labs: {
                title: string;
                href: string;
            };
        };
    };
    errorBoundary: {
        didCatch: string;
    };
    debug: {
        failure: string;
    };
};

declare function classnames(...inputs: ClassValue[]): string;

export { Analytics, AspectRatio, BaseComponentProps, Button, ButtonProps, ButtonSize, ButtonVariant, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, ErrorBoundary, Footer, Icon, Icons, Intro, Mdx, MobileNavigation, Navigation, Skeleton, Strings, TailwindIndicator, ThemeProvider, ThemeSelector, buttonVariants, classnames, useDebug, useLockBody };
