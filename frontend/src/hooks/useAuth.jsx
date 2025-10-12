// src/hooks/useAuth.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../services/authApi';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Query to get current user
  const {
    data: user,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: authApi.getCurrentUser,
    retry: false,
    enabled: !!localStorage.getItem('token'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Store token
      localStorage.setItem('token', data.access_token);
      
      // Update user query data
      queryClient.setQueryData(['user'], data.user);
      
      // Invalidate and refetch any queries that depend on auth state
      queryClient.invalidateQueries(['user']);
      
      // Navigate to dashboard
      navigate('/dashboard');
    },
    onError: (error) => {
      console.error('Login failed:', error);
      // Error handling is done in the component via mutation state
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      localStorage.setItem('token', data.access_token);
      queryClient.setQueryData(['user'], data.user);
      queryClient.invalidateQueries(['user']);
      navigate('/dashboard');
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Clear local storage
      localStorage.removeItem('token');
      
      // Clear user data from cache
      queryClient.setQueryData(['user'], null);
      queryClient.removeQueries(['user']);
      
      // Navigate to login
      navigate('/login');
    },
    onSettled: () => {
      // Always clear local storage and cache, even if API call fails
      localStorage.removeItem('token');
      queryClient.setQueryData(['user'], null);
      queryClient.removeQueries(['user']);
      navigate('/login');
    },
  });

  const login = (credentials) => {
    return loginMutation.mutateAsync(credentials);
  };

  const register = (userData) => {
    return registerMutation.mutateAsync(userData);
  };

  const logout = () => {
    return logoutMutation.mutate();
  };

  return {
    // User state
    user,
    isLoading,
    isError,
    error,
    
    // Login
    login,
    loginMutation: {
      isLoading: loginMutation.isLoading,
      error: loginMutation.error,
      isError: loginMutation.isError,
    },
    
    // Register
    register,
    registerMutation: {
      isLoading: registerMutation.isLoading,
      error: registerMutation.error,
      isError: registerMutation.isError,
    },
    
    // Logout
    logout,
    logoutMutation: {
      isLoading: logoutMutation.isLoading,
    },
    
    // Refetch user
    refetchUser: refetch,
    
    // Helper states
    isAuthenticated: !!user,
  };
};