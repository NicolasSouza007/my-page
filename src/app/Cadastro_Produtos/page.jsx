'use client';

import { useState } from 'react';
import Link from 'next/link';

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

  return (
    <div className="flex flex-row font-nunito"> {/* <- Aplicando a fonte aqui */}
      {/* Conteúdo principal */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl mb-4">Como Realizar Cadastro de Produtos</h1>

        <iframe
          className="mb-5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xC3u4wuDvpg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p className="mb-5">
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

        <p className="mb-5">
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

        <p className="mb-5">3° Clique em cadastrar</p>
        <img
          src="/img/Cadastrar.png"
          alt="Cadastrar"
          className="mb-5 cursor-pointer"
          width="500"
          height="500"
          onClick={() => openModal('/img/Cadastrar.png')}
        />

        <p className="mb-5">4° Após clicar em cadastrar, você será redirecionado para a tela de cadastro de produtos</p>
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
          className="mb-5 cursor-pointer"
          width="500"
          height="500"
          onClick={() => openModal('/img/Cadastro_produtos3.png')}
        />

        <p className="mb-5">
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

        <p className="mb-5">6° Os produtos cadastrados vão se encontrar na listagem</p>
        <img
          src="/img/Listagem_produtos.png"
          alt="Listagem Produtos"
          className="mb-5 cursor-pointer"
          width="500"
          height="500"
          onClick={() => openModal('/img/Listagem_produtos.png')}
        />
      </div>

      {/* Menu lateral à direita */}
      <div className="w-1/4 p-6 sticky top-0 h-[600px] overflow-auto bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Artigos Relacionados</h2>
        <ul className="space-y-3 text-sm">
          <li>
            <Link href="/Cadastros" className="text-blue-700 hover:underline">
              Cadastro de Cliente Pessoa Física
            </Link>
          </li>
          <li>
            <Link href="/passos/rejeicao-660" className="text-blue-700 hover:underline">
              👁️ Rejeição 660: CFOP de Combustível e não informado grupo de combustível da NF-e
            </Link>
          </li>
          <li>
            <Link href="/passos/rejeicao-772" className="text-blue-700 hover:underline">
              👁️ Rejeição 772: Operação Interestadual e UF de destino igual à UF de origem
            </Link>
          </li>
          <li>
            <Link href="/passos/rejeicao-909" className="text-blue-700 hover:underline">
              👁️ Rejeição 909: Obrigatório o preenchimento do grupo de UF de origem do combustível
            </Link>
          </li>
          <li>
            <Link href="/passos/rejeicao-567" className="text-blue-700 hover:underline">
              👁️ Rejeição 567: NF-e de Devolução com Valor do ICMS da UF Destino Superior à NF-e Devolvida
            </Link>
          </li>
          <li>
            <Link href="/passos/rejeicao-354" className="text-blue-700 hover:underline">
              👁️ Rejeição 354: Informado grupo de devolução de tributos para NF-e que não tem finalidade de devolução
            </Link>
          </li>
          <li>
            <Link href="/passos/rejeicao-930" className="text-blue-700 hover:underline">
              👁️ Rejeição 930: CST com benefício fiscal e não informado o código de benefício fiscal
            </Link>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Imagem Ampliada"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
