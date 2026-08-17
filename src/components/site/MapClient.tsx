import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BRANCHES } from "@/data/company";

// Create a custom pulsing dot icon using Leaflet's DivIcon
const createPulsingIcon = () => {
  return L.divIcon({
    className: "custom-pulsing-icon",
    html: `
      <div class="relative flex h-6 w-6 items-center justify-center -translate-x-1/2 -translate-y-1/2">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" style="animation-duration: 2s"></span>
        <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_rgba(47,128,201,0.8)] border-[1.5px] border-white"></span>
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, -15],
  });
};

export default function MapClient() {
  const center: [number, number] = [12.7500, 79.6700]; // Centered around Kanchipuram district

  return (
    <MapContainer 
      center={center} 
      zoom={10} 
      scrollWheelZoom={false}
      className="h-full w-full z-10"
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      
      {BRANCHES.map((branch) => {
        if (!branch.lat || !branch.lng) return null;
        return (
          <Marker 
            key={`${branch.name}-${branch.locality}`} 
            position={[branch.lat, branch.lng]}
            icon={createPulsingIcon()}
          >
            <Popup className="custom-popup">
              <div className="text-[13px] font-bold text-ink">{branch.name}</div>
              <div className="text-[11px] text-muted-foreground">{branch.locality}</div>
              <div className="mt-1 font-semibold text-brand text-[12px]">{branch.phone}</div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
