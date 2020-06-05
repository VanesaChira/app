import React from 'react';
import {Card} from '../card/card.component';
import './card-list.style.css';


export const CardList = props => (
   <div className = 'card-list'> 
     {props.categories.map(categories=>(
         <Card key={categories.id} categories={categories}/>
     ))}
    </div>
);