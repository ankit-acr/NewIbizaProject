import * as Az from "@microsoft/azureportal-reactview/Az";
import * as React from "react";
import { Text } from "@fluentui/react/lib/Text";

Az.setTitle("title");

const HelloWorld = () => {
    return <Text data-testid="helloworld-text-testid">text</Text>;
};

export default HelloWorld;
