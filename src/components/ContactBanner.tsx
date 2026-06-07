export default function ContactBanner() {
  return (
    <section className="bg-accent py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="text-white font-bold text-lg md:text-xl tracking-wide">
          ☏ 02-365-0500
        </p>
        <span className="hidden sm:block w-px h-6 bg-white/30" />
        <p className="text-white/90 font-medium">
          카카오톡:{" "}
          <span className="font-bold text-white">@영국유학센터신촌</span>
        </p>
        <span className="hidden sm:block w-px h-6 bg-white/30" />
        <a
          href="#contact"
          className="bg-white text-accent font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          빠른 상담 신청
        </a>
      </div>
    </section>
  );
}
