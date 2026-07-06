import SearchBar from "@/components/SearchBar/SearchBar";

export default function Banner() {
  return (
    <div className="bg-[#5A189A] w-full py-10 px-4 flex flex-col items-center gap-4">
      <h1 className="text-white text-4xl font-bold">Central de Ajuda</h1>
      <p className="text-white/80 text-base">
        Encontre as informações que você precisa.
      </p>
      <SearchBar />
    </div>
  );
}
