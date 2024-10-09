import PropertyCard from "@/components/PropertyCard"

//sample code 
// import FeaturedProperties from "@/components/FeaturedProperties.tsx";

// const sampleProperties = [
//   {
//     id: "1",
//     image: "https://via.placeholder.com/400x200.png?text=Property+1",
//     price: 1200,
//     name: "Cozy Apartment",
//     type: "Apartment",
//     beds: 2,
//     mates: 1,
//     size: 850,
//     location: "Mumbai, India",
//     rentalOptions: ["Monthly", "Yearly"],
//   },
//   {
//     id: "2",
//     image: "https://via.placeholder.com/400x200.png?text=Property+2",
//     price: 1800,
//     name: "Luxury Condo",
//     type: "Condominium",
//     beds: 3,
//     mates: 2,
//     size: 1250,
//     location: "Pune, India",
//     rentalOptions: ["Monthly", "Yearly", "Weekly"],
//   },
//   {
//     id: "3",
//     image: "https://via.placeholder.com/400x200.png?text=Property+3",
//     price: 950,
//     name: "Modern Studio",
//     type: "Studio",
//     beds: 1,
//     mates: 1,
//     size: 450,
//     location: "Bangalore, India",
//     rentalOptions: ["Monthly"],
//   },
// ];

interface Property {
  id: string
  image: string
  price: number
  name: string
  type: string
  beds: number
  mates: number
  size: number
  location: string
  rentalOptions: string[]
}

interface FeaturedPropertiesProps {
  properties?: Property[]  // Optional properties array
}

export default function FeaturedProperties({ properties = [] }: FeaturedPropertiesProps) {  // Default to an empty array
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
