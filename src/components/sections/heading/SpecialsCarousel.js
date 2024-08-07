import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/greek-salad.webp';
import Bruschetta from '../../../assets/bruschetta.jpeg';
import LemonDessert from '../../../assets/lemon-dessert.webp';
import Special from './card/Special';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <Special image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <Special image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <Special image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}