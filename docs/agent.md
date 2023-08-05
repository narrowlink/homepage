---
sidebar_position: 7
description: How does narrowlink agent work?
keywords: [Agent, Gateway, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Agent

The agent is an application that runs on your target devices, providing remote access capabilities. Its main responsibilities include forwarding requests to the gateway and receiving responses from it. The agent also handles the encryption and decryption of both incoming requests and outgoing responses.

Currently, the agent supports websockets over HTTP and HTTPS protocols as the transport layer, ensuring secure and efficient communication. Additionally, it offers a convenient feature where it can be configured to publish a webserver directly to the gateway, eliminating the need for client intervention. When a request for the published domain name is received by the gateway, it is forwarded to the agent, which then forwards it to the webserver for processing.

To further enhance security, the agent provides the option for end-to-end encryption of requests and responses, adding an extra layer of protection for sensitive data during transmission. This feature is optional, allowing users to tailor the level of security based on their specific requirements.

:::caution
Agents must have a unique name for each user; otherwise, if a new agent connects with the same name again, the old agent will be disconnected.
:::

## Sample Configuration

```yaml
gateway: gateway.domain.example:443 # address of the gateway
token: eyJ0eX....kNHYQ_4 # token for authentication
publish: eyJ0eX....kNHYQ_4 # token for publishing webserver (optional)
service_type: Wss # Wss or Ws (default: Wss)
#key: "your_key" # key for end to end encryption (optional)%
```

:::note
Please note that the agent's configuration file must be located in the same folder as the agent executable file with the name `agent.yaml`.

Alternatively, it can be found in the following paths:

```bash
$HOME/.narrowlink/agent.yaml
```

or

```bash
Linux: /home/<username>/.config/narrowlink/agent.yaml
Mac: /Users/<username>/Library/Application Support/narrowlink/agent.yaml
Windows: C:\Users\<username>\AppData\Roaming\narrowlink\agent.yaml
```

:::
