"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import ImageModal from "@/components/ImageModal/ImageModal";
import { InstructionStep } from "@/components/InstructionStep/InstructionStep";

export default function Cadastro_PJ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  const relatedLinks = [
    {
      href: "/pages/Cadastros/Cadastro_PF",
      label: "Entrada de Estoque com Nota Fiscal",
    },
    {
      href: "/pages/Cadastros/Cadastro_SP",
      label: "Saida de Estoque",
    },
  ];

  return (
    <div className="flex flex-row font-nunito">
      <div className="w-3/4 p-6">
        <h1 className="text-3xl mb-5">Como realizar uma Entrada de Estoque</h1>

        <iframe
          className="mb-6"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xC3u4wuDvpg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <InstructionStep
          texto="1° Para realizar uma Entrada de Estoque, clica em 'Estoque'"
          src="/img/Estoque/Estoque1.png"
          alt="Cadastro Cliente"
          width={270}
          height={270}
          openModal={openModal}
        />
        <InstructionStep
          texto="2° Após clicar em Estoque, clique em Cadastrar"
          src="/img/Estoque/Estoque2.png"
          alt="Listagem Clientes"
          openModal={openModal}
        />
        <InstructionStep
          texto="3° Você vai ser direcionado ao formulário de cadastro de Estoque"
          src="/img/Estoque/Estoque4.png"
          alt="Cadastrar"
          openModal={openModal}
        />

        <InstructionStep texto="4° No formulário de Estoque preencha os campos obrigatórios" />

        <p className="mb-5 font-bold">Obs: Os campos obrigatórios são:</p>

        <div className="mb-5">
          <strong>Campos Obrigatórios:</strong>
          <ul className="list-disc pl-5">
            <li>Movimentação</li>
            <li>CME</li>
            <li>Motivo</li>
          </ul>
        </div>
        <InstructionStep
          texto="5° Após preencher os campos obrigatórios, adicione os Produtos, vai ficar dessa forma: "
          src="/img/Estoque/Estoque5.png"
          alt="Tela de Cadastro de Cliente"
          openModal={openModal}
        />
        <InstructionStep
          texto="6° Após clicar em salvar, o sistema vai mostrar uma mensagem de confirmação de Movimentação de estoque cadastrada."
          src="/img/Estoque/Estoque6.png"
          alt="Listagem de Clientes"
          openModal={openModal}
        />
      </div>
      <Sidebar title="Artigos Relacionados" links={relatedLinks} />

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={modalImage}
        onClose={closeModal}
      />
    </div>
  );
}
