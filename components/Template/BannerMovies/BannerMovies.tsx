import React from 'react';
import { movies } from 'popcorntime';
import { Carousel } from 'antd';

interface Props {}

export const BannerMovies = (props: Props) => {
    const options = {
        page: 1,
        sortby: 'seeds',
        genre: 'all',
        q: '', // It is useful to do a search or you can leave it empty
    };

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    movies(options).then((data) => console.log(data));

    return (
        <Carousel effect='fade'>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};
