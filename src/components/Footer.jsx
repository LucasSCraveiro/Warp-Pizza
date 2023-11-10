function Footer()
{
    return(
        <div className="w-full">
            <div className="bg-white w-full flex py-[1rem] justify-center">
                <div className="md:w-8/12 w-10/12 flex md:flex-row flex-col">
                    <div className="flex flex-col items-left md:w-4/12 w-full justify-around">
                        <p className="font-medium text-[#C8102E] text-3xl text-left">Já baixou nosso app?</p>
                        <p className="text-justify font-medium text-lg">Baixe agora no seu padd ou tricorder escaneando o código QR ao lado e tenha acesso a sabores secretos da Frota Estelar.</p>
                    </div>
                    <div className="md:w-4/12 w-full flex justify-center my-5 md:my-0">
                        <img src="src/assets/images/codigoqr.png" className="w-5/12"></img>
                    </div>
                    <div className="md:w-4/12 w-full">

                    </div>
                </div>
            </div>
            <div className="bg-[#231F20] text-white w-full flex flex-col items-center pt-10">
                <div className="flex flex-col w-8/12">
                    <div className="flex md:flex-row flex-col w-full">
                        <div className="md:w-3/12 w-full text-left flex flex-col mb-5 md:mb-0">
                            <p className="font-medium text-xl mb-3">Quem somos</p>
                            <a className="font-normal mb-3" href="#">Nossa história</a>
                            <a className="font-normal mb-3" href="#">Seja um franqueado</a>
                        </div>
                        <div className="md:w-3/12 w-full text-left flex flex-col mb-5 md:mb-0">
                            <p className="font-medium text-xl mb-3">Atendimento ao cliente</p>
                            <a className="font-normal mb-3" href="#">Fale conosco</a>
                            <a className="font-normal mb-3" href="#">Pesquisa de satisfação</a>
                        </div>
                        <div className="md:w-3/12 w-full text-left flex flex-col mb-5 md:mb-0">
                            <p className="font-medium text-xl mb-3">Termos</p>
                            <a className="font-normal mb-3" href="#">Política de privacidade</a>
                            <a className="font-normal mb-3" href="#">Adendo à Política de Privacidade</a>
                            <a className="font-normal mb-3" href="#">Política de cookies e anúncios</a>
                            <a className="font-normal mb-3" href="#">Termos de uso</a>
                        </div>
                        <div className="md:w-3/12 w-full text-left flex flex-col mb-6">
                            <p className="font-medium text-xl mb-3">Conecte-se com a Warp Slice</p>
                            <div className="row flex justify-around items-center">
                                <a className="w-2/12">
                                    <img src="src/assets/images/facebook.png" className="w-8/12"></img>
                                </a>
                                <a className="w-2/12">
                                    <img src="src/assets/images/instagram.png" className="w-8/12"></img>
                                </a>
                                <a className="w-2/12">
                                    <img src="src/assets/images/tiktok.png" className="w-8/12"></img>
                                </a>
                                <a className="w-2/12">
                                    <img src="src/assets/images/twitter.png" className="w-8/12"></img>
                                </a>
                                <a className="w-2/12">
                                    <img src="src/assets/images/youtube.png" className="w-8/12"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full linha my-7"></hr>
                    <div className="flex flex-row items-center">
                        <img src="src/assets/images/brasaoFederacaoPizza.png" className="md:w-1/12 w-3/12"></img>
                        <p className="ms-5">Copyright © @2023 LUCAS DOS SANTOS CRAVEIRO LTDA. ETEC DOUTORA RUTH CARDOSO - CENTRO - SÃO VICENTE/SP. Todos os direitos reservados.</p>
                    </div>
                    <hr className="w-full linha my-7"></hr>
                    <p className="w-full text-justify mb-10 mt-5 text-sm">Os preços apresentados já incluem impostos. Imagens meramente ilustrativas. Promoções, combos e preços podem variar de acordo com a sua localização. Se ocorrer qualquer divergência nos valores dos produtos ou promoções, o preço válido é o apresentado no carrinho de compras. Preços e condições de pagamento exclusivos para compras via internet. As promoções são válidas enquanto durarem os estoques. A Warp Slice Pizzaria se reserva o direito de alterar e/ou remover itens ou promoções do cardápio sem aviso prévio. O horário de funcionamento e de entrega varia de acordo com a sua localização e unidade escolhida. Digite o seu CEP para descobrir se fazemos entregas para a sua região.</p>
                </div>
            </div>
        </div>
        
    )
}

export default Footer