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

export default function CrudPenggunaPage() {
  const [currentUserRole, setCurrentUserRole] = useState<"admin" | "petugas">("admin");

  // State untuk Loading Skeleton & Action Spinner
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState<number | null>(null); // Menyimpan ID user yg sedang diproses

  // Data State
  const [users, setUsers] = useState([
    { id: 1, username: "admin", name: "Super Administrator", role: "admin" },
    { id: 2, username: "petugas", name: "Ahmad Sudrajat", role: "petugas" },
    { id: 3, username: "petugas1", name: "Anisa Anggraini", role: "petugas" },
  ]);

  // Simulasi Ambil Data dari API/Supabase (Munculkan Skeleton)
  useEffect(() => {
    const fetchTimer = setTimeout(() => setIsDataLoading(false), 1500); // Loading 1.5 detik
    return () => clearTimeout(fetchTimer);
  }, []);

  // Logika Menghapus menggunakan SweetAlert2
  const handleDelete = (id: number, name: string) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: `Data pengguna "${name}" akan dihapus permanen!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#94a3b8",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsActionLoading(id); // Munculkan Spinner di tombol ini

        // Simulasi loading hapus data 1 detik
        setTimeout(() => {
          setUsers(users.filter((user) => user.id !== id));
          setIsActionLoading(null);
          Swal.fire("Terhapus!", "Data pengguna berhasil dihapus.", "success");
        }, 1000);
      }
    });
  };

  // Logika Mengubah Role (Edit) menggunakan SweetAlert2
  const handleEditRole = (id: number, currentName: string, currentRole: string) => {
    Swal.fire({
      title: `Ubah Akses ${currentName}`,
      input: "select",
      inputOptions: {
        admin: "Administrator",
        petugas: "Petugas",
      },
      inputValue: currentRole,
      showCancelButton: true,
      confirmButtonText: "Simpan Perubahan",
      confirmButtonColor: "#2563eb",
    }).then((result) => {
      if (result.isConfirmed && result.value !== currentRole) {
        setUsers(users.map((user) => (user.id === id ? { ...user, role: result.value } : user)));

        Swal.fire({
          icon: "success",
          title: "Akses Diperbarui!",
          text: `${currentName} sekarang menjadi ${result.value}.`,
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-7xl mx-auto font-sans space-y-6">
      {/* 🧭 SHADCN BREADCRUMB (Navigasi) */}
      <div data-aos="fade-down">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/konsol">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-blue-600">Manajemen Pengguna</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header Section dengan Animasi AOS */}
      <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Manajemen Pengguna</h1>
          <p className="text-slate-500 text-sm mt-1">Kelola otorisasi akun Admin & Petugas</p>
        </div>

        {currentUserRole === "admin" && (
          <Button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-xl shadow-md h-11 px-6">
            <Plus size={18} className="mr-2" /> Tambah Pengguna
          </Button>
        )}
      </div>

      {/* Tabel Content */}
      <Card data-aos="fade-up" data-aos-delay="100" className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50 border-b border-slate-100">
              <TableRow>
                <TableHead className="font-bold text-slate-500 py-4 px-6 w-[200px]">USERNAME</TableHead>
                <TableHead className="font-bold text-slate-500 py-4">NAMA LENGKAP</TableHead>
                <TableHead className="font-bold text-slate-500 py-4 text-center">ROLE AKSES</TableHead>
                <TableHead className="font-bold text-slate-500 py-4 text-right px-6">AKSI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* 💀 SKELETON LOADING (Tampil saat data diambil) */}
              {isDataLoading
                ? Array.from({ length: 3 }).map((_, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="px-6 py-4">
                        <Skeleton className="h-4 w-[100px]" />
                      </TableCell>
                      <TableCell className="py-4">
                        <Skeleton className="h-4 w-[150px]" />
                      </TableCell>
                      <TableCell className="py-4 text-center flex justify-center">
                        <Skeleton className="h-6 w-[80px] rounded-full" />
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Skeleton className="h-8 w-20 float-right" />
                      </TableCell>
                    </TableRow>
                  ))
                : // ✅ DATA AKTUAL TAMPIL
                  users.map((user) => {
                    const isUserAdmin = user.role === "admin";
                    const isMeAdmin = currentUserRole === "admin";
                    const canEdit = isMeAdmin;
                    const canDelete = isMeAdmin || (currentUserRole === "petugas" && !isUserAdmin);

                    return (
                      <TableRow key={user.id} className="hover:bg-slate-50/50 transition-colors">
                        <TableCell className="font-medium text-slate-800 px-6 py-4">{user.username}</TableCell>
                        <TableCell className="text-slate-600 py-4">{user.name}</TableCell>
                        <TableCell className="text-center py-4">
                          <Badge className={`px-3 border-none ${user.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>{user.role === "admin" ? "Admin" : "Petugas"}</Badge>
                        </TableCell>
                        <TableCell className="text-right px-6 py-4">
                          <div className="flex justify-end gap-2">
                            {canEdit && (
                              <Button variant="ghost" size="icon" onClick={() => handleEditRole(user.id, user.name, user.role)} className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg">
                                <Edit size={18} />
                              </Button>
                            )}

                            {canDelete && (
                              <Button variant="ghost" size="icon" onClick={() => handleDelete(user.id, user.name)} disabled={isActionLoading === user.id} className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                {/* 🔄 SHADCN / LUCIDE SPINNER (Berputar saat dihapus) */}
                                {isActionLoading === user.id ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
