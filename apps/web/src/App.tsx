import "@gotchai/ui/style.css";
import { TypographyExample } from "./typography-example";
import { Chip } from "@gotchai/ui";

import "./styles";

export const App = () => {
  return (
    <div>
      <TypographyExample />
      <Chip color="blue">1/7</Chip>
    </div>
  );
};
