interface AmountSelectProps {
  selectedAmount: string;
  onSelect: (amount: string) => void;
}

const amounts = [501, 1001, 1501, 2101, 5101, 10001];

function AmountSelect({ selectedAmount, onSelect }: AmountSelectProps) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mt-4 w-full">
      {amounts.map((amount) => {
        const isSelected = selectedAmount === String(amount);
        return (
          <button
            key={amount}
            type="button"
            onClick={() => onSelect(String(amount))}
            className={`
              rounded-md py-1.5 text-sm font-medium transition
              border-2
              ${
                isSelected
                  ? 'bg-text-primary text-background border-text-primary'
                  : 'bg-background text-text-primary border-text-primary/30 hover:bg-text-primary/10'
              }
            `}
          >
            ₹{amount}
          </button>
        );
      })}
    </div>
  );
}

export default AmountSelect;
