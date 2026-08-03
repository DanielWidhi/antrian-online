"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Monitor, UserPlus, Megaphone, LogIn } from "lucide-react";
import Link from "next/link";

export default function MonitorPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      {/* 🖥️ TOP NAVBAR */}
      <header data-aos="fade-down" className="hidden md:flex justify-between items-center bg-blue-600 text-white p-6 shadow-md">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Layanan Antrian</h1>
          <p className="text-blue-100 mt-1 font-medium">Sistem Antrian Terpadu</p>
        </div>
        <div className="flex gap-4">
          <Link href="/ambil-antrian" className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-full font-bold hover:bg-blue-50 transition shadow-sm">
            <UserPlus size={20} /> Ambil Antrian
          </Link>
          <Link href="/login" className="flex items-center gap-2 bg-blue-700 px-5 py-2.5 rounded-full font-bold hover:bg-blue-800 transition text-white shadow-sm">
            <LogIn size={20} /> Internal
          </Link>
        </div>
      </header>

      {/* 📱 MOBILE HEADER */}
      <div data-aos="fade-down" className="md:hidden bg-blue-600 px-6 pt-10 pb-16 text-white rounded-b-[2.5rem]">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Layanan Antrian</h1>
            <p className="text-blue-100 text-sm mt-1">Ambil nomor praktis & cepat</p>
          </div>
          <Link href="/login" className="bg-blue-500/50 p-2 rounded-full hover:bg-blue-500 transition">
            <LogIn size={20} />
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-0 md:p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 pb-24 md:pb-8">
        {/* 📢 ACTIVE CALL CARD */}
        <div data-aos="fade-right" data-aos-delay="200" className="w-full md:w-5/12 lg:w-2/5 px-4 md:px-0 -mt-10 md:mt-0 z-10 flex flex-col">
          <Card className="shadow-xl md:shadow-2xl border-none flex-1 bg-white flex flex-col justify-center min-h-[250px] md:min-h-[400px]">
            <CardContent className="p-6 md:p-10 flex flex-col items-center text-center gap-4">
              {isLoading ? (
                <div className="flex flex-col items-center space-y-4 w-full">
                  <Skeleton className="h-24 w-24 rounded-full" />
                  <Skeleton className="h-6 w-32 rounded-full" />
                  <Skeleton className="h-20 w-48 rounded-xl" />
                  <Skeleton className="h-8 w-40 rounded-xl" />
                </div>
              ) : (
                <>
                  <div className="bg-blue-100 p-5 md:p-8 rounded-full text-blue-600 mb-2 shadow-inner">
                    <Megaphone size={40} className="md:w-20 md:h-20 animate-pulse" />
                  </div>
                  <div>
                    <span className="bg-emerald-100 text-emerald-700 text-xs md:text-sm px-4 py-1.5 rounded-full font-extrabold uppercase tracking-widest mb-4 inline-block">Sistem Aktif</span>
                    <p className="text-sm md:text-xl text-slate-500 font-medium mt-4">Sedang Dipanggil</p>
                    <p className="text-6xl md:text-[6rem] md:leading-tight font-extrabold text-blue-600 my-2">A-004</p>
                    <p className="text-lg md:text-3xl text-slate-700 font-bold mt-2">Menuju Loket 2</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 📋 WAITING LIST GRID */}
        <div className="w-full md:w-7/12 lg:w-3/5 px-4 md:px-0 py-6 md:py-0">
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-full content-start">
            {[1, 2, 3, 4].map((item, idx) => (
              <Card key={item} data-aos="fade-up" data-aos-delay={300 + idx * 100} className="bg-white border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                {isLoading ? (
                  <div className="p-4 md:p-6 space-y-3">
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-12 w-full mt-4" />
                  </div>
                ) : (
                  <>
                    <CardHeader className="p-4 md:p-6 pb-2 border-b border-slate-50">
                      <CardTitle className="text-base md:text-2xl text-slate-800">{item === 1 ? "Poli Umum" : item === 2 ? "Poli Gigi" : item === 3 ? "Poli KIA" : "Poli Anak"}</CardTitle>
                      <p className="text-[10px] md:text-sm text-slate-500 mt-1">Sisa Antrian {item === 1 ? "2" : "0"}</p>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6 pt-4">
                      <p className={`text-3xl md:text-5xl font-bold mb-3 ${item === 1 ? "text-blue-600" : "text-slate-400"}`}>{item === 1 ? "A-004" : item === 2 ? "B-002" : item === 3 ? "C-001" : "D-000"}</p>
                      <div className={`text-xs md:text-sm py-2 px-3 rounded-md font-bold inline-block ${item === 1 ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-500"}`}>{item === 1 ? "Loket 2" : "Belum Dipanggil"}</div>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* 📱 BOTTOM NAVIGATION (HP) */}
      <div data-aos="fade-up" className="md:hidden bg-white border-t p-3 flex justify-around fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <button className="flex flex-col items-center text-blue-600 w-full py-2">
          <Monitor size={24} />
          <span className="text-[11px] mt-1.5 font-bold">Monitor</span>
        </button>
        <Link href="/ambil-antrian" className="flex flex-col items-center text-slate-400 hover:text-blue-600 transition w-full py-2">
          <UserPlus size={24} />
          <span className="text-[11px] mt-1.5 font-semibold">Ambil Antrian</span>
        </Link>
      </div>
    </div>
  );
}
