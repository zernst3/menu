import React from "react";
import Amplify from "aws-amplify";
import config from "../../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(config);

export const AdminDashboard: React.FC<any> = () => {
  return (
    <div id="Authentication">
      <h1>Authentication</h1>
    </div>
  );
};

export default withAuthenticator(AdminDashboard);
