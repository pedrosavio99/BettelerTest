import React, {useState} from 'react';
import styles from "./styles.module.css";
import dolar from "../../../img/dl.png"

export default function ListItem({coin,id}) {
    // {data: 12, min:5.2, max:5.4, var:1},
  const [editValue, setEditValue] = useState(coin.data,coin.min,coin.max,coin.var)

      return (
        <div >
                 <li  className={styles.listCoin}>

                      
                      <label htmlFor={id}>
                            <div className={styles.headerTable}>
                            <div className={styles.cardCoin}>
                              <div className={styles.symbolCoin}>
                                <img src={dolar} alt="description" width="64"/> 
                              </div>

                              <div className={styles.namelCoin}>
                                <div> Dollar </div>
                                <p>{coin.data}/02/2022</p>
                              </div>
                                
                                
                            </div>
                            <div> {coin.min}</div>
                            <div> {coin.max}</div>  
                            <div> {coin.var}%</div> 
                            </div>
                      </label>
              
                  </li>       
                 
        </div>
   
      );
}

