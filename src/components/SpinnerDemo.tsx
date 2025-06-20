import React from "react";
import { Spinner } from "./ui/spinner";

export function SpinnerDemo() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Spinner Animation Types</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Circle Variant</h2>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <Spinner variant="circle" size="sm" />
              <span className="mt-2 text-sm">Small</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="circle" size="md" />
              <span className="mt-2 text-sm">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="circle" size="lg" />
              <span className="mt-2 text-sm">Large</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="circle" size="xl" />
              <span className="mt-2 text-sm">Extra Large</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Dots Variant</h2>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <Spinner variant="dots" size="sm" />
              <span className="mt-2 text-sm">Small</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="dots" size="md" />
              <span className="mt-2 text-sm">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="dots" size="lg" />
              <span className="mt-2 text-sm">Large</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="dots" size="xl" />
              <span className="mt-2 text-sm">Extra Large</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Pulse Variant</h2>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <Spinner variant="pulse" size="sm" />
              <span className="mt-2 text-sm">Small</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="pulse" size="md" />
              <span className="mt-2 text-sm">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="pulse" size="lg" />
              <span className="mt-2 text-sm">Large</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="pulse" size="xl" />
              <span className="mt-2 text-sm">Extra Large</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Wave Variant</h2>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <Spinner variant="wave" size="sm" />
              <span className="mt-2 text-sm">Small</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="wave" size="md" />
              <span className="mt-2 text-sm">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="wave" size="lg" />
              <span className="mt-2 text-sm">Large</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="wave" size="xl" />
              <span className="mt-2 text-sm">Extra Large</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Color Variants</h2>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <Spinner variant="circle" color="default" />
              <span className="mt-2 text-sm">Default</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="circle" color="primary" />
              <span className="mt-2 text-sm">Primary</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="circle" color="secondary" />
              <span className="mt-2 text-sm">Secondary</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="circle" color="success" />
              <span className="mt-2 text-sm">Success</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="circle" color="warning" />
              <span className="mt-2 text-sm">Warning</span>
            </div>
            <div className="flex flex-col items-center">
              <Spinner variant="circle" color="danger" />
              <span className="mt-2 text-sm">Danger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}