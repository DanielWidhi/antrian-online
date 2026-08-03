"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Megaphone, RefreshCcw, Check, X, MonitorSpeaker } from "lucide-react";

export default function KonsolPemanggilPage() {
  const [loket, setLoket] = useState<string>("");

  // Data Dummy Sementara (Nanti kita ambil dari Supabase)
  const services = [
    { id: 1, name: "Poli Umum", prefix: "A", waiting: 3, lastCall: "A-004", isActive: true },
    { id: 2, name: "Poli Gigi", prefix: "B", waiting: 0, lastCall: "-", isActive: false },
    { id: 3, name: "Poli KIA", prefix: "C", waiting: 0, lastCall: "-", isActive: false },
    { id: 4, name: "Poli Anak", prefix: "D", waiting: 2, lastCall: "-", isActive: false },
  ];

  return (
    <div className="p-6 md:p-8 w-full max-w-7xl mx-auto font-sans space-y-6">
      {/* 🔴 HEADER - PEMILIHAN LOKET */}
      <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden">
        <CardContent className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
              <MonitorSpeaker size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-1">Loket Bertugas Anda</p>
              <h2 className="text-xl font-bold text-slate-800">{loket ? `Menjaga ${loket}` : "Belum Memilih Loket"}</h2>
            </div>
          </div>
          <div className="w-full md:w-64">
            <Select onValueChange={setLoket}>
              <SelectTrigger className="h-12 bg-slate-50 border-slate-200 font-medium">
                <SelectValue placeholder="Pilih Loket Anda..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Loket 1">Loket 1</SelectItem>
                <SelectItem value="Loket 2">Loket 2</SelectItem>
                <SelectItem value="Loket 3">Loket 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* 🟢 GRID KARTU LAYANAN (Panggilan) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{service.name}</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Sisa Tunggu: <span className="text-slate-800 font-bold">{service.waiting} orang</span>
                  </p>
                </div>
                <div className="w-8 h-8 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center font-bold text-sm">{service.prefix}</div>
              </div>

              {/* Display Panggilan Terakhir */}
              <div className="bg-slate-50 rounded-xl p-6 text-center mb-6 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2">Panggilan Terakhir</p>
                <p className={`text-4xl font-extrabold ${service.isActive ? "text-blue-600" : "text-slate-400"}`}>{service.lastCall}</p>
                {service.isActive && <p className="text-xs font-semibold text-blue-600 mt-2 bg-blue-100 inline-block px-2 py-1 rounded">{loket || "Loket 2"}</p>}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Button disabled={!loket} className="bg-blue-600 hover:bg-blue-700 text-white shadow-md font-bold h-11 rounded-xl">
                  <Megaphone size={16} className="mr-2" /> Panggil Next
                </Button>
                <Button disabled={!loket || !service.isActive} variant="outline" className="font-bold text-blue-600 border-blue-200 hover:bg-blue-50 h-11 rounded-xl">
                  <RefreshCcw size={16} className="mr-2" /> Recall
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button disabled={!loket || !service.isActive} variant="ghost" className="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-700 h-11 rounded-xl">
                  <Check size={16} className="mr-2" /> Selesai
                </Button>
                <Button disabled={!loket || !service.isActive} variant="ghost" className="font-bold text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 h-11 rounded-xl">
                  <X size={16} className="mr-2" /> Lewati
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
