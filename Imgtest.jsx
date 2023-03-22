import React from 'react'
import domtoimage from 'dom-to-image';
import ImageGetter from './ImageGetter';
import Crops from './Crops';
import './filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

// let x;
var img1
// var y = document.createElement('img');
const Imgtest = (props) => {
    const down = () => {
        let node = document.getElementById(props.idd);
        domtoimage.toPng(node)
            .then(function (dataUrl) {
                var link = document.createElement('a');
                img1 = new Image();
                img1.src = dataUrl;
                // document.body.appendChild(img1);
                // var ig = document.getElementById('imgg');
                // ig.appendChild(img1);
                link.download = 'my-image-name.png';
                link.href = dataUrl;
                link.click();
            });
    }

    return (
        <>

            <button className='expo ' onClick={down}>EXPORT{'   '}
                <FontAwesomeIcon icon={faDownload} />

            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* <div id='imgg' >hello</div>  */}
        </>


    )
}

export default Imgtest


