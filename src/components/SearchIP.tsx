"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GeoDetail, GeoDetailProps } from "@/components/ui/geodetail";
import { useState } from "react";


export function SearchIP() {
  const [ip, setIP] = useState("");
  const [geodetail, setGeoDetail] = useState<GeoDetailProps>();
  function fetchAndSetGeoData() {
    console.log(ip);
    try {
      fetch(`https://ipapi.co/${ip}/json/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setGeoDetail({
            ip: data.ip,
            country: data.country_name,
            region: data.region_code,
            city: data.city,
            lat: data.latitude,
            long: data.longitude,
          });
        });
    }
    catch (error) {
      throw new Error("Failed to process IP Address.");
    }

  }

  return (
    <div className="min-h-screen min-w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 p-6">
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold">IP Geolocation</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Enter an IP address to get its geolocation information.
        </p>
        <div className="grid gap-2">
          <Input placeholder="Enter IP address" onChange={(e) => setIP(e.target.value)} />
          <Button onClick={fetchAndSetGeoData} type="submit">Find Geolocation</Button>
        </div>
        <GeoDetail ip={geodetail?.ip || ""} country={geodetail?.country || ""} region={geodetail?.region || ""} city={geodetail?.city || ""} lat={geodetail?.lat || ""} long={geodetail?.long || ""} />
      </div>
    </div>
  );
}