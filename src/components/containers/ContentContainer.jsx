export default function ContentContainer({ children }) {
  return (
    <div className="flex w-full max-w-[900px] flex-col items-center gap-8">
      {children}
    </div>
  );
}
