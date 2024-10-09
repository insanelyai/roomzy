import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight } from "lucide-react"

export default function AddRoommateCard() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Roommate Request</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Main user avatar" />
                <AvatarFallback>MU</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Looking for 4 roommates</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((placeholder) => (
                <div key={placeholder} className="flex flex-col items-center">
                  <Avatar className="w-16 h-16 mb-2">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt={`Placeholder avatar ${placeholder}`} />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">Open Spot</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button className="w-full h-full text-lg font-semibold" variant="outline">
              More Details
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Join John's roommate group and start your co-living adventure!
        </p>
      </CardFooter>
    </Card>
  )
}