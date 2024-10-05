"use client"
import { useState } from 'react';
import { organizations } from '../lib/data';
import { Input } from './ui/input';  // For search input styling
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';  // Card component for each org
import { Select, SelectTrigger, SelectItem, SelectContent } from './ui/select';  // Dropdown for filtering

const OrganizationGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredOrgs = organizations
    .filter(org => org.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(org => filterCategory && filterCategory !== "all" ? org.category === filterCategory : true);  // Adjusted filter logic

  const categories = [...new Set(organizations.map(org => org.category))];  // Unique categories for filtering

  return (
    <div className="p-6">
      {/* Search and Filter */}
      <div className="flex justify-between mb-4">
        <Input
          className="w-full md:w-1/3"
          placeholder="Search organizations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select
          onValueChange={(value) => setFilterCategory(value)}
          className="ml-4"
        >
          <SelectTrigger placeholder="Filter by category" />
          <SelectContent>  
            <SelectItem value="all">All</SelectItem>  {/* Updated value to "all" */}
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredOrgs.map(org => (
          <Card key={org.id} className="shadow-lg">
            <CardHeader>
              <img src={org.image} alt={org.name} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold">{org.name}</h3>
              <p className="text-gray-500">{org.category}</p>
              <p className="text-xs mt-2">Wallet: {org.wallet}</p>
            </CardContent>
            <CardFooter>
              <a href={`/organizations/${org.id}`} className="text-blue-500 hover:underline">
                View Details
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrganizationGrid;
