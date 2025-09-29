import React from 'react';
import gambar from "../public/teposrina.jpg";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
      <div className="w-60 h-20 my-13">
        <img
          src={gambar}
          alt="Profile"
          className="rounded-full -my-12 overflow-hidden border-4 border-cyan-400 shadow-md rounded-full"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-cyan-600 mb-2">Darren</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Hai, perkenalkan nama saya <span className="font-semibold text-cyan-500 underline">Darren</span>. Saya adalah seorang <span className="font-semibold">programmer</span> dan <span className="font-semibold">editor</span>. 
          <br /><br />
          Dalam dunia pemrograman, saya biasa membuat proyek seperti tabel, kalkulator, dan landing page. Sementara dalam editing, saya fokus pada pembuatan iklan, cinematic, motion graphic (mograph), dan masih banyak lagi.
        </p>
      </div>
    </div>
  );
};

export default Profile;
