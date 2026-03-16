import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-10 lg:px-16">
      <img
        src="/aboutsection.png"
        alt="Services Image"
        className="absolute left-[-10%] bottom-0 h-[80vh] object-contain z-10 pointer-events-none"
      />

      {/* Main Container - Dark, Super Rounded, Flex Layout */}
      <div className="max-w-7xl mx-auto bg-gray-700/20 relative overflow-visible rounded-[3.5rem]  flex flex-col md:flex-row items-end justify-between gap-12 border border-neutral-800">
        {/* Decorative Gradient Background (Opsional, untuk depth) */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* --- Left Side: Content --- */}
        <div className="relative z-10 max-w-xl text-left flex flex-col items-start p-10 md:p-16 lg:p-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-6 tracking-tight">
            Ready to Bring Your Ideas to Life?
          </h2>

          <p className="text-neutral-400 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-lg">
            From conceptual design to seamless development. Let&apos;s create
            meaningful digital experiences together.
          </p>

          {/* Button CTA ala Gambar (Putih, Teks Hitam, Icon Panah) */}
          <a
            href="mailto:kanacreative@email.com"
            className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold text-base transition-all duration-300 hover:bg-neutral-200 transform hover:scale-105"
          >
            Start a Project
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* --- Right Side: Image Showcase --- */}
        <div className="relative z-10 w-full md:w-1/2 h-[350px] md:h-[450px] lg:h-[500px] flex justify-end items-end">
          {/* GANTI PATH GAMBAR DI SINI */}
          {/* Gunakan gambar .png transparan, misalnya mockup HP/Tablet yang estetik */}
          <img
            src="phonecontact.png"
            alt="Kana Creative Project Mockup"
            className="absolute bottom-0 right-0 h-[130%] object-contain object-right"
          />

          {/* Elemen Floating Kecil untuk Detail (Opsional, ala gambar asli) */}
          {/* Contoh: Kartu transparan kecil di belakang gambar utama */}
          <div className="absolute -left-10 top-1/4 w-48 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hidden xl:block -rotate-6 shadow-xl">
            <div className="flex gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-neutral-800 border border-white/5" />
              <div className="w-16 h-3 bg-white/10 rounded mt-1" />
            </div>
            <div className="w-full h-3 bg-white/10 rounded mb-2" />
            <div className="w-24 h-3 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
