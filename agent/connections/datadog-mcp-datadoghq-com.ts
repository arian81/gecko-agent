import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.datadoghq.com/v1/mcp",
  description: "MCP server at mcp.datadoghq.com.",
  auth: connect("mcp.datadoghq.com/datadog"),
});
