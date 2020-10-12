import React from 'react';
import Product from '../Product/Product.js'

const Home = () => {
    return (
        <div className="home">
            <img
                className='home__banner'
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg'
                alt=''
            >

            </img>
            <div className="home__row">
                <Product
                    id="123"
                    title="123 Con meo nha ngoan ngoan cute"
                    price={100.234}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/91dwoBmSshL._SL1500_.jpg"
                /> <Product
                    id="124"
                    title="4Con meo nha ngoan ngoan cute"
                    price={100.234}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/91dwoBmSshL._SL1500_.jpg"
                />

            </div>
            <div className="home__row">
                <Product
                    id="125"
                    title="5Con meo nha ngoan ngoan cute"
                    price={100.234}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/91dwoBmSshL._SL1500_.jpg"
                />
                <Product
                    id="126"
                    title="6Con meo nha ngoan ngoan cute"
                    price={100.234}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/91dwoBmSshL._SL1500_.jpg"
                />
                <Product
                    id="127"
                    title="7Con meo nha ngoan ngoan cute"
                    price={100.234}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/91dwoBmSshL._SL1500_.jpg"
                />

            </div>
            <div className="home__row">
                <Product
                    id="128"
                    title="8Con meo nha ngoan ngoan cute"
                    price={100.234}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/91dwoBmSshL._SL1500_.jpg"
                /> <Product
                    id="129"
                    title="9Con meo nha ngoan ngoan cute"
                    price={100.234}
                    rating={5}
                    img="https://images-na.ssl-images-amazon.com/images/I/91dwoBmSshL._SL1500_.jpg"
                />

            </div>

        </div>
    );
}

export default Home;
