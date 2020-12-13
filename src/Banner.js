import peack from './assets/peack.png'
function Banner() {
  return (
    <div className="main-banner">
     <div className="shadow"></div>
     <div className="header-text">
        <p className="main-text">Save 10%</p>
        <p className="sub-text">Ipsum delicata sed ex</p>
        <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
       <div className="banner-above-im"><img src={peack}/></div>
      </div>

    </div>
  );
}

export default Banner;
