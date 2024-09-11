// import React from 'react';

// export default function Footer() {
//   return (
//     <footer
//     className="mt- inset-x-0 bottom-0 rounded-t-3xl bg-blue-700 text-white text-center lg:text-left transition-all duration-300 overflow-x-hidden scroll-none">
//     <div
//       className="flex items-center justify-center border-b-2 border-neutral-200 p-4 dark:border-neutral-500 lg:justify-between">
//       <div className="mr-12 hidden lg:block">
//         <span>Get connected with us on social networks:</span>
//       </div>
     
//       </div>

//       <div className="bg-blue-700  py-3 text-center ">
//         <span>© 2023 Copyright:</span>
//         <a
//           className="font-semibold text-white "
         
//         >TW Elements</a>
//       </div>
//     </footer>
//   );
// }

import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1d4ed8', // Blue color
        color: 'white',
        textAlign: 'center',
        borderRadius: '1rem 1rem 0 0', // Rounded top corners
        padding: '1rem',
        width: '100%',
        boxSizing: 'border-box', // Ensure padding is included in the width
      }}
    >
      <div
        style={{
          borderBottom: '2px solid #e5e7eb', // Light border color
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'none', '@media (min-width: 1024px)': { display: 'block' } }}>
          <span>Get connected with us on social networks:</span>
          {/* Add your social media links here */}
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#1d4ed8', // Blue color
          padding: '0.75rem 1rem',
          textAlign: 'center',
        }}
      >
        <span>© 2023 Copyright:</span>
        <a
          style={{
            fontWeight: '600',
            color: 'white',
          }}
        >
          TW Elements
        </a>
      </div>
    </footer>
  );
}
