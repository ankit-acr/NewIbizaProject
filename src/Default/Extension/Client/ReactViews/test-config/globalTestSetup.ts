import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { setupMocks } =  require("@microsoft/azureportal-reactview/test-support/setupMocks");

configure({ adapter: new Adapter() });
setupMocks();

export {};
