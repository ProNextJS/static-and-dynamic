export const dynamic = "force-static";

export default async function ShouldBeStatic() {
  const res = await fetch("http://localhost:8080/", {
    cache: "no-store",
  });
  const { time } = await res.json();

  return (
    <div className="mx-auto max-w-6xl text-3xl">Time Service Time: {time}</div>
  );
}
