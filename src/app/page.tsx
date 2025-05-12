"use client";

import { useState } from "react";
import FilterSection from "@/components/FilterSection";
import MapSection from "@/components/MapSection";
import TableSection from "@/components/TableSection";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col mx-16 my-[27.5px] gap-6">
      <div className="border-b border-[#002D44]">
        <FilterSection search={search} setSearch={setSearch} />
      </div>
      <div className="border rounded-lg border-[#002d44]">
        <MapSection />
      </div>
      <TableSection search={search} />
    </div>
  );
}
