"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./select";

export default function SearchFilter() {
  const [numRooms, setNumRooms] = useState(1);
  const [location, setLocation] = useState("");

  return (
    <div className="space-y-4 p-4 border rounded-md max-w-md mx-auto">
      {/* Room Type */}
      <div>
        <Label htmlFor="roomType">Room Type</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Room Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">Single</SelectItem>
            <SelectItem value="double">Double</SelectItem>
            <SelectItem value="suite">Suite</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Number of People */}
      <div>
        <Label htmlFor="numPeople">Number of People</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Number of People" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Number of Rooms */}
      <div>
        <Label htmlFor="numRooms">Number of Rooms</Label>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setNumRooms(numRooms - 1)}
            disabled={numRooms <= 1}
          >
            -
          </Button>
          <span>{numRooms}</span>
          <Button onClick={() => setNumRooms(numRooms + 1)}>+</Button>
        </div>
      </div>

      {/* Time of Room Use */}
      <div>
        <Label htmlFor="roomTime">Time</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning</SelectItem>
            <SelectItem value="afternoon">Afternoon</SelectItem>
            <SelectItem value="evening">Evening</SelectItem>
            <SelectItem value="night">Night</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button/>

      {/* Location */}
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button type="submit" className="w-full">
          Search
        </Button>
      </div>
    </div>
  );
}