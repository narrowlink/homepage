---
sidebar_position: 1
description: Narrowlink vs. Tailscale - What's the difference?
keywords: [Access Control, ACL, Proxy, Gateway, Tailscale, Narrowlink, VPN, WireGuard, Self-Hosted, Open Source, Security, Privacy, Internet Sharing, CDN, Publish Services, Network Performance, Efficiency]
---


# Tailscale vs. Narrowlink

:::tip
If this is your first visit to this website, please take a moment to review the [Introduction](/docs/intro) section to gain a basic understanding of Narrowlink. Then, reading this page will be more beneficial.
:::

Narrowlink and Tailscale are two open-source solutions with different architectures that enable secure remote access and connectivity across networks. They share some similarities but also have key differences in their architectures, features, and use cases.

## Overview

**Tailscale** is a Software-as-a-Service (SaaS) platform that provides a zero-config VPN using the WireGuard protocol. It is partially open source and uses a peer-to-peer mesh architecture that connects devices through the Tailscale cloud services. Tailscale aims to be easy to use out of the box.

**Narrowlink** is a self-hosted platform that consists of a gateway, agents, and clients acting as a proxy server. It uses a client-agent-gateway model to facilitate connectivity across restricted networks. Narrowlink is fully open source and designed to be flexible, transparent, and secure, and it can be deployed on your infrastructure.

Tailscale and Narrowlink are both excellent solutions for remote access and connectivity. However, Tailscale is more stable and focuses on enabling access between different devices, while Narrowlink is on its earliest stages and focuses on accessing services through agents as proxies.

## Architecture

Both Narrowlink and Tailscale offer peer-to-peer and relay mode connectivity and share a similar overall architecture. However, they differ in their underlying protocols and roles. Narrowlink utilizes HTTP/S and QUIC protocols, functioning as a proxy, while Tailscale employs WireGuard and operates as a VPN by default as well as supporting proxy mode.

### VPN vs Proxy
In a traditional VPN setup, the entire network stack is captured, including the Ethernet layer when a tap driver is used or the network layer when a tun driver is utilized, as is the case with Tailscale. The captured data is then transmitted to another party (computer) and directly written to that machine's VPN interface, with the kernel handling the received data.

On the other hand, Narrowlink's proxy implementation captures network traffic from the user's computer using various interfaces and selectively sends application-specific network traffic to another party, rather than forwarding the entire network stack.

#### VPN

Implementing a VPN is relatively straightforward, especially when using a well-known protocol and tool like WireGuard. It offers bidirectional communication, enabling both parties to establish connections. Running the VPN client with superuser privileges on both ends is required. The VPN client often necessitates changes to the computer's firewall rules and kernel parameters for sharing network access and implementing access controls. VPN applications generally do not engage in CPU-intensive operations, as they primarily transmit data. VPNs can capture network traffic by altering device routes, which is a user-friendly and practical method.

#### Proxy

Proxies typically facilitate unidirectional communication, where one party initiates the connection, while the other can only respond and cannot establish new connections. Proxy implementations typically transmit only application-layer data and do not require superuser access. In the case of network access sharing and access control, proxies do not require elevated privileges but may demand more computational power to create sockets and forward the proxied data. Proxies also require an interface for capturing network traffic on the device, such as the SOCKS protocol, which is not universally supported by all applications and may not be very user-friendly.

However, Narrowlink always works in proxy mode and offers various interfaces, including a unique special VPN client, to capture device traffic. The VPN client used by Narrowlink is not a typical VPN interface; it is specifically designed for network traffic capture. While the captured traffic contains protocol headers, Narrowlink has also implemented a user-level network stack to manage TCP/IP and extract application layer information for transfer.

## Open Source

**Narrowlink** is completely open source. All components, including the gateway, agents, and clients, are open source.

**Tailscale** uses the open source WireGuard protocol, and its client apps are open source, but the coordination services are proprietary.

## Security and Privacy

