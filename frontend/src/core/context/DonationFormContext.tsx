import {
  createContext,
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
} from 'react';
import type {
  DonationFormContextType,
  ProviderProps,
} from '@/shared/types/formtypes';
const DonationFormContext = createContext<DonationFormContextType | undefined>(
  undefined
);

const DonationFormContextProvider = ({ children }: ProviderProps) => {
  const [amount, setAmount] = useState('');
  const [seva, setSeva] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [sevaValue, setSevaValue] = useState('');
  const [openUpwards, setOpenUpwards] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const MIN_DONATION = 1;

  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  function toggleDropdown() {
    setShowDropdown((value) => !value);
  }
  function selectSeva(seva: string) {
    setSevaValue(seva);
    setShowDropdown(false);
  }

  useEffect(() => {
    function detectOutsideClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('click', detectOutsideClick);

    return () => document.removeEventListener('click', detectOutsideClick);
  }, []);
  useLayoutEffect(() => {
    if (!showDropdown) return;
    const container = containerRef.current;
    const dropdown = dropdownRef.current;

    if (!container || !dropdown) return;

    const containerRect = container.getBoundingClientRect();
    const dropdownHeight = dropdown.offsetHeight;

    const spaceBelow = window.innerHeight - containerRect.bottom;
    const spaceAbove = containerRect.top;

    setOpenUpwards(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight);
  }, [showDropdown]);

  function handleAmountChange(value: string) {
    // Allow only digits
    if (!/^\d*$/.test(value)) return;

    setAmount(value);

    if (value === '') {
      setError('');
      return;
    }

    if (Number(value) < MIN_DONATION) {
      setError('Amount must be greater than zero');
    } else {
      setError('');
    }
  }

  const value: DonationFormContextType = {
    amount,
    setAmount,
    seva,
    setSeva,
    name,
    setName,
    phone,
    setPhone,
    handleAmountChange,
    error,
    sevaValue,
    setSevaValue,
    selectSeva,
    toggleDropdown,
    openUpwards,
    setOpenUpwards,
    showDropdown,
    setShowDropdown,
    isAnonymous,
    setIsAnonymous,
  };
  return (
    <DonationFormContext.Provider value={value}>
      {children}
    </DonationFormContext.Provider>
  );
};

export { DonationFormContext, DonationFormContextProvider };
