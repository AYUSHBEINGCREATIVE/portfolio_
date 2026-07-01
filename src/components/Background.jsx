export default function Background() {
  return (
    <>
      {/* Blue Glow */}
      <div className="fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px] -z-10" />

      {/* Purple Glow */}
      <div className="fixed bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[150px] -z-10" />

      {/* Small Glow */}
      <div className="fixed top-1/2 left-1/2 h-[250px] w-[250px] rounded-full bg-cyan-300/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />
    </>
  );
}