import React, { useEffect, useState } from "react";
import {CSVLink} from 'react-csv';


const ExcelFile = ({data}) => {
    return (
        <>
           <Document>
           <table className="table table-bordered text-white">
                <thead>
                    <tr>
                        <th colSpan={2}>PIC</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr>
                        <th colSpan={2}>Program</th>
                    </tr>
                    <tr>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <table className="mt-10 table table-bordered text-white">
                <thead>
                    <tr>
                        <th>Project</th>
                    </tr>
                    <tr>
                        <th>Kategori</th>
                    </tr>
                    <tr>
                        <th>Destinasi</th>
                    </tr>
                    <tr>
                        <th>Durasi</th>
                    </tr>
                    <tr>
                        <th>QTY</th>
                    </tr>
                    <tr>
                        <th>FOC</th>
                    </tr>
                    <tr>
                        <th>Waktu</th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-10">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Item</th>
                        <th>Harga</th>
                        <th>Qty</th>
                        <th>Hari</th>
                        <th>Jumlah</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>A</th>
                        <th colSpan={7}>Destinasi Wisata</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Dufan</th>
                        <th>250000</th>
                        <th>10</th>
                        <th>1</th>
                        <th>2500000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>B</th>
                        <th colSpan={7}>Transportasi</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Primajasa</th>
                        <th>2500000</th>
                        <th>1</th>
                        <th>1</th>
                        <th>25000000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>C</th>
                        <th colSpan={7}>Penginapan</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Dufan</th>
                        <th>250000</th>
                        <th>10</th>
                        <th>1</th>
                        <th>2500000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>D</th>
                        <th colSpan={7}>Makan dan Minum</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Dufan</th>
                        <th>250000</th>
                        <th>10</th>
                        <th>1</th>
                        <th>2500000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>E</th>
                        <th colSpan={7}>Fasilitas Tour</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Dufan</th>
                        <th>250000</th>
                        <th>10</th>
                        <th>1</th>
                        <th>2500000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>F</th>
                        <th colSpan={7}>Fasilitas Peserta</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Dufan</th>
                        <th>250000</th>
                        <th>10</th>
                        <th>1</th>
                        <th>2500000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>G</th>
                        <th colSpan={7}>Crew</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Dufan</th>
                        <th>250000</th>
                        <th>10</th>
                        <th>1</th>
                        <th>2500000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>H</th>
                        <th colSpan={7}>Event</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Dufan</th>
                        <th>250000</th>
                        <th>10</th>
                        <th>1</th>
                        <th>2500000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th>I</th>
                        <th colSpan={7}>Bonus</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Dufan</th>
                        <th>250000</th>
                        <th>10</th>
                        <th>1</th>
                        <th>2500000</th>
                        <th>Weekend</th>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered text-white mt-5">
                <thead>
                    <tr>
                        <th colSpan={2}></th>
                        <th>Nett Price</th>
                        <th colSpan={2}>Pax is Pay</th>
                        <th></th>
                        <th>Total Price</th>
                        <th>Profit</th>
                    </tr>
                    <tr>
                        <th>Production Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan={2}></th>
                        <th>100000</th>
                        <th colSpan={2}>10</th>
                        <th></th>
                        <th>1000000</th>
                        <th>2500000</th>
                    </tr>
                </tbody>
            </table>
           </Document>
        </>
        );
};
export default ExcelFile;