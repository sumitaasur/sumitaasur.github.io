import { useState } from 'react';

interface CopyIconProps {
    text: string;
  }

  const CopyIcon: React.FC<CopyIconProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch(err => {
      });
  };

  return (
    <span onClick={handleCopyClick} style={{ cursor: 'pointer', marginLeft: '5px' }}>
      {isCopied ? '✓' : '📋'}
    </span>
  );
};

export default CopyIcon;
