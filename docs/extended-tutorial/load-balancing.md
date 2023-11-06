---
sidebar_position: 10
description: How to set up load balancing using Narrowlink
keywords: [Load Balancing, Webserver, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Load Balancing

You may need to load balance your published webservers to handle increased traffic. NarrowLink provides a simple way to achieve load balancing for your webservers. You can create multiple agents with the same domain name but different publish tokens for each. The gateway will automatically determine which agent to use based on the system load of the agents before forwarding the request to them.

:::note
Please note that the gateway will forward the request only to the agent with the lowest system load. Additionally, the gateway will issue a separate certificate for each agent, and the certificate loaded first will be used to handle all the requests.
:::
