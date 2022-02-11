import React, {Component} from 'react';
import Form from './TableMaker.js';

import table_1 from './table_imgs/table_1.jpg';
import table_2 from './table_imgs/table_2.jpg';
import table_3 from './table_imgs/table_3.jpg';
import table_4 from './table_imgs/table_4.jpg';
import table_5 from './table_imgs/table_5.jpg';
import table_6 from './table_imgs/table_6.jpg';


class Product extends Component{
    render(){
        return(
            <div>
                <h2>OUR TABLES</h2>
               <div className='tables-img'>
                    <img className="table-i" src={table_1} alt='table_1'/>
                    <img className="table-i" src={table_2} alt='table_2'/>
                    <img className="table-i" src={table_3} alt='table_3'/>
                    <img className="table-i" src={table_4} alt='table_4'/>
                    <img className="table-i" src={table_5} alt='table_5'/>
                    <img className="table-i" src={table_6} alt='table_6'/>
                </div>
                <h2>CUSTOMIZE YOUR OWN TABLE</h2>
               
               <Form/>
            </div>
        );
    }
    
}






export default Product;