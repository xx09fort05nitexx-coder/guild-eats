import Link from "next/link";

const ranks = ["S", "A", "B", "C", "D"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6ef] text-[#183b31]">
      <header className="flex h-16 items-center justify-between border-b border-[#d7ded3] px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center bg-[#d9ed8d] font-bold"
          >
            G
          </span>
          <span className="font-semibold">GUILD EATS</span>
        </Link>
        <span className="text-sm text-[#65766c]">冒険記録</span>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <section className="grid gap-12 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20">
          <div className="flex flex-col items-start justify-center">
            <p className="mb-5 text-sm font-semibold text-[#c6533a]">
              QUEST BOARD <span className="ml-2 text-[#65766c]">01</span>
            </p>

            <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              今日の食事を、
              <br />
              <span className="text-[#c6533a]">冒険の記録に。</span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-[#52665d]">
              お気に入りの一皿を、ランクとひとことを添えて残そう。
            </p>

            <Link
              href="/create"
              className="mt-8 inline-flex min-h-12 items-center gap-8 bg-[#c6533a] px-5 font-semibold text-white transition-colors hover:bg-[#a9422e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183b31]"
            >
              食事を記録する
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <aside className="flex flex-col justify-between border-y-2 border-[#183b31] bg-[#d9ed8d] p-7 sm:p-9">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold">NEXT QUEST</p>
              <span className="text-sm">NO. 001</span>
            </div>

            <div className="py-10">
              <p className="text-sm text-[#52665d]">THE NEXT BITE</p>
              <p className="mt-3 font-serif text-3xl leading-snug">
                次の一皿は、
                <br />
                どんな冒険？
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-[#183b31]/25 pt-4">
              <span className="text-sm font-semibold">RANK</span>
              <ul aria-label="ランクの種類" className="flex gap-2">
                {ranks.map((rank) => (
                  <li
                    key={rank}
                    className="grid size-9 place-items-center border border-[#183b31]/30 bg-white/60 text-sm font-semibold"
                  >
                    {rank}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="border-t border-[#d7ded3] py-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">最近の冒険</h2>
            <span className="text-sm text-[#65766c]">0 RECORDS</span>
          </div>

          <div className="py-14 text-center">
            <p className="font-semibold">まだ記録がありません</p>
            <p className="mt-2 text-sm text-[#65766c]">
              最初の一皿を、冒険にしよう。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
