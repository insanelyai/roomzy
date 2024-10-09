"use client"

import { useState } from "react"
import { Plus, Home, Users, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Mock data
const initialProperties = [
  { id: 1, address: "123 Main St", rent: 12000, image: "/placeholder.svg" },
  { id: 2, address: "456 Elm St", rent: 15000, image: "/placeholder.svg" },
]

const initialTenants = [
  { id: 1, name: "John Doe", propertyId: 1, image: "/placeholder.svg" },
  { id: 2, name: "Jane Smith", propertyId: 2, image: "/placeholder.svg" },
]

export default function PropertyDashboard() {
  const [properties, setProperties] = useState(initialProperties)
  const [tenants, setTenants] = useState(initialTenants)
  const [newProperty, setNewProperty] = useState({ address: "", rent: "", image: "" })
  const [newTenant, setNewTenant] = useState({ name: "", propertyId: "", image: "" })

  const addProperty = () => {
    if (newProperty.address && newProperty.rent) {
      setProperties([
        ...properties,
        { 
          id: properties.length + 1, 
          ...newProperty, 
          rent: Number(newProperty.rent),
          image: newProperty.image || "/placeholder.svg?height=100&width=100"
        },
      ])
      setNewProperty({ address: "", rent: "", image: "" })
    }
  }

  const addTenant = () => {
    if (newTenant.name && newTenant.propertyId) {
      setTenants([
        ...tenants,
        { 
          id: tenants.length + 1, 
          ...newTenant, 
          propertyId: Number(newTenant.propertyId),
          image: newTenant.image || "/placeholder.svg?height=50&width=50"
        },
      ])
      setNewTenant({ name: "", propertyId: "", image: "" })
    }
  }

  const deleteProperty = (id: number) => {
    setProperties(properties.filter(property => property.id !== id))
    setTenants(tenants.filter(tenant => tenant.propertyId !== id))
  }

  const deleteTenant = (id: number) => {
    setTenants(tenants.filter(tenant => tenant.id !== id))
  }

  const totalRent = properties.reduce((sum, property) => sum + property.rent, 0)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Property Owner Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{properties.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tenants.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rent</CardTitle>
              <span className="text-muted-foreground">₹</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{totalRent}</div>
            </CardContent>
          </Card>
        </div>

        {/* Properties Section */}
        <section className="bg-white shadow rounded-lg mb-6 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Properties</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Link href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  <Plus className="mr-2 h-4 w-4" /> Add Property
                </Link>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Property</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="address" className="text-right">
                      Address
                    </Label>
                    <Input
                      id="address"
                      value={newProperty.address}
                      onChange={(e) => setNewProperty({ ...newProperty, address: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="rent" className="text-right">
                      Rent (₹)
                    </Label>
                    <Input
                      id="rent"
                      type="number"
                      value={newProperty.rent}
                      onChange={(e) => setNewProperty({ ...newProperty, rent: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="image" className="text-right">
                      Image URL
                    </Label>
                    <Input
                      id="image"
                      value={newProperty.image}
                      onChange={(e) => setNewProperty({ ...newProperty, image: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <Button onClick={addProperty}>Add Property</Button>
              </DialogContent>
            </Dialog>
          </div>
          <ul className="divide-y divide-gray-200">
            {properties.map((property) => (
              <li key={property.id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={property.image}
                    alt={property.address}
                    width={100}
                    height={100}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{property.address}</p>
                    <p className="text-sm text-gray-500">Rent: ₹{property.rent}</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm" onClick={() => deleteProperty(property.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </section>

        {/* Tenants Section */}
        <section className="bg-white shadow rounded-lg mb-6 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Tenants</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button><Plus className="mr-2 h-4 w-4" /> Add Tenant</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Tenant</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newTenant.name}
                      onChange={(e) => setNewTenant({ ...newTenant, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="propertyId" className="text-right">
                      Property ID
                    </Label>
                    <Input
                      id="propertyId"
                      type="number"
                      value={newTenant.propertyId}
                      onChange={(e) => setNewTenant({ ...newTenant, propertyId: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="tenantImage" className="text-right">
                      Image URL
                    </Label>
                    <Input
                      id="tenantImage"
                      value={newTenant.image}
                      onChange={(e) => setNewTenant({ ...newTenant, image: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <Button onClick={addTenant}>Add Tenant</Button>
              </DialogContent>
            </Dialog>
          </div>
          <ul className="divide-y divide-gray-200">
            {tenants.map((tenant) => (
              <li key={tenant.id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={tenant.image}
                    alt={tenant.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{tenant.name}</p>
                    <p className="text-sm text-gray-500">Property ID: {tenant.propertyId}</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm" onClick={() => deleteTenant(tenant.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </section>

        {/* Rent Collection Section */}
        <section className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Rent Collection</h2>
          <ul className="divide-y divide-gray-200">
            {properties.map((property) => {
              const tenant = tenants.find(t => t.propertyId === property.id)
              return (
                <li key={property.id} className="py-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      src={property.image}
                      alt={property.address}
                      width={50}
                      height={50}
                      className="rounded-md mr-4"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{property.address}</p>
                      <p className="text-sm text-gray-500">Tenant: {tenant ? tenant.name : 'Vacant'}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Rent: ₹{property.rent}</p>
                    <Link
                      href="#"
                      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        tenant
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-muted text-muted-foreground"
                      } h-8 px-3 py-2`}
                      onClick={(e) => {
                        if (!tenant) e.preventDefault()
                      }}
                    >
                      Collect Rent
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </div>
  )
}