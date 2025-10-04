import { useState } from 'react';

const ToggleSwitch = ({ 
  enabled = false, 
  onChange = () => {},
  size = 'md',
  enabledColor = 'bg-emerald-400',
  disabledColor = 'bg-slate-950',
  disabled = false
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleToggle = () => {
    if (disabled) return;
    const newState = !isEnabled;
    setIsEnabled(newState);
    onChange(newState);
  };

  const sizes = {
    sm: {
      switch: 'w-9 h-5',
      dot: 'w-3 h-3',
      translate: 'translate-x-4'
    },
    md: {
      switch: 'w-11 h-6',
      dot: 'w-4 h-4',
      translate: 'translate-x-5.5'
    },
    lg: {
      switch: 'w-14 h-7',
      dot: 'w-5 h-5',
      translate: 'translate-x-7'
    }
  };

  const { switch: switchSize, dot: dotSize, translate } = sizes[size];

  return (
    <button
      type="button"
      className={`
        ${switchSize}
        ${isEnabled ? enabledColor : disabledColor}
        relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      onClick={handleToggle}
      disabled={disabled}
    >
      <span className="sr-only">Toggle</span>
      <span
        className={`
          ${dotSize}
          ${isEnabled ? translate : 'translate-x-1  '}
          pointer-events-none inline-block transform rounded-full bg-text shadow-lg 
          ring-0 transition duration-200 ease-in-out
        `}
      />
    </button>
  );
};

export default ToggleSwitch;