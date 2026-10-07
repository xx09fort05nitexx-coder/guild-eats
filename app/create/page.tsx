"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ranks = ["S", "A", "B", "C", "D"];

export default function CreatePage() {
  const [photo, setPhoto] = useState<File | null>(null);
const [previewUrl, setPreviewUrl] = useState<string | null>(null);

useEffect(() => {
  if (!photo) return;

  const reader = new FileReader();

  reader.onload = () => {
    if (typeof reader.result === "string") {
      setPreviewUrl(reader.result);
    }
  };

  reader.readAsDataURL(photo);

  return () => {
    reader.onload = null;

    if (reader.readyState === FileReader.LOADING) {
      reader.abort();
    }
  };
}, [photo]);

  return (
    <main className="min-h-screen bg-[#f4f6ef] text-[#183b31]">
      <header className="flex h-16 items-center border-b border-[#d7ded3] px-5 sm:px-8">
        <Link href="/" className="font-semibold">
          ← GUILD EATS
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        <p className="text-sm font-semibold text-[#c6533a]">NEW RECORD</p>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl">
          食事を記録する
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#52665d]">
          今日の冒険を、写真とひとことで残そう。
        </p>

        <section className="mt-9 border-y border-[#d7ded3] py-8">
          <label htmlFor="food-photo" className="block font-semibold">
            食事の写真
          </label>
          <input
            id="food-photo"
            name="photo"
            type="file"
            accept="image/*"
            required
            onChange={(event) => {
  const selectedPhoto = event.currentTarget.files?.[0] ?? null;

  setPreviewUrl(null);
  setPhoto(
    selectedPhoto?.type.startsWith("image/") ? selectedPhoto : null,
  );
}}
            className="mt-3 block w-full text-sm file:mr-4 file:border-0 file:bg-[#d9ed8d] file:px-4 file:py-2 file:font-semibold"
          />

          {previewUrl && (
  <div className="mt-4">
    <p className="mb-2 text-sm text-[#52665d]">
      写真のプレビュー
    </p>

    <Image
      src={previewUrl}
      alt="選択した食事の写真"
      width={640}
      height={480}
      unoptimized
      className="max-h-80 h-auto w-full object-contain"
    />
  </div>
)}

        </section>

        <section className="border-b border-[#d7ded3] py-8">
          <label htmlFor="shop-name" className="block font-semibold">
            店名
          </label>
          <input
            id="shop-name"
            name="shopName"
            type="text"
            required
            placeholder="例：ギルド食堂"
            className="mt-3 min-h-12 w-full border border-[#b9c5ba] bg-white px-4 outline-none focus:border-[#183b31] focus:ring-2 focus:ring-[#183b31]/20"
          />
        </section>

        <fieldset className="border-b border-[#d7ded3] py-8">
          <legend className="font-semibold">今回のランク</legend>
          <div className="mt-4 flex flex-wrap gap-3">
            {ranks.map((rank) => (
              <label
                key={rank}
                className="flex min-h-11 min-w-14 cursor-pointer items-center justify-center gap-2 border border-[#b9c5ba] bg-white px-3 has-checked:border-[#183b31] has-checked:bg-[#d9ed8d]"
              >
                <input
                  type="radio"
                  name="rank"
                  value={rank}
                  required
                  className="accent-[#183b31]"
                />
                <span className="font-semibold">{rank}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <section className="py-8">
          <label htmlFor="comment" className="block font-semibold">
            コメント
            <span className="ml-2 text-sm font-normal text-[#65766c]">
              任意
            </span>
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            maxLength={120}
            placeholder="味やお店の雰囲気など"
            className="mt-3 w-full border border-[#b9c5ba] bg-white p-4 outline-none focus:border-[#183b31] focus:ring-2 focus:ring-[#183b31]/20"
          />
        </section>

        <button
          type="button"
          className="flex min-h-12 w-full items-center justify-center gap-3 bg-[#c6533a] px-5 font-semibold text-white transition-colors hover:bg-[#a9422e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183b31]"
        >
          QUEST生成 <span aria-hidden="true">→</span>
        </button>
      </div>
    </main>
  );
}
