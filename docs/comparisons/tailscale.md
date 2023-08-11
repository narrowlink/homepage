---
sidebar_position: 1
description: Narrowlink vs. Tailscale - What's the difference?
keywords: [Access Control, ACL, Proxy, Gateway, Tailscale, Narrowlink, VPN, WireGuard, Self-Hosted, Open Source, Security, Privacy, Internet Sharing, CDN, Publish Services, Network Performance, Efficiency]
---

# Tailscale vs. Narrowlink

Narrowlink and Tailscale are two open source solutions with different architectures that enable secure remote access and connectivity across networks. They share some similarities but also have key differences in their architectures, features and use cases.

## Overview

**Tailscale** is a Software-as-a-Service (SaaS) platform that provides zero config VPN using the WireGuard protocol. It is partially open source and uses a peer-to-peer mesh architecture that connects devices through the Tailscale cloud services. Tailscale aims to be easy to use out of the box.

**Narrowlink** is a self-hosted platform that consists of a gateway, agents, and clients which acts as a proxy server. It uses a client-agent-gateway model to facilitate connectivity across restricted networks. Narrowlink is fully open source and designed to be flexible, transparent and secure that can be deployed on your own infrastructure.

Tailscale and Narrowlink are both great solutions for remote access and connectivity. However, tailscale focuses on access different devices to each other, while Narrowlink focuses on access to the services trough on the agent as a proxy.

## Architecture

**Narrowlink** uses a centralized gateway that clients and agents connect to over HTTP/S protocols. The gateway handles routing and connections between agents behind firewalls/NAT and clients. Narrowlink does not have centralized configuration management to define agents, clients, access control policies, etc. The gateway configured dynamically based on the tokens that agents and clients use to connect that makes it easy to scale and deploy.

**Tailscale** devices connect directly to each other over WireGuard in a mesh architecture in peer-to-peer fashion. Tailscale uses a centralized configuration management system to define devices, access control policies, etc. Traffic is routed through the Tailscale cloud services to facilitate connections between devices.

## Open Source

**Narrowlink** is completely open source. All components including the gateway, agents and clients are open source.

**Tailscale** uses the open source WireGuard protocol and its client apps are opensource but the coordination services are proprietary.

## Security and Privacy

Both Tailscale and Narrowlink are considered secure and private. Tailscale uses the WireGuard protocol and provides end-to-end encryption between devices by default. Narrowlink uses the HTTP/S protocol to transfer data between agents and clients to gateway which is encrypted by default. Since the data are transferred through the gateway, the gateway has access to the data. However, Narrowlink implemented an optional end-to-end encryption between agents and clients using the XChaCha20-Poly1305 cipher. This adds an extra layer of security and privacy.

Due to nature of the peer-to-peer architecture, the connection between tailscale devices can be observed by the ISP and the Tailscale cloud services. However, the data itself is encrypted and cannot be read by the ISP or Tailscale cloud services. In the narrowlink, the ISP only observes the connections between agents or clients to the gateway that has covered by the HTTPS protocol seems like a normal web traffic, and the gateway has access to the connection data and info. However, if the end-to-end encryption is enabled, the gateway cannot read the data.

Tailscale require special special permission such as root/admin access to install and run the client app, it somethimes require to change the OS and firewall configuration to enable ip forwarding. Narrowlink does not require any special permission to install and run the agent and client for any of the functionalities.

## Internet Sharing

Both Tailscale and Narrowlink can be used to share internet access between devices. It is known as exitnode in the tailscale architecture. Tailscale needs to enable ip forwarding on the exitnode device, which can lead to security issues that other computer within the same vlan may use your computer as a gateway. This conecpt is defined as sharing the internet access in Narrowlink, Narrowlink does not need to enable any sort of ip forwarding feature and changing your firewall configurations as it acts as a proxy. Additionally, you can apply ACLs make restriction on access to the internet.

## Access Control

Both tools ues ACLs to control access to devices and services. However, access control in Tailscale is limited in comparison to Narrowlink. Tailscale only supports IP-based ACLs. Narrowlink supports more granular ACLs including IP, domain, Port, and time-based whitlist and black list ACLs. Since Narrowlink access to services **trough** the agent, the ACLs can be applied to external network that agent is going to connect. For example, You can share your network access to your friend while you restrict the access to your specific service on your network or you limit them to access to one of the services on the agents network.

