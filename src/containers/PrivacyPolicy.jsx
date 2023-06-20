import React from 'react';
import '../styles/PrivacyPolicy.scss';
import PrivacyPolicyTexts from '../components/PrivacyPolicyTexts';
import HorizontalLine from '../components/HorizontalLine';

function PrivacyPolicy() {
  return (
    <div className="PrivacyPolicy">
      <HorizontalLine />
      <PrivacyPolicyTexts />
    </div>
  );
}

export default PrivacyPolicy;
