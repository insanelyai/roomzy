'use client'

import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedProperties from "@/components/FeaturedProperties"
import { Search, MapPin, Home, Users, Bed, IndianRupee, Filter } from "lucide-react"

// Sample data
const sampleProperties = [
  {
    id: "1",
    image: "https://via.placeholder.com/400x200.png?text=Property+1",
    price: 12000,
    name: "Cozy Apartment in Bandra",
    type: "Apartment",
    bhk: 2,
    gender: "Any",
    size: 850,
    location: "Bandra, Mumbai",
    rentalOptions: ["Monthly", "Yearly"],
  },
  {
    id: "2",
    image: "https://via.placeholder.com/400x200.png?text=Property+2",
    price: 18000,
    name: "Luxury Condo in Worli",
    type: "Condominium",
    bhk: 3,
    gender: "Female",
    size: 1250,
    location: "Worli, Mumbai",
    rentalOptions: ["Monthly", "Yearly", "Weekly"],
  },
  {
    id: "3",
    image: "https://via.placeholder.com/400x200.png?text=Property+3",
    price: 9500,
    name: "Modern Studio in Andheri",
    type: "Studio",
    bhk: 1,
    gender: "Male",
    size: 450,
    location: "Andheri, Mumbai",
    rentalOptions: ["Monthly"],
  },
  {
    id: "4",
    image: "https://via.placeholder.com/400x200.png?text=Property+4",
    price: 15000,
    name: "Spacious Flat in Powai",
    type: "Apartment",
    bhk: 3,
    gender: "Any",
    size: 1100,
    location: "Powai, Mumbai",
    rentalOptions: ["Monthly", "Yearly"],
  },
  {
    id: "5",
    image: "https://via.placeholder.com/400x200.png?text=Property+5",
    price: 8000,
    name: "Budget-Friendly Room in Borivali",
    type: "Studio",
    bhk: 1,
    gender: "Male",
    size: 300,
    location: "Borivali, Mumbai",
    rentalOptions: ["Monthly"],
  },
]

const roomTypes = ["Any", "Apartment", "Condominium", "Studio"]
const locations = [
  "Any",
  "Andheri, Mumbai",
  "Bandra, Mumbai",
  "Borivali, Mumbai",
  "Chembur, Mumbai",
  "Colaba, Mumbai",
  "Dadar, Mumbai",
  "Goregaon, Mumbai",
  "Juhu, Mumbai",
  "Kandivali, Mumbai",
  "Malad, Mumbai",
  "Powai, Mumbai",
  "Worli, Mumbai"
]
const genders = ["Any", "Male", "Female"]
const bhkOptions = [0, 1, 2, 3, 4]

export default function PropertyDashboard() {
  const [roomType, setRoomType] = useState("Any")
  const [location, setLocation] = useState("Any")
  const [gender, setGender] = useState("Any")
  const [bhk, setBhk] = useState(0)
  const [maxPrice, setMaxPrice] = useState(20000)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProperties, setFilteredProperties] = useState(sampleProperties)
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = () => {
    const filtered = sampleProperties.filter(property => 
      (roomType === "Any" || property.type === roomType) &&
      (location === "Any" || property.location === location) &&
      (gender === "Any" || property.gender === gender) &&
      (bhk === 0 || property.bhk === bhk) &&
      property.price <= maxPrice &&
      (searchTerm === "" || 
       property.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       property.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredProperties(filtered)
  }

  useEffect(() => {
    handleSearch()
  }, [searchTerm, roomType, location, gender, bhk, maxPrice])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Home in Mumbai</h1>
      
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Find your next perfect roommate</h2>
        <p className="text-muted-foreground">Search for properties and connect with potential roommates</p>
      </div>

      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search by property name or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 py-6 text-lg"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-6 w-6" />
        </Button>
      </div>

      {showFilters && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <Select onValueChange={setLocation} value={location}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(loc => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-muted-foreground" />
                <Select onValueChange={setRoomType} value={roomType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Room Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <Select onValueChange={setGender} value={gender}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    {genders.map(g => (
                      <SelectItem key={g} value={g}>{g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <Select onValueChange={(value) => setBhk(Number(value))} value={bhk.toString()}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="BHK" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any</SelectItem>
                    {bhkOptions.slice(1).map(option => (
                      <SelectItem key={option} value={option.toString()}>{option} BHK</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium flex items-center">
                <IndianRupee className="h-5 w-5 mr-2 text-muted-foreground" />
                Max Price: ₹{maxPrice}
              </label>
              <Slider
                min={0}
                max={50000}
                step={1000}
                value={[maxPrice]}
                onValueChange={([value]) => setMaxPrice(value)}
              />
            </div>
          </CardContent>
        </Card>
      )}

      <FeaturedProperties properties={filteredProperties} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">For Renters</h2>
            <p className="mb-4">Find your dream rental property. Bookmark properties and contact owners.</p>
            <Button>Browse Properties</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">For Property Owners</h2>
            <p className="mb-4">List your properties and reach potential tenants. Rent short or long term.</p>
            <Button>Add Property</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}