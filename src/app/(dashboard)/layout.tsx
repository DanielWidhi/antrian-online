import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar akan selalu diam di sebelah kiri */}
      <Sidebar />

      {/* Area Konten Utama yang akan berubah-ubah (Konsol / CRUD) */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
