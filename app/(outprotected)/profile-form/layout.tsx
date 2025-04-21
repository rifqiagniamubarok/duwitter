export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>{children}</div>
    </div>
  );
}
