import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontFamily: "'Poppins', sans-serif" }}>
      {/* Eye icon */}
      <svg
        width="140"
        height="140"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '10px' }}
      >
        <path
          d="M12 5C7 5 2.7 8.1 1 12c1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
          fill="#00d1b2"
        />
        <circle cx="12" cy="12" r="2.5" fill="#fff" />
      </svg>

      {/* EyeFit Text */}
      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00d1b2' }}>EyeFit</span>
    </div>
  );
};

export default Logo;