## Self-Hosted

Narrowlink is designed to be self-hosted on your own infrastructure, providing more control and transparency on the data and traffic. Tailscale is a closed SaaS platform that must be used over the internet through their cloud coordination service.

## CDN compatibility

Since narrowlink uses HTTP/S protocols as transport channel, it can be deployed behind a content delivery network (CDN) such as cloudflare to improve performance. In the other word, agent or client can connect to the gateway through the CDN. Tailscale uses the WireGuard protocol which is not compatible with CDNs.

## Publishing Services

Both narrowlink and tailscale can publish your local webservices on the internet and automatically issue certificate for them. tailscale call this feature as `Funnel`, this feature only works for HTTPS connections users must use their infrastructure to publish their services and use their own domain (you can not use your custom domain). Tailscale issue the certificate on the client machines which prevent the tailscale infrastructure to decrypt your traffic and uses SNI proxy to route the traffic to the correct clint. Narrowlink is more flexible in this case, it has three modes of the oprations to publish webservices on the internet.

1. HTTP/S transparent proxy mode: In this mode narrowlink automatically issue and manage the certificates on the gateway and publish your services on both HTTP and HTTPS protocols. In this mode gateway decrypts the TLS traffic and route it to the correct agent. This mode is perfect to use behind the CDN and useful for the users who prioritize chaching and performance over security.
2. SNI proxy mode: In the mode Narrowlink rely on the SNI extention on the TLS protocol like tailscale, and does not decrypt the traffic. The certificate managment should perform by the users and they can even use their custom certificate. This mode is useful for the users who prioritize security over performance.
3. Mixed mode: In this mode users can define that HTTP connections trait as the transparet proxy mode and for the TLS connections it act as SNI mode.

Since Narrowlink is a self-hosted platform, you can use you own custom domain and publish your web services on any port and protocol.

## Network Performance

Tailscale technically offers better network performance than Narrowlink due to its peer-to-peer architecture. However, the performance of Narrowlink is still good enough for most use cases. Narrowlink's performance depends on the bandwidth of the gateway and devices, while Tailscale's performance depends on the bandwidth of the devices. Narrowlink can also be deployed behind a CDN to utilize caching and enhance performance for publishing services.

## Efficiency

Narrowlink has better efficiency in terms of the binary size, memory usage and CPU usage. Narrowlink is written in Rust. Tailscale is written in Go and C++ for most of its functionality. As an example, tailscale client binary size is 18MB while narrowlink with libc and tls library static linking is 3.5MB.

## Bottom Line

When evaluating Narrowlink vs Tailscale, there are some key differences to consider that are important to understand. This bottom line summary overviews the major distinctions between the two solutions.

- Tailscale focuses on direct peer-to-peer encrypted connections between devices. Narrowlink focuses on accessing services through agent proxies.
- Tailscale uses a SaaS model relying on their cloud coordination service. Narrowlink is self-hosted for more customization and control.
- Tailscale uses WireGuard for better raw throughput performance between devices. Narrowlink has adequate performance for most use cases.
- Narrowlink supports advanced ACLs, access to external networks, and custom proxy behaviors. Tailscale has basic IP-based ACLs.
- Narrowlink can be deployed behind CDNs. Tailscale does not integrate with CDNs.
- Narrowlink offers more flexibility in publishing and exposing services. Tailscale is more limited.
- Tailscale aims for easy out-of-the-box device connectivity. Narrowlink offers more options and customizability.
- Narrowlink has smaller binary sizes, lower resource usage, and avoids large dependencies.
- Narrowlink provides additional security by tunneling all traffic through HTTPS to the gateway. Tailscale uses WireGuard which exposes some metadata.
- Narrowlink is fully open source. Tailscale is partially open source.


In summary, Tailscale prioritizes peer-to-peer device connections with its architecture and SaaS model. Narrowlink prioritizes self-hosted proxy access, ACL flexibility, customizability, and HTTP/S security at the potential cost of some performance depending the gateway. Evaluate your specific needs to choose the right tool.
