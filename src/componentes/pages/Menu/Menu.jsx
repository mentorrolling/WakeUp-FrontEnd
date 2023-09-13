import React from 'react';
import { Tabs, Tab, Card, CardBody, Button } from '@nextui-org/react';
import "react-tabs"
import { Row, Col } from 'react-bootstrap';
import "./Menu.css"


const Menu = () => {
  
  const menuItems = [
    {
      category: 'Iced Drink',
      items: [
        { name: 'Iced Latte', price:  '$3.99' },
        { name: 'Cold Brew', price: '$4.49' },
        { name: 'Iced Coffee', price: '$4.49' },
        { name: 'Iced Tea', price: '$4.49' },
        { name: 'Milshake', price: '$4.49' },
        { name: 'Juice ', price: '$4.49' },
      ],
    },
    {
      category: 'Hot Drink',
      items: [
        { name: 'Espresso', price: '$2.49' },
        { name: 'Cappuccino', price: '$3.29' },
        { name: 'Hot Chocolate', price: '$3.29' },
        { name: 'Macchiato', price: '$3.29' },
        { name: 'Green Tea', price: '$3.29' },
        { name: 'Red Tea', price: '$3.29' },
      ],
    },
    {
      category: 'Bakery',
      items: [
        { name: 'Croissant', price: '$2.99' },
        { name: 'Muffin', price: '$2.49' },
        { name: 'Cupcake', price: '$2.49' },
        { name: 'Lemon Pie', price: '$2.49' },
        { name: 'Pancakes', price: '$2.49' },
        { name: 'Brownie', price: '$2.49' },
    
      ],
    },
  ];

  

  return (
    <div>
       <div>
      <Row>
        <Col className='line-container'>
          <hr className='uno' />
          <h2 className='text-center titlemenu'>Menú</h2>
          <hr className='dos' />
        </Col>
      </Row>

      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          {menuItems.map((category, index) => (
            <Tab key={index} title={category.category}>
              <Card>
                <CardBody>
                  <h2>{category.category}</h2>
                  <ul>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span>   {item.name}      </span>
                        <span>  {item.price}     </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>

    <div className='boxmax'>
       <div className='img'>
         
       </div>
       <div className='descripcion'>
          <h5>cafe</h5>   
          <p>cafe compuesto 50% de granos de cafe</p>       
       </div>
       <div className='precio'>
        price
       </div>
   </div>
    </div>
   
  );
};

export default Menu;