Although both Tailscale and Narrowlink are considered secure and private, Narrowlink offers a higher level of security. Tailscale uses the WireGuard protocol, providing end-to-end encryption between devices by default. In contrast, Narrowlink uses the HTTP/S and QUIC protocols to transfer data between agents and clients to the gateway, which is encrypted by default. Since the data is transferred through the gateway, the gateway has access to it. However, Narrowlink has implemented optional end-to-end encryption between agents and clients using the XChaCha20-Poly1305 cipher, adding an extra layer of security and privacy.

Due to the nature of the peer-to-peer architecture, the connection between devices can be observed by the ISP and the relay servers. However, the data itself is encrypted and cannot be read by the ISP or the relay servers. In Narrowlink, users can freely choose whether they want to use peer-to-peer mode or relay mode. In the case of the relay mode, only the ISP observes the connections between agents or clients and the gateway. These connections are covered by the HTTPS protocol, making them appear as normal web traffic. The gateway has access to the connection data and info. However, if end-to-end encryption is enabled, the gateway cannot read the data.

Tailscale requires special permissions, such as root/admin access, to install and run the client app. It sometimes requires changing the OS and firewall configurations to enable IP forwarding. On the other hand, Narrowlink does not require any special permissions to install and run the agent and client for any of its functionalities. The exception is when the client uses tun mode, in which case only the client requires superuser privileges. However, it does not alter any configuration on the computer, except for the network routes to redirect the packets.

## Internet Sharing

Both Tailscale and Narrowlink can be used to share internet access between devices. This concept is known as "exit node" in the Tailscale architecture. Tailscale needs to enable IP forwarding on the exit node device, which can lead to security issues as other computers within the same VLAN may use your computer as a gateway. In contrast, Narrowlink does not need to enable any sort of IP forwarding feature or change your firewall configurations, as it acts as a proxy. Additionally, you can apply ACLs to restrict access to the internet.

## Access Control

Both tools use ACLs to control access to devices and services. However, access control in Tailscale is limited in comparison to Narrowlink. Tailscale only supports IP-based ACLs. Narrowlink supports more granular ACLs, including IP, domain, port, and time-based whitelist and blacklist ACLs. Since Narrowlink accesses services through the agent, the ACLs can be applied to the external network that the agent is going to connect to. For example, you can share your network access with your friend while restricting access to specific services on your network or limiting them to access one of the services on the agent's network.

## User Interface

Tailscale provides a modern GUI alongside its CLI interface, while Narrowlink only offers a CLI interface at this time, which may be less user-friendly for some users. Tailscale also requires its service to run continuously on the device, whereas Narrowlink only needs the agent component to run constantly on the computer, and the client can run as per the user's demand.

## Self-Hosted

Narrowlink is designed to be self-hosted on your infrastructure, providing more control and transparency over the data and traffic. Tailscale, on the other hand, is a closed SaaS platform that must be used over the internet through their cloud coordination service. However, users have the option to install Headscale, an opensource self-hosted implementation of the Tailscale control server, to use Tailscale as a self-hosted solution.

## CDN Compatibility

Since Narrowlink uses HTTP/S protocols as a transport channel, it can be deployed behind a content delivery network (CDN) such as Cloudflare to improve performance. In other words, agents or clients can connect to the gateway through the CDN. Tailscale uses the WireGuard protocol, which is not compatible with CDNs.

## Publishing Services

Both Narrowlink and Tailscale can publish your local web services on the internet and automatically issue certificates for them. Tailscale calls this feature "Funnel," but this feature only works for HTTPS connections, and users must use Tailscale's infrastructure to publish their services, using Tailscale's domain (custom domains are not supported). Tailscale issues the certificate on the client machines, preventing the Tailscale infrastructure from decrypting your traffic and using an SNI proxy to route the traffic to the correct client. Narrowlink is more flexible in this case, offering three modes of operation for publishing web services on the internet:

