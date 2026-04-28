"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaFileAlt } from "react-icons/fa";

interface TopicItem {
  label: string;
  href: string;
  keywords?: string[];
}

interface TopicSection {
  category: string;
  items: TopicItem[];
}

// ─── Atualize os hrefs conforme suas rotas reais ───────────────────────────
const TOPICS: TopicSection[] = [
  {
    category: "Cadastros",
    items: [
      { label: "Cadastro FD", href: "/pages/Cadastros/Cadastro_FD" },
      {
        label: "Cadastro de Pessoa Física",
        href: "/pages/Cadastros/Cadastro_PF",
      },
      {
        label: "Cadastro de Pessoa Jurídica",
        href: "/pages/Cadastros/Cadastro_PJ",
      },
      {
        label: "Cadastro de Produtos",
        href: "/pages/Cadastros/Cadastro_Produtos",
      },
      { label: "Cadastro SP", href: "/pages/Cadastros/Cadastro_SP" },
    ],
  },
  {
    category: "Estoque",
    items: [{ label: "Estoque", href: "/pages/Estoque" }],
  },
  {
    category: "Financeiro",
    items: [{ label: "Financeiro", href: "/pages/Financeiro" }],
  },
  // ✅ Nova seção com tutoriais
  {
    category: "Como fazer",
    items: [
      {
        label: "Como cadastrar um produto",
        href: "/pages/Cadastros/Cadastro_Produtos",
        keywords: ["cadastrar produto", "novo produto", "adicionar produto"],
      },
      {
        label: "Como cadastrar um cliente pessoa física",
        href: "/pages/Cadastros/Cadastro_PF",
        keywords: ["cadastrar cliente", "pessoa fisica", "novo cliente"],
      },
      {
        label: "Como dar entrada de estoque",
        href: "/pages/Estoque/Entrada_Estoque",
        keywords: ["entrada estoque", "dar entrada", "adicionar estoque"],
      },
    ],
  },
];

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node | null;

      if (
        wrapperRef.current &&
        target &&
        !wrapperRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? TOPICS.map((sec) => ({
        category: sec.category,
        items: sec.items.filter((item) => {
          const matchLabel = item.label.toLowerCase().includes(normalizedQuery);
          const matchKeywords = item.keywords?.some((kw) =>
            kw.toLowerCase().includes(normalizedQuery),
          );
          return matchLabel || matchKeywords;
        }),
      })).filter((sec) => sec.items.length > 0)
    : [];

  function handleSelect(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query && setOpen(true)}
          placeholder="Pesquise aqui"
          className="w-full py-3 pl-4 pr-11 rounded-md text-sm text-gray-800 bg-white outline-none"
        />
        <FaSearch
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={14}
        />
      </div>

      {/* Dropdown */}
      {open && query && (
        <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white border border-gray-200 rounded-xl z-50 max-h-80 overflow-y-auto shadow-lg">
          {results.length === 0 ? (
            <p className="text-center text-sm text-gray-400 py-5">
              Nenhum resultado encontrado.
            </p>
          ) : (
            results.map((sec, i) => (
              <div key={sec.category}>
                {i > 0 && <hr className="border-gray-100 mx-3" />}
                <div className="py-2">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 pt-1 pb-0.5">
                    {sec.category}
                  </p>
                  {sec.items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSelect(item.href)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                    >
                      <FaFileAlt size={12} className="text-gray-300 shrink-0" />
                      <span>{item.label}</span>
                      <span className="ml-auto text-[11px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded shrink-0">
                        {sec.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
