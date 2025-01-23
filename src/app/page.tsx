import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div  className="container relative scroll-smooth">
      {/* Container gambar dengan overlay gradasi */}
      <div className="relative h-screen" id="home">
        {/* Gambar background */}
        <Image alt="header" src="/header.jpg" fill className="object-cover" />

        {/* Overlay gradasi atas dan bawah */}
        <div className="absolute inset-0 bg-gradient-to-t   from-violet-100/50 via-black/10 to-transparent"></div>

        {/* Konten teks di atas gambar */}
        <div className="absolute inset-0 bottom-44 flex gap-y-4 flex-col justify-center pl-12">
          <h1 className="text-5xl text-orange-300 mb-4 drop-shadow-">
            Judul Besar
          </h1>
          <h4 className="text-white w-[800px] mix-blend-difference">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            molestiae provident veniam voluptates dolores facilis expedita eaque
            magnam dicta iusto. Quasi veritatis id ullam est fugit fuga, labore
            sapiente consequatur!
          </h4>
          <div>
            <Button className="bg-violet-700 first:hover:bg-white hover:text-black text-white">
              Ayo Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>

      {/* about-us */}
      <section id="about-us" className="pt-8 px-8">
        <div className="items-center text-center py-10">
          <h1 className="text-3xl  font-bold mb-4">
            Tentang <span className="text-violet-700">Kami</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="relative w-1/2 h-[300px]">
            <Image
              alt="about-us"
              src="/about-us.jpg"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 align-middle items-center my-auto">
            <p className="text-black ml-5 font-semibold text-xl">
              Kenapa kami?
            </p>
            <p className="text-lg text-gray-700 ml-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              culpa ipsum? Sequi debitis adipisci rerum. Ipsam fuga
              exercitationem vel animi aut veritatis deleniti inventore illo
              reiciendis cum nulla, voluptatum molestiae.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact-us"
        className="bg-gradient-to-b from-white via-white/80 to-violet-100 backdrop-blur-lg"
      >
        <div className="flex flex-col mx-auto align-middle items-center my-auto pt-20">
          <h1 className="text-3xl  font-bold mb-4">
            Kontak <span className="text-violet-700">Kami</span>
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-700 pl-10 ml-5">
            Alamat Kami :
          </h1>
        </div>
        <div className="flex flex-row pl-10 ml-5 space-y-5 p-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.3889983583654!2d98.65786500862245!3d3.5661561963930537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031302750a7b3c3%3A0x281f29cf894a500b!2sUSU%2C%20Jl.%20Universitas%2C%20Padang%20Bulan%2C%20Kec.%20Medan%20Baru%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020155!5e1!3m2!1sid!2sid!4v1737527734838!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg h-[50vh] w-[50%] object-cover"
            title="Google Maps"
          ></iframe>
          <form action="" className="space-y-5 mx-auto">
            <h1>Kirim Pesan Anda :</h1>
            <div className="input-group flex gap-5 items-center align-center ">
              <i>
                <FaUser />
              </i>
              <input type="text" placeholder="name" className="rounded-sm" />
            </div>
            <div className="input-group flex gap-5 items-center align-center">
              <i>
                <MdEmail />
              </i>
              <input type="email" placeholder="email" className="rounded-sm" />
            </div>
            <div className="input-group flex gap-5 items-center align-center">
              <i>
                <FaPhoneAlt />
              </i>
              <input type="number" placeholder="no hp" className="rounded-sm" />
            </div>
            <Button
              type="submit"
              className="btn bg-violet-700 hover:bg-green-300 hover:text-black"
            >
              Kirim Pesan
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
