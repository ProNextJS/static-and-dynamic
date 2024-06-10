export const dynamic = "force-dynamic";

export default async function DynamicButCached() {
  const res = await fetch("http://localhost:8080/");
  const { time } = await res.json();

  return (
    <div className="mx-auto max-w-6xl text-3xl">
      <div>Current Time: {new Date().toLocaleTimeString()}</div>
      <div>Time Service Time: {time}</div>
    </div>
  );
}
