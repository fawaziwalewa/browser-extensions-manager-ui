'use client'
import { useState } from 'react';
import extensions from '../public/assets/data.json';
import Card from './components/Card';
import Logo from './components/Logo';
import DarkModeBtn from './components/DarkModeBtn';

export default function Home() {
  const [extensionsList, setExtensionsList] = useState(extensions);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleToggleExtension = (id: number) => {
    setExtensionsList((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.id === id
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  };

  const handleRemoveExtension = (id: number) => {
    setExtensionsList((prevExtensions) =>
      prevExtensions.filter((extension) => extension.id !== id)
    );
  };

  const filteredExtensions = extensionsList.filter((extension) => {
    if (activeFilter === 'all') return true;
    return activeFilter === 'active' ? extension.isActive : !extension.isActive;
  });

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 border border-blue-500 shadow-sm dark:border-none dark:shadow-none dark:bg-neutral-800 bg-neutral-50 rounded-2xl">
        <div>
          <Logo />
        </div>
        <DarkModeBtn />
      </header>

      <main className="mt-8 md:mt-16">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">Extensions List</h1>
          {/* Filters */}
          <div className="flex gap-3">
            {['all', 'active', 'inactive'].map((filter) => (
              <button
                key={filter}
                type="button"
                className={`px-4 py-2 cursor-pointer rounded-3xl ${activeFilter === filter ? 'text-white dark:text-neutral-900 bg-red-700' : 'shadow-md border-neutral-200 bg-neutral-50 border dark:bg-neutral-700 dark:border-neutral-600 text-neutral-900 dark:text-neutral-50'
                  }`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {/* Extensions */}
        <div className="grid gap-3 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExtensions.map((extension) => (
            <Card
              id={extension.id}
              key={extension.id}
              logo={extension.logo}
              name={extension.name}
              description={extension.description}
              isActive={extension.isActive}
              onToggle={handleToggleExtension}
              onRemove={handleRemoveExtension}
            />
          ))}
        </div>
      </main>
    </>
  );
}
