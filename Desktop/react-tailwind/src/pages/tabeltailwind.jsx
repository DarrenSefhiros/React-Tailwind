import React from 'react'
import { Table } from 'react-bootstrap';

function Tabeltailwind() {


    const data2 = [
        { id: 1, nama_lengkap: "andre nicholas", nama_belakang: "nicholas", username: "andi"},
        { id: 2, nama_lengkap: "ayas ashadullah bilqis", nama_belakang: "bilqis", username: "yuya"},
        { id: 3, nama_lengkap: "andre nicholas", nama_belakang: "nicholas", username: "andi"},
    ];
    return(
        <div className='grid grid-cols-3 -gap-4'>
            <div>
            <h5>
                Tabel 1
            </h5>
            <Table className="border-separate border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-300">full name</th>
                    <th className="border border-gray-300">Last Name</th>
                    <th className="border border-gray-300 ">Username</th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item) =>(
                    <tr>
                        <td  className="border border-gray-300">{item.nama_lengkap}</td>
                        <td  className="border border-gray-300">{item.nama_belakang}</td>
                        <td  className="border border-gray-300 m-8">{item.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
             </div>
                    <div>
            <h5>
                Tabel 2
            </h5>
            <Table className="border-separate border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-300">full name</th>
                    <th className="border border-gray-300">Last Name</th>
                    <th className="border border-gray-300 ">Username</th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item) =>(
                    <tr>
                        <td  className="border border-gray-300">{item.nama_lengkap}</td>
                        <td  className="border border-gray-300">{item.nama_belakang}</td>
                        <td  className="border border-gray-300 m-8">{item.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
             </div>
                 <div>
            <h5>
                Tabel 3
            </h5>
            <Table className="border-separate border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-300">full name</th>
                    <th className="border border-gray-300">Last Name</th>
                    <th className="border border-gray-300 ">Username</th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item) =>(
                    <tr>
                        <td  className="border border-gray-300">{item.nama_lengkap}</td>
                        <td  className="border border-gray-300">{item.nama_belakang}</td>
                        <td  className="border border-gray-300 m-8">{item.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
             </div>
                 <div>
            <h5>
                Tabel 4
            </h5>
            <Table className="border-separate border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-300">full name</th>
                    <th className="border border-gray-300">Last Name</th>
                    <th className="border border-gray-300 ">Username</th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item) =>(
                    <tr>
                        <td  className="border border-gray-300">{item.nama_lengkap}</td>
                        <td  className="border border-gray-300">{item.nama_belakang}</td>
                        <td  className="border border-gray-300 m-8">{item.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
             </div>
                 <div p-6>
            <h5>
                Tabel 5
            </h5>
            <Table className="border-separate border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-300">full name</th>
                    <th className="border border-gray-300">Last Name</th>
                    <th className="border border-gray-300 ">Username</th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item) =>(
                    <tr>
                        <td  className="border border-gray-300">{item.nama_lengkap}</td>
                        <td  className="border border-gray-300">{item.nama_belakang}</td>
                        <td  className="border border-gray-300 m-8">{item.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
             </div>
        </div>
    
    )
}

export default Tabeltailwind