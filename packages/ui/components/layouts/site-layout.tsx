import { ReactNode, ComponentPropsWithoutRef, forwardRef } from "react";
import { Navigation, NavigationProps } from "@/components/navigation";
import { Footer, FooterProps } from "@/components/footer";

export interface SiteLayoutProps {
  children: ReactNode;
  navigation?: NavigationProps;
  footer?: FooterProps;
}

const SiteLayoutWrapper = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => (
  <div ref={ref} {...props} className="flex min-h-screen flex-col">
    {children}
  </div>
));

const MainContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"main">
>(({ children, ...props }, ref) => (
  <main ref={ref} {...props} className="flex-1">
    {children}
  </main>
));

export const SiteLayout = forwardRef<HTMLDivElement, SiteLayoutProps>(
  ({ children, navigation, footer, ...props }, ref) => (
    <SiteLayoutWrapper ref={ref} {...props}>
      {navigation ? <Navigation {...navigation} /> : null}
      <MainContent>{children}</MainContent>
      {footer ? <Footer {...footer} /> : null}
    </SiteLayoutWrapper>
  )
);

SiteLayout.displayName = "SiteLayout";
SiteLayoutWrapper.displayName = "SiteLayoutWrapper";
MainContent.displayName = "MainContent";
