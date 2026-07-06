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
      label: "Cadastro de Cliente Pessoa Física",
    },
    {
      href: "/pages/Cadastros/Cadastro_SP",
      label: "Como cadastrar um cliente Simplificado",
    },
    {
      href: "/pages/Cadastros/Cadastro_PJ",
      label: "Como cadastrar um cliente Pessoas Júridica",
    },
    {
      href: "/pages/Cadastros/Cadastro_Produtos",
      label: "Como cadastrar um produto",
    },
  ];

  return (
    <div className="flex flex-row font-nunito">
      <div className="w-3/4 p-6">
        <h1 className="text-3xl mb-5">Como realizar cadastro de Fornecedor</h1>

        <iframe
          className="mb-6"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xC3u4wuDvpg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <InstructionStep
          texto="1° Para realizar o cadastro de um Fernecedor, basta clicar em 'Cadastros' e logo em seguida clicar em Clientes"
          src="/img/Clientes/Cadastrar_cliente1.png"
          alt="Cadastro Cliente"
          width={270}
          height={270}
          openModal={openModal}
        />
        <InstructionStep
          texto="2° Após clicar em Clientes, você será redirecionado para a tela de Clientes"
          src="/img/Clientes/Listagem_Clientes.png"
          alt="Listagem Clientes"
          openModal={openModal}
        />
        <InstructionStep
          texto="3° Clique em Cadastrar"
          src="/img/Clientes/Cadastrar.png"
          alt="Cadastrar"
          openModal={openModal}
        />

        <InstructionStep texto="4° Após clicar em cadastrar, você será redirecionado para a tela de cadastro de Clientes" />

        <p className="mb-5 font-bold">
          Obs: Os campos que contem uma Bolinha em amarelo significa que é um
          campo Obrigatório a ser preenchido.
        </p>

        <div className="mb-5">
          <strong>Campos Obrigatórios:</strong>
          <ul className="list-disc pl-5">
            <li>Nome do Cliente</li>
            <li>CNPJ</li>
            <li>Inscrição Estadual</li>
            <li>Cep</li>
            <li>Estado</li>
            <li>Logradouro</li>
            <li>Bairro</li>
            <li>Cidade</li>
          </ul>
        </div>
        <InstructionStep
          texto="5° Após preencher os campos obrigatórios, clique em 'Salvar' para concluir o cadastro"
          src="/img/Clientes/Tela_CadastroFD.png"
          alt="Tela de Cadastro de Cliente"
          openModal={openModal}
        />
        <InstructionStep
          texto="6° O sistema irá exibir uma mensagem de confirmação, indicando que o cadastro foi realizado com sucesso."
          src="/img/Clientes/Cadastro_Sucesso.png"
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
