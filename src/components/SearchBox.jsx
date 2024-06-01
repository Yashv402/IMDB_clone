"use client";

import React from "react";
import { useState } from "react";
import {useRouter} from 'next/navigation'

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handelSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  }

  return (
    <form action="" className="flex justify-center px-5 max-w-6xl mx-auto" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button 
      className="text-amber-600 disabled:text-gray-400"
      disabled={search === ""}
      >Search</button>
    </form>
  );
}

export default SearchBox;