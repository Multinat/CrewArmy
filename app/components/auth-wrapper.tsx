'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Set your presentation password here
  const PRESENTATION_PASSWORD = 'CrewArmy2025';

  useEffect(() => {
    // Check if user is already authenticated (stored in sessionStorage)
    const authStatus = sessionStorage.getItem('presentation-auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    if (password === PRESENTATION_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      // Store authentication in session (expires when browser closes)
      sessionStorage.setItem('presentation-auth', 'authenticated');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('presentation-auth');
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 bg-black/50 backdrop-blur-sm border-slate-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Crew Army Presentation
            </h1>
            <p className="text-gray-400">
              Enter password to access the presentation
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter presentation password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg"
              />
            </div>
            
            <Button 
              onClick={handleLogin} 
              className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700"
            >
              Access Presentation
            </Button>
            
            {error && (
              <Alert className="border-red-500 bg-red-500/10">
                <AlertDescription className="text-red-400 text-center">
                  {error}
                </AlertDescription>
              </Alert>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Authorized personnel only
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      {children}
      {/* Logout button - only visible on hover */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm z-50"
        title="Logout"
      >
        Logout
      </button>
    </div>
  );
}