import React, { useEffect, useState } from 'react';
import {
    PDFViewer,
    Page,
    Text,
    Image,
    Document,
    StyleSheet,
    View,
  } from "@react-pdf/renderer";
  import tourItenary from "../../../../public/assets/borobudur.jpg";
import { forEach, wrap } from "lodash";
import {Font} from '@react-pdf/renderer';
import MyCustomFont from '../../../../public/assets/fonts/Roboto-Regular.ttf'
import number from "@/Components/number";

Font.register({
    family: 'Roboto',
    src: MyCustomFont
})

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

const MyPDFViewer = ({data}) => {
console.log('data PDF', data)

const [destinasiDurasi, setDestinasiDurasi] = useState('');
const Destinasi = () => {
    const durasi = data.data.quotation.durasiProject;
    
    if (durasi) {
      const destinasis = data.destinasi.map((ds) => ds.namaTdestinasiWisata);
      setDestinasiDurasi(`${destinasis.join(', ')}`);
    } 
};

const rumahMakan = () => {
    const airmineral = data.rm.find((dtr) => {
        return 'Air Mineral' === dtr.namaTrm;
    });
    const snack = data.rm.find((dtr) => {
        return 'Welcome Snack' === dtr.namaTrm;
    });
    const makanan = data.rm.filter((dtr) => {
        return dtr.namaTrm !== 'Welcome Snack' && dtr.namaTrm !== 'Air Mineral';
    }).length;
    // console.log('airmineral', airmineral)
    // console.log('snack', snack)
    // console.log('makanan', makanan)
    let rumahMakanElement = null;

  if (airmineral) {
    if (snack) {
      if (makanan) {
        rumahMakanElement = (
          <Text className={styles.header} style={{ fontSize: "12" }}>
            {airmineral.hari}x {airmineral.namaTrm}, {snack.hari}x {snack.namaTrm}, {makanan}x Makan
          </Text>
        );
      } else {
        rumahMakanElement = (
          <Text className={styles.header} style={{ fontSize: "12" }}>
            {airmineral.hari}x {airmineral.namaTrm}, {snack.hari}x {snack.namaTrm}
          </Text>
        );
      }
    } else {
      if (makanan) {
        rumahMakanElement = (
          <Text className={styles.header} style={{ fontSize: "12" }}>
            {airmineral.hari}x {airmineral.namaTrm}, {makanan}x Makan
          </Text>
        );
      } else {
        rumahMakanElement = (
          <Text className={styles.header} style={{ fontSize: "12" }}>
            {airmineral.hari}x {airmineral.namaTrm}
          </Text>
        );
      }
    }
  } else {
    if (snack) {
      if (makanan) {
        rumahMakanElement = (
          <Text className={styles.header} style={{ fontSize: "12" }}>
            {snack.hari}x {snack.namaTrm}, {makanan}x Makan
          </Text>
        );
      } else {
        rumahMakanElement = (
          <Text className={styles.header} style={{ fontSize: "12" }}>
            {snack.hari}x {snack.namaTrm}
          </Text>
        );
      }
    } else {
      if (makanan) {
        rumahMakanElement = (
          <Text className={styles.header} style={{ fontSize: "12" }}>
            {makanan}x Makan
          </Text>
        );
      }
    }
  }

  return rumahMakanElement;
}

const [fasilitas, setFasilitas] = useState('');
const fasilitasTour = () => {
      const fasilitass = data.fasilitas.map((ds) => ds.namaTft);
      setFasilitas(`${fasilitass.join(', ')}`);
};

useEffect(() => {
    Destinasi();
    rumahMakan();
    fasilitasTour();
}, []);

console.log('data', data)

  return (
    <PDFViewer style={{ width: '500px', height: '500px' }}>
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
          style={{ fontSize: "36", fontWeight: "black", marginBottom: "30", fontFamily:"Roboto" }}
          className={styles.header}
        >
          {data.data.quotation.namaProject}
        </Text>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "col", flexWrap: "wrap", flex: 1 }}>
              <Text className={styles.header}>Higlight: </Text>
              <Text className={styles.header} style={{ fontSize: "12", marginBottom: "20"  }}>
                {destinasiDurasi}
              </Text>

                { data.transportasi.length !== 0 || data.penginapan.length !== 0 || data.rm.length !== 0 || data.fasilitas.length !== 0 ? (
                    <div className='pt-10'>
                        <Text className={styles.header}>Paket Sudah Termasuk</Text>
                        {data.transportasi.length !== 0 && (
                        <>
                            <Text className={styles.header} style={{ fontSize: "14" }}>
                            Fasilitas Transportasi
                            </Text>
                            {data.transportasi.map((tr) => {
                            const detailTransportasi = tr.transportasi.detail_transportasi.find((dtr) => {
                                return dtr.nama === tr.namaTtransportasi;
                            });

                            if (detailTransportasi) {
                                return (
                                <Text className={styles.header} style={{ fontSize: "12" }}>
                                    {detailTransportasi.nama}, Tahun {detailTransportasi.tahun}, Kapasitas {detailTransportasi.kapasitas} Kursi
                                </Text>
                                );
                            }
                            return null; // Return null if detailTransportasi is not found
                            })}
                        </>
                        )}

                        {data.penginapan.length !== 0 && (
                        <>
                            <Text className={styles.header} style={{ fontSize: "14" }}>
                            Fasilitas Hotel
                            </Text>
                            {data.penginapan.map((tr) => (
                            <Text className={styles.header} style={{ fontSize: "12" }}>
                                {tr.penginapan.namaPenginapan} / Hotel setara bintang {tr.penginapan.bintangPenginapan}
                            </Text>
                            ))}
                        </>
                        )}

                        {data.rm.length !== 0 && (
                        <>
                            <Text className={styles.header} style={{ fontSize: "14" }}>
                            Fasilitas Makan
                            </Text>
                            {rumahMakan()}
                        </>
                        )}

                        {data.fasilitas.length !== 0 && (
                            <>
                                <Text className={styles.header} style={{ fontSize: "14" }}>
                                Fasilitas Tour
                                </Text>
                                <Text className={styles.header} style={{ fontSize: "12", marginBottom: "30" }}>
                                {fasilitas}
                                </Text>
                            </>
                        )}
                    </div>
                ): null}

                <Text className={styles.header}>Bonus</Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Bonus Tour
                </Text>
                <Text className={styles.header} style={{ fontSize: "12" }}>
                  Free untuk {data.data.quotation.foc} orang pendamping,
                </Text>
                {data.bonus !== null && (
                <>
                    {data.bonus.map((tr) => (
                        <Text className={styles.header} style={{ fontSize: "12" }}>
                            {tr.namaTbonus}
                        </Text>
                    ))}
                </>
                )}

                <Text className={styles.header} style={{ fontSize: "14" }}>
                  
                </Text>
                <Text className={styles.header} style={{ fontSize: "12", marginBottom: "40" }}>
                  
                </Text>

                <Text className={styles.header}>Harga</Text>
                <Text className={styles.header} style={{ fontSize: "14" }}>
                  Untuk minimal peserta {data.data.q_transaksi.paxPay} orang
                </Text>

                <Text
                  style={{ fontSize: "24", fontWeight: "bold" }}
                  className={styles.header}
                >
                  Rp.{number(data.data.q_transaksi.sellingPrice)}/pax
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
    </PDFViewer>
  );
};

export default MyPDFViewer;