"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, LogIn, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi proses login (Nanti kita ganti dengan autentikasi Supabase)
    setTimeout(() => {
      setIsLoading(false);
      // Setelah berhasil login, arahkan ke halaman konsol pemanggil
      router.push("/konsol");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 font-sans relative">
      {/* Tombol Kembali ke Halaman Utama */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition font-medium">
        <ArrowLeft size={20} /> Kembali ke Layar Monitor
      </Link>

      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 p-4 rounded-2xl">
            <Lock size={40} className="text-blue-600" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Konsol Internal</h1>
          <p className="text-slate-500 mt-2">Silakan masuk menggunakan kredensial Anda</p>
        </div>

        <Card className="shadow-xl border-slate-100 rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="flex flex-col gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Username</label>
                <Input required placeholder="Masukkan username" className="h-12 bg-slate-50 border-slate-200" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                <Input required type="password" placeholder="••••••••" className="h-12 bg-slate-50 border-slate-200" />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full h-12 text-base font-bold bg-blue-600 hover:bg-blue-700 mt-4 rounded-xl">
                {isLoading ? (
                  "Memverifikasi..."
                ) : (
                  <>
                    <LogIn size={18} className="mr-2" /> Masuk Ke Sistem
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
