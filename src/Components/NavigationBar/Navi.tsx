import './navi.css'
import './navigation.js';

const Navi = () => {
  return (
    <div className="Navigationbar">
        <div className="navigationDiv">
            <div id="mainsection">
                <div className="Logo">INFINITY.LK</div>
                <div className="navLinks">
                    <ul>
                        <li id="Home">Home</li>
                        <li id="Phones">Phones</li>
                        <li id="Audio">Audio</li>
                        <li id="Watches">Watches</li>
                    </ul>
                </div>
                <div className="mobilemenu">
                    <div id="mobilemenuicon"></div>
                </div>
            </div>
        </div>
        <div id="mobilemenudrop">
                <div id="Home-mobile">Home</div>
                <div id="Phones-mobile">Phones</div>
                <div id="Audio-mobile">Audio</div>
                <div id="Watches-mobile">Watches</div>
                <div id="mbphoneCont">
                    <div className="line"></div>
                    <div className="mobproductone">Yuva 2 5G</div>
                    <div className="mobproducttwo">Blaze 5G</div>
                    <div className="mobproductthree">Blaze 2 Pro</div>
                </div>
                <div id="mbaudioCont">
                    <div className="line"></div>
                    <div className="mobproductone">GTab Air3</div>
                    <div className="mobproducttwo">GTab Air4</div>
                    <div className="mobproductthree">GTab X7</div>
                </div>
                <div id="mbwatchCont">
                    <div className="line"></div>
                    <div className="mobproductone">GTab GT3 Pro</div>
                    <div className="mobproducttwo">GTab FT8 Pro</div>
                    <div className="mobproductthree">GTab GTX</div>
                </div>
        </div>
        <div id="dropdownmenu">
            <div className="maindivsection">
                <div id="textsection">
                    <h1 id="Type-txt"></h1>
                    <h2 id="deviceone"></h2>
                    <h2 id="devicetwo"></h2>
                    <h2 id="devicethree"></h2>
                </div>
                <div className="cardsection">
                    <div id="cardone"></div>
                    <div id="cardtwo"></div>
                    <div id="cardthree"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navi