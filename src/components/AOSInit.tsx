"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true, // animasi hanya berjalan sekali saat di-scroll
      offset: 50,
    });
  }, []);

  return null;
}
