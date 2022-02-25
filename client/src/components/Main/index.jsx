import styles from "./styles.module.css";
import { useState, useEffect } from "react";//use efect para podermos usar ciclo de vida em funções
import api from './api';
import Navbt from "../Navbar";
import refresh from "../../img/refresh.png"
import dolar from "../../img/dl.png"
import ListItem from "./ListItem";


const Main = () => {
    //guardar moedas
    const [cotacoes, setCotacoes] = useState([]);


    //chamando a api na inicialização da aplicação
    useEffect(()=>{
        async function fetchMyAPI() {
             let response = await api.get('star%20wars');
             setCotacoes(response['data'])
         }
         fetchMyAPI()
    },[])

    //DADOS PARA A LISTAGEM
    const [dollar, setDollar] = useState([
        {data: 12, min:5.2, max:5.4, var:1},
        {data: 12, min:5.2, max:5.4, var:2},
        {data: 12, min:5.2, max:5.4, var:3},
        {data: 12, min:5.2, max:5.4, var:4},      
        {data: 12, min:5.2, max:5.4, var:1},
    
    ]);

    //função para atualizar os dados da pagina
    const handleRefresh = () => {
		console.log("Refresh")
	};


    //função para remover o token de autenticação do armazenamento local
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
			<Navbt />
           
            <div className={styles.utills}>
                <button className={styles.white_btn} onClick={handleLogout}>
                        Logout
                </button>
            </div>

            
            <div className={styles.utills}>
                <div>
                    <h1 className={styles.coin}> Coins </h1>
                </div>
                
                <button className={styles.white_btn2}>
                    
                    <img src={refresh} onClick={handleRefresh} alt="description" width="28"/> 
                
                </button>
            </div>
            
         {/* CARTÕES INICIAIS - TRANFORMAR EM COMPONENTE */}

            <div className={styles.cards}>
                <section className={styles.sec1}>
                    <div  className={styles.card}>
                        <div>
                            <h1>BRL/USD</h1>
                            <div className={styles.price}>
                                <h1 className={styles.cifra}>R$</h1>
                                <h1 className={styles.price2}>5.20 </h1>
                            </div> 
                            <p className={styles.namecoin}>American Dollar </p>
                        </div>

                        <div> 
                            <img src={dolar} alt="description" width="64"/> 
                        </div>
                    </div>
                </section>
                <section className={styles.sec1}>
                    <div  className={styles.card}>
                    <div>
                            <h1>BTC/EUR</h1>
                            <div className={styles.price}>
                                <h1 className={styles.cifra}>R$</h1>
                                <h1 className={styles.price2}>3735.09 </h1>
                            </div> 
                           
                        </div>

                        <div> 
                            <img src={dolar} alt="description" width="64"/> 
                        </div>
                    </div>
                </section >

                <section className={styles.sec1}>
                    <div  className={styles.card}>
                    <div>
                            <h1>BTC/USD</h1>
                            <div className={styles.price}>
                                <h1 className={styles.cifra}>R$</h1>
                                <h1 className={styles.price2}>4241.65</h1>
                            </div> 
                            
                        </div>

                        <div> 
                            <img src={dolar} alt="description" width="64"/> 
                        </div>
                    </div>

                </section>
            </div>

            {/* PARTE DA LISTAGEM */}

            <h1 className={styles.coin}> Quotations </h1>

            <div className={styles.headerTable}>
                    <div>Coin</div>
                    <div>Min</div>
                    <div>Max</div>  
                    <div>fluctuation</div> 
            </div>

            <div className={styles.listCoindiv}>  
                <ul className={styles.listCoin} >
                    {
                        dollar.map((dol, index)=>(
                            <ListItem coin={dol} key={index} id={index}/>
                        ))
                    }
                </ul>  
            </div>

    
            <div className={styles.lista}>
                <h1>Listar os Filmes</h1>
                {cotacoes.map(filme => (
                    <li key={filme.show.id}>
                        <h2>
                        <strong>Título: </strong>
                        {filme.show.name}
                        </h2>
                        <p>
                        {filme.show.url}
                        </p>
                    </li>
                ))}
            </div>
		</>
	);
};

export default Main;