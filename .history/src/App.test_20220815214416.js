import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders content", () => {
  const app = {
    content: "the sum is success",
    important: true,
  };

  const component = render(<App app={app} />);

  // console.log(component)
  component
});
