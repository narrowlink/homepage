---
sidebar_position: 6
description: How does narrowlink agent work?
keywords: [Agent, Gateway, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Agent
The agent component acts as a proxy, representing the client by forwarding packets to and from targeted hosts within the local network. Its role is pivotal in ensuring accurate packet forwarding between the client and the designated hosts.

Agents can be installed on a variety of devices, including routers, mobile devices, personal computers, or cloud-based virtual machines, depending on the specific use case.

Currently, the agent supports websockets via both HTTP and HTTPS protocols as the underlying transport layer, ensuring secure and efficient communication. Additionally, it offers a convenient capability: the ability to configure it for direct publication of a web server to the gateway. This eliminates the need for client intervention. When a request for the published domain name reaches the gateway, it is redirected to the agent, which then forwards it to the web server for processing.

To enhance security measures, the agent provides an option for end-to-end encryption of requests and responses. This introduces an additional layer of safeguarding for sensitive data during transmission. Importantly, this feature remains optional, granting users the flexibility to adjust the security level according to their specific requirements.

:::caution
Agents must have a unique name for each user. Otherwise, if a new agent connects with the same name, the old agent will be disconnected.
:::

## Configuration

At minimum, the agent needs to be configured with the address of the gateway and a token. The token can be generated using the [Token Generator](/docs/token-generator) component. Additionally, the agent can be configured to publish a web server to the gateway; the publish token is a configuration element that the gateway uses to determine which domain should be published and mapped to which agent and host. Using the `key` is optional, and it is employed for end-to-end encryption.

```yaml
gateway: gateway.domain.example:443 # address of the gateway
token: eyJ0eX....kNHYQ_4 # token for authentication
publish: eyJ0eX....kNHYQ_4 # token for publishing webserver (optional)
service_type: Wss # Wss or Ws (default: Wss)
#key: "your_key" # key for end to end encryption (optional)%
```

## Default Configuration Paths

The agent can load configuration from a custom path using the `-c` or `--config` flag or from its default paths.

The default paths are as follows:

1. Next to the agent executable file with the name `agent.yaml`
2. In the operating system's configuration directory within a folder named `.narrowlink`, with the file named `agent.yaml`

Example path:
```bash
$HOME/.narrowlink/agent.yaml
```
3. In the operating system's configuration directory within a folder named `narrowlink`, with the file named `agent.yaml`

Configuration paths for different operating systems:

| OS | PATH |
|:-:|:-:|
| Linux | `/home/<username>/.config/narrowlink/agent.yaml` |
| MacOS | `/home/<username>/.config/narrowlink/agent.yaml` |
| Windows | `/home/<username>/.config/narrowlink/agent.yaml` |

To explore more features and options, refer to the [Extended Tutorial](/docs/category/extended-tutorial) section or experiment with different command line options.
