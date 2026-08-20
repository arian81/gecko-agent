import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.posthog.com/mcp",
  description: "Query, analyze, and manage your PostHog insights",
  auth: connect("mcp.posthog.com/prj_P2dUM80ml6JCAuaiZWoU9GxqMtkx"),
});
