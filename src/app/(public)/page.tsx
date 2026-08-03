import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, UserPlus, Megaphone, LogIn } from "lucide-react";
import Link from "next/link";

export default function MonitorPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 🖥️ TOP NAVBAR (Hanya muncul di Desktop & Tablet) */}
      <header className="hidden md:flex justify-between items-center bg-blue-600 text-white p-6 shadow-md">
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

      {/* 📱 MOBILE HEADER (Hanya muncul di HP) */}
      <div className="md:hidden bg-blue-600 px-6 pt-10 pb-16 text-white rounded-b-[2.5rem]">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Layanan Antrian</h1>
            <p className="text-blue-100 text-sm mt-1">Ambil nomor secara praktis & cepat</p>
          </div>
          <Link href="/login" className="bg-blue-500/50 p-2 rounded-full hover:bg-blue-500 transition">
            <LogIn size={20} />
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-0 md:p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
        {/* 📢 ACTIVE CALL CARD (Nomor yang sedang dipanggil) */}
        <div className="w-full md:w-5/12 lg:w-2/5 px-4 md:px-0 -mt-10 md:mt-0 z-10 flex flex-col">
          <Card className="shadow-xl md:shadow-2xl border-none flex-1 bg-white flex flex-col justify-center min-h-[250px] md:min-h-[400px]">
            <CardContent className="p-6 md:p-10 flex flex-col items-center text-center gap-4">
              <div className="bg-blue-100 p-5 md:p-8 rounded-full text-blue-600 mb-2 shadow-inner">
                <Megaphone size={40} className="md:w-20 md:h-20" />
              </div>
              <div>
                <span className="bg-emerald-100 text-emerald-700 text-xs md:text-sm px-4 py-1.5 rounded-full font-extrabold uppercase tracking-widest mb-4 inline-block">Sistem Aktif</span>
                <p className="text-sm md:text-xl text-slate-500 font-medium mt-4">Sedang Dipanggil</p>
                <p className="text-6xl md:text-[6rem] md:leading-tight font-extrabold text-blue-600 my-2">A-004</p>
                <p className="text-lg md:text-3xl text-slate-700 font-bold mt-2">Menuju Loket 2</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 📋 WAITING LIST GRID (Daftar Layanan Lainnya) */}
        <div className="w-full md:w-7/12 lg:w-3/5 px-4 md:px-0 py-6 md:py-0">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 h-full content-start">
            {/* Layanan 1 */}
            <Card className="bg-white border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6 pb-2 border-b border-slate-50">
                <CardTitle className="text-base md:text-2xl text-slate-800">Poli Umum</CardTitle>
                <p className="text-[10px] md:text-sm text-slate-500 mt-1">2 Antrian Menunggu</p>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-4">
                <p className="text-3xl md:text-5xl font-bold text-blue-600 mb-3">A-004</p>
                <div className="bg-blue-50 text-blue-700 text-xs md:text-sm py-2 px-3 rounded-md font-bold inline-block">Loket 2</div>
              </CardContent>
            </Card>

            {/* Layanan 2 */}
            <Card className="bg-white border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6 pb-2 border-b border-slate-50">
                <CardTitle className="text-base md:text-2xl text-slate-800">Poli Gigi</CardTitle>
                <p className="text-[10px] md:text-sm text-slate-500 mt-1">0 Antrian Menunggu</p>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-4">
                <p className="text-3xl md:text-5xl font-bold text-slate-400 mb-3">B-002</p>
                <div className="bg-slate-100 text-slate-500 text-xs md:text-sm py-2 px-3 rounded-md font-semibold inline-block">Belum Dipanggil</div>
              </CardContent>
            </Card>

            {/* Layanan 3 */}
            <Card className="bg-white border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6 pb-2 border-b border-slate-50">
                <CardTitle className="text-base md:text-2xl text-slate-800">Poli KIA</CardTitle>
                <p className="text-[10px] md:text-sm text-slate-500 mt-1">0 Antrian Menunggu</p>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-4">
                <p className="text-3xl md:text-5xl font-bold text-slate-400 mb-3">C-001</p>
                <div className="bg-slate-100 text-slate-500 text-xs md:text-sm py-2 px-3 rounded-md font-semibold inline-block">Belum Dipanggil</div>
              </CardContent>
            </Card>

            {/* Layanan 4 */}
            <Card className="bg-white border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6 pb-2 border-b border-slate-50">
                <CardTitle className="text-base md:text-2xl text-slate-800">Poli Anak</CardTitle>
                <p className="text-[10px] md:text-sm text-slate-500 mt-1">0 Antrian Menunggu</p>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-4">
                <p className="text-3xl md:text-5xl font-bold text-slate-400 mb-3">D-000</p>
                <div className="bg-slate-100 text-slate-500 text-xs md:text-sm py-2 px-3 rounded-md font-semibold inline-block">Belum Dipanggil</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* 📱 BOTTOM NAVIGATION (Hanya muncul di HP) */}
      <div className="md:hidden bg-white border-t p-3 flex justify-around sticky bottom-0 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
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
