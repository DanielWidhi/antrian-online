"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MonitorSpeaker, Layers, Users, LogOut } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  // Daftar Menu Berdasarkan Gambar 5, 6, 7
  const menuItems = [
    { name: "Konsol Pemanggil", icon: <MonitorSpeaker size={20} />, path: "/konsol" },
    { name: "CRUD Layanan", icon: <Layers size={20} />, path: "/layanan" },
    { name: "CRUD Pengguna", icon: <Users size={20} />, path: "/pengguna" },
  ];

  return (
    <aside className="w-64 bg-[#0f172a] text-slate-300 flex flex-col h-screen sticky top-0">
      {/* Header Profile */}
      <div className="p-6 border-b border-slate-800 flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">A</div>
        <div>
          <h2 className="font-bold text-white text-sm">Ahmad Sudrajat</h2>
          <p className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase">PETUGAS</p>
        </div>
      </div>

      {/* Menu Navigasi */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm
                ${isActive ? "bg-blue-600 text-white shadow-lg" : "hover:bg-slate-800 hover:text-white"}`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-slate-800">
        <Link href="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-xl transition">
          <LogOut size={20} /> Keluar Sistem
        </Link>
      </div>
    </aside>
  );
}
