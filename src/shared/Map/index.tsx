'use client';

import { FC } from 'react';
import L, { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import s from './index.module.scss';

interface IMapProps {
  coords: [number, number];
  title: string;
  zoom?: number;
}

const customIcon: Icon = L.icon({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  // shadowUrl: '/leaflet/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map: FC<IMapProps> = ({ coords, title, zoom = 16 }) => {
  return (
    <div className={s.map}>
      <MapContainer
        center={coords}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution=''
        />
        <Marker position={coords} icon={customIcon}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
