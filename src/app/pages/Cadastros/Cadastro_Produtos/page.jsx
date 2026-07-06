"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import ImageModal from "src/components/ImageModal/ImageModal";
import { InstructionStep } from "@/components/InstructionStep/InstructionStep";
// importe o novo componente

export default function Cadastro_PF() {
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
      label: "Cadastro de Cliente Pessoa Física",
    },
    {
      href: "/pages/Cadastros/Cadastro_PJ",
      label: "Como Cadastrar um cliente Pessoa Juridica",
    },
    {
      href: "/pages/Cadastros/Cadastro_SP",
      label: "Como cadastrar um cliente Simplificado",
    },
    {
      href: "/pages/Cadastros/Cadastro_FD",
      label: "Como Cadastrar um Fornecedor",
    },
  ];

  return (
    <div className="flex flex-row font-nunito">
      {/* Conteúdo principal */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl mb-5 font-roboto ">
          <strong>Como Realizar Cadastro de Produtos</strong>
        </h1>

        <h2 className="text-lg font-inter">
          Nesse artigo iremos explicar como realizar o cadastro de produtos, de
          forma simples e rápida
        </h2>

        <iframe
          className="mb-6 mt-8"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xC3u4wuDvpg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <InstructionStep
          texto="1° Para realizar o cadastro de produtos basta clicar em cadastro e logo em seguida clicar em produtos"
          src="/img/Produto/Cadastro_Produtos.png"
          alt="Cadastro Produtos"
          width={270}
          height={270}
          openModal={openModal}
        />

        <InstructionStep
          texto="2° Após clicar em produtos, você será redirecionado para a tela de cadastro de produtos"
          src="/img/Produto/cadastro_produtos2.png"
          alt="Cadastro Produtos"
          openModal={openModal}
        />

        <InstructionStep
          texto="3° Clique em cadastrar"
          src="/img/Produto/Cadastrar.png"
          alt="Cadastrar"
          openModal={openModal}
        />

        <InstructionStep texto="4° Após clicar em cadastrar, você será redirecionado para a tela de cadastro de produtos" />

        <p className="mb-5 font-bold">
          Obs: Os campos que contem uma Bolinha em amarelo significa que é um
          campo Obrigatório a ser preenchido.
        </p>

        <div className="mb-5">
          <strong>Campos Obrigatórios:</strong>
          <ul className="list-disc pl-5">
            <li>Nome do Produto</li>
            <li>Preço de Venda</li>
            <li>Unidade de Medida</li>
            <li>NCM</li>
          </ul>
        </div>

        <InstructionStep
          src="/img/Produto/Cadastro_produtos3.png"
          alt="Cadastro Produtos"
          openModal={openModal}
        />

        <InstructionStep
          texto="5° Após preencher todos os campos obrigatórios, clique em Salvar, o sistema vai trazer essa mensagem"
          src="/img/Produto/Produto_Salvo.png"
          alt="Produto Salvo"
          openModal={openModal}
        />

        <InstructionStep
          texto="6° Os produtos cadastrados vão se encontrar na listagem"
          src="/img/Produto/Listagem_produtos.png"
          alt="Listagem Produtos"
          openModal={openModal}
        />
      </div>

      {/* Sidebar com links relacionados */}
      <Sidebar title="Artigos Relacionados" links={relatedLinks} />

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={modalImage}
        onClose={closeModal}
      />
    </div>
  );
}
