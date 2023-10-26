---
sidebar_position: 1
description: What is Narrowlink? Narrowlink use cases? How does Narrowlink work? Narrowlink key features? Narrowlink requirements?
keywords: [Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Intro

## What is Narrowlink?

Narrowlink is a secure, open-source, and versatile platform for enabling secure remote access behind NATs and firewalls. It provides numerous functionalities depending on your needs, including connecting, sharing access, and publishing services across restricted networks.


## Use Cases of Narrowlink

- **[Port Forwarding without a Public IP Address](/docs/extended-tutorial/port-forwarding)** - Imagine you have a Windows-based computer in your home network, and you want to access it via RDP from your laptop using a shared hotspot from your mobile network. In this case, both machines cannot directly reach each other, nor do they have public IP addresses. Narrowlink allows you to establish port forwarding between them, enabling you to access your Windows computer from your laptop.

- **[Sharing Internet Access](/docs/extended-tutorial/share-network-access)** - If you need to work from home and access your company's internal network, which only allows access from inside the network, you can install the Narrowlink agent on your computer located within the company's premises and use its internet access[^1].

- **[Publishing Your Local Webserver](/docs/extended-tutorial/webserver-publish)** - Suppose you have a webserver running on your local network that you want to make accessible on the internet. If your ISP doesn't provide you with a public IP address or you wish to let others publish their webservers on your public IP address from their local networks, Narrowlink can help you publish your webserver to the internet.

## Architecture

Narrowlink consists of three main components: the Gateway, Agents, and Clients.

![Narrowlink System Architecture](/img/Diagram.svg)

### [Gateway]

The gateway component serves as the central hub of the Narrowlink network, responsible for routing packets between clients, agents, and browsers. It is deployed on an internet-facing server with a public IP address, functioning as the entry point to the Narrowlink network. The gateway does not have any types database to define users, agents, or services. Instead, it relies on the agent's and client's [tokens](/docs/token-generator) to identify them. The gateway performs various tasks, including authentication, routing, and load balancing. Refer to [Gateway] for further details.

### [Agent]
The agent component acts as a proxy, managing packets on behalf of clients through the gateway, and forwarding them to or from targeted hosts within the local network. It plays a pivotal role in ensuring proper packet forwarding between browsers or clients through the gateway to the intended hosts in restricted or NAT networks. For more information, see [Agent].

### [Client]
The client component provide an interface to sending and receiving packets to and from agents on your local machine. It provides various functionalities, including port forwarding, proxying, and connecting to remote services. More details are available in [Client].


## Key Features

Narrowlink prioritizes security and aims to provide a versatile, secure access solution suitable for a wide range of scenarios. Designed for simplicity, flexibility, and high security, it emphasizes privacy and ease of use. Below are some of the unique features of Narrowlink:

- **Covert Communications** - Narrowlink uses the WebSocket over HTTP/S protocol[^2] to disguise traffic as normal web browsing. This disguising of communications as regular web traffic helps bypass firewalls, thereby increasing privacy and facilitating traffic passage.

- **Fine-Grained Access Control** - Access to agents and their services can be restricted based on criteria such as IP addresses, domains, and agent names. This feature allows you to define blacklist or whitelist rules to limit or grant specific clients' access to agents and their services. Implementing zero trust network access (ZTNA) solutions in your network becomes possible with this feature.

- **End-to-End Encryption** - While using TLS enhances communication privacy, the gateway can still observe the content of communications. To address this, you can implement end-to-end encryption on top of your transport protocol, securing your communications with your own keys. This feature is particularly useful when you don't fully trust the gateway or wish to enhance communication privacy. Narrowlink utilizes the Xchacha20-Poly1305 cipher for encryption, along with HMAC-SHA256 for tamper-proofing.

- **Peer-to-Peer Connectivity** Establish direct, peer-to-peer connections between clients and agents (when possible) using the QUIC protocol to increase performance by avoiding traffic routing through the gateway (Available in the nightly version).

- **User Management** - Narrowlink offers a user management system that allows you to create different user spaces. Each user's space enables clients to access the user's agents, with each client having its access control policies. As a result, you can provide services to an unlimited number of users using a single gateway[^3].

- **Automatic Certificate Provisioning** - Narrowlink leverages the ACME protocol to automatically generate and manage TLS certificates for published services. This feature enables you to issue or renew certificates before expiration using a Certificate Authority (CA) like [Let's Encrypt](https://letsencrypt.org/).

- **SNI Proxy** - Utilize the SNI proxy feature to prevent the gateway from decrypting your TLS traffic. Instead, your server on the agent will handle the TLS traffic. This option is ideal when you prefer not to fully trust the gateway or desire to use your own certificate for your services.

- **CDN Compatibility** - The gateway is compatible with CDN services, allowing you to set up the gateway behind such services to enhance the performance of your services.

- **Flexibility** - You can orchestrate Narrowlink with other tools like SSH or sing-box to add more functionalities like secure terminal access.

- **Cross-Platform and Lightweight** - Narrowlink is written in Rust, making it lightweight and fast. It is also cross-platform and can be deployed on all major desktop and mobile operating systems with minimal overhead.


## Requirements

Narrowlink is currently a self-hosted solution, which means you need a server to run the gateway. You can host the gateway on a VPS, a cloud server, or even a Raspberry Pi. However, to use Narrowlink effectively, you must have a public IP address and a domain name[^4]. While a domain name is optional, it is highly recommended for improved usability, following tutorials, and enhancing communication security.

### Next Steps

If you're interested in using Narrowlink follow our [basic tutorial](/docs/category/basic-tutorial) to learn how to set up a basic Narrowlink network. Then, you can proceed with our [extended tutorial](/docs/category/extended-tutorial) to explore advanced scenarios and use Narrowlink to its full potential.

**Footnotes:**

[^1]: Please ensure you have permission from your company and comply with your company's security policies before sharing internet access using Narrowlink. Narrowlink is not responsible for any misuse of the software.

[^2]: We are continually working on expanding the protocol support to improve stealthiness, flexibility, and privacy.

[^3]: The number of users supported is limited by the hardware resources of the gateway and the number of concurrent connections.

[^4]: If you cannot afford to buy a server, are unable to manage one, or want to try Narrowlink without the technical overhead, we offer a limited number of free accounts hosted on our servers. Feel free to inquire about this offer by sending an email to tr<!-- mail@address -->y@nar<!-- @host -->rowlink.com. However, please note that we cannot guarantee providing an account for everyone due to capacity limitations. Please refer to our [Terms of Service](https://github.com/narrowlink/homepage/blob/main/ToS.md) for more information regarding the terms and conditions when using our servers.

[Client]: /docs/client
[Agent]: /docs/agent
[Gateway]: /docs/gateway
