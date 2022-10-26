import React from 'react';
import { useAuthentication } from '../hooks/useAuthentication';
import UserStack from './userStack';
import AuthStack from './authenticationStack';

export default function RootNavigation() {
  const { user } = useAuthentication();
  console.log("User Logs: ", user);
  return user ? <UserStack /> : <AuthStack />;
}