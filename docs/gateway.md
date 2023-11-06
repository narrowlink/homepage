---
sidebar_position: 6
description: How does Narrowlink gateway work?
keywords: [Gateway, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel, Rust, ACME, Let's Encrypt, TLS, SSL, WSS, WS, Websocket, Load Balancing, Access Control, Service Publication, Certificate Management, Secure Communication, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Xchacha20-Poly1305, HMAC-SHA256]
---

# Gateway

The gateway component serves as the central hub of the Narrowlink network, responsible for routing packets between agents, clients, and browsers. Deployed on a public-facing server on the internet, the gateway acts as the entry point into the Narrowlink network. In addition to routing packets between agents, clients, and browsers, it performs the following tasks:

- Authenticating clients and agents
- Managing access control policies
- Publishing web services located on the agent's side
- Issuing and managing TLS certificates for published services
- Performing load balancing and redundancy

The gateway can also be deployed behind a CDN service to enhance the performance of published services. In this case, you need to configure the CDN to connect to the gateway using the TLS protocol if you're using the `Wss` protocol. Moreover, you cannot use the SNI proxy feature and the `TlsAlpn01` challenge type for ACME anymore.

## Configuration

The gateway must be configured with a secret key and a list of services. The secret key is used to authenticate clients and agents and must match the one used to generate tokens. The gateway currently provides two services: `Ws` and `Wss` for insecure and secure (TLS) websockets, respectively. Each service has a list of domains to which it should listen, along with a TLS configuration. The TLS configuration can be either `Acme` or `File`. The `Acme` configuration is used to automatically issue and manage TLS certificates using Let's Encrypt. The `File` configuration is used to load a TLS certificate from a file.

```yaml
name: gateway-name # name of the gateway, it currently has no effect
secret: [1,2,3,4] # secret key for the gateway is used to authenticate clients and agents, at least 8 bytes
services: # list of services
- !Wss # secure (TLS) websocket service
  domains: ["domain.example"] # list of domains that this service should listen to
  listen_addr: "0.0.0.0:443" # address to listen to
  tls_config: !Acme # TLS configuration
    email: "email@domain.example" # email address to register with Let's Encrypt
    challenge_type: Http01 # Http01 or TlsAlpn01 (default: Http01)
    directory_url: https://acme-v02.api.letsencrypt.org/directory # Let's Encrypt directory URL (default: https://acme-v02.api.letsencrypt.org/directory)
  # tls_config: !File /etc/cert/domain.example/fullchain+privkey.pem
- !Ws # insecure websocket service
  domains: ["domain.example"] # list of domains that this service should listen to
  listen_addr: "0.0.0.0:80" # address to listen to
```

:::tip
You can create a publish token for an agent with the same domain as the gateway to change the default content of the gateway's homepage.
:::

## Default Configuration Paths

The gateway can load configuration from a custom path using the `-c` or `--config` flag or from its default paths.

The default paths are as follows:

1. Next to the gateway executable file with the name `gateway.yaml`
2. In the operating system's configuration directory within a folder named `.narrowlink`, with the file named `gateway.yaml`

Example path:
```bash
$HOME/.narrowlink/gateway.yaml
```
3. In the operating system's configuration directory within a folder named `narrowlink`, with the file named `gateway.yaml`

Configuration paths for different operating systems:

| OS | PATH |
|:-:|:-:|
| Linux | `/home/<username>/.config/narrowlink/gateway.yaml` |
| MacOS | `/home/<username>/.config/narrowlink/gateway.yaml` |
| Windows | `/home/<username>/.config/narrowlink/gateway.yaml` |

To explore more features and options, refer to the [Extended Tutorial](/docs/category/extended-tutorial) section or experiment with different command line options.

:::
