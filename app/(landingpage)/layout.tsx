import LandingPageLayout from '@/components/templates/LandingPageLayout';

export default function layout({ children }: { children: React.ReactNode }) {
  return <LandingPageLayout>{children}</LandingPageLayout>;
}
