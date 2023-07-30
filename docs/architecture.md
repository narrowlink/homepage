---
sidebar_position: 2
description: How narrowlink works? What are the components of narrowlink?
keywords: [Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Architecture 

Narrowlink's architecture is designed to provide a secure and versatile platform for enabling remote access behind NATs and firewalls. At its core, Narrowlink consists of three main components: the Gateway, Agents, and Clients.

![Narrowlink System Architecture](/img/Diagram.svg)

## [Gateway]
The gateway component serves as the central hub of the Narrowlink network, responsible for routing packets between agents, clients, and browsers. Deployed on a public-facing server in the cloud, the gateway acts as the entry point into the Narrowlink network. It enforces access control policies, providing fine-grained control over which clients can access specific agents and their services. The gateway employs the WebSocket over HTTP/S protocol to disguise traffic as regular web browsing, enhancing stealthiness and ensuring smooth passage through firewalls. With features like load balancing and redundancy, the gateway ensures high availability and fault tolerance. Moreover, it can directly receive HTTP/S requests from external clients and forward them to the appropriate agent to publish web services behind firewalls, further enhancing accessibility and convenience. Additionally, the gateway automatically issues and manages TLS certificates for published services, ensuring secure communication between clients and agents.


## [Agent]
The agent component acts as a proxy, handling packets on behalf of the client, forwarding them to or from the targeted hosts within the local network. It plays a crucial role in ensuring proper packet forwarding between the client and the targeted hosts. Agents can be installed on various devices, including routers, mobiles, personal computers, or virtual machines in the cloud, depending on the specific use case. By establishing secure connections with the gateway, agents enable secure remote access and communication for devices within the network. Additionally, agents allow the gateway to publish services located behind NATs and firewalls, extending accessibility to these services.

## [Client]
The client component of Narrowlink is responsible for sending and receiving packets to and from agents, forwarding them to the Narrowlink network infrastructure. This component is typically installed on the end user's device to facilitate communication with the Agent component. Clients interact with the gateway to securely access resources located behind firewalls, enabling remote access from anywhere.


## [Token Generator]

The token generator is a minimal component of Narrowlink that is responsible for generating tokens used to authenticate and configure clients and agents. This component is not actively involved in the Narrowlink infrastructure and is only used to generate tokens for the client and agent components. The tokens play a crucial role in securing communication and providing authentication within the Narrowlink network.


[Client]: /docs/client
[Agent]: /docs/agent
[Gateway]: /docs/gateway
[Token Generator]: /docs/token-generator