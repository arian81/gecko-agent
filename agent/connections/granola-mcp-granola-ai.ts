import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.granola.ai/mcp",
  description: "MCP server at mcp.granola.ai.",
  auth: connect("mcp.granola.ai/granola"),
});
