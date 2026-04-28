"use client";

import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import ImageModal from "@/components/ImageModal/ImageModal";
import { InstructionStep } from "@/components/InstructionStep/InstructionStep";
import { useState } from "react";

export default function Pagar() {
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
      href: "pages/Financeiro/ContaReceber",
      label: "Como cadastrar uma conta a receber",
    },

    {
      href: "pages/Financeiro/Crediario",
      label: "Como fazer uma venda no crediário",
    },
  ];

  return (
    <div className="flex flex-row font-nunito">
      <div className="w-3/4 p-6">
        <h1 className="text-3xl mb-5 font-bold">
          Como cadastrar uma Conta a Receber
        </h1>

        <iframe
          className="mb-6"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xC3u4wuDvpg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <InstructionStep
          texto="1°Para cadastrar uam conta a pagar, clique em 'Financeiro' e logo em seguida em 'Contas a Pagar' "
          src="/img/Financeiro/ContaReceber.png"
          alt="Conta a Pagar"
          width={270}
          height={270}
          openModal={openModal}
        />
        <InstructionStep
          texto="2° Na tela de contas a pagar, você irá ver todas as contas que foram cadastradas."
          src="/img/Financeiro/ListagemContaReceber.png"
          alt="Listagem Conta a Pagar"
          width={550}
          height={400}
          openModal={openModal}
        />
        <InstructionStep
          texto="3° Para cadastrar uma nova conta a pagar, clique em 'Cadastrar'"
          src="/img/Clientes/Cadastrar.png"
          alt="Cadastro Conta a Pagar"
          width={500}
          height={350}
          openModal={openModal}
        />
        <InstructionStep texto="4° Após Clicar em Cadastrar, você será redirecionado para a tela de cadastro de conta a pagar." />

        <p className="mb-5 font-bold">
          Obs: Para cadastrar uma conta a pagar, é necessário que o
          Cliente/Fornecedor esteja cadastrado no sistema.
        </p>
        <p className="mb-5 font-bold">
          Os campos que contem uma Bolinha em amarelo significa que é um campo
          Obrigatório a ser preenchido.
        </p>

        <div className="mb-5">
          <strong>Campos Obrigatórios:</strong>
          <ul className="list-disc pl-5">
            <li>Número do Documento</li>
            <li>Tipo de Documento</li>
            <li>Valor do Documento</li>
            <li>Cliente/Fornecedor</li>
            <li>Categoria</li>
          </ul>
        </div>

        <InstructionStep
          texto="5° Após preencher todos os campos obrigatórios, clique em 'Salvar' para finalizar o cadastro da conta a pagar."
          src="/img/Financeiro/SalvarReceber.png"
          alt="Salvar Conta a Pagar"
          width={500}
          height={350}
          openModal={openModal}
        />

        <InstructionStep
          texto="6° Após salvar, você será redirecionado para a tela de listagem, onde poderá ver a conta a pagar cadastrada."
          src="/img/Financeiro/ListagemContaReceber2.png"
          alt="Listagem Conta a Pagar"
          width={500}
          height={350}
          openModal={openModal}
        />
      </div>
      <Sidebar title=" Artigos relacionados" links={relatedLinks} />

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={modalImage}
        onClose={closeModal}
      />
    </div>
  );
}
