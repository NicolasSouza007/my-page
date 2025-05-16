'use client';

import { useState } from 'react';
import Link from 'next/link';

import Sidebar from '@/components/Sidebar/sidebar';
import ImageModal from 'src/components/ImageModal/ImageModal';


export default function Cadastro_Produtos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const relatedLinks = [
    { href: '/Cadastros', label: 'Cadastro de Cliente Pessoa Física' },
    { href: '/passos/rejeicao-660', label: 'Como Cadastrar um cliente Pessoa Juridica' },
    { href: '/passos/rejeicao-772', label: 'Como cadastrar uma Conta a pagar' },
    { href: '/passos/rejeicao-909', label: 'Como Cadastrar uma Conta a Receber' },
  ];

  return (
    <div className="flex flex-row font-nunito">
      {/* Conteúdo principal */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl mb-5">Como Realizar Cadastro de Produtos</h1>

        <iframe
          className="mb-6"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xC3u4wuDvpg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* ... (todo o conteúdo e imagens continuam iguais) */}

        <p className="mb-6 text-xl">
          1° Para realizar o cadastro de produtos basta clicar em cadastro e logo em seguida clicar em produtos
        </p>
        <img
          src="/img/cadastro_produtos.png"
          alt="Cadastro Produtos"
          className="mb-5 cursor-pointer"
          width="270"
          height="270"
          onClick={() => openModal('/img/cadastro_produtos.png')}
        />

        <p className="mb-6 text-xl">
          2° Após clicar em produtos, você será redirecionado para a tela de cadastro de produtos
        </p>
        <img
          src="/img/cadastro_produtos2.png"
          alt="Cadastro Produtos"
          className="mb-5 cursor-pointer"
          width="500"
          height="500"
          onClick={() => openModal('/img/cadastro_produtos2.png')}
        />

        <p className="mb-6 text-xl">3° Clique em cadastrar</p>
        <img
          src="/img/Cadastrar.png"
          alt="Cadastrar"
          className="mb-5 cursor-pointer"
          width="500"
          height="500"
          onClick={() => openModal('/img/Cadastrar.png')}
        />

        <p className="mb-6 text-xl">4° Após clicar em cadastrar, você será redirecionado para a tela de cadastro de produtos</p>
        <p className="mb-5 font-bold">
          Obs: Os campos que contem uma Bolinha em amarelo significa que é um campo Obrigatório a ser preenchido.
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

        <img
          src="/img/Cadastro_produtos3.png"
          alt="Cadastro Produtos"
          className="mb-6 cursor-pointer"
          width="500"
          height="500"
          onClick={() => openModal('/img/Cadastro_produtos3.png')}
        />

        <p className="mb-6 text-xl">
          5° Após preencher todos os campos obrigatórios, clique em Salvar, o sistema vai trazer essa mensagem
        </p>
        <img
          src="/img/Produto_Salvo.png"
          alt="Produto Salvo"
          className="mb-5 cursor-pointer"
          width="500"
          height="500"
          onClick={() => openModal('/img/Produto_Salvo.png')}
        />

        <p className="mb-6 text-xl">6° Os produtos cadastrados vão se encontrar na listagem</p>
        <img
          src="/img/Listagem_produtos.png"
          alt="Listagem Produtos"
          className="mb-5 cursor-pointer"
          width="500"
          height="500"
          onClick={() => openModal('/img/Listagem_produtos.png')}
        />
      </div>
      

      {/* Sidebar com links relacionados */}
      <Sidebar title="Artigos Relacionados" links={relatedLinks} />

      <ImageModal isOpen={isModalOpen} imageSrc={modalImage} onClose={closeModal} />
    </div>
  );
}
