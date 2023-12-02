/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import Image from "next/image";
import logoSeeker from "../../../../public/assets/logo-ver-akhir.png";
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
              <span className="font-semibold text-2xl">+320</span> <br />{" "}
              Companys
            </div>
            <div>
              <span className="font-semibold text-2xl">+400</span> <br /> Jobs
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
      <section className="bg-blue-harits w-full flex justify-center items-center py-32 ">
        <div className="container mx-auto">
          <div className="h-80 w-full flex justify-between items-center p-10 shadow-md rounded-md text-blue-harits-dark bg-white">
            <div className="w-1/5 flex flex-col gap-2">
              <h2 className="text-3xl font-semibold ml-12">Seeker?</h2>
              {/* <span className="text-sm">
                Komitmen DomaiNesia mulai dari pertanyaan pra penjualan hingga
                dukungan purna jual untuk layanan cloud hosting Indonesia.
              </span> */}
              <Image
                src={logoSeeker}
                alt=""
                width={200}
                height={100}
                className="justify-center"
              />
            </div>
            <div className="w-1/4 flex flex-col gap-2 p-4 border-2 border-l-0 border-t-0 border-b-0 border-r-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-16 h-16 text-blue-harits-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <span>100K Perusahaan Terpercaya</span>
              <span className="text-sm">
                Kami telah membangun kepercayaan dengan seratus ribu lebih
                perusahaan ternama yang berkontribusi besar baik secara lokal
                maupun global
              </span>
            </div>
            <div className="w-1/4 flex flex-col gap-2 p-4 border-2 border-l-0 border-t-0 border-b-0 border-r-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-16 h-16 text-blue-harits-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>

              <span>20 Juta Talenta</span>
              <span className="text-sm">
                Jutaan talenta terbaik sudah terukir. Bersama Seeker, kami
                sangat mendukung segala jenjang karir untuk segala lini keahlian
                yang kompeten
              </span>
            </div>
            <div className="w-1/4 flex flex-col gap-2 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-16 h-16 text-blue-harits-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>

              <span>Kualitas Terhadap Kuantitas</span>
              <span className="text-sm">
                Kami fokus pada kualitas pekerjaan daripada jumlah. Setiap
                peluang yang dipublikasikan di Seeker telah dipilih dengan ketat
                untuk keandalan dan relevansinya.
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
                <Image
                  src={program.icons}
                  className={`${
                    program.name === "Mobile Dev"
                      ? "w-72"
                      : "w-20"
                  } h-20`}
                />
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
