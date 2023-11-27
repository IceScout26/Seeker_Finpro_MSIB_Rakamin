/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import Image from "next/image";
import logoKM from "../../../../public/assets/LP/logos/km.png";
import logoRakamin from "../../../../public/assets/LP/logos/rakamin.png";
import logoGojek from "../../../../public/assets/LP/logos/gojek.png";
import logoIndofood from "../../../../public/assets/LP/logos/indofood.png";
import logoAxioo from "../../../../public/assets/LP/logos/axioo.png";
import avatar from "../../../../public/assets/horror.jpeg";
import frontend from "../../../../public/assets/home/hero-fe.png";
import backend from "../../../../public/assets/home/hero-be.png";
import datascience from "../../../../public/assets/home/hero-ds.png";
import uiux from "../../../../public/assets/home/hero-ui.png";
import mobileDev from "../../../../public/assets/home/hero-mb.png";
import engineer from "../../../../public/assets/home/hero-eng.png";
import dhimas from "../../../../public/assets/dev/dhimas.jpg";
import elbert from "../../../../public/assets/dev/elbert.jpg";
import dafa from "../../../../public/assets/dev/dafa.jpg";
import iqbal from "../../../../public/assets/dev/iqbal.jpg";
import harits from "../../../../public/assets/dev/harits.jpg";
import gerry from "../../../../public/assets/dev/gerry.jpg";

