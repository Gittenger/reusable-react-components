import React, { useState, useCallback, useEffect } from "react";

import { TabbedMenuContainer, TabButton } from "./tabbedMenu.styles.jsx";

const TabbedMenu = ({ options }) => {
  const [activeTab, setActiveTab] = useState(0);

  const updateTabbedDisplay = useCallback(() => {
    const menuItems = Array.from(
      document.getElementById("tabbed-menu").children
    );
    menuItems.forEach((item) => item.classList.remove("active"));
    menuItems[activeTab].classList.add("active");
  }, [activeTab]);

  useEffect(() => {
    updateTabbedDisplay();
  }, [updateTabbedDisplay]);

  return (
    <TabbedMenuContainer id="tabbed-menu">
      {options.map((option, index) =>
        index === 0 ? (
          <TabButton className="active" onClick={() => setActiveTab(index)}>
            {option}
            <div className="active-tab-line"></div>
          </TabButton>
        ) : (
          <TabButton onClick={() => setActiveTab(index)}>
            {option}
            <div className="active-tab-line"></div>
          </TabButton>
        )
      )}
    </TabbedMenuContainer>
  );
};

export default TabbedMenu;
