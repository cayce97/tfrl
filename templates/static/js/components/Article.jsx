import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src='public/images/articles/LWLR.jpg' />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <i className='large caret up icon' />
                        <b>49</b>
                    </div>
                    <div className='description'>
                        <a href='#'>Linear Regression: How to overcome underfitting with locally Weight Linear Regression(LWLR)</a>
                        <p>Here, we will look at a technique for locally smoothing our estimates to better fit data</p>
                    </div>
                    <div className='extra'>
                        <span>Published by: </span>
                        <img className='ui avatar image' src='public/images/avatars/eyong.jpg'/>
                        <span className='author'>eyong kevin</span>
                    </div>
                </div>
            </div>
        )
    }
}