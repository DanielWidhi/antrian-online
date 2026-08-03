"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Plus, Edit, Trash2, Loader2 } from "lucide-react";
import Swal from "sweetalert2";

export default function CrudLayananPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [services, setServices] = useState([
    { id: 1, name: "Poli Umum", prefix: "A", status: "Aktif" },
    { id: 2, name: "Poli Gigi", prefix: "B", status: "Aktif" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (id: number, name: string) => {
    Swal.fire({
      title: "Hapus Layanan?",
      text: `Layanan "${name}" akan dihapus permanen!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setDeletingId(id);
        setTimeout(() => {
          setServices(services.filter((s) => s.id !== id));
          setDeletingId(null);
          Swal.fire("Terhapus!", "Layanan berhasil dihapus.", "success");
        }, 1000);
      }
    });
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-7xl mx-auto font-sans space-y-6">
      <div data-aos="fade-down">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/konsol">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-blue-600">Layanan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Manajemen Jenis Layanan</h1>
          <p className="text-slate-500 text-sm mt-1">Atur unit, loket, & kode prefix antrian</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-xl shadow-md h-11 px-6">
          <Plus size={18} className="mr-2" /> Tambah Layanan
        </Button>
      </div>

      <Card data-aos="fade-up" data-aos-delay="100" className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
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
              {isLoading
                ? Array.from({ length: 3 }).map((_, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="px-6 py-4">
                        <Skeleton className="h-4 w-10" />
                      </TableCell>
                      <TableCell className="py-4">
                        <Skeleton className="h-4 w-32" />
                      </TableCell>
                      <TableCell className="py-4 text-center flex justify-center">
                        <Skeleton className="h-6 w-8" />
                      </TableCell>
                      <TableCell className="py-4">
                        <Skeleton className="h-6 w-16 mx-auto rounded-full" />
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Skeleton className="h-8 w-20 float-right" />
                      </TableCell>
                    </TableRow>
                  ))
                : services.map((service) => (
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
                          <Button onClick={() => handleDelete(service.id, service.name)} variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                            {deletingId === service.id ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
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
