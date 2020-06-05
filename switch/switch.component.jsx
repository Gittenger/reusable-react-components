import React, { useState } from "react";

import { SwitchContainer, SwitchButton } from "./switch.styles.jsx";

const Switch = () => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <SwitchContainer
      className={switchOn ? "active" : ""}
      onClick={() => setSwitchOn(!switchOn)}
    >
      <SwitchButton />
    </SwitchContainer>
  );
};

export default Switch;
