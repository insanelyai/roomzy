'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import FeaturedProperties from "@/components/FeaturedProperties"
import { Search } from "lucide-react"

// Sample data
const sampleProperties = [
  {
    id: "1",
    image: "https://via.placeholder.com/400x200.png?text=Property+1",
    price: 1200,
    name: "Cozy Apartment",
    type: "Apartment",
    beds: 2,
    mates: 1,
    size: 850,
    location: "Mumbai, India",
    rentalOptions: ["Monthly", "Yearly"],
  },
  {
    id: "2",
    image: "https://via.placeholder.com/400x200.png?text=Property+2",
    price: 1800,
    name: "Luxury Condo",
    type: "Condominium",
    beds: 3,
    mates: 2,
    size: 1250,
    location: "Pune, India",
    rentalOptions: ["Monthly", "Yearly", "Weekly"],
  },
  {
    id: "3",
    image: "https://via.placeholder.com/400x200.png?text=Property+3",
    price: 950,
    name: "Modern Studio",
    type: "Studio",
    beds: 1,
    mates: 1,
    size: 450,
    location: "Bangalore, India",
    rentalOptions: ["Monthly"],
  },
]

const roomTypes = ["Any", "Apartment", "Condominium", "Studio"]
const locations = ["Any", "Mumbai, India", "Pune, India", "Bangalore, India"]

export default function PropertyDashboard() {
  const [roomType, setRoomType] = useState("Any")
  const [location, setLocation] = useState("Any")
  const [maxPrice, setMaxPrice] = useState(2000)
  const [filteredProperties, setFilteredProperties] = useState(sampleProperties)

  const handleSearch = () => {
    const filtered = sampleProperties.filter(property => 
      (roomType === "Any" || property.type === roomType) &&
      (location === "Any" || property.location === location) &&
      property.price <= maxPrice
    )
    setFilteredProperties(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Property Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Select onValueChange={setRoomType}>
          <SelectTrigger>
            <SelectValue placeholder="Room Type" />
          </SelectTrigger>
          <SelectContent>
            {roomTypes.map(type => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map(loc => (
              <SelectItem key={loc} value={loc}>{loc}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex flex-col">
          <label className="mb-2 text-sm">Max Price: ${maxPrice}</label>
          <Slider
            min={0}
            max={5000}
            step={100}
            value={[maxPrice]}
            onValueChange={([value]) => setMaxPrice(value)}
          />
        </div>

        <Button onClick={handleSearch} className="flex items-center justify-center">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>

      <FeaturedProperties properties={filteredProperties} />
    </div>
  )
}