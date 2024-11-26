"use client"

import { useParams } from "next/navigation";
import Header from "@/app/_components/Header";

export const ListView = () => {
  
    const params = useParams().collection;

    const collection = params
    ? Array.isArray(params)
      ? params.join("")
      : params
    : undefined;

    return (
        <Header collection={ collection } />
    );
}