import NavbarProtected from '@/components/organisms/NavbarProtected';
import Sidebar from '@/components/organisms/Sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 dark:bg-black ">
        <NavbarProtected />
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}