export default async function UserHome() {
  const companyLogos = [
    {
      name: "Kampus Merdeka",
      logo: logoKM,
      width: "w-32",
      height: "h-16",
    },
    {
      name: "Rakamin",
      logo: logoRakamin,
      width: "w-32",
      height: "h-12",
    },
    {
      name: "Gojek",
      logo: logoGojek,
      width: "w-32",
      height: "h-8",
    },
    {
      name: "Indofood",
      logo: logoIndofood,
      width: "w-32",
      height: "h-12",
    },
    {
      name: "Axioo",
      logo: logoAxioo,
      width: "w-32",
      height: "h-20",
    },
  ];

  const programs = [
    {
      icons: frontend,
      name: "Front End",
      desc: "Temukan potensi kreatif Anda dalam pengembangan Front End melalui program ini, yang menawarkan pembelajaran mendalam tentang HTML, CSS, dan JavaScript untuk menciptakan antarmuka pengguna yang menakjubkan dan responsif.",
    },
    {
      icons: backend,
      name: "Back End",
      desc: "Jelajahi kekuatan pengembangan Back End dengan kursus ini, yang mengajarkan pemrograman server-side, manajemen database, dan keterampilan server untuk membuat aplikasi web yang kuat dan efisien.",
    },
    {
      icons: mobileDev,
      name: "Mobile Dev",
      desc: "Program ini memandu Anda dalam perjalanan menciptakan aplikasi mobile inovatif. Mulai dari konsep dasar hingga pengembangan aplikasi cross-platform, Anda akan menguasai keterampilan yang diperlukan untuk berkontribusi pada dunia mobile development.",
    },
    {
      icons: uiux,
      name: "UI/UX",
      desc: "Jangan hanya membuat desain yang cantik, tetapi juga fungsional! Program UI/UX ini membimbing Anda dalam menciptakan pengalaman pengguna yang luar biasa dengan menggabungkan desain yang menarik dengan fungsionalitas yang intuitif.",
    },
    {
      icons: datascience,
      name: "Data Science",
      desc: "Dengan program ini, Anda akan mendalami dunia ilmu data, dari analisis statistik hingga pembelajaran mesin. Peroleh keterampilan yang diperlukan untuk menggali wawasan berharga dari kumpulan data besar dan kompleks.",
    },
    {
      icons: engineer,
      name: "Data Engineer",
      desc: "Pelajari seni mengelola dan mengolah data secara efisien. Program Data Engineer ini akan membekali Anda dengan pengetahuan tentang pengelolaan basis data, infrastruktur data, dan alat-alat modern yang diperlukan untuk membangun fondasi digital yang kokoh.",
    },
  ];

  const members = [
    {
      pict: elbert,
      name: "ELBERT DICKY ARISTYO",
      role: "Back End Developer",
      quotes: "abcdef",
    },
    {
      pict: dafa,
      name: "DAFA WIRA YUDA",
      role: "Front End Developer",
      quotes: "abcdef",
    },
    {
      pict: dhimas,
      name: "DHIMAS TYAS GRANADI",
      role: "Back End Developer",
      quotes: "abcdef",
    },
    {
      pict: gerry,
      name: "GERI ISLAMI GUNAWAN",
      role: "Front End Developer",
      quotes: "abcdef",
    },
    {
      pict: harits,
      name: "HARITS TAQIY WIBOWO",
      role: "UI/UX Designer",
      quotes: "abcdef",
    },
    {
      pict: iqbal,
      name: "MUHAMMAD IQBAL FALID",
      role: "Front End Developer",
      quotes: "abcdef",
    },
    {
      pict: avatar,
      name: "RIZKY HADI",
      role: "UI/UX Designer",
      quotes: "abcdef",
    },
  ];

  return (
    <div className="bg-white">
      <section
        className="h-[calc(100vh-80px)] w-screen bg-cover bg-right contrast-150"
        style={{ backgroundImage: `url('../../assets/LP/hero-bg.jpg')` }}
      >
        <div className="bg-gray-700 h-[calc(100vh-80px)] bg-opacity-50 p-8 flex flex-col items-center justify-center">
          <div className="w-4/6 h-60 border-2 border-white rounded-md text-white text-center py-4 px-10 mt-44">
            {/* <h2 className='font-semibold text-xl'>Job Seeker 2023</h2> */}
            <h1 className="text-4xl font-bold">
              Seek your dream job easily with SEEKER.
            </h1>
            <h3 className="text-2xl font-semibold mt-4">
              Explore thousands of latest job openings across various industries
              directly from our front page, and kickstart your career journey
              today
            </h3>
          </div>
          <div className="flex justify-between items-center w-3/6 h-32 -translate-y-16 bg-white rounded-md text-center py-4 px-10">
            <div>
              <span className="font-semibold text-2xl">+320</span> <br /> Jobs
            </div>
            <div>
              <span className="font-semibold text-2xl">+400</span> <br />{" "}
              Companys
            </div>
            <div>
              <span className="font-semibold text-2xl">+500</span> <br /> Users
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto text-center py-32">
        <h2 className="text-xl">
          Dapatkan Kesempatan Dilirik oleh Perusahaan ternama <br /> dengan
          membangun personal branding terbaikmu
        </h2>
        <div className="flex gap-8 justify-center items-center mt-8">
          {companyLogos.map((logo, id) => {
            return (
              <div className="border border-gray-200 rounded-md shadow-sm bg-white h-24 w-48 flex justify-center items-center">
                <Image
                  src={logo.logo}
                  key={id}
                  alt=""
                  srcSet=""
                  className={logo.width + " " + logo.height}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-blue-harits bg-opacity-20 w-full flex justify-center items-center py-32">
        <div className="container mx-auto">
          <div className="h-80 w-full flex justify-between items-center p-10 shadow-md rounded-md bg-white">
            <div className="w-1/5 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">
                Dukungan & Garansi Purna Jual
              </h2>
              <span className="text-sm">
                Komitmen DomaiNesia mulai dari pertanyaan pra penjualan hingga
                dukungan purna jual untuk layanan cloud hosting Indonesia.
              </span>
            </div>
            <div className="w-1/4 flex flex-col gap-2 p-4 border-2 border-l-0 border-t-0 border-b-0 border-r-yellow-rizky">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-16 h-16 text-yellow-rizky"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
              <span>Bantuan TimSupport 24/7</span>
              <span className="text-sm">
                Anda berhak mendapat pelayanan terbaik dari seluruh tim
                DomaiNesia, kami selalu siap 24/7 untuk membantu Anda.
              </span>
            </div>
            <div className="w-1/4 flex flex-col gap-2 p-4 border-2 border-l-0 border-t-0 border-b-0 border-r-yellow-rizky">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-16 h-16 text-yellow-rizky"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span>Bantuan TimSupport 24/7</span>
              <span className="text-sm">
                Anda berhak mendapat pelayanan terbaik dari seluruh tim
                DomaiNesia, kami selalu siap 24/7 untuk membantu Anda.
              </span>
            </div>
            <div className="w-1/4 flex flex-col gap-2 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-16 h-16 text-yellow-rizky"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <span>Bantuan TimSupport 24/7</span>
              <span className="text-sm">
                Anda berhak mendapat pelayanan terbaik dari seluruh tim
                DomaiNesia, kami selalu siap 24/7 untuk membantu Anda.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-32 px-5">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Program Unggulan Kami</h2>
          <p className="mt-2">
            Kembangkan Keterampilan Anda dengan Mentor Ahli dan Proyek Pekerjaan
            Nyata!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {programs.map((program, id) => {
            return (
              <div key={id} className="flex gap-4 items-start justify-start">
                <Image src={program.icons} className="w-20 h-20" />
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold">{program.name}</span>
                  <span>{program.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container mx-auto pt-16 pb-32">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">People of This Web App</h2>
          <p className="mt-2">Kelompok 3B Full Stack Web Development</p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {members.map((member, id) => {
            return (
              <div
                key={id}
                className="w-72 flex flex-col items-center justify-center"
              >
                <Image
                  src={member.pict}
                  className="w-20 h-20 rounded-full translate-y-10"
                />
                <div className="flex flex-col gap-1 items-center w-full h-48 bg-white shadow-lg border py-14">
                  <span className="text-lg font-semibold">{member.name}</span>
                  <span>{member.role}</span>
                  <span className="italic">'{member.quotes}'</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
