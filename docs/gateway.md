---
sidebar_position: 6
description: How does Narrowlink gateway work?
keywords: [Gateway, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel, Rust, ACME, Let's Encrypt, TLS, SSL, WSS, WS, Websocket, Load Balancing, Access Control, Service Publication, Certificate Management, Secure Communication, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Xchacha20-Poly1305, HMAC-SHA256]
---

# Gateway

The Narrowlink gateway is a vital component of the Narrowlink system that facilitates secure communication and seamless connectivity between clients and agents. As the central hub, the gateway plays a critical role in enabling remote access to devices and services behind NAT and firewalls.

- Secure Communication: The gateway establishes secure connections with clients and agents, ensuring the confidentiality and integrity of data transmitted over the network.
- Request Routing: Incoming requests from clients are routed to the appropriate agent based on the requested service or destination, enabling seamless communication between clients and devices behind NAT and firewalls.
- Certificate Management: The gateway handles the issuance and management of SSL/TLS certificates to enable secure connections between clients and agents. It automatically generates and manages certificates for published services, simplifying the setup process for secure communication.
- Load Balancing: In scenarios where multiple agents are available, the gateway performs load balancing to distribute incoming requests among the agents. This helps optimize resource utilization and ensures efficient handling of client requests.
- Access Control: The gateway provides access control mechanisms to regulate client access to agents and their associated services. With customizable policies, you can define rules to restrict or allow specific clients' access based on criteria such as IP addresses, domains, or agent names.
- Service Publication: Agents can publish their services through the gateway, making them accessible to clients outside the local network. The gateway acts as a proxy for the published services, enabling clients to access them using the gateway's address and domain.

## Sample Configuration

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
    directory_url: https://acme-staging-v02.api.letsencrypt.org/directory # Let's Encrypt directory URL (default: https://acme-v02.api.letsencrypt.org/directory)
  # tls_config: !File /etc/cert/domain.example/fullchain+privkey.pem
- !Ws # insecure websocket service
  domains: ["domain.example"] # list of domains that this service should listen to
  listen_addr: "0.0.0.0:80" # address to listen to
```

:::note
Please note that the gateway's configuration file must be located in the same folder as the gateway executable file with the name `gateway.yaml`.

Alternatively, it can be found in the following paths:

```bash
$HOME/.narrowlink/gateway.yaml
```

or

```bash
Linux: /home/<username>/.config/narrowlink/gateway.yaml
Mac: /Users/<username>/Library/Application Support/narrowlink/gateway.yaml
Windows: C:\Users\<username>\AppData\Roaming\narrowlink\gateway.yaml
```

:::
