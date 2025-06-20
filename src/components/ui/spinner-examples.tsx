import React from "react";
import { Spinner } from "./spinner";

export function SpinnerExamples() {
  return (
    <div className="flex flex-col space-y-8 p-6 bg-background rounded-lg shadow">
      <div>
        <h3 className="font-medium text-lg mb-3">Spinner Sizes</h3>
        <div className="flex items-center gap-4">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </div>
      </div>

      <div>
        <h3 className="font-medium text-lg mb-3">Spinner Variants</h3>
        <div className="flex items-center gap-4">
          <Spinner variant="default" />
          <Spinner variant="secondary" />
          <Spinner variant="destructive" />
          <Spinner variant="muted" />
        </div>
      </div>

      <div>
        <h3 className="font-medium text-lg mb-3">Spinner Animations</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-xs mb-2">Spin</span>
            <Spinner animation="spin" />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs mb-2">Pulse</span>
            <Spinner animation="pulse" />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs mb-2">Ping</span>
            <Spinner animation="ping" />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs mb-2">Bounce</span>
            <Spinner animation="bounce" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-lg mb-3">Combined Examples</h3>
        <div className="flex items-center gap-4">
          <Spinner variant="destructive" size="lg" animation="spin" />
          <Spinner variant="secondary" size="lg" animation="pulse" />
          <Spinner variant="default" size="lg" animation="ping" />
          <Spinner variant="muted" size="lg" animation="bounce" />
        </div>
      </div>
    </div>
  );
}