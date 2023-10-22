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

Tailscale and Narrowlink are both excellent solutions for remote access and connectivity. However, Tailscale focuses on enabling access between different devices, while Narrowlink focuses on accessing services through agents as proxies.

## Architecture

**Narrowlink** uses a centralized gateway to which clients and agents connect over HTTP/S protocols. The gateway handles routing and connections between agents behind firewalls/NAT and clients. Narrowlink does not have centralized configuration management to define agents, clients, access control policies, etc. The gateway is configured dynamically based on the tokens that agents and clients use, making it easy to scale and deploy.

**Tailscale** devices connect directly to each other over WireGuard in a mesh architecture in a peer-to-peer fashion. Tailscale uses a centralized configuration management system to define devices, access control policies, etc. Traffic is routed through the Tailscale cloud services to facilitate connections between devices.

## Open Source

**Narrowlink** is completely open source. All components, including the gateway, agents, and clients, are open source.

**Tailscale** uses the open source WireGuard protocol, and its client apps are open source, but the coordination services are proprietary.

## Security and Privacy

Both Tailscale and Narrowlink are considered secure and private. Tailscale uses the WireGuard protocol and provides end-to-end encryption between devices by default. Narrowlink uses the HTTP/S protocol to transfer data between agents and clients to the gateway, which is encrypted by default. Since the data is transferred through the gateway, the gateway has access to the data. However, Narrowlink has implemented optional end-to-end encryption between agents and clients using the XChaCha20-Poly1305 cipher, adding an extra layer of security and privacy.

Due to the nature of the peer-to-peer architecture, the connection between Tailscale devices can be observed by the ISP and the Tailscale cloud services. However, the data itself is encrypted and cannot be read by the ISP or Tailscale cloud services. In Narrowlink, the ISP only observes the connections between agents or clients and the gateway, which are covered by the HTTPS protocol, appearing as normal web traffic, and the gateway has access to the connection data and info. However, if end-to-end encryption is enabled, the gateway cannot read the data.

Tailscale requires special permissions such as root/admin access to install and run the client app. It sometimes requires changing the OS and firewall configuration to enable IP forwarding. Narrowlink does not require any special permissions to install and run the agent and client for any of the functionalities.

## Internet Sharing

Both Tailscale and Narrowlink can be used to share internet access between devices. This concept is known as "exit node" in the Tailscale architecture. Tailscale needs to enable IP forwarding on the exit node device, which can lead to security issues as other computers within the same VLAN may use your computer as a gateway. In contrast, Narrowlink does not need to enable any sort of IP forwarding feature or change your firewall configurations, as it acts as a proxy. Additionally, you can apply ACLs to restrict access to the internet.

## Access Control

Both tools use ACLs to control access to devices and services. However, access control in Tailscale is limited in comparison to Narrowlink. Tailscale only supports IP-based ACLs. Narrowlink supports more granular ACLs, including IP, domain, port, and time-based whitelist and blacklist ACLs. Since Narrowlink accesses services through the agent, the ACLs can be applied to the external network that the agent is going to connect to. For example, you can share your network access with your friend while restricting access to specific services on your network or limiting them to access one of the services on the agent's network.

## Self-Hosted

Narrowlink is designed to be self-hosted on your infrastructure, providing more control and transparency over the data and traffic. Tailscale is a closed SaaS platform that must be used over the internet through their cloud coordination service.

## CDN Compatibility

Since Narrowlink uses HTTP/S protocols as a transport channel, it can be deployed behind a content delivery network (CDN) such as Cloudflare to improve performance. In other words, agents or clients can connect to the gateway through the CDN. Tailscale uses the WireGuard protocol, which is not compatible with CDNs.

## Publishing Services

Both Narrowlink and Tailscale can publish your local web services on the internet and automatically issue certificates for them. Tailscale calls this feature "Funnel," but this feature only works for HTTPS connections, and users must use Tailscale's infrastructure to publish their services, using Tailscale's domain (custom domains are not supported). Tailscale issues the certificate on the client machines, preventing the Tailscale infrastructure from decrypting your traffic and using an SNI proxy to route the traffic to the correct client. Narrowlink is more flexible in this case, offering three modes of operation for publishing web services on the internet:

1.  HTTP/S transparent proxy mode: In this mode, Narrowlink automatically issues and manages the certificates on the gateway, publishing your services on both HTTP and HTTPS protocols. In this mode, the gateway decrypts the TLS traffic and routes it to the correct agent. This mode is perfect for use behind CDNs and is useful for users who prioritize caching and performance over security.
2.  SNI proxy mode: In this mode, Narrowlink relies on the SNI extension in the TLS protocol, similar to Tailscale, and does not decrypt the traffic. Certificate management should be performed by the users, and they can even use their custom certificate. This mode is useful for users who prioritize security over performance.
3.  Mixed mode: In this mode, users can define that HTTP connections use the transparent proxy mode, and for TLS connections, it acts as SNI mode.

Since Narrowlink is a self-hosted platform, you can use your custom domain and publish your web services on any port and protocol.

## Network Performance

Tailscale technically offers better network performance than Narrowlink due to its peer-to-peer architecture. However, the performance of Narrowlink is still good enough for most use cases. Narrowlink's performance depends on the bandwidth of the gateway and devices, while Tailscale's performance depends on the bandwidth of the devices. Narrowlink can also be deployed behind a CDN to utilize caching and enhance performance for publishing services.

## Efficiency

Narrowlink has better efficiency in terms of binary size, memory usage, and CPU usage. Narrowlink is written in Rust, while Tailscale is written in Go and C++ for most of its functionality. For example, the Tailscale client binary size is about 45MB (tailscale binary 16MB, tailscaled binary 29MB), while Narrowlink with libc and TLS library static linking is 3.5MB (Ubuntu x64).

## Bottom Line

When evaluating Narrowlink vs Tailscale, there are some key differences to consider that are important to understand. This bottom-line summary outlines the major distinctions between the two solutions:

-   Tailscale focuses on direct peer-to-peer encrypted connections between devices, while Narrowlink focuses on accessing services through agent proxies.
-   Tailscale uses a SaaS model relying on its cloud coordination service, while Narrowlink is self-hosted for more customization and control.
-   Tailscale uses WireGuard for better raw throughput performance between devices, while Narrowlink has adequate performance for most use cases.
-   Narrowlink supports advanced ACLs, access to external networks, and custom proxy behaviors, while Tailscale has basic IP-based ACLs.
-   Narrowlink can be deployed behind CDNs, while Tailscale does not integrate with CDNs.
-   Narrowlink offers more flexibility in publishing and exposing services, while Tailscale is more limited.
-   Tailscale aims for easy out-of-the-box device connectivity, while Narrowlink offers more options and customizability.
-   Narrowlink has smaller binary sizes, lower resource usage, and avoids large dependencies.
-   Narrowlink provides additional security by tunneling all traffic through HTTPS to the gateway, while Tailscale uses WireGuard, which exposes some metadata.
-   Narrowlink is fully open source, while Tailscale is partially open source.

In summary, Tailscale prioritizes peer-to-peer device connections with its architecture and SaaS model, while Narrowlink prioritizes self-hosted proxy access, ACL flexibility, customizability, and HTTP/S security at the potential cost of some performance depending on the gateway. Evaluate your specific needs to choose the right tool.

