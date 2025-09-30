'use client';

import { useState } from 'react';

import Sidebar from '@/components/Sidebar/sidebar';
import ImageModal from 'src/components/ImageModal/ImageModal';
import { InstructionStep } from '@/components/InstructionStep/InstructionStep';

export default function Cadastro_PJ() {
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
        { href: '/Cadastro_PJ', label: 'Cadastro de Cliente Pessoa Jurídica' },
        { href: '/passos/rejeicao-660', label: 'Como Cadastrar um cliente Pessoa Física' },
        { href: '/passos/rejeicao-772', label: 'Como cadastrar uma Conta a pagar' },
        { href: '/passos/rejeicao-909', label: 'Como Cadastrar uma Conta a Receber' },
    ];

    return (
        <div className="flex flex-row font-nunito">
            <div className="w-3/4 p-6">
                <h1 className="text-3xl mb-5">Como realizar Cadastro de Pessoa Jurídica</h1>

                <iframe
                    className="mb-6"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xC3u4wuDvpg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <InstructionStep
                    texto="1° Para realizar o cadastro de uma Pessoa Jurídica, basta clicar em 'Cadastros' e logo em seguida clicar em Clientes"
                    src='/img/Cadastrar_cliente1.png'
                    alt="Cadastro Cliente"
                    width={270}
                    height={270}
                    openModal={openModal}
                />
                <InstructionStep
                    texto="2° Após clicar em Clientes, você será redirecionado para a tela de Clientes"
                    src="/img/LISTAGEM_CLIENTES.png"
                    alt="Listagem Clientes"

                    openModal={openModal}
                />
                <InstructionStep
                    texto="3° Clique em Cadastrar"
                    src="/img/Cadastrar.png"
                    alt="Cadastrar"
                    openModal={openModal}
                />

                <InstructionStep
                    texto="4° Após clicar em cadastrar, você será redirecionado para a tela de cadastro de Clientes"
                />

                <p className="mb-5 font-bold">
                    Obs: Os campos que contem uma Bolinha em amarelo significa que é um campo Obrigatório a ser preenchido.
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
                    src="/img/CADASTRO_DE_PJ.png"
                    alt="Tela de Cadastro de Cliente"
                    openModal={openModal}
                />
                <InstructionStep
                    texto="6° O sistema irá exibir uma mensagem de confirmação, indicando que o cadastro foi realizado com sucesso."
                    src="/img/LISTAGEM_CLIENTES2.png"
                    alt="Listagem de Clientes"
                    openModal={openModal}
                />

            </div>
            <Sidebar title="Artigos Relacionados" links={relatedLinks} />

                <ImageModal isOpen={isModalOpen} imageSrc={modalImage} onClose={closeModal} />
        </div>
    );
}
