import React from 'react';
import { ShareSocial } from 'react-share-social'
import './ShareButton.scss';
const style = {
    background: 'white',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
};


const ShareButton = ({title}) => (
    <div className='shareButton'>
        <ShareSocial
            style={style}
            url={`http://www.google.com/search?q=${title}`}
            socialTypes={['facebook', 'twitter', 'linkedin']}
        />
    </div>
)

export default ShareButton;