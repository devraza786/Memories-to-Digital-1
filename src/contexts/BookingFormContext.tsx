import React, { createContext, useContext, useState } from "react";

interface BookingFormContextType {
  isOpen: boolean;
  openBookingForm: () => void;
  closeBookingForm: () => void;
}

const BookingFormContext = createContext<BookingFormContextType | undefined>(undefined);

export const BookingFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingForm = () => setIsOpen(true);
  const closeBookingForm = () => setIsOpen(false);

  return (
    <BookingFormContext.Provider value={{ isOpen, openBookingForm, closeBookingForm }}>
      {children}
    </BookingFormContext.Provider>
  );
};

export const useBookingForm = () => {
  const context = useContext(BookingFormContext);
  if (!context) {
    throw new Error("useBookingForm must be used within BookingFormProvider");
  }
  return context;
};
