import React from "react";

import './menu-item.style.scss'
import withRouter from "../../utils/withRouter";




const MenuItem = ({title, imageUrl, size, linkUrl, router}) => {
    return <div className={`${size?size+' menu-item':'menu-item'}`} onClick={() => router.navigate(`${router.location.pathname}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
};


export default withRouter(MenuItem);