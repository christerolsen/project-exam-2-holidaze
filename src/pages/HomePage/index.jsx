import React from "react";

import Button from "../../components/Button";

const HomePage = () => (
  <div>
    <h1>HomePage</h1>
    <p>dette er en test</p>

    <Button variant="primary">Primary Button</Button>

    <Button variant="accent">Accent Button</Button>

    <Button variant="primary" disabled>
      Disabled Button
    </Button>

    <Button variant="primary">+</Button>

    <Button variant="accent">+</Button>

    <Button variant="primary" disabled>
      +
    </Button>
  </div>
);

export default HomePage;
