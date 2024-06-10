import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl text-3xl">
      <div>
        <Link href="/should-be-dynamic">Should Be Dynamic</Link>
      </div>
      <div>
        <Link href="/should-be-static">Should Be Static</Link>
      </div>
      <div>
        <Link href="/dynamic-but-cached">Dynamic But Cached</Link>
      </div>
      <div>
        <Link href="/api-dynamic">API Dynamic</Link>
      </div>
      <div>
        <Link href="/api-static">API Static</Link>
      </div>
    </main>
  );
}
