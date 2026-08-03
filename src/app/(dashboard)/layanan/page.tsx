"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function CrudLayananPage() {
  // Data Dummy Sementara
  const services = [
    { id: 1, name: "Poli Umum", prefix: "A", status: "Aktif" },
    { id: 2, name: "Poli Gigi", prefix: "B", status: "Aktif" },
    { id: 3, name: "Poli KIA", prefix: "C", status: "Aktif" },
    { id: 4, name: "Poli Anak", prefix: "D", status: "Aktif" },
  ];

  return (
    <div className="p-6 md:p-8 w-full max-w-7xl mx-auto font-sans space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Manajemen Jenis Layanan</h1>
          <p className="text-slate-500 text-sm mt-1">Atur unit, loket, & kode prefix antrian</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-xl shadow-md h-11 px-6">
          <Plus size={18} className="mr-2" /> Tambah Layanan
        </Button>
      </div>

      {/* Tabel Content */}
      <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50 border-b border-slate-100">
              <TableRow>
                <TableHead className="font-bold text-slate-500 py-4 px-6">ID LAYANAN</TableHead>
                <TableHead className="font-bold text-slate-500 py-4">NAMA LAYANAN</TableHead>
                <TableHead className="font-bold text-slate-500 py-4 text-center">KODE PREFIX</TableHead>
                <TableHead className="font-bold text-slate-500 py-4 text-center">STATUS</TableHead>
                <TableHead className="font-bold text-slate-500 py-4 text-right px-6">AKSI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-medium text-slate-800 px-6 py-4">{service.id}</TableCell>
                  <TableCell className="text-slate-600 py-4 font-medium">{service.name}</TableCell>
                  <TableCell className="text-center py-4">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md font-bold text-xs">{service.prefix}</span>
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-3">{service.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg">
                        <Edit size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
