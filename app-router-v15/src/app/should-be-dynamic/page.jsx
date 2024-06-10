export const dynamic = "force-dynamic";

export default async function ShouldBeDynamic() {
  const res = await fetch("http://localhost:8080/");
  const { time } = await res.json();

  return (
    <div className="mx-auto max-w-6xl text-3xl">Time Service Time: {time}</div>
  );
}
