import { ChevronsUpDown } from 'lucide-react';
import { useRef, useLayoutEffect, useEffect } from 'react';
import useDonationFormContext from '@/hooks/useDonationFormContext';

const sevas = [
  'Donate Where Needed Most',
  'First Roti for Cow',
  'Adopt Cow for 1 Month',
  'Cow Treatment Seva',
  'Cow Shed Seva',
  'Feed 20 Cows',
  'Adopt Calf for 1 Month',
  'Medicines Kit for Cows',
  'Green Fodder Seva',
];

function GauSevaSelect() {
  const {
    showDropdown,
    setShowDropdown,
    sevaValue,
    setSevaValue,
    openUpwards,
    setOpenUpwards,
  } = useDonationFormContext();

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
  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        readOnly
        value={sevaValue}
        placeholder="Select seva"
        onClick={toggleDropdown}
        className="w-full rounded-lg font-medium cursor-pointer relative border-2 border-text-primary/30 bg-surface pr-6 px-4 py-2 text-text-primary focus:outline-none
          focus:border-text-secondary"
      />
      <ChevronsUpDown
        onClick={toggleDropdown}
        className="size-5 cursor-pointer absolute top-[25%] right-[3%]"
      />
      {/* Select dropdown */}
      {showDropdown && (
        <div
          ref={dropdownRef}
          className={`
            absolute z-20 w-full rounded-md border border-text-primary/30
            bg-background px-0.5 py-1.5 text-[0.9rem] font-medium shadow-lg
            ${openUpwards ? 'bottom-full mb-1.5' : 'top-full mt-1'}
          `}
        >
          {sevas.map((seva) => (
            <div
              onClick={() => selectSeva(seva)}
              className="cursor-pointer rounded-sm font-medium hover:bg-text-secondary/10 px-2 py-1"
              key={seva}
            >
              {seva}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GauSevaSelect;
