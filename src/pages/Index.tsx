import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * The main login page for the application.
 * This page utilizes the MainAppLayout to center the LoginCard component.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
