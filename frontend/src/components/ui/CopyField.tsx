import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import copyToClipboard from '@/utils/functions/clipboard';
type CopyFeildProp = {
  text: string;
};
function CopyField({ text }: CopyFeildProp) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const success = await copyToClipboard(text);

    if (success) {
      setCopied(true);
      console.log('Copied text');

      setTimeout(() => setCopied(false), 1500);
    }
  }
  return (
    <div className="flex items-center justify-between">
      <span className="font-bold text-sm">{text}</span>

      <button onClick={handleCopy}>
        {copied ? (
          <Check className="text-success" size={18} />
        ) : (
          <Copy size={18} />
        )}
      </button>
    </div>
  );
}

export default CopyField;
