import React, { useState } from 'react';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    personalDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    address: {
      street: '',
      city: '',
      zipCode: '',
      country: '',
    },
    paymentDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardHolderName: '',
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (step, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = () => {
    // You can perform form submission logic here
    // For now, let's just log the submitted data
    console.log('Submitted Data:', formData);
  };

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Personal Details</h2>
            <label>
              First Name:
              <input
                type="text"
                value={formData.personalDetails.firstName}
                onChange={(e) => handleInputChange('personalDetails', 'firstName', e.target.value)}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={formData.personalDetails.lastName}
                onChange={(e) => handleInputChange('personalDetails', 'lastName', e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={formData.personalDetails.email}
                onChange={(e) => handleInputChange('personalDetails', 'email', e.target.value)}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                value={formData.personalDetails.phoneNumber}
                onChange={(e) => handleInputChange('personalDetails', 'phoneNumber', e.target.value)}
              />
            </label>
            {/* Add additional fields and form validation as needed */}
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Address</h2>
            <label>
              Street:
              <input
                type="text"
                value={formData.address.street}
                onChange={(e) => handleInputChange('address', 'street', e.target.value)}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                value={formData.address.city}
                onChange={(e) => handleInputChange('address', 'city', e.target.value)}
              />
            </label>
            <label>
              Zip Code:
              <input
                type="text"
                value={formData.address.zipCode}
                onChange={(e) => handleInputChange('address', 'zipCode', e.target.value)}
              />
            </label>
            <label>
              Country:
              <input
                type="text"
                value={formData.address.country}
                onChange={(e) => handleInputChange('address', 'country', e.target.value)}
              />
            </label>
            {/* Add additional fields and form validation as needed */}
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Payment Details</h2>
            <label>
              Card Number:
              <input
                type="text"
                value={formData.paymentDetails.cardNumber}
                onChange={(e) => handleInputChange('paymentDetails', 'cardNumber', e.target.value)}
              />
            </label>
            <label>
              Expiry Date:
              <input
                type="text"
                value={formData.paymentDetails.expiryDate}
                onChange={(e) => handleInputChange('paymentDetails', 'expiryDate', e.target.value)}
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                value={formData.paymentDetails.cvv}
                onChange={(e) => handleInputChange('paymentDetails', 'cvv', e.target.value)}
              />
            </label>
            <label>
              Card Holder Name:
              <input
                type="text"
                value={formData.paymentDetails.cardHolderName}
                onChange={(e) => handleInputChange('paymentDetails', 'cardHolderName', e.target.value)}
              />
            </label>
            {/* Add additional fields and form validation as needed */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      {renderStep(currentStep)}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handlePrev} disabled={currentStep === 1}>
          Previous
        </button>
        {currentStep < 3 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
