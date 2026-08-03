"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function CrudPenggunaPage() {
  // Simulasi Role User yang sedang login saat ini (Nanti diambil dari session Supabase)
  // Coba ubah "petugas" menjadi "admin" untuk melihat perbedaannya!
  const [currentUserRole, setCurrentUserRole] = useState<"admin" | "petugas">("petugas");

  // Data Dummy Pengguna
  const users = [
    { id: 1, username: "admin", name: "Super Administrator", role: "admin" },
    { id: 2, username: "petugas", name: "Ahmad Sudrajat", role: "petugas" },
    { id: 3, username: "petugas1", name: "Anisa Anggraini", role: "petugas" },
  ];

  return (
    <div className="p-6 md:p-8 w-full max-w-7xl mx-auto font-sans space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Manajemen Pengguna</h1>
          <p className="text-slate-500 text-sm mt-1">Kelola otorisasi akun Admin & Petugas</p>

          {/* Toggle Simulasi (Hanya untuk keperluan Testing saat ngoding) */}
          <div className="mt-4 flex items-center gap-2 bg-yellow-100 p-2 rounded-lg text-xs font-bold text-yellow-800 w-fit">
            <span>Simulasi Login Sebagai:</span>
            <select className="bg-transparent outline-none cursor-pointer border-b border-yellow-800" value={currentUserRole} onChange={(e) => setCurrentUserRole(e.target.value as "admin" | "petugas")}>
              <option value="admin">Admin</option>
              <option value="petugas">Petugas</option>
            </select>
          </div>
        </div>

        {/* Tombol Tambah hanya muncul jika yang login adalah Admin */}
        {currentUserRole === "admin" && (
          <Button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-xl shadow-md h-11 px-6">
            <Plus size={18} className="mr-2" /> Tambah Pengguna
          </Button>
        )}
      </div>

      {/* Tabel Content */}
      <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
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
              {users.map((user) => {
                // --- LOGIKA ROLE PERMINTAAN ANDA (FRONTEND LAYER) ---
                const isUserAdmin = user.role === "admin";
                const isMeAdmin = currentUserRole === "admin";

                // Petugas TIDAK BISA edit/delete siapapun yang rolenya Admin.
                // Petugas BISA delete sesama petugas, tapi TIDAK BISA edit.
                // Admin BISA segalanya.

                const canEdit = isMeAdmin;
                const canDelete = isMeAdmin || (currentUserRole === "petugas" && !isUserAdmin);

                return (
                  <TableRow key={user.id} className="hover:bg-slate-50/50 transition-colors">
                    <TableCell className="font-medium text-slate-800 px-6 py-4">{user.username}</TableCell>
                    <TableCell className="text-slate-600 py-4">{user.name}</TableCell>
                    <TableCell className="text-center py-4">
                      <Badge className={`px-3 border-none ${user.role === "admin" ? "bg-purple-100 text-purple-700 hover:bg-purple-100" : "bg-blue-100 text-blue-700 hover:bg-blue-100"}`}>{user.role === "admin" ? "Admin" : "Petugas"}</Badge>
                    </TableCell>
                    <TableCell className="text-right px-6 py-4">
                      <div className="flex justify-end gap-2">
                        {/* Render tombol Edit hanya jika punya akses */}
                        {canEdit ? (
                          <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg">
                            <Edit size={18} />
                          </Button>
                        ) : (
                          // Tempat kosong agar layout tidak bergeser jika tombol disembunyikan
                          <div className="w-10 h-10"></div>
                        )}

                        {/* Render tombol Delete hanya jika punya akses */}
                        {canDelete ? (
                          <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                            <Trash2 size={18} />
                          </Button>
                        ) : (
                          <div className="w-10 h-10"></div>
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