1. HTTP/S transparent proxy mode: In this mode, Narrowlink automatically issues and manages the certificates on the gateway, publishing your services on both HTTP and HTTPS protocols. In this mode, the gateway decrypts the TLS traffic and routes it to the correct agent. This mode is perfect for use behind CDNs and is useful for users who prioritize caching and performance over security.
2. SNI proxy mode: In this mode, Narrowlink relies on the SNI extension in the TLS protocol, similar to Tailscale, and does not decrypt the traffic. Certificate management should be performed by the users, and they can even use their custom certificate. This mode is useful for users who prioritize security over performance.
3. Mixed mode: In this mode, users can define that HTTP connections use the transparent proxy mode, and for TLS connections, it acts as SNI mode.

Since Narrowlink is a self-hosted platform, you can use your custom domain and publish your web services on any port and protocol.

## Performance

Tailscale technically offers better computational performance than Narrowlink in peer to peer connectivity due to using the WireGuard protocol and absence of packet analysis, while Narrowlink uses the QUIC protocol that relatively requires more computational power. However, it is not clear which one provides better network performance. Narrowlink cuts the network protocol headers for transmission, which might seem more efficient, while Tailscale transfers the entire network stack, but it is worth noting that the overhead of QUIC compared to WireGuard is also important, which is unclear.

## Efficiency

Narrowlink has better overal efficiency in terms of binary size, memory usage, and CPU usage (In relay mode). Narrowlink is written in Rust, while Tailscale is written in Go and C++ for most of its functionality. For example, the Tailscale client binary size is about 45MB (tailscale binary 16MB, tailscaled binary 29MB), while Narrowlink with libc and TLS library static linking is 3.5MB (Ubuntu x64).

## Bottom Line

When evaluating Narrowlink vs Tailscale, there are some key differences to consider that are important to understand. This bottom-line summary outlines the major distinctions between the two solutions:

- Tailscale focuses on connections between devices, while Narrowlink focuses on accessing services through agent proxies.
- Tailscale uses a SaaS model relying on its cloud coordination service, while Narrowlink is self-hosted for more customization and control.
- Tailscale uses WireGuard for better raw throughput computational resources between devices, while Narrowlink requires more computational resources but still has adequate performance and insensible for most use cases.
- Narrowlink supports advanced ACLs, access to external networks, and custom proxy behaviors, while Tailscale has basic IP-based ACLs.
- Narrowlink can be deployed behind CDNs, while Tailscale does not integrate with CDNs.
- Narrowlink offers more flexibility in publishing and exposing services, while Tailscale is more limited.
- Tailscale aims for easy out-of-the-box device connectivity, while Narrowlink offers more options and customizability.
- Narrowlink has smaller binary sizes, lower resource usage, and avoids large dependencies.
- Narrowlink provides additional security by tunneling all traffic through HTTPS to the gateway, while Tailscale uses WireGuard, which exposes some metadata.
- Tailscale provides modern user interfaces to use, while Narrowlink currently only offers a CLI interface.
- Narrowlink is fully open source, while Tailscale is partially open source.
- Narrowlink is in its early stages and not recommended for industries at this time, while Tailscale proves its stability.
In summary, Tailscale focuses on easy device connectivity. Narrowlink offers more customizability and control. Consider your use case when choosing between them. Narrowlink is less mature but innovative, while Tailscale is stable and proven.


Narrowlink stands out as a highly flexible and customizable networking solution compared to Tailscale. Its self-hosted nature, open-source design, and robust security features, including granular access controls, make it a compelling choice. Additionally, its ability to seamlessly integrate with infrastructure such as CDNs for enhanced performance sets it apart. Narrowlink's primary focus is on secure service access through agents, rather than mere device connections. While Tailscale currently boasts maturity and user-friendliness, Narrowlink's transparent and adaptable approach, along with its potential for growth, positions it as a promising option. Despite being in the early stages of development, Narrowlink's innovative architecture and proxy-based strategy will particularly resonate with users seeking customization and self-hosted alternatives.