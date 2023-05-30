import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import tourItenary from "../../../../public/assets/borobudur.jpg";
import { wrap } from "lodash";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Times-Roman",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page
        className={styles.body}
        style={{ paddingHorizontal: 60, paddingVertical: 60 }}
      >
        <Text
          style={{
            fontSize: "20",
            paddingBottom: "5",
            fontWeight: "bold",
            textAlign: "right",
          }}
          className={styles.header}
        >
          01
        </Text>
        <Text
          style={{ fontSize: "36", fontWeight: "bold", marginBottom: "30" }}
          className={styles.header}
        >
          Jelajah {"\n"} Yogyakarta
        </Text>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "col", flexWrap: "wrap", flex: 1 }}>
              <Text className={styles.header}>Higlight: </Text>
             
                <Text className={styles.header} style={{ fontSize: "12" }}>
                  Hari ke 1: Opening Ceremony, Goes to Jogjakarta
                </Text>
                <Text className={styles.header} style={{ fontSize: "12" }}>
                  Hari ke 2: Kunjungan Industri, Candi Prambanan, Jalan
                  Malioboro
                </Text>
                <Text
                  className={styles.header}
                  style={{ fontSize: "12", marginBottom: "30" }}
                >
                  Hari ke 3: Bakpia Pathok 25, Merapi Lava Tour, Closing
                  Ceremony
                </Text>

                <Text className={styles.header}>Paket Sudah Termasuk</Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Fasilitas Transportasi
                </Text>
                <Text className={styles.header} style={{ fontSize: "12" }}>
                  Bus Pariwisata JB 3+ , Tahun 2019-2022, Kapasitas 48-50 Kursi
                </Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Fasilitas Hotel
                </Text>
                <Text className={styles.header} style={{ fontSize: "12" }}>
                  Hotel Merapi Merbabu / Hotel setara bintang 4
                </Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Fasilitas Makan
                </Text>
                <Text className={styles.header} style={{ fontSize: "12" }}>
                  3x Air Mineral, 1x Welcome Snack, 7x Makan
                </Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Fasilitas Tour
                </Text>
                <Text className={styles.header} style={{ fontSize: "12", marginBottom: "30" }}>
                  Tiket Masuk sesuai program, Kaos Kegiatan, Tour Leader,
                  Photographer, Parkir, Tol, P3K
                </Text>

                <Text className={styles.header}>Bonus</Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Bonus Tour
                </Text>
                <Text className={styles.header} style={{ fontSize: "12" }}>
                  Free untuk 3 orang pendamping, Doorprize, Soft File
                  Dokumentasi, Banner Kegiatan, Banner Bus, Video Kegiatan,
                  Poster Kegiatan, Cetak Foto Besar, Foto Kenangan Tiap Peserta
                </Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Bonus Pendidikan
                </Text>
                <Text className={styles.header} style={{ fontSize: "12", marginBottom: "40" }}>
                  Dicarikan industri sesuai dengan jurusan, Semianr
                  penghembangan karakter, karir, atau kewirausahaan
                </Text>

                <Text className={styles.header}>Harga</Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Untuk minimal peserta 250 orang
                </Text>

                <Text
                  style={{ fontSize: "24", fontWeight: "bold" }}
                  className={styles.header}
                >
                  RP. 799.000/Pax
                </Text>
              </View>
              <View style={{ flexDirection: "col" }}>
                <Image
                  className={styles.image}
                  src={tourItenary}
                  style={{ width: "150px", height: "580px" }}
                />
              </View>
            </View>
          </div>
        </div>
      </Page>
    </Document>
  );
};

export default PDFFile;
