---
sidebar_position: 5
description: How does Narrowlink client work?
keywords: [Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Client

The Narrowlink client is a crucial component that acts as an interface for sending and receiving packets to and from agents, forwarding them to the Narrowlink network infrastructure. Installed on end user devices, this component facilitates seamless communication with the Agent component. Clients interact with the gateway to securely access resources located behind firewalls, enabling remote access from anywhere.

The Narrowlink client is responsible for the following tasks:

## Features of the Narrowlink Client

- Sharing internet access of a computer behind NAT networks by setting up a local SOCKS5 proxy server.
- Enabling TCP and UDP port forwarding to connect to agent-side services.
- Implementing end-to-end encryption based on Xchacha20Poly1305 and SHA3-based HMAC-256 for signing the remote address.
- Providing a netcat-like interface for connecting to agent network services.
- Checking the status of agents connected to the gateway.

## Configuration

The client needs to be configured with the address of the gateway and a token. The token can be generated using the [Token Generator](/docs/token-generator) component.

The configuration comprises the following parameters as a YAML file:


```yaml
gateway: gateway.domain.example:443 # address of the gateway
token: eyJ0eX....kNHYQ_4 # token for authentication
service_type: Wss # Wss or Ws (default: Wss)
```
## Default Configuration Paths

The client can load configuration from a custom path using the `-c` or `--config` flag or from its default paths.

The default paths are as follows:

1. Next to the client executable file with the name `client.yaml`
2. In the operating system's configuration directory within a folder named `.narrowlink`, with the file named `client.yaml`

Example path:
```bash
$HOME/.narrowlink/client.yaml
```
3. In the operating system's configuration directory within a folder named `narrowlink`, with the file named `client.yaml`

Configuration paths for different operating systems:

| OS | PATH |
|:-:|:-:|
| Linux | `/home/<username>/.config/narrowlink/client.yaml` |
| MacOS | `/home/<username>/.config/narrowlink/client.yaml` |
| Windows | `/home/<username>/.config/narrowlink/client.yaml` |


To explore more features and options, refer to the [Extended Tutorial](/docs/category/extended-tutorial) section or experiment with different command line options.


