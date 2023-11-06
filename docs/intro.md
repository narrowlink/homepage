---
sidebar_position: 1
description: What is Narrowlink? Narrowlink use cases? How does Narrowlink work? Narrowlink key features? Narrowlink requirements?
keywords: [Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel, peer-to-peer, QUIC]
---

# Intro

## What is Narrowlink?

Narrowlink is a secure, open-source, and versatile platform for enabling secure remote access behind NATs and firewalls. It provides numerous functionalities depending on your needs, including connecting, sharing access, and publishing services across restricted networks.


## Example of Narrowlink Use Cases and Scenarios

- **[Sharing Network Access](/docs/extended-tutorial/share-network-access-socks5)** - If you need to work from home and access your company's internal network, which only allows access from within the network, you can install the Narrowlink agent on a computer located within your company's premises. This will enable you to utilize its internet access[^1] without depending on the company's remote access tools.

- **[Access to devices that does not support VPN](/docs/category/extended-tutorial/)** - Suppose you have a device that does not support VPN, such as an IoT sensor, CCTV camera, smart TV, and you want to access them from your laptop on a different network that cannot directly reach the device. In this case, you can install the Narrowlink agent on a device within the same network as these devices. Then, you can connect using your laptop through Narrowlink from anywhere.

- **[Using Native Services like RDP/SSH Across Different Networks](/docs/extended-tutorial/ssh-integration/)** - You can use Narrowlink to access your computer's native services like RDP (Remote Desktop) or SSH directly, without relying on third-party services. This is especially useful when both machines cannot reach each other directly, and neither has a public IP address. Narrowlink allows you to use your SSH or RDP client (e.g., OpenSSH client or Microsoft Remote Desktop) without the need for any modifications or additional software to connect to your computer. The connection can even be established directly using peer-to-peer functionality.

- **[Publishing Your Local Webserver](/docs/extended-tutorial/webserver-publish)** - Suppose you have a webserver running on your local network that you want to make accessible on the internet. If your ISP doesn't provide you with a public IP address or you wish to let others publish their webservers on your public IP address from their local networks, Narrowlink can help you publish your webserver to the internet.

## Architecture

Narrowlink consists of three main components: the Gateway, Agents, and Clients.

![Narrowlink System Architecture](/img/Diagram.svg)

### [Gateway]

The gateway component serves as the central hub of the Narrowlink network, responsible for dispatching instructions for peer-to-peer connections and routing packets between other components (when peer-to-peer is not available). Typically deployed on an internet-facing server with a public IP address, it functions as the entry point to the Narrowlink network. The gateway performs various tasks, including authentication, routing, and load balancing. Refer to [Gateway] for further details.

### [Agent]
The agent component acts as a proxy, managing packets on behalf of clients through the gateway, and forwarding them to or from targeted hosts within the local network. It plays a pivotal role in ensuring proper packet forwarding between browsers or clients through the gateway to the intended hosts in restricted or NAT networks. For more information, see [Agent].

### [Client]
The client component provides an interface for sending and receiving packets to and from agents on your local machine. It offers various interfaces to manage connections, including the tun interface, proxying, port forwarding, and a terminal connection to remote services. More details are available in [Client].


## Key Features

Narrowlink prioritizes security and aims to provide a versatile, secure access solution suitable for a wide range of scenarios. Designed for simplicity, flexibility, and high security, it emphasizes privacy and ease of use. Below are some of the unique features of Narrowlink:

- **Covert Communications** - Narrowlink uses the WebSocket over HTTP/S and QUIC protocols[^2] to disguise traffic as normal web browsing. This disguising of communications as regular web traffic helps bypass firewalls, thereby increasing privacy and facilitating traffic passage.

- **Fine-Grained Access Control** - Access to agents and their services can be restricted based on criteria such as IP addresses, domains, and agent names. This feature allows you to define blacklist or whitelist rules to limit or grant specific clients' access to agents and their services. Implementing zero trust network access (ZTNA) solutions in your network becomes possible with this feature.

- **End-to-End Encryption** - While using TLS enhances communication privacy, the gateway can still observe the content of communications. To address this, you can implement end-to-end encryption on top of your transport protocol, securing your communications with your own keys. This feature is particularly useful when you don't fully trust the gateway or wish to enhance communication privacy. Narrowlink utilizes the Xchacha20-Poly1305 cipher for encryption, along with HMAC-SHA256 for tamper-proofing.

- **Peer-to-Peer Connectivity** Establish direct, peer-to-peer connections between clients and agents (when possible) using the QUIC protocol to increase performance by avoiding traffic routing through the gateway (Available in the nightly version).

- **Unidirectional Communication** - All communication between clients and agents is unidirectional in Narrowlink, meaning the agent cannot initiate a connection to a client and can only respond to connections opened by the client. This feature significantly enhances security by preventing the agent from initiating a connection to a client without the client's knowledge, whereas typical VPNs allow bidirectional connectivity.

- **User Management** - Narrowlink offers a user management system that allows you to create different user spaces. Each user's space enables clients to access the user's agents, with each client having its access control policies. As a result, you can provide services to an unlimited number of users using a single gateway[^3].

- **Automatic Certificate Provisioning** - Narrowlink leverages the ACME protocol to automatically generate and manage TLS certificates for published services. This feature enables you to issue or renew certificates before expiration using a Certificate Authority (CA) like [Let's Encrypt](https://letsencrypt.org/).

- **SNI Proxy** - Utilize the SNI proxy feature to prevent the gateway from decrypting your TLS traffic. Instead, your server on the agent will handle the TLS traffic. This option is ideal when you prefer not to fully trust the gateway or desire to use your own certificate for your services.

- **CDN Compatibility** - The gateway is compatible with CDN services, allowing you to set up the gateway behind such services to enhance the performance of your services.

- **Cross-Platform and Lightweight** - Narrowlink is written in Rust, making it lightweight and fast. It is also cross-platform and can be deployed on all major desktop and mobile operating systems with minimal overhead.

## Requirements

Narrowlink is currently a self-hosted solution, which means you need a server to run the gateway. You can host the gateway on a VPS, a cloud server, or even a Raspberry Pi. However, to use Narrowlink effectively, you must have a public IP address and a domain name[^4]. While a domain name is optional, it is highly recommended for improved usability, following tutorials, and enhancing communication security.

### Next Steps

If you're interested in using Narrowlink follow our [basic tutorial](/docs/category/basic-tutorial) to learn how to set up a basic Narrowlink network. Then, you can proceed with our [extended tutorial](/docs/category/extended-tutorial) to explore advanced scenarios and use Narrowlink to its full potential.

**Footnotes:**

[^1]: Please ensure you have permission from your company and comply with your company's security policies before sharing internet access using Narrowlink. Narrowlink is not responsible for any misuse of the software.

[^2]: The communication protocol to the gateway is based on the WebSocket over HTTP/S protocol. However, peer-to-peer communication between clients and agents is based on the QUIC protocol. 

[^3]: The number of users supported is limited by the hardware resources of the gateway and the number of concurrent connections.

[^4]: If you cannot afford to buy a server, are unable to manage one, or want to try Narrowlink without the technical overhead, we offer a limited number of free accounts hosted on our servers. Feel free to inquire about this offer by sending an email to tr<!-- mail@address -->y@nar<!-- @host -->rowlink.com. However, please note that we cannot guarantee providing an account for everyone due to capacity limitations. Please refer to our [Terms of Service](https://github.com/narrowlink/homepage/blob/main/ToS.md) for more information regarding the terms and conditions when using our servers.

[Client]: /docs/client
[Agent]: /docs/agent
[Gateway]: /docs/gateway
