"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowLeft, Megaphone, Printer, CheckCircle2, Monitor, UserPlus } from "lucide-react";
import Link from "next/link";

export default function AmbilAntrianPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* 🖥️ TOP NAVBAR */}
      <header className="hidden md:flex justify-between items-center bg-blue-600 text-white p-6 shadow-md">
         <div className="flex items-center gap-4">
            <Link href="/" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Layanan Antrian</h1>
              <p className="text-blue-100 mt-1 font-medium">Sistem Antrian Terpadu</p>
            </div>
         </div>
      </header>

      {/* 📱 MOBILE HEADER */}
      <div className="md:hidden bg-blue-600 px-6 pt-10 pb-16 text-white rounded-b-[2.5rem] relative">
        <div className="flex gap-4 items-start">
          <Link href="/" className="bg-blue-500/50 p-2 rounded-full hover:bg-blue-500 transition mt-1">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Layanan Antrian</h1>
            <p className="text-blue-100 text-sm mt-1">Ambil nomor secara praktis & cepat</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-lg mx-auto px-4 md:px-0 -mt-8 md:mt-10 z-10 flex flex-col pb-24 md:pb-10">
        
        {/* Banner Info Aktif */}
        <Card className="shadow-lg border-none bg-white mb-6">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Megaphone size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Sedang Dipanggil</p>
                <p className="text-2xl font-bold text-slate-800">A-004</p>
              </div>
            </div>
            <div className="text-right">
              <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                Sistem Aktif
              </span>
              <p className="text-xs text-slate-500 font-medium mt-1">Menuju Loket 2</p>
            </div>
          </CardContent>
        </Card>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Lengkap</label>
            <Input required placeholder="Masukkan nama Anda" className="h-12 bg-slate-50 border-slate-200" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nomor WhatsApp</label>
            <Input type="tel" placeholder="Contoh: 08123456789" className="h-12 bg-slate-50 border-slate-200" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pilih Jenis Layanan</label>
            <Select required>
              <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                <SelectValue placeholder="Pilih layanan..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">Poli Umum (A)</SelectItem>
                <SelectItem value="B">Poli Gigi (B)</SelectItem>
                <SelectItem value="C">Poli KIA (C)</SelectItem>
                <SelectItem value="D">Poli Anak (D)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-base font-bold bg-blue-600 hover:bg-blue-700 mt-2 rounded-xl shadow-md">
            {isSubmitting ? "Memproses..." : "🗃️ Dapatkan Nomor Antrian"}
          </Button>
        </form>
      </main>

      {/* 📱 BOTTOM NAVIGATION */}
      <div className="md:hidden bg-white border-t p-3 flex justify-around fixed bottom-0 left-0 right-0 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <Link href="/" className="flex flex-col items-center text-slate-400 hover:text-blue-600 transition w-full py-2">
          <Monitor size={24} />
          <span className="text-[11px] mt-1.5 font-semibold">Monitor</span>
        </Link>
        <button className="flex flex-col items-center text-blue-600 w-full py-2">
          <UserPlus size={24} />
          <span className="text-[11px] mt-1.5 font-bold">Ambil Antrian</span>
        </button>
      </div>

      {/* 🟢 MODAL PENDAFTARAN BERHASIL */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md rounded-3xl p-6 text-center">
          <DialogHeader className="flex flex-col items-center">
            <CheckCircle2 size={50} className="text-emerald-500 mb-2" />
            <DialogTitle className="text-2xl font-bold text-slate-800">Pendaftaran Berhasil!</DialogTitle>
            <DialogDescription className="text-slate-500">
              Silakan simpan nomor antrian Anda
            </DialogDescription>
          </DialogHeader>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl my-4 relative overflow-hidden">
             <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white rounded-full transform -translate-y-1/2"></div>
             <div className="absolute -right-3 top-1/2 w-6 h-6 bg-white rounded-full transform -translate-y-1/2"></div>
             
             <p className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-2">Poli Anak</p>
             <p className="text-6xl font-extrabold text-blue-600 mb-2">D-001</p>
             <p className="font-semibold text-slate-700 bg-yellow-300 inline-block px-3 py-1 rounded-md mb-6">M Abdul Baqi</p>
             
             <div className="border-t border-dashed border-slate-300 pt-4 text-xs text-slate-500 text-left space-y-2">
               <div className="flex justify-between"><span>Tanggal:</span> <span className="font-medium text-slate-800">14/6/2026</span></div>
               <div className="flex justify-between"><span>Jam Daftar:</span> <span className="font-medium text-slate-800">11.12 WIB</span></div>
               <div className="flex justify-between"><span>Sisa Antrian:</span> <span className="font-bold text-blue-600">0 Orang lagi</span></div>
             </div>
          </div>

          <div className="flex gap-3 mt-2">
            <Button variant="outline" onClick={handlePrint} className="w-1/2 font-bold h-12 rounded-xl text-slate-600 border-slate-300 hover:bg-slate-100">
               <Printer size={18} className="mr-2" /> Cetak Struk
            </Button>
            <Button onClick={() => setShowSuccessModal(false)} className="w-1/2 font-bold h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
               Selesai
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}