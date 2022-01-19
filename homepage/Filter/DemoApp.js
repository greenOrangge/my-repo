import React, { useState } from "react";
import FilterComponent from "./FilterComponent";

const frameworks = ["ReactJS", "AngularJS", "VueJS", "NodeJS", "EmberJS"];

export default function DemoApp() {
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);

  const handleSelect = (framework) => {
    const isSelected = selectedFrameworks.includes(framework);
    const newSelection = isSelected
      ? selectedFrameworks.filter((currentTech) => currentTech !== framework)
      : [...selectedFrameworks, framework];
    setSelectedFrameworks(newSelection);
  };

  return (
    <div className="app_container">
      <h2>Building responsive filter component</h2>
      <FilterComponent
        label="JS Frameworks"
        onSelect={() => alert(selectedFrameworks)}
      >
        <div className="frameworks-list">
          {frameworks.map((framework, index) => {
            const isSelected = selectedFrameworks.includes(framework);
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleSelect(framework)}
                />
                <span className="ml-2 text-base text-gray-500 font-heading">
                  {framework}
                </span>
              </label>
            );
          })}
        </div>
      </FilterComponent>
    </div>
  );
}
