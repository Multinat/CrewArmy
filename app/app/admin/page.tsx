'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function AdminPanel() {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <div className="flex gap-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="/admin/pilot-editor">Pilot Editor (Pages 2,3,13)</a>
            </Button>
          </div>
        </div>

        {message && (
          <Alert className="mb-6 border-blue-500 bg-blue-500/10">
            <AlertDescription className="text-blue-400">{message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Text Editor</h3>
            <p className="text-gray-300 mb-4">
              Edit text content for Pages 2, 3, and 13 using the Pilot Editor.
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="/admin/pilot-editor">Open Pilot Editor</a>
            </Button>
          </Card>

          <Card className="p-6 bg-black/50 backdrop-blur-sm border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Pages</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2">Page 2</h4>
                <p className="text-gray-300 text-sm mb-3">Operational Excellence Framework</p>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300">
                    <a href="/pages/2" target="_blank">View</a>
                  </Button>
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <a href="/admin/pilot-editor">Edit</a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2">Page 3</h4>
                <p className="text-gray-300 text-sm mb-3">Safety First</p>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300">
                    <a href="/pages/3" target="_blank">View</a>
                  </Button>
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <a href="/admin/pilot-editor">Edit</a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2">Page 13</h4>
                <p className="text-gray-300 text-sm mb-3">Bottlewasher Roles</p>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300">
                    <a href="/pages/13" target="_blank">View</a>
                  </Button>
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <a href="/admin/pilot-editor">Edit</a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}