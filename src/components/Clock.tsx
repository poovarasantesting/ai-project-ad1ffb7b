import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <Card className="w-[300px] mx-auto shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Current Time</h2>
          <div className="text-4xl font-bold tracking-widest">
            {hours}:{minutes}:{seconds}
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            {time.toLocaleDateString(undefined, { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}