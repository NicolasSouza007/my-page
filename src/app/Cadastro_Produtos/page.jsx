export default function Cadastro_Produtos() {
    return(
       <div>
        <h1 className="m-6 text-3xl"> Como Realizar Cadastro de Produtos</h1>
        <iframe
            className="m-5"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xC3u4wuDvpg"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

            <p className="m-5">1° Para realizar o cadastro de produtos basta clicar em cadastro e logo em seguida clicar em produtos</p>
            <img
            src="/img/cadastro_produtos.png"
            alt="Cadastro Produtos"
          className="m-5"
            width="270"
            height="270"
            />

            <p className="m-5">2° Após clicar em produtos, você será redirecionado para a tela de cadastro de produtos</p>
            <img
            src="/img/cadastro_produtos2.png"
            alt="Cadastro Produtos"
            className="m-5"
            width="500"
            height="500"
            />

            <p className="m-5">3° Clique em cadastrar</p>
            <img
            src="/img/Cadastrar.png"
            alt="Cadastrar"
            className="m-5"
            width="500"
            height="500"
            />

            <p className="m-5">4° Após clicar em cadastrar, você será redirecionado para a tela de cadastro de produtos</p>
            <p className="m-5">
              <strong>
              Obs: Os campos que contem uma Bolinha em amarelo significa que é um campo Obrigatório a ser preenchido.
              </strong>

            </p>

              <ul className="list-disc pl-5 m-5">
                <strong>Campos Obrigatórios:
                  <li>Nome do Produto</li>
                  <li>Preço de Venda</li>
                  <li>Unidade de Medida</li>
                  <li>NCM</li>
                </strong>
              </ul>

            <img
            src="/img/Cadastro_produtos3.png"
            alt="Cadastro Produtos"
            className="m-5"
            width="500"
            height="500"
            />
            <p className="m-5">5° Após preencher todos os campos obrigatórios, clique em Salvar, o sistema vai trazer essa mensagem</p>
            <img
            src="/img/Produto_Salvo.png"
            alt="Produto Salvo"
            className="m-5"
            width="500"
            height="500"
            />

            <p className="m-5">6° Os produtos cadastrando vão se encontrar na listagem</p>
            <img
            src="/img/Listagem_produtos.png"
            alt="Listagem Produtos"
            className="m-5"
            width="500"
            height="500"
            />
       </div>
    )
}
