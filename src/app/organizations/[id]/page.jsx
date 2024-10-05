"use client"; // Ensure this is a client component

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { organizations } from '../../../lib/data'; // Import your mock data or API function
import { Card } from '../../../components/ui/card'; // Adjust this import based on your actual Shadcn component path
import { Button } from '../../../components/ui/button';

const OrganizationDetails = ({ params }) => {
  const id = params.id; // Get the organization ID from query parameters
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Organization ID:", id); // Log the ID to debug
    const org = organizations.find(org => org.id === Number(id)); // Ensure comparison is done as strings
    console.log("Found Organization:", org); // Log the found organization or undefined
    setOrganization(org);
    setLoading(false); // Set loading to false after fetching
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading organization details...</div>; // Loading state
  }

  if (!organization) {
    return <div className="flex justify-center items-center h-screen">Organization not found</div>; // Not found state
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100">
      <div className="container mx-auto p-6">
        <Card className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
          <img
            src={organization.image || 'https://via.placeholder.com/800x400'} // Fallback image if not available
            alt={organization.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{organization.name}</h1>
          <h2 className="text-xl font-semibold mt-2">{organization.category}</h2>
          <p className="mt-4 text-gray-700">{organization.description}</p>

          <h2 className="text-xl font-semibold mt-6">Projects:</h2>
          <ul className="mt-2 list-disc list-inside">
            {organization.projects.map((project, index) => (
              <li key={index} className="mt-1">{project}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-6">Milestones:</h2>
          <ul className="mt-2 list-disc list-inside">
            {organization.milestones.map((milestone, index) => (
              <li key={index} className="mt-1">{milestone}</li>
            ))}
          </ul>

          <div className="mt-4">
            <Button
              as="a"
              href={`/donate/${organization.id}`} // Link to the donation page
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Donate
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationDetails;
