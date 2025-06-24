import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import SignupCard from '@/components/Login/LoginCard';

/**
 * The main signup page for the application.
 * This page utilizes the MainAppLayout to center the SignupCard component.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <SignupCard />
    </MainAppLayout>
  );
};

export default IndexPage;