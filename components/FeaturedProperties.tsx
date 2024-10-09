import PropertyCard from "@/components/PropertyCard"

interface Property {
  id: string
  image: string
  price: number
  name: string
  type: string
  bhk: number
  gender: string
  size: number
  location: string
  rentalOptions: string[]
}

interface FeaturedPropertiesProps {
  properties?: Property[]  
}

export default function FeaturedProperties({ properties = [] }: FeaturedPropertiesProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <p>No properties to display.</p>
          )}
        </div>
      </div>
    </section>
  )
}