'use client'

import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedProperties from "@/components/FeaturedProperties"
import { Search, MapPin, Home, Users, Bed, IndianRupee, Globe } from "lucide-react"

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
    culture: "Cosmopolitan",
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
    culture: "Modern",
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
    culture: "Bohemian",
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
const cultures = ["Any", "Cosmopolitan", "Modern", "Traditional", "Bohemian", "Student-friendly"]

export default function PropertyDashboard() {
  const [roomType, setRoomType] = useState("Any")
  const [location, setLocation] = useState("Any")
  const [gender, setGender] = useState("Any")
  const [bhk, setBhk] = useState(0)
  const [maxPrice, setMaxPrice] = useState(20000)
  const [culture, setCulture] = useState("Any")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProperties, setFilteredProperties] = useState(sampleProperties)
  const [filteredLocations, setFilteredLocations] = useState(locations)

  useEffect(() => {
    const filtered = locations.filter(loc => 
      loc.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredLocations(filtered)
  }, [searchTerm])

  const handleSearch = () => {
    const filtered = sampleProperties.filter(property => 
      (roomType === "Any" || property.type === roomType) &&
      (location === "Any" || property.location === location) &&
      (gender === "Any" || property.gender === gender) &&
      (bhk === 0 || property.bhk === bhk) &&
      (culture === "Any" || property.culture === culture) &&
      property.price <= maxPrice &&
      (searchTerm === "" || property.name.toLowerCase().includes(searchTerm.toLowerCase()) || property.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredProperties(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Home in Mumbai</h1>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <Select onValueChange={setLocation} value={location}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {filteredLocations.map(loc => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by property name or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6">
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
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <Select onValueChange={setCulture} value={culture}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Culture" />
                </SelectTrigger>
                <SelectContent>
                  {cultures.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
          </div>
          
          <Button onClick={handleSearch} className="w-full">
            <Search className="mr-2 h-4 w-4" /> Search Properties
          </Button>
        </CardContent>
      </Card>

      <FeaturedProperties properties={filteredProperties} />
    </div>
  )
}