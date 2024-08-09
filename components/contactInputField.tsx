import React from 'react';

interface InputFieldProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  label: string;
  disabled: boolean;
}

const ContactInputField: React.FC<InputFieldProps> = ({ id, name, type = 'text', value, onChange, error, label, disabled }) => {
  return (
    <div className='flex flex-col gap-1 lg:gap-2 w-full text-[14px] lg:text-[16px] px-1'>
      <label aria-disabled={disabled} className=' aria-disabled:opacity-50 text-[14px] lg:text-[16px] text-off-white' htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          className='w-full disabled:opacity-50 !bg-[#1A1A1A] border-none outline-none focus:outline-primary focus:border-none transition-all shadow-none rounded-[4px] py-[6px] lg:py-2 px-3 resize-none h-[60px] lg:h-[150px]'
          value={value}
          autoComplete='off'
          onChange={onChange}
          disabled={disabled}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className='w-full disabled:opacity-50 !bg-[#1A1A1A] border-none focus:outline-primary outline-none shadow-none focus:border-none transition-all rounded-[4px] py-[6px] lg:py-2 px-3'
          value={value}
          autoComplete='off'
          onChange={onChange}
          disabled={disabled}
        />
      )}
      {error && <span className='text-primary error-message text-xs -mt-1'>{error}</span>}
    </div>
  );
};

export default ContactInputField;