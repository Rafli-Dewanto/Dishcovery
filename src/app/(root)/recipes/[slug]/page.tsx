import React from "react";

const RecipeDetail: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-semibold mb-4">Nama Resep</h1>

      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
        tincidunt turpis, id gravida justo mollis ut. Nulla facilisi. Vivamus
        bibendum justo non mauris vestibulum, in ultricies velit dictum.
      </p>

      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <p className="text-gray-600">20 menit</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <p className="text-gray-600">4 porsi</p>
        </div>
      </div>

      <img
        src="gambar-resep.jpg"
        alt="Gambar Resep"
        className="w-full h-64 object-cover mb-6 rounded-md"
      />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Bahan-bahan:</h2>
        <ul className="list-disc list-inside">
          <li>
            Bahan 1 <span className="text-gray-500">(100 kalori)</span>
          </li>
          <li>
            Bahan 2 <span className="text-gray-500">(50 kalori)</span>
          </li>
          <li>
            Bahan 3 <span className="text-gray-500">(30 kalori)</span>
          </li>
          {/* Tambahkan bahan-bahan lainnya */}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Alat-alat:</h2>
        <ul className="list-disc list-inside">
          <li>Alat 1</li>
          <li>Alat 2</li>
          <li>Alat 3</li>
          {/* Tambahkan bahan-bahan lainnya */}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Informasi Porsi:</h2>
        <p className="text-gray-600">4 porsi</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Langkah-langkah:</h2>
        <ol className="list-decimal list-inside">
          <li>Langkah 1</li>
          <li>Langkah 2</li>
          <li>Langkah 3</li>
          {/* Tambahkan langkah-langkah lainnya */}
        </ol>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Komentar:</h2>
        {/* Tambahkan komponen atau logika untuk menampilkan komentar */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-600">Belum ada komentar.</p>
        </div>
        {/* Tambahkan formulir komentar atau komponen komentar di sini */}
      </div>
    </div>
  );
};

export default RecipeDetail;
