export default function ContentContainer({ children }) {
  return (
    <div className="flex w-full max-w-[900px] flex-col  gap-8">
      {children}
    </div>
  );
}
