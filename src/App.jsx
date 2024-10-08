import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import CartItem from './CartItem';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1 style={{ fontFamily: "'Shantell Sans', cursive", fontSize: '43px', fontWeight: '700' }}>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
          <button className="get-started-button" onClick={handleGetStartedClick} style={{ fontFamily: "'Shantell Sans', cursive", fontSize: '23px', fontWeight: '700' }}>
            Get Started
          </button>

         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>

      <div className="product-list-container">
        <CartItem />
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import ProductList from './ProductList';
// import CartItem from './CartItem';
// import AboutUs from './AboutUs';
// import './App.css';

// function App() {
//   const [showProductList, setShowProductList] = useState(false);

//   const handleGetStartedClick = () => {
//     setShowProductList(true);
//   };

//   return (
//     <div className="app-container">
//       <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
//         <div className="background-image"></div>
//         <div className="content">
//           <div className="landing_content">
//             <h1 style={{ fontFamily: "'Shantell Sans', cursive", fontSize: '43px', fontWeight: '700' }}>
//               Welcome To Paradise Nursery
//             </h1>
//             <div className="divider"></div>
//             <p>Where Green Meets Serenity</p>
//             <button
//               className="get-started-button"
//               onClick={handleGetStartedClick}
//               style={{ fontFamily: "'Shantell Sans', cursive", fontSize: '23px', fontWeight: '700' }}
//             >
//               Get Started
//             </button>
//           </div>
//           <div className="aboutus_container">
//             <AboutUs />
//           </div>
//         </div>
//       </div>

//       {showProductList && (
//         <div className="product-list-container">
//           <ProductList />
//         </div>
//       )}

//       <div className="cart-item-container">
//         <CartItem />
//       </div>
//     </div>
//   );
// }

// export default App;
