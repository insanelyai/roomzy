import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bed, Bath, Ruler, DollarSign, MapPin, Users } from "lucide-react";

interface PropertyCardProps {
  property: {
    image: string;
    price: number;
    name: string;
    type: string;
    mates: number;
    size: number;
    location: string;
    rentalOptions: string[];
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative">
        <Image
          src={property.image}
          alt={property.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md text-sm font-semibold text-blue-600">
          ${property.price}/mo
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-1">{property.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{property.type}</p>
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.mates} Roomates Needed</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{property.mates} Roomates Needed </span>
          </div>
          <div className="flex items-center">
            <Ruler className="w-4 h-4 mr-1" />
            <span>{property.size} sqft</span>
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          {property.rentalOptions.map((option, index) => (
            <span
              key={index}
              className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
            >
              <DollarSign className="w-3 h-3 inline mr-1" />
              {option}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1 text-orange-500" />
          <span>{property.location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Details</Button>
      </CardFooter>
    </Card>
  );
}
