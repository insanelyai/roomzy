'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

const propertySchema = z.object({
  propertyName: z.string().min(1, "Property name is required"),
  address: z.string().min(1, "Address is required"),
  bedrooms: z.number().min(1, "At least 1 bedroom is required"),
  bathrooms: z.number().min(0.5, "At least 0.5 bathroom is required"),
  propertyType: z.enum(["apartment", "house", "condo", "studio"]),
  amenities: z.array(z.string()),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().min(0, "Price must be a positive number"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
})

type PropertyFormData = z.infer<typeof propertySchema>

export default function PropertyRegistrationForm() {
  const [amenities, setAmenities] = useState<string[]>([])

  const { register, handleSubmit, control, formState: { errors } } = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      amenities: [],
    },
  })

  const onSubmit = (data: PropertyFormData) => {
    console.log(data)
    toast({
      title: "Property Registered",
      description: "Your property has been successfully registered.",
    })
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Register Your Property</CardTitle>
        <CardDescription>List your property on our roommate platform</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="propertyName">Property Name</Label>
            <Input id="propertyName" {...register("propertyName")} />
            {errors.propertyName && <p className="text-red-500 text-sm">{errors.propertyName.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" {...register("address")} />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input id="bedrooms" type="number" {...register("bedrooms", { valueAsNumber: true })} />
              {errors.bedrooms && <p className="text-red-500 text-sm">{errors.bedrooms.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input id="bathrooms" type="number" step="0.5" {...register("bathrooms", { valueAsNumber: true })} />
              {errors.bathrooms && <p className="text-red-500 text-sm">{errors.bathrooms.message}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="propertyType">Property Type</Label>
            <Controller
              name="propertyType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.propertyType && <p className="text-red-500 text-sm">{errors.propertyType.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label>Amenities</Label>
            <div className="grid grid-cols-2 gap-2">
              {['WiFi', 'Parking', 'Gym', 'Laundry', 'Air Conditioning', 'Heating'].map((amenity) => (
                <div className="flex items-center space-x-2" key={amenity}>
                  <Controller
                    name="amenities"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id={amenity}
                        checked={field.value?.includes(amenity)}
                        onCheckedChange={(checked) => {
                          const updatedAmenities = checked
                            ? [...field.value, amenity]
                            : field.value.filter((value: string) => value !== amenity)
                          field.onChange(updatedAmenities)
                        }}
                      />
                    )}
                  />
                  <Label htmlFor={amenity}>{amenity}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Property Description</Label>
            <Textarea id="description" {...register("description")} />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Monthly Rent</Label>
            <Input id="price" type="number" step="0.01" {...register("price", { valueAsNumber: true })} />
            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contactEmail">Contact Email</Label>
            <Input id="contactEmail" type="email" {...register("contactEmail")} />
            {errors.contactEmail && <p className="text-red-500 text-sm">{errors.contactEmail.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contactPhone">Contact Phone</Label>
            <Input id="contactPhone" type="tel" {...register("contactPhone")} />
            {errors.contactPhone && <p className="text-red-500 text-sm">{errors.contactPhone.message}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Register Property</Button>
        </CardFooter>
      </form>
    </Card>
  )
}