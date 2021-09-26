import { FC } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./WitcherShopsMapSection.scss";
import witcherIconExample from "../../assets/images/witcherMarker.png";

const witcherIcon = new L.Icon({
  iconUrl: witcherIconExample,
  iconRetinaUrl: witcherIconExample,
});

const WitcherShopsMapSection: FC = () => {
  return (
    <div className={styles.witcherShopsMapSection}>
      <div className={styles.titleBlock}>
        <h3 className={styles.title}>Магазины мерча ведьмака</h3>
      </div>
      <div className={styles.googleMapBlock}>
        <MapContainer
          style={{ width: "100%", height: "100%", filter: "grayscale(50%)" }}
          center={[51.505, -0.09]}
          zoom={7}
          scrollWheelZoom={true}
        >
          <TileLayer className={styles.tileLayer} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          <Marker position={[51.505, -0.09]} icon={witcherIcon}>
            <Popup>
              Лавка Ведьмака
            </Popup>
          </Marker>

          <Marker position={[50.505, 23.09]} icon={witcherIcon}>
            <Popup>
              Лавка Ведьмака
            </Popup>
          </Marker>

          <Marker position={[55.505, 10.09]} icon={witcherIcon}>
            <Popup>
              Лавка Ведьмака
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default WitcherShopsMapSection;
